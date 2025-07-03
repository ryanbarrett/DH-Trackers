// Auto-generated SRD data for Daggerheart Tracker
// Generated on: 2025-07-03T22:08:34.514Z
// Source: https://github.com/seansbox/daggerheart-srd

const srdAdversaries = [
  {
    "name": "ACID BURROWER",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/15 | **HP:** 8 | **Stress:** 3\n> **ATK:** +3 | **Claws:** Very Close | 1d12+2 phy\n> **Experience:** Tremor Sense +2",
    "notes": {
      "motives_and_tactics": "** Burrow, drag away, feed, reposition",
      "features": "***Relentless (3) - Passive:*** The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Earth Eruption - Action:*** Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act.\n***Spit Acid - Action:*** Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP and you gain a Fear.\n***Acid Bath - Reaction:*** When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage."
    }
  },
  {
    "name": "ADULT FLICKERFLY",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 20/35 | **HP:** 12 | **Stress:** 6\n> **ATK:** +3 | **Wing Slash:** Very Close | 3d20 phy",
    "notes": {
      "motives_and_tactics": "** Collect shiny things, hunt, nest, swoop",
      "features": "***Relentless (4) - Passive:*** The Flickerfly can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them.\n***Never Misses - Passive:*** When the Flickerfly makes an attack, the target’s Evasion is halved against the attack.\n***Deadly Flight - Passive:*** While flying, the Flickerfly can move up to Far range instead of Close range before taking an action.\n***Whirlwind - Action:*** Spend a Fear to whirl, making an attack against all targets within Very Close range. Targets the Flickerfly succeeds against take 3d8 direct physical damage.\n***Mind Dance - Action:*** Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target’s fears.\n***Hallucinatory Breath - Action: Countdown (Loop 1d6):*** When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must make an Instinct Reaction Roll or become overwhelmed by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail lose 2 Hope and take 3d8+3 direct magic damage.\n***Uncanny Reflexes - Reaction:*** When the Flickerfly takes damage from an attack within Close range, you can mark a Stress to take half damage."
    }
  },
  {
    "name": "APPRENTICE ASSASSIN",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -1 | **Thrown Dagger:** Very Close | 4 phy\n> **Experience:** Intrusion +2",
    "notes": {
      "motives_and_tactics": "** Act reckless, kill, prove their worth, show off",
      "features": "***Minion (6) - Passive:*** The Assassin is defeated when they take any damage. For every 6 damage a PC deals to the Assassin, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Apprentice Assassins within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
    }
  },
  {
    "name": "ARCH-NECROMANCER",
    "description": "",
    "stats": "> **Difficulty:** 21 | **Thresholds:** 33/66 | **HP:** 9 | **Stress:** 8\n> **ATK:** +6 | **Necrotic Blast:** Far | 4d12+8 mag\n> **Experience:** Forbidden Knowledge +3, Wisdom of Centuries +3",
    "notes": {
      "motives_and_tactics": "** Corrupt, decay, flee to fight another day, resurrect",
      "features": "***Dance of Death - Action:*** Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage, or full damage if you spend a Fear.\n***Beam of Decay - Action:*** Mark 2 Stress to cause all targets within Far range to make a Strength Reaction Roll. Targets who fail take 2d20+12 magic damage and you gain a Fear. Targets who succeed take half damage. A target who marks 2 or more HP must also mark 2 Stress and becomes Vulnerable until they roll with Hope.\n***Open the Gates of Death - Action:*** Spend a Fear to summon a Zombie Legion, which appears at Close range and immediately takes the spotlight.\n***Not Today, My Dears - Reaction:*** When the Necromancer has marked 7 or more of their HP, you can spend a Fear to have them teleport away to a safe location to recover. A PC who succeeds on an Instinct Roll can trace the teleportation magic to their destination.\n***Your Demise is Near - Reaction:*** Countdown (2d6). When the Necromancer has marked 6 or more of their HP, activate the countdown. When it triggers, deal 2d10+6 direct magic damage to a target within Close range. The Necromancer then clears a number of Stress or HP equal to the number of HP marked by the target from this attack."
    }
  },
  {
    "name": "ARCHER GUARD",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 4/8 | **HP:** 3 | **Stress:** 2\n> **ATK:** +1 | **Longbow:** Far | 1d8+3 phy\n> **Experience:** Local Knowledge +3",
    "notes": {
      "motives_and_tactics": "** Arrest, close gates, make it through the day, pin down",
      "features": "***Hobbling Shot - Action:*** Make an attack against a target within Far range. On a success, mark a Stress to deal 1d12+3 physical damage. If the target marks HP from this attack, they have disadvantage on Agility Rolls until they clear at least 1 HP."
    }
  },
  {
    "name": "ARCHER SQUADRON",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 8/16 | **HP:** 4 | **Stress:** 3\n> **ATK:** 0 | **Longbow:** Far | 2d6+3 phy",
    "notes": {
      "motives_and_tactics": "** Stick together, survive, volley fire",
      "features": "***Horde (1d6+3) - Passive:*** When the Squadron has marked half or more of their HP, their standard attack deals 1d6+3 physical damage instead.\n***Focused Volley - Action:*** Spend a Fear to target a point within Far range. Make an attack with advantage against all targets within Close range of that point. Targets the Squadron succeeds against take 1d10+4 physical damage.\n***Suppressing Fire - Action:*** Mark a Stress to target a point within Far range. Until the next roll with Fear, a creature who moves within Close range of that point must make an Agility Reaction Roll. On a failure, they take 2d6+3 physical damage. On a success, they take half damage."
    }
  },
  {
    "name": "ASSASSIN POISONER",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/16 | **HP:** 4 | **Stress:** 4\n> **ATK:** +3 | **Poisoned Throwing Dagger:** Close | 2d8+1 phy\n> **Experience:** Intrusion +2",
    "notes": {
      "motives_and_tactics": "** Anticipate, get paid, kill, taint food and water",
      "features": "***Grindeloth Venom - Passive:*** Targets who mark HP from the Assassin’s attacks are Vulnerable until they clear a HP.\n***Out of Nowhere - Passive:*** The Assassin has advantage on attacks if they are Hidden.\n***Fumigation - Action:*** Drop a smoke bomb that fills the air within Close range with smoke, Dizzilying all targets in this area. Dizzied targets have disadvantage on their next action roll, then clear the condition."
    }
  },
  {
    "name": "BATTLE BOX",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 10/20 | **HP:** 8 | **Stress:** 6\n> **ATK:** +2 | **Slam:** Melee | 2d6+3 phy\n> **Experience:** Camouflage +2",
    "notes": {
      "motives_and_tactics": "** Change tactics, trample foes, wait in disguise",
      "features": "***Relentless (2) - Passive:*** The Box can be spotlighted up to two times per turn. Spend Fear as usual to spotlight them.\n***Randomized Tactics - Action:*** Mark a Stress and roll a d6. The Box uses the corresponding move: 1. Mana Beam: The Box fires a searing beam. Make an attack against a target within Far range. On a success, deal 2d10+2 magic damage. 2. Fire Jets: The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within Close range. Targets the Box succeeds against take 2d8 physical damage. 3. Trample: The Box rockets around erratically. Make an attack against all PCs within Close range. Targets the Box succeeds against take 1d6+5 physical damage and are Vulnerable until their next roll with Hope. 4. Shocking Gas: The Box sprays out a silver gas sparking with lightning. All targets within Close range must succeed on a Finesse Reaction Roll or mark 3 Stress. 5. Stunning Clap: The Box leaps and their sides clap, creating a concussive boom. All targets within Very Close range must succeed on a Strength Reaction Roll or become Vulnerable until the cube is defeated. 6. Psonic Whine: The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within Close range must succeed on a Presence Reaction Roll or take 2d4+9 direct magic damage.\n***Overcharge - Reaction:*** Before rolling damage for the Box’s attack, you can mark a Stress to add a d6 to the damage roll. Additionally, you gain a Fear.\n***Death Quake - Reaction:*** When the Box marks their last HP, the magic powering them ruptures in an explosion of force. All targets within Close range must succeed on an Instinct Reaction Roll or take 2d8+1 magic damage."
    }
  },
  {
    "name": "BEAR",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 9/17 | **HP:** 7 | **Stress:** 2\n> **ATK:** +1 | **Claws:** Melee | 1d8+3 phy\n> **Experience:** Ambusher +3, Keen Senses +2",
    "notes": {
      "motives_and_tactics": "** Climb, defend territory, pummel, track",
      "features": "***Overwhelming Force - Passive:*** Targets who mark HP from the Bear’s standard attack are knocked back to Very Close range.\n***Bite - Action:*** Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 physical damage and the target is Restrained until they break free with a successful Strength Roll.\n***Momentum - Reaction:*** When the Bear makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "BLADED GUARD",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 5/9 | **HP:** 5 | **Stress:** 2\n> **ATK:** +1 | **Longsword:** Melee | 1d6+1 phy\n> **Experience:** Local Knowledge +3",
    "notes": {
      "motives_and_tactics": "** Arrest, close gates, make it through the day, pin down",
      "features": "***Shield Wall - Passive:*** A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the first, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in the line.\n***Detain - Action:*** Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll."
    }
  },
  {
    "name": "DIRE WOLF",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 5/9 | **HP:** 4 | **Stress:** 3\n> **ATK:** +2 | **Claws:** Melee | 1d6+2 phy\n> **Experience:** Keen Senses +3",
    "notes": {
      "motives_and_tactics": "** Defend territory, harry, protect pack, surround, trail",
      "features": "***Pack Tactics - Passive:*** If the Wolf makes a successful standard attack and another Dire Wolf is within Melee range of the target, deal 1d6+5 physical damage instead of their standard damage and you gain a Fear.\n***Hobbling Strike - Action:*** Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 direct physical damage and make them Vulnerable until they clear at least 1 HP."
    }
  },
  {
    "name": "DRYAD",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 24/38 | **HP:** 8 | **Stress:** 5\n> **ATK:** +4 | **Deadfall Shortbow:** Far | 3d10+1 phy\n> **Experience:** Forest Knowledge +4",
    "notes": {
      "motives_and_tactics": "** Camouflage, drive out, preserve the forest",
      "features": "***Bramble Patch - Action:*** Mark a Stress to target a point within Far range. Create a patch of thorns that covers an area within Close range of that point. All targets within that area take 2d6+2 physical damage when they act. A target must succeed on a Finesse Roll or take more than 20 damage to the Dryad with an attack to leave the area.\n***Group Saplings - Action:*** Spend a Fear to grow three Treant Sapling Minions, who appear at Close range and immediately take the spotlight.\n***We Are All One - Reaction:*** When an ally dies within Close range, you can spend a Fear to clear 2 HP and 2 Stress as the fallen ally’s life force is returned to the forest."
    }
  },
  {
    "name": "GIANT EAGLE",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/19 | **HP:** 4 | **Stress:** 4\n> **ATK:** +1 | **Claws and Beak:** Very Close | 2d6+3 phy",
    "notes": {
      "motives_and_tactics": "** Hunt prey, stay mobile, strike decisively",
      "features": "***Flight - Passive:*** While flying, the Eagle gains a +3 bonus to their Difficulty.\n***Deadly Dive - Action:*** Mark a Stress to attack a target within Far range. On a success, deal 2d10+2 physical damage and knock the target over, making them Vulnerable until they next act.\n***Take Off - Action:*** Make an attack against a target within Very Close range. On a success, deal 2d4+3 physical damage and the target must succeed on an Agility Reaction Roll or become temporarily Restrained within the Eagle’s massive talons. If the target is Restrained, the Eagle immediately lifts them to the air to Very Far range above the battlefield while holding them.\n***Deadly Drop - Action:*** While flying, the Eagle can drop a Restrained target they are holding. When dropped, the target is no longer Restrained but starts falling. If their fall isn’t prevented during the PCs’ next action, the target takes 2d20 physical damage when they land."
    }
  },
  {
    "name": "GIANT SCORPION",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 7/13 | **HP:** 6 | **Stress:** 3\n> **ATK:** +1 | **Pincers:** Melee | 1d12+2 phy\n> **Experience:** Camouflage +2",
    "notes": {
      "motives_and_tactics": "** Ambush, feed, grapple, poison",
      "features": "***Double Strike - Action:*** Mark a Stress to make a standard attack against two targets within Melee range.\n***Venomous Stinger - Action:*** Make an attack against a target within Very Close range. On a success, spend a Fear to deal 1d4+4 physical damage and Poison them until their next rest or they succeed on a Knowledge Roll (16). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 4 or lower, they must mark a Stress.\n***Momentum - Reaction:*** When the Scorpion makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "HYDRA",
    "description": "",
    "stats": "> **Difficulty:** 18 | **Thresholds:** 19/35 | **HP:** 10 | **Stress:** 5\n> **ATK:** +3 | **Bite:** Close | 2d12+2 phy",
    "notes": {
      "motives_and_tactics": "** Devour, regenerate, terrify",
      "features": "***Many-Headed Menace - Passive:*** The Hydra begins with three heads and can have up to five. When the Hydra takes Major or greater damage, they lose a head.\n***Relentless (X) - Passive:*** The Hydra can be spotlighted X times per GM turn, where X is the Hydra’s number of heads. Spend Fear as usual to spotlight them.\n***Regeneration - Action:*** If the Hydra has any marked HP, spend a Fear to clear a HP and grow two heads.\n***Terrifying Chorus - Action:*** All PCs within Far range lose 2 Hope.\n***Magical Weakness - Reaction:*** When the Hydra takes magic damage, they become Dazed until the next roll with Fear. While Dazed, they can’t use their Regeneration action but are immune to magic damage."
    }
  },
  {
    "name": "JAGGED KNIFE BANDIT",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 8/14 | **HP:** 5 | **Stress:** 3\n> **ATK:** +1 | **Daggers:** Melee | 1d8+1 phy\n> **Experience:** Thief +2",
    "notes": {
      "motives_and_tactics": "** Escape, profit, steal, throw smoke",
      "features": "***Climber - Passive:*** The Bandit climbs just as easily as they run.\n***From Above - Passive:*** When the Bandit succeeds on a standard attack from above a target, they deal 1d10+1 physical damage instead of their standard damage."
    }
  },
  {
    "name": "PIRATE CAPTAIN",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 7/14 | **HP:** 7 | **Stress:** 5\n> **ATK:** +1 | **Cutlass:** Melee | 1d12+2 phy\n> **Experience:** Commander +2, Sailor +3",
    "notes": {
      "motives_and_tactics": "** Command, make 'em walk the plank, plunder, raid",
      "features": "***Swashbuckler - Passive:*** When the Captain marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress.\n***Reinforcements - Action:*** Once per scene, mark a Stress to summon a Pirate Raiders Horde, which appears at Far range.\n***No Quarter - Action:*** Spend a Fear to choose a target who has three or more Pirates within Melee range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a Presence Reaction Roll. On a failure, the target marks 1d4+1 Stress. On a success, they must mark a Stress.\n***Momentum - Reaction:*** When the Captain makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "SKELETON ARCHER",
    "description": "",
    "stats": "> **Difficulty:** 9 | **Thresholds:** 4/7 | **HP:** 3 | **Stress:** 2\n> **ATK:** +2 | **Shortbow:** Far | 1d8+1 phy",
    "notes": {
      "motives_and_tactics": "** Perforate distracted targets, play dead, steal skin",
      "features": "***Opportunist - Passive:*** When two or more adversaries are within Very Close range of a creature, all damage they each deal to that creature is doubled.\n***Deadly Shot - Action:*** Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage."
    }
  },
  {
    "name": "SKELETON WARRIOR",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 4/8 | **HP:** 3 | **Stress:** 2\n> **ATK:** 0 | **Sword:** Melee | 1d6+2 phy",
    "notes": {
      "motives_and_tactics": "** Feign death, gang up, steal skin",
      "features": "***Only Bones - Passive:*** The Warrior is resistant to physical damage.\n***Reform - Reaction:*** When the Warrior is defeated, roll a d6. On a result of 6, if there are other adversaries on the battlefield, the Warrior re-forms with no marked HP."
    }
  },
  {
    "name": "VAMPIRE",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 18/35 | **HP:** 5 | **Stress:** 4\n> **ATK:** +3 | **Rapier:** Melee | 3d8 phy\n> **Experience:** Nocturnal Hunter +3",
    "notes": {
      "motives_and_tactics": "** Bite, charm, deceive, feed, intimidate",
      "features": "***Draining Bite - Action:*** Make an attack against a target within Melee range. On a success, deal 4d physical damage. A target who marks HP from this attack loses a Hope and must mark a Stress. The Vampire then clears a HP.\n***Mistform - Reaction:*** When the Vampire takes physical damage, you can spend a Fear to take half damage."
    }
  },
  {
    "name": "VOLCANIC DRAGON: ASHEN TYRANT",
    "description": "",
    "stats": "> **Difficulty:** 18 | **Thresholds:** 29/55 | **HP:** 8 | **Stress:** 5\n> **ATK:** +10 | **Claws and Teeth:** Close | 4d12+15 phy\n> **Experience:** Hunt from Above +5",
    "notes": {
      "motives_and_tactics": "** Choke, fly, intimidate, kill or be killed",
      "features": "***Relentless (4) - Passive:*** The Ashen Tyrant can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them.\n***Cornered - Passive:*** Mark a Stress instead of spending a Fear to spotlight the Ashen Tyrant.\n***Ashes to Ashes - Passive:*** When a PC rolls a failure while within Close range of the Ashen Tyrant, they lose a Hope and you gain a Fear. If the PC can’t lose a Hope, they must mark a HP.\n***Desperate Rampage - Action:*** Mark 3 Stress to make an attack against all targets within Close range. Targets the Ashen Tyrant succeeds against take 2d20+2 physical damage, are knocked back to Close range of where they were, and must mark a Stress.\n***Ashen Cloud - Action:*** Spend a Fear to smash the ground beneath an adversary within Far range. While within the ash cloud, a target has disadvantage on action rolls. The ash cloud clears the next time an adversary is spotlighted.\n***Apocalyptic Thrashing - Action:*** Countdown (1d12). Spend a Fear to activate it. It ticks down when a PC rolls with Fear. When it reaches 0, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within Far range must make a Strength Reaction Roll. Targets who fail take 2d10+10 physical damage and are Restrained by the rubble until they break free with a successful Strength Roll. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes."
    }
  },
  {
    "name": "ZOMBIE LEGION",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 25/45 | **HP:** 8 | **Stress:** 5\n> **ATK:** +2 | **Tentacles:** Close | 4d6+10 phy",
    "notes": {
      "motives_and_tactics": "** Consume brain, shred flesh, surround",
      "features": "***Horde (2d6+5) - Passive:*** When Legion has half or more HP marked, standard attack deals 2d6+5 physical damage instead.\n***Unyielding - Passive:*** Legion has resistance to physical damage.\n***Relentless (2) - Passive:*** Legion can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight.\n***Overwhelm - Reaction:*** When Legion takes Minor damage from attack within Melee, mark a Stress to make standard attack with advantage against the attacker."
    }
  }
];

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { srdAdversaries };
}
