#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

// GitHub API endpoint for adversaries directory
const GITHUB_API_URL = 'https://api.github.com/repos/seansbox/daggerheart-srd/contents/adversaries';
const RAW_BASE_URL = 'https://raw.githubusercontent.com/seansbox/daggerheart-srd/main/adversaries/';

// Output file path
const OUTPUT_FILE = path.join(__dirname, 'js', 'srd-data.js');

// Function to fetch JSON data from URL
function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'DaggerHeart-SRD-Generator/1.0'
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    if (res.statusCode >= 400) {
                        reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                        return;
                    }
                    resolve(JSON.parse(data));
                } catch (error) {
                    console.error('Failed to parse JSON:', data.substring(0, 200) + '...');
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}

// Function to fetch text content from URL
function fetchText(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'DaggerHeart-SRD-Generator/1.0'
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                if (res.statusCode >= 400) {
                    reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                    return;
                }
                resolve(data);
            });
        }).on('error', reject);
    });
}

// Function to parse adversary markdown content
function parseAdversaryMarkdown(content, filename) {
    const lines = content.split('\n');
    const adversary = {
        name: '',
        tier: '',
        hp: 0,
        stress: 0,
        majorThreshold: 0,
        severeThreshold: 0,
        difficulty: '',
        attack: '',
        range: '',
        damage: '',
        notes: {
            motives: '',
            tactics: '',
            features: ''
        }
    };

    let currentSection = '';
    let featuresContent = [];
    let motivesLine = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Extract title (first H1)
        if (line.startsWith('# ') && !adversary.name) {
            adversary.name = line.substring(2).trim();
        }
        
        // Extract tier and type info
        if (line.includes('Tier') || line.includes('Solo')) {
            adversary.tier = line;
        }
        
        // Extract motives & tactics
        if (line.includes('Motives & Tactics:') || line.includes('Motives and Tactics:')) {
            motivesLine = line.replace(/.*Motives & Tactics:\s*/, '').replace(/.*Motives and Tactics:\s*/, '');
            adversary.notes.motives = motivesLine;
        }
        
        // Extract stats
        if (line.includes('Difficulty:')) {
            adversary.difficulty = line.replace(/.*Difficulty:\s*/, '').trim();
        }
        if (line.includes('HP:')) {
            const hpMatch = line.match(/HP:\s*(\d+)/i);
            if (hpMatch) adversary.hp = parseInt(hpMatch[1]);
        }
        if (line.includes('Stress:')) {
            const stressMatch = line.match(/Stress:\s*(\d+)/i);
            if (stressMatch) adversary.stress = parseInt(stressMatch[1]);
        }
        if (line.includes('Major:')) {
            const majorMatch = line.match(/Major:\s*(\d+)/i);
            if (majorMatch) adversary.majorThreshold = parseInt(majorMatch[1]);
        }
        if (line.includes('Severe:')) {
            const severeMatch = line.match(/Severe:\s*(\d+)/i);
            if (severeMatch) adversary.severeThreshold = parseInt(severeMatch[1]);
        }
        if (line.includes('Attack:')) {
            adversary.attack = line.replace(/.*Attack:\s*/, '').trim();
        }
        if (line.includes('Range:')) {
            adversary.range = line.replace(/.*Range:\s*/, '').trim();
        }
        if (line.includes('Damage:')) {
            adversary.damage = line.replace(/.*Damage:\s*/, '').trim();
        }
        
        // Track sections for features
        if (line.startsWith('## ')) {
            currentSection = line.substring(3).trim().toLowerCase();
        }
        
        // Collect features content
        if (currentSection === 'features' && line && !line.startsWith('##')) {
            featuresContent.push(line);
        }
    }
    
    // Join features content
    adversary.notes.features = featuresContent.join('\n').trim();
    
    // If no separate tactics found, use the motives line for tactics too
    if (!adversary.notes.tactics) {
        adversary.notes.tactics = motivesLine;
    }
    
    return adversary;
}

// Main function to generate srd-data.js
async function generateSRDData() {
    try {
        console.log('Fetching adversary file list...');
        const fileList = await fetchJSON(GITHUB_API_URL);
        
        console.log(`Found ${fileList.length} adversary files`);
        
        const adversaries = [];
        
        // Process each file
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            
            if (file.name.endsWith('.md')) {
                console.log(`Processing ${file.name} (${i + 1}/${fileList.length})...`);
                
                try {
                    const rawUrl = RAW_BASE_URL + encodeURIComponent(file.name);
                    const content = await fetchText(rawUrl);
                    const adversary = parseAdversaryMarkdown(content, file.name);
                    
                    if (adversary.name) {
                        adversaries.push(adversary);
                        console.log(`✓ Added: ${adversary.name}`);
                    } else {
                        console.log(`⚠ Skipped: ${file.name} (no name found)`);
                    }
                } catch (error) {
                    console.error(`✗ Error processing ${file.name}:`, error.message);
                }
                
                // Add small delay to be respectful to GitHub API
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        
        console.log(`\nProcessed ${adversaries.length} adversaries`);
        
        // Generate JavaScript file content
        const jsContent = `// Auto-generated SRD data for Daggerheart Tracker
// Generated on: ${new Date().toISOString()}
// Source: https://github.com/seansbox/daggerheart-srd

const srdAdversaries = ${JSON.stringify(adversaries, null, 2)};

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { srdAdversaries };
}
`;
        
        // Write to file
        fs.writeFileSync(OUTPUT_FILE, jsContent);
        
        console.log(`\n✓ Generated ${OUTPUT_FILE}`);
        console.log(`✓ Contains ${adversaries.length} adversaries`);
        
        // Show some sample adversary names
        console.log('\nSample adversaries:');
        adversaries.slice(0, 10).forEach(adv => {
            console.log(`  - ${adv.name} (HP: ${adv.hp}, Stress: ${adv.stress})`);
        });
        
    } catch (error) {
        console.error('Error generating SRD data:', error);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    generateSRDData();
}