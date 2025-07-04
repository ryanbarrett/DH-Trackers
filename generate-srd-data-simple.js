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
'Brawny Zombie.md',
'Cave Ogre.md',
'Chaos Skull.md',
'Conscript.md',
'Construct.md',
'Courtesan.md',
'Courtier.md',
'Cult Adept.md',
'Cult Fang.md',
'Cult Initiate.md',
'Deeproot Defender.md',
'Demon of Avarice.md',
'Demon of Despair.md',
'Demon of Hubris.md',
'Demon of Jealousy.md',
'Demon of Wrath.md',
'Demonic Hound Pack.md',
'Dire Bat.md',
'Dire Wolf.md',
'Dryad.md',
'Electric Eels.md',
'Elemental Spark.md',
'Elite Soldier.md',
'Failed Experiment.md',
'Fallen Shock Troop.md',
'Fallen Sorcerer.md',
'Fallen Warlord Realm-Breaker.md',
'Fallen Warlord Undefeated Champion.md',
'Giant Beastmaster.md',
'Giant Brawler.md',
'Giant Eagle.md',
'Giant Mosquitoes.md',
'Giant Rat.md',
'Giant Recruit.md',
'Giant Scorpion.md',
'Glass Snake.md',
'Gorgon.md',
'Greater Earth Elemental.md',
'Greater Water Elemental.md',
'Green Ooze.md',
'Hallowed Archer.md',
'Hallowed Soldier.md',
'Harrier.md',
'Head Guard.md',
'Head Vampire.md',
'High Seraph.md',
'Huge Green Ooze.md',
'Hydra.md',
'Jagged Knife Bandit.md',
'Jagged Knife Hexer.md',
'Jagged Knife Kneebreaker.md',
'Jagged Knife Lackey.md',
'Jagged Knife Lieutenant.md',
'Jagged Knife Shadow.md',
'Jagged Knife Sniper.md',
'Juvenile Flickerfly.md',
'Knight of the Realm.md',
'Kraken.md',
'Masked Thief.md',
'Master Assassin.md',
'Merchant Baron.md',
'Merchant.md',
'Minor Chaos Elemental.md',
'Minor Demon.md',
'Minor Fire Elemental.md',
'Minor Treant.md',
'Minotaur Wrecker.md',
'Monarch.md',
'Mortal Hunter.md',
'Oak Treant.md',
'Oracle of Doom.md',
'Outer Realms Abomination.md',
'Outer Realms Corrupter.md',
'Outer Realms Thrall.md',
'Patchwork Zombie Hulk.md',
'Perfected Zombie.md',
'Petty Noble.md',
'Pirate Captain.md',
'Pirate Raiders.md',
'Pirate Tough.md',
'Red Ooze.md',
'Rotted Zombie.md',
'Royal Advisor.md',
'Secret-Keeper.md',
'Sellsword.md',
'Shambling Zombie.md',
'Shark.md',
'Siren.md',
'Skeleton Archer.md',
'Skeleton Dredge.md',
'Skeleton Knight.md',
'Skeleton Warrior.md',
'Spectral Archer.md',
'Spectral Captain.md',
'Spectral Guardian.md',
'Spellblade.md',
'Spy.md',
'Stag Knight.md',
'Stonewraith.md',
'Swarm of Rats.md',
'Sylvan Soldier.md',
'Tangle Bramble Swarm.md',
'Tangle Bramble.md',
'Tiny Green Ooze.md',
'Tiny Red Ooze.md',
'Treant Sapling.md',
'Vampire.md',
'Vault Guardian Gaoler.md',
'Vault Guardian Sentinel.md',
'Vault Guardian Turret.md',
'Volcanic Dragon Ashen Tyrant.md',
'Volcanic Dragon Molten Scourge.md',
'Volcanic Dragon Obsidian Predator.md',
'War Wizard.md',
'Weaponmaster.md',
'Young Dryad.md',
'Young Ice Dragon.md',
'Zombie Legion.md',
'Zombie Pack.md'
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
        description: '',
        stats: '',
        notes: {
            motives_and_tactics: '',
            features: ''
        }
    };

    let currentSection = '';
    let featuresContent = [];
    let statsContent = [];
    let descriptionFound = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Extract title (first H1)
        if (line.startsWith('# ') && !adversary.name) {
            adversary.name = line.substring(2).trim();
        }
        
        // Extract description (usually in quotes or after tier info)
        if (!descriptionFound && (line.startsWith('"') || line.includes('Tier') || line.includes('Solo'))) {
            if (line.startsWith('"') && line.endsWith('"')) {
                adversary.description = line.slice(1, -1);
                descriptionFound = true;
            } else if (i + 1 < lines.length) {
                const nextLine = lines[i + 1].trim();
                if (nextLine.startsWith('"') && nextLine.endsWith('"')) {
                    adversary.description = nextLine.slice(1, -1);
                    descriptionFound = true;
                }
            }
        }
        
        // Extract motives & tactics
        if (line.includes('Motives & Tactics:') || line.includes('Motives and Tactics:')) {
            const motivesLine = line.replace(/.*Motives & Tactics:\s*/, '').replace(/.*Motives and Tactics:\s*/, '').trim();
            adversary.notes.motives_and_tactics = motivesLine;
        }
        
        // Track sections
        if (line.startsWith('##') || line.toLowerCase().includes('difficulty:') || line.toLowerCase().includes('thresholds:')) {
            currentSection = line.substring(2).trim().toLowerCase();
            if (line.toLowerCase().includes('difficulty:') || line.toLowerCase().includes('thresholds:')) {
                currentSection = 'stats';
            }
        }
        
        // Collect stats content (lines with game stats)
        if (line.includes('Difficulty:') || line.includes('Thresholds:') || line.includes('HP:') || 
            line.includes('Stress:') || line.includes('Attack:') || line.includes('Experience:') ||
            (currentSection === 'stats' && line && !line.startsWith('#'))) {
            statsContent.push(line);
        }
        
        // Collect features content
        if (currentSection === 'features' && line && !line.startsWith('##') && !line.startsWith('#')) {
            featuresContent.push(line);
        }
    }
    
    // Join content
    adversary.notes.features = featuresContent.join('\n').trim();
    adversary.stats = statsContent.join('\n').trim();
    
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