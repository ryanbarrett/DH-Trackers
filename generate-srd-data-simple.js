#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

// Output file path
const OUTPUT_FILE = path.join(__dirname, 'js', 'srd-data.js');

// List of adversary files (manually compiled to avoid API rate limits)
const ADVERSARY_FILES = [
    'Acid Burrower.md',
    'Adult Flickerfly.md',
    'Apprentice Assassin.md',
    'Arch-Necromancer.md',
    'Archer Guard.md',
    'Archer Squadron.md',
    'Assassin Poisoner.md',
    'Battle Box.md',
    'Bear.md',
    'Bladed Guard.md',
    'Brute Guard.md',
    'Cauldron Witch.md',
    'Cloaked Assassin.md',
    'Corrupt Beastmaster.md',
    'Corrupted Dryad.md',
    'Corrupted Treant.md',
    'Crystal Crab.md',
    'Crystal Crawler.md',
    'Crystal Golem.md',
    'Crystal Prism.md',
    'Crystal Shard.md',
    'Crystal Spiker.md',
    'Crystal Turtle.md',
    'Cursed Skeleton.md',
    'Cursed Zombie.md',
    'Dire Wolf.md',
    'Dragon Whelp.md',
    'Dryad.md',
    'Dryad Chorus.md',
    'Dryad Priestess.md',
    'Dryad Warrior.md',
    'Elder Dryad.md',
    'Elemental Crab.md',
    'Elemental Crawler.md',
    'Elemental Golem.md',
    'Elemental Prism.md',
    'Elemental Shard.md',
    'Elemental Spiker.md',
    'Elemental Turtle.md',
    'Fiend Sentry.md',
    'Fiend Spawn.md',
    'Fiend Warlock.md',
    'Flame Dancer.md',
    'Frost Giant.md',
    'Ghost.md',
    'Ghoul.md',
    'Giant Bear.md',
    'Giant Eagle.md',
    'Giant Elk.md',
    'Giant Frog.md',
    'Giant Hyena.md',
    'Giant Octopus.md',
    'Giant Scorpion.md',
    'Giant Spider.md',
    'Giant Wolf.md',
    'Goblin.md',
    'Goblin Archer.md',
    'Goblin Brute.md',
    'Goblin Shaman.md',
    'Goblin Warrior.md',
    'Golem.md',
    'Graveborn.md',
    'Graveborn Horde.md',
    'Harpy.md',
    'Harpy Flock.md',
    'Hill Giant.md',
    'Hobgoblin.md',
    'Hobgoblin Captain.md',
    'Hobgoblin Warrior.md',
    'Hydra.md',
    'Jagged Knife Bandit.md',
    'Knight.md',
    'Lich.md',
    'Living Armor.md',
    'Mage.md',
    'Minotaur.md',
    'Minotaur Berserker.md',
    'Orc.md',
    'Orc Berserker.md',
    'Orc Chieftain.md',
    'Orc Shaman.md',
    'Orc Warrior.md',
    'Owlbear.md',
    'Pegasus.md',
    'Phoenix.md',
    'Pirate.md',
    'Pirate Captain.md',
    'Raven.md',
    'Raven Flock.md',
    'Roc.md',
    'Sahuagin.md',
    'Sahuagin Baron.md',
    'Sahuagin Priestess.md',
    'Sahuagin Warrior.md',
    'Skeleton.md',
    'Skeleton Archer.md',
    'Skeleton Warrior.md',
    'Sphinx.md',
    'Stone Giant.md',
    'Storm Giant.md',
    'Treant.md',
    'Troll.md',
    'Unicorn.md',
    'Vampire.md',
    'Vampire Lord.md',
    'Vampire Spawn.md',
    'Volcanic Dragon Ashen Tyrant.md',
    'Werewolf.md',
    'Wight.md',
    'Wizard.md',
    'Wyvern.md',
    'Zombie.md',
    'Zombie Horde.md',
    'Zombie Legion.md'
];

const RAW_BASE_URL = 'https://raw.githubusercontent.com/seansbox/daggerheart-srd/main/adversaries/';

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
        
        // Extract motives & tactics
        if (line.includes('Motives & Tactics:') || line.includes('Motives and Tactics:')) {
            motivesLine = line.replace(/.*Motives & Tactics:\s*/, '').replace(/.*Motives and Tactics:\s*/, '').trim();
            adversary.notes.motives = motivesLine;
        }
        
        // Track sections for features
        if (line.startsWith('## ')) {
            currentSection = line.substring(3).trim().toLowerCase();
        }
        
        // Collect features content
        if (currentSection === 'features' && line && !line.startsWith('##') && !line.startsWith('#')) {
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
        console.log(`Processing ${ADVERSARY_FILES.length} adversary files...`);
        
        const adversaries = [];
        
        // Process each file
        for (let i = 0; i < ADVERSARY_FILES.length; i++) {
            const filename = ADVERSARY_FILES[i];
            
            console.log(`Processing ${filename} (${i + 1}/${ADVERSARY_FILES.length})...`);
            
            try {
                const rawUrl = RAW_BASE_URL + encodeURIComponent(filename);
                const content = await fetchText(rawUrl);
                const adversary = parseAdversaryMarkdown(content, filename);
                
                if (adversary.name) {
                    adversaries.push(adversary);
                    console.log(`✓ Added: ${adversary.name}`);
                } else {
                    console.log(`⚠ Skipped: ${filename} (no name found)`);
                }
            } catch (error) {
                console.error(`✗ Error processing ${filename}:`, error.message);
            }
            
            // Add small delay to be respectful to GitHub
            await new Promise(resolve => setTimeout(resolve, 200));
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
            console.log(`  - ${adv.name}`);
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