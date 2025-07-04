// Auto-generated SRD data for Daggerheart Tracker
// Generated on: 2025-07-04T13:14:13.685Z
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
    "name": "BRAWNY ZOMBIE",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 8/15 | **HP:** 7 | **Stress:** 4\n> **ATK:** +2 | **Slam:** Very Close | 1d12+3 phy\n> **Experience:** Collateral Damage +2, Throw +4",
    "notes": {
      "motives_and_tactics": "** Crush, destroy, hurl debris, slam",
      "features": "***Slow - Passive:*** When you spotlight the Zombie and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act.\n***Rend Asunder - Action:*** Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage.\n***Rip and Tear - Reaction:*** When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress."
    }
  },
  {
    "name": "CAVE OGRE",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 8/15 | **HP:** 8 | **Stress:** 3\n> **ATK:** +1 | **Club:** Very Close | 1d10+2 phy\n> **Experience:** Throw +2",
    "notes": {
      "motives_and_tactics": "** Bite off heads, feast, rip limbs, stomp, throw enemies",
      "features": "***Ramp Up - Passive:*** You must spend a Fear to spotlight the Ogre. While spotlighted, they can make their standard attack against all targets within range.\n***Bone Breaker - Passive:*** The Ogre’s attacks deal direct damage.\n***Hail of Boulders - Action:*** Mark a Stress to pick up heavy objects and throw them at all targets in front of the Ogre within Far range. Make an attack against these targets. Targets the Ogre succeeds against take 1d10+2 physical damage. If they succeed against more than one target, you gain a Fear.\n***Rampaging Fury - Reaction:*** When the Ogre marks 2 or more HP, they can rampage. Move the Ogre to a point within Close range and deal 2d6+3 direct physical damage to all targets in their path."
    }
  },
  {
    "name": "CHAOS SKULL",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 8/16 | **HP:** 5 | **Stress:** 4\n> **ATK:** +2 | **Energy Blast:** Close | 2d8+3 mag",
    "notes": {
      "motives_and_tactics": "** Cackle, consume magic, serve creator",
      "features": "***Levitation - Passive:*** The Skull levitates several feet off the ground and can’t be Restrained.\n***Wards - Passive:*** The Skull is resistant to magic damage.\n***Magic Burst - Action:*** Mark a Stress to make an attack against all targets within Close range. Targets the Skull succeeds against take 2d6+4 magic damage.\n***Siphon Magic - Action:*** Spend a Fear to make an attack against a PC with a Spellcast trait within Very Close range. On a success, the target marks 1d4 Stress and the Skull clears that many Stress. Additionally, on a success, the Skull can immediately be spotlighted again."
    }
  },
  {
    "name": "CONSCRIPT",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** 0 | **Spears:** Very Close | 6 phy",
    "notes": {
      "motives_and_tactics": "** Follow orders, gang up, survive",
      "features": "***Minion (6) - Passive:*** The Conscript is defeated when they take any damage. For every 6 damage a PC deals to the Conscript, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Conscripts within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 6 physical damage each. Combine this damage."
    }
  },
  {
    "name": "CONSTRUCT",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 7/15 | **HP:** 9 | **Stress:** 4\n> **ATK:** +4 | **Fist Slam:** Melee | 1d20 phy",
    "notes": {
      "motives_and_tactics": "** Destroy environment, serve creator, smash target, trample groups",
      "features": "***Relentless (2) - Passive:*** The Construct can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.\n***Weak Structure - Passive:*** When the Construct marks HP from physical damage, they must mark an additional HP.\n***Trample - Action:*** Mark a Stress to make an attack against all targets in the Construct’s path when they move. Targets the Construct succeeds against take 1d8 physical damage.\n***Overload - Reaction:*** Before rolling damage for the Construct’s attack, you can mark a Stress to gain a +10 bonus to the damage roll. The Construct can then take the spotlight again.\n***Death Quake - Reaction:*** When the Construct marks their last HP, the magic powering them ruptures in an explosion of force. Make an attack with advantage against all targets within Very Close range. Targets the Construct succeeds against take 1d12+2 magic damage."
    }
  },
  {
    "name": "COURTESAN",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 7/13 | **HP:** 3 | **Stress:** 4\n> **ATK:** -3 | **Dagger:** Melee | 1d4+3 phy\n> **Experience:** Manipulation +3, Socialite +3",
    "notes": {
      "motives_and_tactics": "** Entice, maneuver, secure patrons",
      "features": "***Searing Glance - Reaction:*** When a PC within Close range makes a Presence Roll, you can mark a Stress to cast a gaze toward the aftermath. On the target’s failure, they must mark 2 Stress and are Vulnerable until the scene ends or they succeed on a social action against the Courtesan. On the target’s success, they must mark a Stress."
    }
  },
  {
    "name": "COURTIER",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 4/8 | **HP:** 3 | **Stress:** 4\n> **ATK:** -4 | **Daggers:** Melee | 1d4+2 phy\n> **Experience:** Socialize +3",
    "notes": {
      "motives_and_tactics": "** Discreet, gain favor, maneuver, scheme",
      "features": "***Mockery - Action:*** Mark a Stress to say something mocking and force a target within Close range to make a Presence Reaction Roll (14) to see if they can save face. On a failure, the target must mark 2 Stress and is Vulnerable until the scene ends.\n***Scapegoat - Action:*** Spend a Fear and target a PC. The Courtier convinces a crowd or prominent individual that the target is the cause of their current conflict or misfortune."
    }
  },
  {
    "name": "CULT ADEPT",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 9/18 | **HP:** 4 | **Stress:** 6\n> **ATK:** +2 | **Rune-Covered Rod:** Far | 2d4+3 mag\n> **Experience:** Fallen Lore +2, Rituals +2",
    "notes": {
      "motives_and_tactics": "** Curry favor, hinder foes, uncover knowledge",
      "features": "***Enervating Blast - Action:*** Spend a Fear to make a standard attack against a target within range. On a success, the target must mark a Stress.\n***Shroud of the Fallen - Action:*** Mark a Stress to wrap an ally within Close range in a shroud of Protection until the Adept marks their last HP. While Protected, the target has resistance to all damage.\n***Shadow Shackles - Action:*** Spend a Fear and choose a point within Far range. All targets within Close range of that point are Restrained in smoky chains until they break free with a successful Strength or Instinct Roll. A target Restrained by this feature must spend a Hope to make an action roll.\n***Fear Is Fuel - Reaction:*** Twice per scene, when a PC rolls a failure with Fear, clear a Stress."
    }
  },
  {
    "name": "CULT FANG",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 9/17 | **HP:** 4 | **Stress:** 4\n> **ATK:** +2 | **Long Knife:** Melee | 2d8+4 phy",
    "notes": {
      "motives_and_tactics": "** Capture sacrifices, isolate prey, rise in the ranks",
      "features": "***Shadow’s Embrace - Passive:*** The Fang can climb and walk on vertical surfaces. Mark a Stress to move from one shadow to another within Far range.\n***Pick Off the Straggler - Action:*** Mark a Stress to cause a target within Melee range to make an Instinct Reaction Roll. On a failure, the target must mark 2 Stress and is teleported with the Fang to a shadow within Far range, making them temporarily Vulnerable. On a success, the target must mark a Stress."
    }
  },
  {
    "name": "CULT INITIATE",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** 0 | **Ritual Dagger:** Melee | 5 phy",
    "notes": {
      "motives_and_tactics": "** Follow orders, gain power, seek forbidden knowledge",
      "features": "***Minion (6) - Passive:*** The Initiate is defeated when they take any damage. For every 6 damage a PC deals to the Initiate, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Cult Initiates within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
    }
  },
  {
    "name": "DEEPROOT DEFENDER",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 8/14 | **HP:** 7 | **Stress:** 3\n> **ATK:** +2 | **Vines:** Close | 1d8+3 phy\n> **Experience:** Huge +3",
    "notes": {
      "motives_and_tactics": "** Ambush, grab, protect, pummel",
      "features": "***Ground Slam - Action:*** Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back by this must mark a Stress.\n***Grab and Drag - Action:*** Make an attack against a target within Close range. On a success, spend a Fear to pull them into Melee range, deal 1d6+2 physical damage, and Restrain them until the Defender takes Severe damage."
    }
  },
  {
    "name": "DEMON OF AVARICE",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 15/29 | **HP:** 6 | **Stress:** 5\n> **ATK:** +2 | **Hungry Maw:** Melee | 3d6+5 mag\n> **Experience:** Manipulation +3",
    "notes": {
      "motives_and_tactics": "** Consume, fuel greed, sow dissent",
      "features": "***Money Talks - Passive:*** Attacks against the Demon are made with disadvantage unless the attacker spends a handful of gold. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks HP from the Demon’s standard attack, they can spend a handful of gold instead of marking HP (1 handful per HP). Add a handful of gold to the Demon for each handful of gold spent by PCs on this feature.\n***Numbers Must Go Up - Passive:*** Add a bonus to the Demon’s attack rolls equal to the number of handfuls of gold they have.\n***Money is Time - Action:*** Spend 3 handfuls of gold (or a Fear) to spotlight 1d4+1 allies."
    }
  },
  {
    "name": "DEMON OF DESPAIR",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 18/35 | **HP:** 6 | **Stress:** 5\n> **ATK:** +3 | **Miasma Bolt:** Far | 3d6+4 mag\n> **Experience:** Manipulation +3",
    "notes": {
      "motives_and_tactics": "** Make fear contagious, stick to the shadows, undermine resolve",
      "features": "***Depths of Despair - Passive:*** The Demon deals double damage to PCs with 0 Hope.\n***Your Struggle Is Pointless - Action:*** Spend a Fear to weigh down the spirits of all PCs within Far range. All targets affected replace their Hope Die with a d8 until they roll a success with Hope or their next rest.\n***Your Friends Will Fail You - Reaction:*** When a PC fails with Fear, you can mark a Stress to cause all other PCs within Close range to lose a Hope.\n***Momentum - Reaction:*** When the Demon makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "DEMON OF HUBRIS",
    "description": "",
    "stats": "> **Difficulty:** 19 | **Thresholds:** 20/36 | **HP:** 7 | **Stress:** 5\n> **ATK:** +4 | **Perfect Spear:** Very Close | 3d10 phy\n> **Experience:** Manipulation +2",
    "notes": {
      "motives_and_tactics": "** Condescend, declare premature victory, prove superiority",
      "features": "***Terrifying - Passive:*** When the Demon makes a successful attack, all PCs within Far range must lose a Hope and you gain a Fear.\n***Double or Nothing - Passive:*** When a PC within Far range fails a roll, they can choose to reroll their Fear Die and take the new result. If they still fail, they mark 2 Stress and the Demon clears a Stress.\n***Unparalleled Skill - Action:*** Mark a Stress to deal the Demon’s standard attack damage to a target within Close range.\n***The Root of Villainy - Action:*** Spend a Fear to spotlight two other Demons within Far range.\n***You Pale in Comparison - Reaction:*** When a PC fails a roll within Close range of the Demon, they must mark a Stress."
    }
  },
  {
    "name": "DEMON OF JEALOUSY",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 17/30 | **HP:** 6 | **Stress:** 6\n> **ATK:** +4 | **Psychic Assault:** Far | 3d8+3 mag\n> **Experience:** Manipulation +3",
    "notes": {
      "motives_and_tactics": "** Join in on others’ success, take what belongs to others, hold grudges",
      "features": "***Unprotected Mind - Passive:*** The Demon’s standard attack deals direct damage.\n***My Turn - Reaction:*** When the Demon marks HP from an attack, spend a number of Fear equal to the HP marked by the Demon to cause the attacker to mark the same number of HP.\n***Rivalry - Reaction:*** When a creature within Close range takes damage from a different adversary, you can mark a Stress to add a d4 to the damage roll.\n***What’s Yours Is Mine - Reaction:*** When a PC takes severe damage within Very Close range of the Demon, you can spend a Fear to cause the target to make a Finesse Reaction Roll. On a failure, the Demon seizes one item or consumable of their choice from the target’s inventory."
    }
  },
  {
    "name": "DEMON OF WRATH",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 22/40 | **HP:** 7 | **Stress:** 5\n> **ATK:** +3 | **Fists:** Very Close | 3d8+1 mag\n> **Experience:** Intimidation +2",
    "notes": {
      "motives_and_tactics": "** Fuel anger, impress rivals, wreak havoc",
      "features": "***Anger Unrelenting - Passive:*** The Demon’s attacks deal direct damage.\n***Battle Lust - Action:*** Spend a Fear to boil the blood of all PCs within Far range. They use a d20 as their Fear Die until the end of the scene.\n***Retaliation - Reaction:*** When the Demon takes damage from an attack within Close range, you can mark a Stress to make a standard attack against the attacker.\n***Blood and Souls - Reaction: Countdown (Loop 6):*** Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon 1d4 Minor Demons, who appear at Close range."
    }
  },
  {
    "name": "DEMONIC HOUND PACK",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 11/23 | **HP:** 6 | **Stress:** 3\n> **ATK:** 0 | **Claws and Fangs:** Melee | 2d8+2 phy\n> **Experience:** Scent Tracking +3",
    "notes": {
      "motives_and_tactics": "** Cause fear, consume flesh, please masters",
      "features": "***Horde (2d4+1) - Passive:*** When the Pack has marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead.\n***Dreadhowl - Action:*** Mark a Stress to make all targets within Very Close range lose a Hope. If a target is not able to lose a Hope, they must instead mark 2 Stress.\n***Momentum - Reaction:*** When the Pack makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "DIRE BAT",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 16/30 | **HP:** 5 | **Stress:** 3\n> **ATK:** +2 | **Claws and Teeth:** Melee | 2d6+7 phy\n> **Experience:** Bloodthirsty +3",
    "notes": {
      "motives_and_tactics": "** Dive-bomb, hide, protect leader",
      "features": "***Flying - Passive:*** While flying, the Bat gains a +3 bonus to their Difficulty.\n***Screech - Action:*** Mark a Stress to send a high-pitch screech out toward all targets in front of the Bat within Far range. Those targets must mark 1d4 Stress.\n***Guardian - Reaction:*** When an allied Vampire marks HP, you can mark a Stress to fly into Melee range of the attacker and make an attack with advantage against them. On a success, deal 2d6+2 physical damage."
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
    "name": "ELECTRIC EELS",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 10/20 | **HP:** 5 | **Stress:** 3\n> **ATK:** 0 | **Shocking Bite:** Melee | 2d6+4 phy",
    "notes": {
      "motives_and_tactics": "** Avoid larger predators, shock prey, tear apart",
      "features": "***Horde (2d4+1) - Passive:*** When the Eels have marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead.\n***Paralyzing Shock - Action:*** Mark a Stress to make a standard attack against all targets within Very Close range. You gain a Fear for each target that marks HP."
    }
  },
  {
    "name": "ELEMENTAL SPARK",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** +0 | **Burst of Fire:** Close | 5 mag",
    "notes": {
      "motives_and_tactics": "** Blast, consume, gain mass",
      "features": "***Minion (9) - Passive:*** The Elemental is defeated when they take any damage. For every 9 damage a PC deals to the Elemental, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Elemental Sparks within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
    }
  },
  {
    "name": "ELITE SOLDIER",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 9/18 | **HP:** 4 | **Stress:** 3\n> **ATK:** +1 | **Spear:** Very Close | 2d8+4 phy",
    "notes": {
      "motives_and_tactics": "** Gain glory, keep order, make alliances",
      "features": "***Reinforce - Action:*** Mark a Stress to move into Melee range of an ally and make a standard attack against a target within Very Close range. On a success, deal 2d10+2 physical damage and the ally can clear a Stress.\n***Vassal’s Loyalty - Reaction:*** When the Soldier is within Very Close range of a knight or other noble who would take damage, you can mark a Stress to move into Melee range of them and take the damage instead."
    }
  },
  {
    "name": "FAILED EXPERIMENT",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 12/23 | **HP:** 3 | **Stress:** 3\n> **ATK:** +1 | **Bite and Claw:** Melee | 2d6+5 phy\n> **Experience:** Copycat +3",
    "notes": {
      "motives_and_tactics": "** Devour, hunt, track",
      "features": "***Warped Fortitude - Passive:*** The Experiment is resistant to physical damage.\n***Overwhelm - Passive:*** When a target the Experiment attacks has other adversaries within Very Close range, the Experiment deals double damage.\n***Lurching Lunge - Action:*** Mark a Stress to spotlight the Experiment as an additional GM move instead of spending Fear."
    }
  },
  {
    "name": "FALLEN SHOCK TROOP",
    "description": "",
    "stats": "> **Difficulty:** 18 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** +2 | **Cursed Axe:** Very Close | 12 phy",
    "notes": {
      "motives_and_tactics": "** Crush, dominate, earn relief, punish",
      "features": "***Minion (12) - Passive:*** The Shock Troop is defeated when they take any damage. For every 12 damage a PC deals to the Shock Troop, defeat an additional Minion within range the attack would succeed against.\n***Aura of Doom - Passive:*** When a PC marks HP from an attack by the Shock Troop, they lose a Hope.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Fallen Shock Troops within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 12 physical damage each. Combine this damage."
    }
  },
  {
    "name": "FALLEN SORCERER",
    "description": "",
    "stats": "> **Difficulty:** 19 | **Thresholds:** 26/42 | **HP:** 6 | **Stress:** 5\n> **ATK:** +4 | **Corrupted Staff:** Far | 4d6+10 mag\n> **Experience:** Ancient Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Acquire, dishearten, dominate, torment",
      "features": "***Conflagration - Action:*** Spend a Fear to unleash an all-consuming firestorm and make an attack against all targets within Close range. Targets the Sorcerer succeeds against take 2d10+6 direct magic damage.\n***Nightmare Tableau - Action:*** Mark a Stress to trap a target within Far range in a powerful illusion of their worst fears. While trapped, the target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Instinct Roll.\n***Slippery - Reaction:*** When the Sorcerer takes damage from an attack, they can teleport up to Far range.\n***Shackles of Guilt - Reaction:*** Countdown (Loop 2d6). When the Sorcerer is in the spotlight for the first time, activate the countdown. When it triggers, all targets within Far range become Vulnerable and must mark a Stress as they relive their greatest regrets. A target can break free from their regret with a successful Presence or Strength Roll. When a PC fails to break free, they lose a Hope."
    }
  },
  {
    "name": "FALLEN WARLORD: REALM-BREAKER",
    "description": "",
    "stats": "> **Difficulty:** 20 | **Thresholds:** 36/66 | **HP:** 8 | **Stress:** 5\n> **ATK:** +7 | **Barbed Whip:** Close | 4d8+7 phy\n> **Experience:** Conquest +3, History +2, Intimidation +3",
    "notes": {
      "motives_and_tactics": "** Corrupt, dominate, punish, break the weak",
      "features": "***Relentless (2) - Passive:*** The Realm-Breaker can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.\n***Firespite Plate Armor - Passive:*** When the Realm-Breaker takes damage, reduce it by 2d10.\n***Tormenting Lash - Action:*** Mark a Stress to make a standard attack against all targets within Very Close range. When a target uses armor to reduce damage from this attack, they must mark 2 Armor Slots.\n***All-Consuming Rage - Reaction:*** Countdown (Decreasing 8). When the Realm-Breaker is in the spotlight for the first time, activate the countdown. When it triggers, create a torrent of incarnate rage that rends flesh from bone. All targets within Far range must make a Presence Reaction Roll. Targets who fail take 2d6+10 direct magic damage. Targets who succeed take half damage. For each HP marked from this damage, summon a Fallen Shock Troop within Very Close range of the target who marked that HP. If the countdown ever decreases its maximum value to 0, the Realm-Breaker marks their remaining HP and all targets within Far range must mark all remaining HP and make a death move.\n***Doombringer - Reaction:*** When a target marks HP from an attack by the Realm-Breaker, all PCs within Far range of the target must lose a Hope.\n***I Have Never Known Defeat (Phase Change) - Reaction:*** When the Realm-Breaker marks their last HP, replace them with the Undefeated Champion and immediately spotlight them."
    }
  },
  {
    "name": "FALLEN WARLORD: UNDEFEATED CHAMPION",
    "description": "",
    "stats": "> **Difficulty:** 18 | **Thresholds:** 35/58 | **HP:** 11 | **Stress:** 5\n> **ATK:** +8 | **Heart-Shattering Sword:** Very Close | 4d12+13 phy\n> **Experience:** Conquest +3, History +2, Intimidation +3",
    "notes": {
      "motives_and_tactics": "** Dispatch merciless death, punish the defiant, secure victory at any cost",
      "features": "***Relentless (3) - Passive:*** The Undefeated Champion can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Faltering Armor - Passive:*** When the Undefeated Champion takes damage, reduce it by 1d10.\n***Shattering Strike - Action:*** Mark a Stress to make a standard attack against all targets within Very Close range. PCs the Champion succeeds against lose a number of Hope equal to the HP they marked from this attack.\n***Endless Legions - Action:*** Spend a Fear to summon a number of Fallen Shock Troops equal to twice the number of PCs. The Shock Troops appear at Far range.\n***Circle of Defilement - Reaction:*** Countdown (1d8). When the Undefeated Champion is in the spotlight for the first time, activate the countdown. When it triggers, activate a magical circle covering an area within Far range of the Champion. A target within that area is Vulnerable until they leave the circle. The circle can be removed by dealing Severe damage to the Undefeated Champion.\n***Doombringer - Reaction:*** When the Undefeated Champion makes a successful attack against a PC, you gain a Fear.\n***Doombringer - Reaction:*** When a target marks HP from an attack by the Undefeated Champion, all PCs within Far range of the target lose a Hope."
    }
  },
  {
    "name": "GIANT BEASTMASTER",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 12/24 | **HP:** 6 | **Stress:** 5\n> **ATK:** +2 | **Longbow:** Far | 2d8+4 phy\n> **Experience:** Animal Handling +3",
    "notes": {
      "motives_and_tactics": "** Command, make a living, maneuver, pin down, protect companion animals",
      "features": "***Two as One - Passive:*** When the Beastmaster is spotlighted, you can also spotlight a Tier 1 animal adversary currently under their control.\n***Pinning Strike - Action:*** Make a standard attack against a target. On a success, you can mark a Stress to pin them to a nearby surface. The pinned target is Restrained until they break free with a successful Finesse or Strength Roll.\n***Deadly Companion - Action:*** Twice per scene, summon a Bear, Dire Wolf, or similar Tier 1 animal adversary under the Beastmaster’s control. The adversary appears at Close range and is immediately spotlighted."
    }
  },
  {
    "name": "GIANT BRAWLER",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 12/28 | **HP:** 7 | **Stress:** 4\n> **ATK:** +2 | **Warhammer:** Very Close | 2d12+3 phy\n> **Experience:** Intrusion +2",
    "notes": {
      "motives_and_tactics": "** Make a living, overwhelm, slam, topple",
      "features": "***Battering Ram - Action:*** Mark a Stress to have the Brawler charge at an inanimate object within Close range they could feasibly smash (such as a wall, cart, or market stand) and destroy it. All targets within Very Close range of the object must succeed on an Agility Reaction Roll or take 2d4+3 physical damage from the shrapnel.\n***Bloody Reprisal - Reaction:*** When the Brawler marks 2 or more HP from an attack within Very Close range, you can make a standard attack against the attacker. On a success, the Brawler deals 2d6+15 physical damage instead of their standard damage.\n***Momentum - Reaction:*** When the Brawler makes a successful attack against a PC, you gain a Fear."
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
    "name": "GIANT MOSQUITOES",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 5/9 | **HP:** 6 | **Stress:** 3\n> **ATK:** -2 | **Proboscis:** Melee | 1d8+3 phy\n> **Experience:** Camouflage +2",
    "notes": {
      "motives_and_tactics": "** Fly away, harass, steal blood",
      "features": "***Horde (1d4+1) - Passive:*** When the Mosquitoes have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead.\n***Flying - Passive:*** While flying, the Mosquitoes have a +2 bonus to their Difficulty.\n***Bloodseeker - Reaction:*** When the Mosquitoes’ attack causes a target to mark HP, you can mark a Stress to force the target to mark an additional HP."
    }
  },
  {
    "name": "GIANT RAT",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -4 | **Claws:** Melee | 1 phy\n> **Experience:** Keen Senses +3",
    "notes": {
      "motives_and_tactics": "** Burrow, hunger, scavenge, wear down",
      "features": "***Minion (3) - Passive:*** The Rat is defeated when they take any damage. For every 3 damage a PC deals to the Rat, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Giant Rats within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
    }
  },
  {
    "name": "GIANT RECRUIT",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** None | **HP:** 1 | **Stress:** 2\n> **ATK:** +1 | **Warhammer:** Very Close | 5 phy",
    "notes": {
      "motives_and_tactics": "** Batter, make a living, overwhelm, terrify",
      "features": "***Minion (7) - Passive:*** The Recruit is defeated when they take any damage. For every 7 damage a PC deals to the Recruit, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Giant Recruits within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
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
    "name": "GLASS SNAKE",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 6/10 | **HP:** 5 | **Stress:** 3\n> **ATK:** +2 | **Glass Fangs:** Very Close | 1d8+2 phy",
    "notes": {
      "motives_and_tactics": "** Climb, feed, keep distance, scare",
      "features": "***Armor-Shredding Shards - Passive:*** On a successful attack within Melee range against the Snake, the attacker must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.\n***Spinning Serpent - Action:*** Mark a Stress to make an attack against all targets within Very Close range. Targets the Snake succeeds against take 1d6+1 physical damage.\n***Spitter - Action:*** Spend a Fear to introduce a 6 Spitter Die. When the Snake is in the spotlight, roll this die. On a result of 5 or higher, all targets in front of the Snake within Far range must succeed on an Agility Reaction Roll or take 1d4 physical damage. The Snake can take the spotlight a second time this GM turn."
    }
  },
  {
    "name": "GORGON",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 13/25 | **HP:** 9 | **Stress:** 3\n> **ATK:** +4 | **Sinew Shortbow:** Far | 2d20+3 mag\n> **Experience:** Instinct +3",
    "notes": {
      "motives_and_tactics": "** Corner, hit-and-run, petrify, seek vengeance",
      "features": "***Relentless (2) - Passive:*** The Gorgon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.\n***Suneater Arrows - Passive:*** When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can’t become Hidden. Attack rolls made against a Glowing target have advantage.\n***Crown of Serpents - Action:*** Make an attack roll against a target within Melee range using the Gorgon’s protective snakes. On a success, mark Stress to deal 2d10+4 physical damage and the target must mark a Stress.\n***Petrifying Gaze - Reaction:*** When the Gorgon takes damage from an attack within Close range, you can spend a Fear to force the attacker to make an Instinct Reaction Roll. On a failure, they begin to turn to stone, marking a HP and starting a Petrification Countdown (4). This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a death move. If the Gorgon is defeated, all petrification countdowns end.\n***Death Glare - Reaction:*** When the Gorgon makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "GREATER EARTH ELEMENTAL",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 22/40 | **HP:** 10 | **Stress:** 4\n> **ATK:** +7 | **Boulder Fist:** Very Close | 3d10+1 phy",
    "notes": {
      "motives_and_tactics": "** Avalanche, knock over, pummel",
      "features": "***Slow - Passive:*** When you spotlight the Elemental and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Elemental and they have a token on their stat block, clear the token and they can act.\n***Crushing Blows - Passive:*** When the Elemental makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.\n***Immovable Object - Passive:*** An attack that would move the Elemental moves them two fewer ranges (for example, Far becomes Very Close). When the Elemental takes physical damage, reduce it by 7.\n***Rockslide - Action:*** Mark a Stress to create a rockslide that buries all the land in front of Elemental within Close range with rockfall. All targets in this area must make an Agility Reaction Roll (19). Targets who fail take 2d12+5 physical damage and become Vulnerable until their next roll with Hope. Targets who succeed take half damage.\n***Momentum - Reaction:*** When the Elemental makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "GREATER WATER ELEMENTAL",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 17/34 | **HP:** 5 | **Stress:** 5\n> **ATK:** +3 | **Crashing Wave:** Very Close | 3d4+1 mag",
    "notes": {
      "motives_and_tactics": "** Deluge, disperse, drown",
      "features": "***Water Jet - Action:*** Mark a Stress to attack a target within Very Close range. On a success, deal 2d4+7 physical damage and the target’s next action has disadvantage. On a failure, the target must mark a Stress.\n***Drowning Embrace - Action:*** Spend a Fear to make an attack against all targets within Very Close range. Targets the Elemental succeeds against become Restrained and Vulnerable as they begin drowning. A target can break free, ending both conditions, with a successful Strength or Instinct Roll.\n***High Tide - Reaction:*** When the Elemental makes a successful standard attack, you can mark a Stress to knock the target back to Close range."
    }
  },
  {
    "name": "GREEN OOZE",
    "description": "",
    "stats": "> **Difficulty:** 8 | **Thresholds:** 5/10 | **HP:** 5 | **Stress:** 2\n> **ATK:** +1 | **Ooze Appendage:** Melee | 1d6+1 mag\n> **Experience:** Camouflage +3",
    "notes": {
      "motives_and_tactics": "** Camouflage, consume and multiply, creep up, envelop",
      "features": "***Slow - Passive:*** When you spotlight the Ooze and they don’t have a token on their stat block, they can’t act. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act.\n***Acidic Form - Passive:*** When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.\n***Envelope - Action:*** Make a standard attack against a target within Melee range. On a success, the Ooze envelops them and the target must mark 2 Stress. The target must mark an additional Stress when they make an action roll. If the Ooze takes Severe damage, the target is freed.\n***Split - Reaction:*** When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
    }
  },
  {
    "name": "HALLOWED ARCHER",
    "description": "",
    "stats": "> **Difficulty:** 19 | **Thresholds:** 25/45 | **HP:** 3 | **Stress:** 2\n> **ATK:** +4 | **Sanctified Longbow:** Far | 4d8+8 phy",
    "notes": {
      "motives_and_tactics": "** Focus fire, obey, retribution, volley",
      "features": "***Punish the Guilty - Passive:*** The Archer deals double damage to targets marked Guilty by a High Seraph.\n***Divine Volley - Action:*** Mark a Stress to make a standard attack against up to three targets."
    }
  },
  {
    "name": "HALLOWED SOLDIER",
    "description": "",
    "stats": "> **Difficulty:** 18 | **Thresholds:** None | **HP:** 1 | **Stress:** 2\n> **ATK:** +2 | **Sword and Shield:** Melee | 10 phy",
    "notes": {
      "motives_and_tactics": "** Obey, outmaneuver, punish, swarm",
      "features": "***Minion (13) - Passive:*** The Soldier is defeated when they take any damage. For every 13 damage a PC deals to the Soldier, defeat an additional Minion within range the attack would succeed against.\n***Divine Flight - Passive:*** While the Soldier is flying, spend a Fear to move up to Far range instead of Close range before taking an action.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Hallowed Soldiers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 10 physical damage each. Combine this damage."
    }
  },
  {
    "name": "HARRIER",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 5/9 | **HP:** 3 | **Stress:** 3\n> **ATK:** +1 | **Javelin:** Close | 1d6+2 phy\n> **Experience:** Camouflage +2",
    "notes": {
      "motives_and_tactics": "** Flank, harry, kite, profit",
      "features": "***Maintain Distance - Passive:*** After making a standard attack, the Harrier can move anywhere within Far range.\n***Fall Back - Reaction:*** When a creature moves into Melee range to make an attack, you can mark a Stress before the attack roll to move anywhere within Close range and make an attack against that creature. On a success, deal 1d10+2 physical damage."
    }
  },
  {
    "name": "HEAD GUARD",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 7/13 | **HP:** 7 | **Stress:** 3\n> **ATK:** +4 | **Mace:** Melee | 1d10+4 phy\n> **Experience:** Commander +2, Local Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Arrest, close gates, pin down, seek glory",
      "features": "***Rally Guards - Action:*** Spend 2 Fear to spotlight the Head Guard and up to 2d4 allies within Far range.\n***On My Signal - Reaction:*** Countdown (5). When the Head Guard is in the spotlight for the first time, activate the countdown. It ticks down when a PC makes an attack roll. When it triggers, all Archer Guards within Far range make a standard attack with advantage against the nearest target within their range. If any attacks succeed on the same target, combine their damage.\n***Momentum - Reaction:*** When the Head Guard makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "HEAD VAMPIRE",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 22/42 | **HP:** 6 | **Stress:** 6\n> **ATK:** +5 | **Rapier:** Melee | 2d20+4 phy\n> **Experience:** Aristocrat +3",
    "notes": {
      "motives_and_tactics": "** Create thralls, charm, command, fly, intimidate",
      "features": "***Terrifying - Passive:*** When the Vampire makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.\n***Look Into My Eyes - Passive:*** A creature who moves into Melee range of the Vampire must make an Instinct Reaction Roll. On a failure, you gain 1d4 Fear.\n***Feed on Followers - Action:*** When the Vampire is within Melee range of an ally, they can cause the ally to mark a HP. The Vampire then clears a HP.\n***The Hunt Is On - Action:*** Spend 2 Fear to summon 1d4 Vampires, who appear at Far range and immediately take the spotlight.\n***Lifesuck - Reaction:*** When the Vampire is spotlighted, roll a d8. On a result of 6 or higher, all targets within Very Close range must mark a HP."
    }
  },
  {
    "name": "HIGH SERAPH",
    "description": "",
    "stats": "> **Difficulty:** 20 | **Thresholds:** 37/70 | **HP:** 7 | **Stress:** 5\n> **ATK:** +8 | **Holy Sword:** Very Close | 4d10+10 phy\n> **Experience:** Divine Knowledge +3",
    "notes": {
      "motives_and_tactics": "** Enforce dogma, fly, pronounce judgment, smite",
      "features": "***Relentless (2) - Passive:*** The Seraph can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Divine Flight - Passive:*** While the Seraph is flying, spend a Fear to move up to Far range instead of Close range before taking an action.\n***Judgment - Action:*** Spend a Fear to make a target Guilty in the eyes of the Seraph’s god until the Seraph is defeated. While Guilty, the target doesn’t gain Hope on a result with Hope. When the Seraph succeeds on a standard attack against a Guilty target, they deal Severe damage instead of their standard damage. The Seraph can only mark one target at a time.\n***God Rays - Action:*** Mark a Stress to reflect a sliver of divinity as a searing beam of light that hits up to twenty targets within Very Far range. Targets must make a Presence Reaction Roll, with disadvantage if they are marked Guilty. Targets who fail take 4d6+12 magic damage. Targets who succeed take half damage.\n***We Are One - Action:*** Once per scene, spend a Fear to spotlight all other adversaries within Far range. Attacks they make while spotlighted in this way deal half damage."
    }
  },
  {
    "name": "HUGE GREEN OOZE",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 15/30 | **HP:** 7 | **Stress:** 4\n> **ATK:** +3 | **Ooze Appendage:** Melee | 3d8+1 mag\n> **Experience:** Blend In +3",
    "notes": {
      "motives_and_tactics": "** Camouflage, creep up, envelop, multiply",
      "features": "***Slow - Passive:*** When you spotlight the Ooze and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act.\n***Acidic Form - Passive:*** When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.\n***Envelop - Action:*** Make an attack against a target within Melee range. On a success, the Ooze Envelops them and the target must mark 2 Stress. While Enveloped, the target must mark an additional Stress every time they make an action roll. When the Ooze takes Severe damage, all Enveloped targets are freed and the condition is cleared.\n***Split - Reaction:*** When the Ooze has 4 or more HP marked, you can spend a Fear to split them into two Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
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
    "name": "JAGGED KNIFE HEXER",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 5/9 | **HP:** 4 | **Stress:** 4\n> **ATK:** +2 | **Staff:** Far | 1d6+2 mag\n> **Experience:** Magical Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Command, hex, profit",
      "features": "***Curse - Action:*** Choose a target within Far range and temporarily Curse them. While the target is Cursed, you can mark a Stress so that target rolls with Hope to make the roll be with Fear instead.\n***Chaotic Flux - Action:*** Make an attack against up to three targets within Very Close range. Mark a Stress to deal 2d6+3 magic damage to targets the Hexer succeeded against."
    }
  },
  {
    "name": "JAGGED KNIFE KNEEBREAKER",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 7/14 | **HP:** 7 | **Stress:** 4\n> **ATK:** -3 | **Club:** Melee | 1d4+6 phy\n> **Experience:** Thief +2, Unveiled Threats +3",
    "notes": {
      "motives_and_tactics": "** Grapple, intimidate, profit, steal",
      "features": "***I’ve Got ‘Em - Passive:*** Creatures Restrained by the Kneebreaker take double damage from attacks by other adversaries.\n***Hold Them Down - Action:*** Make an attack against a target within Melee range. On a success, the target takes no damage but is Restrained and Vulnerable. The target can break free, clearing both conditions, with a successful Strength Roll or is freed automatically if the Kneebreaker takes Major or greater damage."
    }
  },
  {
    "name": "JAGGED KNIFE LACKEY",
    "description": "",
    "stats": "> **Difficulty:** 9 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -2 | **Daggers:** Melee | 2 phy\n> **Experience:** Thief +2",
    "notes": {
      "motives_and_tactics": "** Escape, profit, throw smoke",
      "features": "***Minion (3) - Passive:*** The Lackey is defeated when they take any damage. For every 3 damage a PC deals to the Lackey, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Jagged Knife Lackeys within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
    }
  },
  {
    "name": "JAGGED KNIFE LIEUTENANT",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 7/14 | **HP:** 6 | **Stress:** 3\n> **ATK:** +2 | **Javelin:** Close | 1d8+3 phy\n> **Experience:** Local Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Bully, command, profit, reinforce",
      "features": "***Tactician - Action:*** When you spotlight the Lieutenant, mark a Stress to also spotlight two allies within Close range.\n***More Where That Came From - Action:*** Summon three Jagged Knife Lackeys, who appear at Far range.\n***Coup de Grace - Action:*** Spend a Fear to make an attack against a Vulnerable target within Close range. On a success, deal 2d6+12 physical damage and the target must mark a Stress.\n***Momentum - Reaction:*** When the Lieutenant makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "JAGGED KNIFE SHADOW",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 4/8 | **HP:** 3 | **Stress:** 3\n> **ATK:** +1 | **Daggers:** Melee | 1d4+4 phy\n> **Experience:** Intrusion +3",
    "notes": {
      "motives_and_tactics": "** Ambush, conceal, divide, profit",
      "features": "***Backstab - Passive:*** When the Shadow succeeds on a standard attack that has advantage, they deal 1d6+6 physical damage instead of their standard damage.\n***Cloaked - Action:*** Become Hidden until after the Shadow’s next attack. Attacks made while Hidden from this feature have advantage."
    }
  },
  {
    "name": "JAGGED KNIFE SNIPER",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 4/7 | **HP:** 3 | **Stress:** 2\n> **ATK:** -1 | **Shortbow:** Far | 1d10+2 phy\n> **Experience:** Stealth +2",
    "notes": {
      "motives_and_tactics": "** Ambush, hide, profit, reposition",
      "features": "***Unseen Strike - Passive:*** If the Sniper is Hidden when they make a successful standard attack against a target, they deal 1d10+4 physical damage instead of their standard damage."
    }
  },
  {
    "name": "JUVENILE FLICKERFLY",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 13/26 | **HP:** 10 | **Stress:** 5\n> **ATK:** +3 | **Wing Slash:** Very Close | 2d10+4 phy",
    "notes": {
      "motives_and_tactics": "** Collect shiny things, hunt, swoop",
      "features": "***Relentless (3) - Passive:*** The Flickerfly can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Peerless Accuracy - Passive:*** Before the Flickerfly makes an attack, roll a d6. On a result of 4 or higher, the target’s Evasion is halved against this attack.\n***Mind Dance - Action:*** Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target’s fears.\n***Hallucinatory Breath - Reaction: Countdown (Loop 1d6):*** When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must succeed on an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail must mark a Stress and lose a Hope."
    }
  },
  {
    "name": "KNIGHT OF THE REALM",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 13/26 | **HP:** 6 | **Stress:** 4\n> **ATK:** +4 | **Longsword:** Melee | 2d10+4 phy\n> **Experience:** Ancient Knowledge +3, High Society +2, Tactics +2",
    "notes": {
      "motives_and_tactics": "** Run down, seek glory, show dominance",
      "features": "***Chevalier - Passive:*** While the Knight is on a mount, they gain a +2 bonus to their Difficulty. When they take Severe damage, they’re knocked from their mount and lose this benefit until they’re next spotlighted.\n***Heavily Armored - Passive:*** When the Knight takes physical damage, reduce it by 3.\n***Cavalry Charge - Action:*** If the Knight is mounted, move up to Far range and make a standard attack against a target. On a success, deal 2d8+4 physical damage and the target must mark a Stress.\n***For the Realm! - Action:*** Mark a Stress to spotlight 1d4+1 allies. Attacks they make while spotlighted in this way deal half damage."
    }
  },
  {
    "name": "KRAKEN",
    "description": "",
    "stats": "> **Difficulty:** 20 | **Thresholds:** 35/70 | **HP:** 11 | **Stress:** 8\n> **ATK:** +7 | **Tentacles:** Close | 4d12+10 phy\n> **Experience:** Swimming +3",
    "notes": {
      "motives_and_tactics": "** Consume, crush, drown, grapple",
      "features": "***Relentless (3) - Passive:*** The Kraken can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Many Tentacles - Passive:*** While the Kraken has 7 or fewer marked HP, they can make their standard attack against two targets within range.\n***Grapple and Drown - Action:*** Make an attack roll against a target within Close range. On a success, mark a Stress to grab them with a tentacle and drag them beneath the water. The target is Restrained and Vulnerable until they break free with a successful Strength Roll or the Kraken takes Major or greater damage. While Restrained and Vulnerable in this way, a target must mark a Stress when they make an action roll.\n***Boiling Blast - Action:*** Spend a Fear to spew a line of boiling water at any number of targets in a line up to Far range. All targets must succeed on an Agility Reaction Roll or take 4d6+9 physical damage. If a target marks an Armor Slot to reduce the damage, they must also mark a Stress.\n***Momentum - Reaction:*** When the Kraken makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "MASKED THIEF",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/17 | **HP:** 4 | **Stress:** 5\n> **ATK:** +3 | **Backsword:** Melee | 2d8+3 phy\n> **Experience:** Acrobatics +3",
    "notes": {
      "motives_and_tactics": "** Evade, hide, pilfer, profit",
      "features": "***Quick Hands - Action:*** Make an attack against a target within Melee range. On a success, deal 1d8+2 physical damage and the Thief steals one item or consumable from the target’s inventory.\n***Escape Plan - Action:*** Mark a Stress to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within Very Close range of the trap must succeed on an Agility Reaction Roll (13) or be pulled off their feet and suspended upside down. The target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Finesse or Strength Roll (13)."
    }
  },
  {
    "name": "MASTER ASSASSIN",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 12/25 | **HP:** 7 | **Stress:** 5\n> **ATK:** +5 | **Serrated Dagger:** Close | 2d10+2 phy\n> **Experience:** Command +3, Intrusion +3",
    "notes": {
      "motives_and_tactics": "** Ambush, get out alive, kill, prepare for all scenarios",
      "features": "***Won’t See It Coming - Passive:*** The Assassin deals direct damage while they’re Hidden.\n***Strike as One - Action:*** Mark a Stress to spotlight a number of other Assassins equal to the Assassin’s unmarked Stress.\n***The Subtle Blade - Reaction:*** When the Assassin successfully makes a standard attack against a Vulnerable target, you can spend a Fear to deal Severe damage instead of their standard damage.\n***Momentum - Reaction:*** When the Assassin makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "MERCHANT BARON",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 9/19 | **HP:** 5 | **Stress:** 3\n> **ATK:** +2 | **Rapier:** Melee | 1d6+2 phy\n> **Experience:** Nobility +2, Trade +2",
    "notes": {
      "motives_and_tactics": "** Abusive power, gather resources, mobilize minions",
      "features": "***Everyone Has a Price - Action:*** Spend a Fear to offer a target a dangerous bargain for something they want or need. If used on a PC, they must make a Presence Reaction Roll (17). On a failure, they must mark 2 Stress or take the deal.\n***The Best Muscle Money Can Buy - Action:*** Once per scene, mark a Stress to summon 1d4+1 Tier 1 adversaries, who appear at Far range, to enforce the Baron’s will."
    }
  },
  {
    "name": "MERCHANT",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 4/8 | **HP:** 3 | **Stress:** 3\n> **ATK:** -4 | **Club:** Melee | 1d4+1 phy\n> **Experience:** Shrewd Negotiator +3",
    "notes": {
      "motives_and_tactics": "** Buy low and sell high, create demand, inflate prices, seek profit",
      "features": "***Preferential Treatment - Passive:*** A PC who succeeds on a Presence Roll against the Merchant gains a discount on purchases. A PC who fails on a Presence Roll against the Merchant must pay more and has disadvantage on future Presence Rolls against the Merchant.\n***The Runaround - Passive:*** When a PC rolls a 14 or lower on a Presence Roll made against the Merchant, they must mark a Stress."
    }
  },
  {
    "name": "MINOR CHAOS ELEMENTAL",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 7/14 | **HP:** 7 | **Stress:** 3\n> **ATK:** +3 | **Warp Blast:** Close | 1d12+6 mag",
    "notes": {
      "motives_and_tactics": "** Confound, destabilize, transmogrify",
      "features": "***Arcane Master - Passive:*** The Elemental is resistant to magic damage.\n***Sickening Flux - Action:*** Mark a HP to force all targets within Close range to mark a Stress and become Vulnerable until their next rest or they clear a HP.\n***Remake Reality - Action:*** Spend a Fear to transform the area within Very Close range into a different biome. All targets within this area take 2d6+3 direct magic damage.\n***Magical Reflection - Reaction:*** When the Elemental takes damage from an attack within Close range, deal an amount of damage to the attacker equal to half of the damage they dealt.\n***Momentum - Reaction:*** When the Elemental makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "MINOR DEMON",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/15 | **HP:** 8 | **Stress:** 4\n> **ATK:** +3 | **Claws:** Melee | 1d8+6 phy",
    "notes": {
      "motives_and_tactics": "** Act erratically, corral targets, relish pain, torment",
      "features": "***Relentless (2) - Passive:*** The Demon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.\n***All Must Fall - Passive:*** When a PC rolls a failure with Fear while within Close range of the Demon, they lose a Hope.\n***Hellfire - Action:*** Spend a Fear to rain down hellfire within Far range. All targets within the area must make an Agility Reaction Roll. Targets who fail take 1d20+3 magic damage. Targets who succeed take half damage.\n***Reaper - Reaction:*** Before rolling damage for the Demon’s attack, you can mark a Stress to gain a bonus to the damage roll equal to the Demon’s current number of marked HP.\n***Momentum - Reaction:*** When the Demon makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "MINOR FIRE ELEMENTAL",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 7/15 | **HP:** 9 | **Stress:** 3\n> **ATK:** +3 | **Elemental Blast:** Far | 1d10+4 mag",
    "notes": {
      "motives_and_tactics": "** Encircle enemies, grow in size, intimidate, start fires",
      "features": "***Relentless (2) - Passive:*** The Elemental can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.\n***Scorched Earth - Action:*** Mark a Stress to choose a point within Far range. The ground within Very Close range of that point immediately bursts into flames. All creatures within this area must make an Agility Reaction Roll. Targets who fail take 2d8 magic damage from the flames. Targets who succeed take half damage.\n***Explosion - Action:*** Spend a Fear to erupt in a fiery explosion. Make an attack against all targets within Close range. Targets the Elemental succeeds against take 1d8 magic damage and are knocked back to Far range.\n***Consume Kindling - Reaction:*** Three times per scene, when the Elemental moves on objects that are highly flammable, consume them to clear a HP or a Stress.\n***Momentum - Reaction:*** When the Elemental makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "MINOR TREANT",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -2 | **Cleaved Branch:** Melee | 4 phy",
    "notes": {
      "motives_and_tactics": "** Crush, overwhelm, protect",
      "features": "***Minion (5) - Passive:*** The Treant is defeated when they take any damage. For every 5 damage a PC deals to the Treant, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Minor Treants within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
    }
  },
  {
    "name": "MINOTAUR WRECKER",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 14/27 | **HP:** 7 | **Stress:** 5\n> **ATK:** +2 | **Battleaxe:** Very Close | 2d8+5 phy\n> **Experience:** Navigation +2",
    "notes": {
      "motives_and_tactics": "** Consume, gore, navigate, overpower, pursue",
      "features": "***Ramp Up - Passive:*** You must spend a Fear to spotlight the Minotaur. While spotlighted, they can make their standard attack against all targets within range.\n***Charging Bull - Action:*** Mark a Stress to charge through a group within Close range and make an attack against all targets in the Minotaur’s path. Targets the Minotaur succeeds against take 2d6+8 physical damage and are knocked back to Very Far range. If a target is knocked into a solid object or another creature, they take an extra 1d6 damage (combine their damage).\n***Gore - Action:*** Make an attack against a target within Very Close range, moving the Minotaur into Melee range of them. On a success, deal 2d8 direct physical damage."
    }
  },
  {
    "name": "MONARCH",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 16/32 | **HP:** 6 | **Stress:** 5\n> **ATK:** +0 | **Warhammer:** Melee | 3d6+3 phy\n> **Experience:** History +3, Nobility +3",
    "notes": {
      "motives_and_tactics": "** Control vassals, destroy rivals, forge a legacy",
      "features": "***Execute Them! - Action:*** Spend a Fear per PC in the party to have the group condemned for crimes real or imagined. A PC who succeeds on a Presence Roll can demand trial by combat or another special form of trial.\n***Crossguard - Action:*** Once per scene, mark a Stress to summon Tier X Minions, who appear at Close range to enforce the Monarch’s will.\n***Census Bell - Reaction: Long-Term Countdown (8):*** Spend a Fear to activate after the Monarch’s desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain 1d4 Fear."
    }
  },
  {
    "name": "MORTAL HUNTER",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 15/27 | **HP:** 6 | **Stress:** 4\n> **ATK:** +5 | **Tear at Flesh:** Very Close | 2d12+1 phy\n> **Experience:** Bloodhound +3",
    "notes": {
      "motives_and_tactics": "** Devour, hunt, track",
      "features": "***Terrifying - Passive:*** When the Hunter makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.\n***Deathlock - Action:*** Spend a Fear to curse a target within Very Close range with a necrotic Deathlock until the end of the scene. Attacks made by the Hunter against a Deathlocked target deal direct damage. The Hunter can only maintain one Deathlock at a time.\n***Inevitable Death - Action:*** Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage.\n***Rampage - Reaction:*** Countdown (Loop 1d6). When the Hunter is in the spotlight for the first time, activate the countdown. When it triggers, move the Hunter in a straight line to a point within Far range and make an attack against all targets in their path. Targets the Hunter succeeds against take 2d8+2 physical damage."
    }
  },
  {
    "name": "OAK TREANT",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 22/40 | **HP:** 7 | **Stress:** 4\n> **ATK:** +2 | **Branch:** Very Close | 3d8+2 phy\n> **Experience:** Forest Knowledge +3",
    "notes": {
      "motives_and_tactics": "** Hide in plain sight, preserve the forest, root down, swing branches",
      "features": "***Just a Tree - Passive:*** Before they make their first attack in a fight or after they become Hidden, the Treant is indistinguishable from other trees until they next act or a PC succeeds on an Instinct Roll to identify them.\n***Seed Barrage - Action:*** Mark a Stress and make an attack against up to three targets within Close range, pummeling them with giant acorns. Targets the Treant succeeds against take 2d10+5 physical damage.\n***Take Root - Action:*** Mark a Stress to Root the Treant in place. The Treant is Restrained while Rooted, and can end this effect instead of moving while they are spotlighted. While Rooted, the Treant has resistance to physical damage."
    }
  },
  {
    "name": "ORACLE OF DOOM",
    "description": "",
    "stats": "> **Difficulty:** 20 | **Thresholds:** 38/68 | **HP:** 11 | **Stress:** 10\n> **ATK:** +8 | **Psychic Attack:** Far | 4d8+9 mag\n> **Experience:** Boundless Knowledge +4",
    "notes": {
      "motives_and_tactics": "** Change environment, condemn, dishearten, toss aside",
      "features": "***Terrifying - Passive:*** When the Oracle makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.\n***Walls Closing In - Passive:*** When a creature rolls a failure while within Very Far range of the Oracle, they must mark a Stress.\n***Pronounce Fate - Action:*** Spend a Fear to present a target within Far range with a vision of their personal nightmare. The target must make a Knowledge Reaction Roll. On a failure, they lose all Hope and take 2d10+4 direct magic damage. On a success, they take half damage and lose a Hope.\n***Summon Tormentors - Action:*** Once per day, spend 2 Fear to summon 2d4 Tier 2 or below Minions relevant to one of the PC’s personal nightmares. They appear at Close range relative to that PC.\n***Ominous Knowledge - Reaction:*** When the Oracle sees a mortal creature, they instantly know one of their personal nightmares.\n***Vengeful Fate - Reaction:*** When the Oracle marks HP from an attack within Very Close range, you can mark a Stress to knock the attacker back to Far range and deal 2d10+4 physical damage."
    }
  },
  {
    "name": "OUTER REALMS ABOMINATION",
    "description": "",
    "stats": "> **Difficulty:** 19 | **Thresholds:** 35/71 | **HP:** 7 | **Stress:** 5\n> **ATK:** +2d4 | **Massive Pseudopod:** Very Close | 4d6+13 mag",
    "notes": {
      "motives_and_tactics": "** Confuse, demolish, devour, undermine",
      "features": "***Chaotic Form - Passive:*** When the Abomination attacks, roll 2d4 and use the result as their attack modifier.\n***Disorienting Presence - Passive:*** When a target takes damage from the Abomination, they must make an Instinct Reaction Roll. On a failure, they gain disadvantage on their next action roll and you gain a Fear.\n***Reality Quake - Action:*** Spend a Fear to rattle the edges of reality within Far range of the Abomination. All targets within that area must succeed on a Knowledge Reaction Roll or become Unstuck from reality until the end of the scene. When an Unstuck target spends Hope or marks Armor Slots, HP, or Stress, they must double the amount spent or marked.\n***Fungal Form - Reaction:*** When the Abomination takes damage, reduce it by 1d20. If the Abomination marks 1 or fewer Hit Points from a successful attack against them, you gain a Fear."
    }
  },
  {
    "name": "OUTER REALMS CORRUPTER",
    "description": "",
    "stats": "> **Difficulty:** 19 | **Thresholds:** 27/47 | **HP:** 4 | **Stress:** 3\n> **ATK:** +7 | **Corroding Pseudopod:** Very Close | 4d8+5 mag",
    "notes": {
      "motives_and_tactics": "** Confuse, distract, overwhelm",
      "features": "***Will-Shattering Touch - Passive:*** When a PC takes damage from the Corrupter, they lose a Hope.\n***Disgorge Reality Flotsam - Action:*** Mark a Stress to spew partially digested portions of consumed realities at all targets within Close range. Targets must succeed on a Knowledge Reaction Roll or mark 2 Stress."
    }
  },
  {
    "name": "OUTER REALMS THRALL",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** +3 | **Claws and Teeth:** Very Close | 11 phy",
    "notes": {
      "motives_and_tactics": "** Destroy, disgust, disorient, intimidate",
      "features": "***Minion (13) - Passive:*** The Thrall is defeated when they take any damage. For every 13 damage a PC deals to the Thrall, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Outer Realm Thralls within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 11 physical damage each. Combine this damage."
    }
  },
  {
    "name": "PATCHWORK ZOMBIE HULK",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 8/15 | **HP:** 10 | **Stress:** 3\n> **ATK:** +4 | **Too Many Arms:** Very Close | 1d20 phy\n> **Experience:** Intimidation +2, Tear Things Apart +2",
    "notes": {
      "motives_and_tactics": "** Absorb corpses, flail, hunger, terrify",
      "features": "***Destructive - Passive:*** When the Zombie takes Major or greater damage, they mark an additional HP.\n***Flailing Limbs - Passive:*** When the Zombie makes a standard attack, they can attack all targets within Very Close range.\n***Another for the Pile - Action:*** When the Zombie is within Very Close range of a corpse, they can incorporate it into themselves, clearing a HP and a Stress.\n***Tormented Screams - Action:*** Mark a Stress to cause all PCs within Far range to make a Presence Reaction Roll (13). Targets who fail lose a Hope and you gain a Fear for each. Targets who succeed must mark a Stress."
    }
  },
  {
    "name": "PERFECTED ZOMBIE",
    "description": "",
    "stats": "> **Difficulty:** 20 | **Thresholds:** 40/70 | **HP:** 9 | **Stress:** 4\n> **ATK:** +4 | **Greataxe:** Very Close | 4d12+15 phy",
    "notes": {
      "motives_and_tactics": "** Consume, hound, maim, terrify",
      "features": "***Terrifying - Passive:*** On successful attack, all PCs in Far range lose Hope and you gain Fear.\n***Fearsome Presence - Passive:*** PCs can’t spend Hope to use features against the Zombie.\n***Perfect Strike - Action:*** Mark a Stress to attack all targets within Very Close range; on success, targets are Vulnerable until next rest.\n***Skilled Opportunist - Reaction:*** When another adversary deals damage to target within Very Close range of Zombie, spend a Fear to add Zombie's standard attack damage to the damage roll."
    }
  },
  {
    "name": "PETTY NOBLE",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 6/10 | **HP:** 3 | **Stress:** 5\n> **ATK:** -3 | **Rapier:** Melee | 1d6+1 phy\n> **Experience:** Aristocrat +3",
    "notes": {
      "motives_and_tactics": "** Abuse power, gather resources, mobilize minions",
      "features": "***My Land, My Rules - Passive:*** All social actions made against the Noble on their land have disadvantage.\n***Guards, Seize Them! - Action:*** Once per scene, mark a Stress to summon 1d4 Bladed Guards, who appear at Far range to enforce the Noble’s will.\n***Exile - Action:*** Spend a Fear and target a PC. The Noble proclaims that the target and their allies are exiled from the noble’s territory. While exiled, the target and their allies have disadvantage during social situations within the Noble’s domain."
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
    "name": "PIRATE RAIDERS",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 5/11 | **HP:** 4 | **Stress:** 3\n> **ATK:** +1 | **Cutlass:** Melee | 1d8+2 phy\n> **Experience:** Sailor +3",
    "notes": {
      "motives_and_tactics": "** Gang up, plunder, overwhelm",
      "features": "***Horde (1d4+1) - Passive:*** When the Raiders have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead.\n***Swashbuckler - Passive:*** When the Raiders mark 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
    }
  },
  {
    "name": "PIRATE TOUGH",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 8/15 | **HP:** 5 | **Stress:** 3\n> **ATK:** +1 | **Massive Fists:** Melee | 2d6 phy\n> **Experience:** Sailor +2",
    "notes": {
      "motives_and_tactics": "** Plunder, raid, smash, terrorize",
      "features": "***Swashbuckler - Passive:*** When the Tough marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress.\n***Clear the Decks - Action:*** Make an attack against a target within Very Close range. On a success, mark a Stress to move into Melee range of the target, dealing 3d4 physical damage and knocking the target back to Close range."
    }
  },
  {
    "name": "RED OOZE",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 6/11 | **HP:** 5 | **Stress:** 3\n> **ATK:** +1 | **Ooze Appendage:** Melee | 1d8+3 mag\n> **Experience:** Camouflage +3",
    "notes": {
      "motives_and_tactics": "** Camouflage, consume and multiply, ignite, start fires",
      "features": "***Creeping Fire - Passive:*** The Ooze can only move within Very Close range as their normal movement. They light any flammable object they touch on fire.\n***Ignite - Action:*** Make an attack against a target within Very Close range. On a success, the target takes 1d8 magic damage and is ignited until they’re extinguished with a successful Finesse Roll (14). While ignited, the target takes 1d4 magic damage when they make an action roll.\n***Split - Reaction:*** When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Red Oozes (with no marked HP or Stress). Immediately spotlight both of them."
    }
  },
  {
    "name": "ROTTED ZOMBIE",
    "description": "",
    "stats": "> **Difficulty:** 8 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -3 | **Bite:** Melee | 2 phy",
    "notes": {
      "motives_and_tactics": "** Eat flesh, hunger, maul, surround",
      "features": "***Minion (3) - Passive:*** The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Rotted Zombies within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
    }
  },
  {
    "name": "ROYAL ADVISOR",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/15 | **HP:** 3 | **Stress:** 3\n> **ATK:** -3 | **Wand:** Far | 1d4+3 phy\n> **Experience:** Administration +3, Courtier +3",
    "notes": {
      "motives_and_tactics": "** Curry favor, manufacture evidence, scheme",
      "features": "***Devastating Retort - Passive:*** A PC who rolls less than 17 on an action roll targeting the Advisor must mark a Stress.\n***Bend Ears - Action:*** Mark a Stress to influence an NPC within Melee range with whispered words. That target’s opinion on one matter shifts toward the Advisor’s preference unless it is in direct opposition to the target’s motives.\n***Scapegoat - Action:*** Spend a Fear to convince a crowd or notable individual that one person or group is responsible for some problem facing the target. The target becomes hostile to the scapegoat until convinced of their innocence with a successful Presence Roll (17)."
    }
  },
  {
    "name": "SECRET-KEEPER",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 13/26 | **HP:** 7 | **Stress:** 4\n> **ATK:** +3 | **Sigil-Laden Staff:** Far | 2d12 mag\n> **Experience:** Coercion +2, Fallen Lore +2",
    "notes": {
      "motives_and_tactics": "** Amass great power, plot, take command",
      "features": "***Seize Your Moment - Action:*** Spend 2 Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage.\n***Our Master’s Will - Reaction:*** When you spotlight an ally within Far range, mark a Stress to gain a Fear.\n***Summoning Ritual - Reaction:*** Countdown (6). When the Secret-Keeper is in the spotlight for the first time, activate the countdown. When they mark HP, tick down this countdown by the number of HP marked. When it triggers, summon a Minor Demon who appears at Close range.\n***Fallen Hounds - Reaction:*** Once per scene, when the Secret-Keeper marks 2 or more HP, you can mark a Stress to summon a Demonic Hound Pack, which appears at Close range and is immediately spotlighted."
    }
  },
  {
    "name": "SELLSWORD",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** +3 | **Longsword:** Melee | 3 phy",
    "notes": {
      "motives_and_tactics": "** Charge, lacerate, overwhelm, profit",
      "features": "***Minion (4) - Passive:*** The Sellsword is defeated when they take any damage. For every 4 damage a PC deals to the Sellsword, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Sellswords within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 3 physical damage each. Combine this damage."
    }
  },
  {
    "name": "SHAMBLING ZOMBIE",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 4/6 | **HP:** 4 | **Stress:** 1\n> **ATK:** 0 | **Bite:** Melee | 1d6+1 phy",
    "notes": {
      "motives_and_tactics": "** Devour, hungry, mob enemy, shred flesh",
      "features": "***Too Many to Handle - Passive:*** When the Zombie is within Melee range of a creature and at least one other Zombie is within Close range, all attacks against that creature have advantage.\n***Horrifying - Passive:*** Targets who mark HP from the Zombie’s attacks must also mark a Stress."
    }
  },
  {
    "name": "SHARK",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 14/28 | **HP:** 7 | **Stress:** 3\n> **ATK:** +2 | **Toothy Maw:** Very Close | 2d12+1 phy\n> **Experience:** Sense of Smell +3",
    "notes": {
      "motives_and_tactics": "** Find the blood, isolate prey, target the weak",
      "features": "***Terrifying - Passive:*** When the Shark makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear.\n***Rending Bite - Passive:*** When the Shark makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP.\n***Blood in the Water - Reaction:*** When a creature within Close range of the Shark marks HP from another creature’s attack, you can mark a Stress to immediately spotlight the Shark, moving them into Melee range of the target and making a standard attack."
    }
  },
  {
    "name": "SIREN",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 9/18 | **HP:** 5 | **Stress:** 3\n> **ATK:** +2 | **Distended Jaw Bite:** Melee | 2d6+3 phy\n> **Experience:** Song Repertoire +3",
    "notes": {
      "motives_and_tactics": "** Consume, lure prey, subdue with song",
      "features": "***Captive Audience - Passive:*** If the Siren makes a standard attack against a target Entranced by their song, the attack deals 2d10+1 damage instead of their standard damage.\n***Enchanting Song - Action:*** Spend a Fear to sing a song that affects all targets within Close range. Targets must succeed on an Instinct Reaction Roll or become Entranced until they mark 2 Stress. Other Sirens within Close range of the target can mark a Stress to each add a +1 bonus to the Difficulty of the reaction roll. While Entranced, a target can’t act and is Vulnerable."
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
    "name": "SKELETON DREDGE",
    "description": "",
    "stats": "> **Difficulty:** 8 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -1 | **Bone Claws:** Melee | 1 phy",
    "notes": {
      "motives_and_tactics": "** Fall apart, overwhelm, play dead, steal skin",
      "features": "***Minion (4) - Passive:*** The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Dredges within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
    }
  },
  {
    "name": "SKELETON KNIGHT",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 7/13 | **HP:** 5 | **Stress:** 2\n> **ATK:** +2 | **Rusty Greatsword:** Melee | 1d10+2 phy",
    "notes": {
      "motives_and_tactics": "** Cut down the living, steal skin, wreak havoc",
      "features": "***Terrifying - Passive:*** When the Knight makes a successful attack, all PCs within Close range lose a Hope and you gain a Fear.\n***Cut to the Bone - Action:*** Mark a Stress to make an attack against all targets within Very Close range. Targets the Knight succeeds against take 1d8+2 physical damage and must mark a Stress.\n***Dig Two Graves - Reaction:*** When the Knight is defeated, they make an attack against a target within Very Close range (prioritizing the creature who killed them). On a success, the target takes 1d8+4 physical damage and loses 1d4 Hope."
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
    "name": "SPECTRAL ARCHER",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 6/14 | **HP:** 3 | **Stress:** 3\n> **ATK:** +3 | **Longbow:** Far | 2d10+2 phy\n> **Experience:** Ancient Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Move through solid objects, stay out of the fray, rehash old battles",
      "features": "***Ghost - Passive:*** The Archer has resistance to physical damage. Mark a Stress to move up to Close range through solid objects.\n***Pick Your Target - Action:*** Spend a Fear to make an attack against a target within Very Close range of at least two other PCs. On a success, the target takes 2d8+12 physical damage."
    }
  },
  {
    "name": "SPECTRAL CAPTAIN",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 13/26 | **HP:** 6 | **Stress:** 4\n> **ATK:** +3 | **Longbow:** Far | 2d10+3 phy\n> **Experience:** Ancient Knowledge +3",
    "notes": {
      "motives_and_tactics": "** Move through solid objects, rally troops, rehash old battles",
      "features": "***Ghost - Passive:*** The Captain has resistance to physical damage. Mark a Stress to move up to Close range through solid objects.\n***Unending Battle - Action:*** Spend 2 Fear to return up to 1d4+1 defeated Spectral allies to the battle at the points where they first appeared (with no marked HP or Stress).\n***Hold Fast - Reaction:*** When the Captain’s Spectral allies are forced to make a reaction roll, you can mark a Stress to give those allies a +2 bonus to the roll.\n***Momentum - Reaction:*** When the Captain makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "SPECTRAL GUARDIAN",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 7/15 | **HP:** 4 | **Stress:** 3\n> **ATK:** +1 | **Spear:** Very Close | 2d8+1 phy\n> **Experience:** Ancient Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Move through solid objects, protect treasure, rehash old battles",
      "features": "***Ghost - Passive:*** The Guardian has resistance to physical damage. Mark a Stress to move up to Close range through solid objects.\n***Grave Blade - Action:*** Spend a Fear to make an attack against a target within Very Close range. On a success, deal 2d10+6 physical damage and the target must mark a Stress."
    }
  },
  {
    "name": "SPELLBLADE",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/14 | **HP:** 6 | **Stress:** 3\n> **ATK:** +3 | **Empowered Longsword:** Melee | 1d8+4 phy/mag\n> **Experience:** Magical Knowledge +2",
    "notes": {
      "motives_and_tactics": "** Blast, command, endure",
      "features": "***Arcane Steel - Passive:*** Damage dealt by the Spellblade’s standard attack is considered both physical and magic.\n***Suppressing Blast - Action:*** Mark a Stress and target a group within Far range. All targets must succeed on an Agility Reaction Roll or take 1d8+2 magic damage. You gain a Fear for each target who marked HP from this attack.\n***Move as Unit - Action:*** Spend 2 Fear to spotlight up to five allies within Far range.\n***Momentum - Reaction:*** When the Spellblade makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "SPY",
    "description": "",
    "stats": "> **Difficulty:** 15 | **Thresholds:** 8/17 | **HP:** 4 | **Stress:** 3\n> **ATK:** -2 | **Dagger:** Melee | 2d6+3 phy\n> **Experience:** Espionage +3",
    "notes": {
      "motives_and_tactics": "** Cut and run, disguise appearance, eavesdrop",
      "features": "***Gathering Secrets - Action:*** Spend a Fear to describe how the Spy knows a secret about a PC in the scene.\n***Fly on the Wall - Reaction:*** When a PC or group is discussing something sensitive, you can mark a Stress to reveal that the Spy is present in the scene, observing them. If the Spy escapes the scene to report their findings, you gain 1d4 Fear."
    }
  },
  {
    "name": "STAG KNIGHT",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 19/36 | **HP:** 7 | **Stress:** 5\n> **ATK:** +3 | **Bramble Sword:** Melee | 3d8+3 phy\n> **Experience:** Forest Knowledge +3",
    "notes": {
      "motives_and_tactics": "** Isolate, maneuver, protect the forest, weed the unwelcome",
      "features": "***From Above - Passive:*** When the Knight succeeds on a standard attack from above a target, they deal 3d12+3 physical damage instead of their standard damage.\n***Blade of the Forest - Action:*** Spend a Fear to make an attack against all targets within Very Close range. Targets the Knight succeeds against take physical damage equal to 3d4 + the target's Major threshold.\n***Thorny Armor - Reaction:*** When the Knight takes damage from an attack within Melee range, you can mark a Stress to deal 1d10+5 physical damage to the attacker."
    }
  },
  {
    "name": "STONEWRAITH",
    "description": "",
    "stats": "> **Difficulty:** 13 | **Thresholds:** 11/22 | **HP:** 6 | **Stress:** 3\n> **ATK:** +3 | **Bite and Claws:** Melee | 2d8+6 phy\n> **Experience:** Stonesense +3",
    "notes": {
      "motives_and_tactics": "** Defend territory, isolate prey, stalk",
      "features": "***Stonestrider - Passive:*** The Stonewraith can move through stone and earth as easily as air. While within stone or earth, they are Hidden and immune to all damage.\n***Rocky Ambush - Action:*** While Hidden, mark a Stress to leap into Melee range with a target within Very Close range. The target must succeed on an Agility or Instinct Reaction Roll (15) or take 2d8 physical damage and become temporarily Restrained.\n***Avalanche Roar - Action:*** Spend a Fear to roar while within a cave and cause a cave-in. All targets within Close range must succeed on an Agility Reaction Roll (14) or take 2d10 physical damage. The rubble can be cleared with a Progress Countdown (8).\n***Momentum - Reaction:*** When the Stonewraith makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "SWARM OF RATS",
    "description": "",
    "stats": "> **Difficulty:** 10 | **Thresholds:** 6/10 | **HP:** 6 | **Stress:** 2\n> **ATK:** -3 | **Claws:** Melee | 1d8+2 phy",
    "notes": {
      "motives_and_tactics": "** Consume, obscure, swarm",
      "features": "***Horde (1d4+1) - Passive:*** When the Swarm has marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead.\n***In Your Face - Passive:*** All targets within Melee range have disadvantage on attacks against targets other than the Swarm."
    }
  },
  {
    "name": "SYLVAN SOLDIER",
    "description": "",
    "stats": "> **Difficulty:** 11 | **Thresholds:** 6/11 | **HP:** 4 | **Stress:** 2\n> **ATK:** 0 | **Scythe:** Melee | 1d8+1 phy\n> **Experience:** Tracker +2",
    "notes": {
      "motives_and_tactics": "** Ambush, hide, overwhelm, protect, trail",
      "features": "***Pack Tactics - Passive:*** If the Soldier makes a standard attack and another Sylvan Soldier is within Melee range of the target, deal 1d8+5 physical damage instead of their standard damage.\n***Forest Control - Action:*** Spend a Fear to pull down a tree within Close range. A creature hit by the tree must succeed on an Agility Reaction Roll (15) or take 1d10 physical damage.\n***Blend In - Reaction:*** When the Soldier makes a successful attack, you can mark a Stress to become Hidden until the Soldier’s next attack or a PC succeeds on an Instinct Roll (14) to find them."
    }
  },
  {
    "name": "TANGLE BRAMBLE SWARM",
    "description": "",
    "stats": "> **Difficulty:** 12 | **Thresholds:** 6/11 | **HP:** 6 | **Stress:** 3\n> **ATK:** 0 | **Thorns:** Melee | 1d6+3 phy\n> **Experience:** Camouflage +2",
    "notes": {
      "motives_and_tactics": "** Digest, entangle, immobilize",
      "features": "***Horde (1d4+2) - Passive:*** When the Swarm has marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead.\n***Crush - Action:*** Mark a Stress to deal 2d6+8 direct physical damage to a target with 3 or more bramble tokens.\n***Encumber - Reaction:*** When the Swarm succeeds on an attack, give the target a bramble token. If a target has any bramble tokens, they are Restrained. If a target has 3 or more bramble tokens, they are also Vulnerable. All bramble tokens can be removed by succeeding on a Finesse Roll (12 + the number of bramble tokens) or dealing Major or greater damage to the Swarm. If bramble tokens are removed from a target using a Finesse Roll, a number of Tangle Bramble Minions spawn within Melee range equal to the number of tokens removed."
    }
  },
  {
    "name": "TANGLE BRAMBLE",
    "description": "",
    "stats": "> **Difficulty:** 11 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** -1 | **Thorns:** Melee | 2 phy",
    "notes": {
      "motives_and_tactics": "** Consume, drain, entangle",
      "features": "***Minion (4) - Passive:*** The Bramble is defeated when they take any damage. For every 4 damage a PC deals to the Tangle Bramble, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Tangle Brambles within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage.\n***Drain and Multiply - Reaction:*** When an attack from the Bramble causes a target to mark HP and there are three or more Tangle Bramble Minions within Close range, you can combine the Minions into a Tangle Bramble Swarm Horde. The Horde’s HP is equal to the number of Minions combined."
    }
  },
  {
    "name": "TINY GREEN OOZE",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 4/None | **HP:** 2 | **Stress:** 1\n> **ATK:** -1 | **Ooze Appendage:** Melee | 1d4+1 mag",
    "notes": {
      "motives_and_tactics": "** Camouflage, creep up",
      "features": "***Acidic Form - Passive:*** When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP."
    }
  },
  {
    "name": "TINY RED OOZE",
    "description": "",
    "stats": "> **Difficulty:** 11 | **Thresholds:** 5/None | **HP:** 2 | **Stress:** 1\n> **ATK:** -1 | **Ooze Appendage:** Melee | 1d4+2 mag",
    "notes": {
      "motives_and_tactics": "** Blaze, camouflage",
      "features": "***Burning - Reaction:*** When a creature within Melee range deals damage to the Ooze, they take 1d6 direct magic damage."
    }
  },
  {
    "name": "TREANT SAPLING",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** None | **HP:** 1 | **Stress:** 1\n> **ATK:** +0 | **Branches:** Melee | 8 phy",
    "notes": {
      "motives_and_tactics": "** Blend in, preserve the forest, pummel, surround",
      "features": "***Minion (6) - Passive:*** The Sapling is defeated when they take any damage. For every 6 damage a PC deals to the Sapling, defeat an additional Minion within range the attack would succeed against.\n***Group Attack - Action:*** Spend a Fear to choose a target and spotlight all Treant Saplings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 8 physical damage each. Combine this damage."
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
    "name": "VAULT GUARDIAN GAOLER",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 19/33 | **HP:** 5 | **Stress:** 3\n> **ATK:** +2 | **Body Bash:** Very Close | 3d6+2 phy",
    "notes": {
      "motives_and_tactics": "** Carry away, entrap, protect, pummel",
      "features": "***Blocking Shield - Passive:*** Creatures within Melee range of the Gaoler have disadvantage on attack rolls against them. Creatures trapped inside the Gaoler are immune to this feature.\n***Lock Up - Action:*** Mark a Stress to make an attack against a target within Very Close range. On a success, the target is Restrained within the Gaoler until freed with a successful Strength Roll (18). While Restrained, the target can only attack the Gaoler."
    }
  },
  {
    "name": "VAULT GUARDIAN SENTINEL",
    "description": "",
    "stats": "> **Difficulty:** 17 | **Thresholds:** 21/40 | **HP:** 6 | **Stress:** 3\n> **ATK:** +3 | **Charged Mace:** Very Close | 2d12+1 phy",
    "notes": {
      "motives_and_tactics": "** Destroy at any cost, expunge, protect",
      "features": "***Kinetic Slam - Passive:*** Targets who take damage from the Sentinel’s standard attack are knocked back to Very Close range.\n***Box In - Action:*** Mark a Stress to choose a target within Very Close range to focus on. That target has disadvantage on attack rolls when they’re within Very Close range of the Sentinel. The Sentinel can only focus on one target at a time.\n***Mana Bolt - Action:*** Spend a Fear to lob explosive magic at a point within Far range. All targets within Very Close range of that point must make an Agility Reaction Roll. Targets who fail take 8d20 magic damage and are knocked back to Close range. Targets who succeed take half damage and aren’t knocked back.\n***Momentum - Reaction:*** When the Sentinel makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "VAULT GUARDIAN TURRET",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 20/32 | **HP:** 5 | **Stress:** 4\n> **ATK:** +3 | **Magitech Cannon:** Far | 3d10+3 mag",
    "notes": {
      "motives_and_tactics": "** Concentrate fire, lock down, mark, protect",
      "features": "***Slow Firing - Passive:*** When you spotlight the Turret and they don’t have a token on their stat block, they can’t make a standard attack. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Turret and they have a token on their stat block, clear the token and they can attack.\n***Mark Target - Action:*** Spend a Fear to Mark a target within Far range until the Turret is destroyed or the Marked target becomes Hidden. While the target is Marked, their Evasion is halved.\n***Concentrate Fire - Reaction:*** When another adversary deals damage to a target within Far range of the Turret, you can mark a Stress to add the Turret’s standard attack damage to the damage roll.\n***Detonation - Reaction:*** When the Turret is destroyed, they explode. All targets within Close range must make an Agility Reaction Roll. Targets who fail take 3d20 physical damage. Targets who succeed take half damage."
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
    "name": "VOLCANIC DRAGON: MOLTEN SCOURGE",
    "description": "",
    "stats": "> **Difficulty:** 20 | **Thresholds:** 30/58 | **HP:** 7 | **Stress:** 5\n> **ATK:** +9 | **Lava-Coated Claws:** Close | 4d12+4 phy\n> **Experience:** Hunt from Above +5",
    "notes": {
      "motives_and_tactics": "** Douse with lava, incinerate, repel invaders, respawn",
      "features": "***Relentless (3) - Passive:*** Can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Cracked Scales - Passive:*** When the Molten Scourge takes damage, roll a number of d6s equal to HP marked. For each result of 4 or higher, you gain a Fear.\n***Shattering Might - Action:*** Mark a Stress to make an attack against a target within Very Close range. On a success, target takes 4d8+14 physical damage, loses a Hope, and is knocked back to Close range. The Scourge clears a Stress.\n***Eruption - Action:*** Spend a Fear to erupt lava from beneath the Scourge’s scales, filling area within Very Close range with lava. All targets must make Agility Reaction Roll or take 4d6+6 physical damage and be knocked back to Close range. The area remains lava (6 HP damage on entry or action).\n***Volcanic Breath - Reaction:*** When the Scourge takes Major damage, roll d10. On 8+, erupt lava in Very Close range: Agility Reaction Roll or take 2d10+4 physical damage, mark 1d4 Stress, and are Vulnerable until clearing a Stress; success = half damage + mark a Stress.;Lava Splash - Reaction;When the Scourge takes Severe damage from attack within Very Close, molten blood deals 2d10+4 direct physical damage to attacker.;Ashen Vengeance (Phase Change) - Reaction;When the Scourge marks last HP, replace with Ashen Tyrant and immediately spotlight."
    }
  },
  {
    "name": "VOLCANIC DRAGON: OBSIDIAN PREDATOR",
    "description": "",
    "stats": "> **Difficulty:** 19 | **Thresholds:** 33/65 | **HP:** 6 | **Stress:** 5\n> **ATK:** +8 | **Obsidian Claws:** Close | 4d10+4 phy\n> **Experience:** Hunt from Above +5",
    "notes": {
      "motives_and_tactics": "** Defend lair, dive-bomb, fly, hunt, intimidate",
      "features": "***Relentless (2) - Passive:*** Can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight.\n***Flying - Passive:*** While flying, gains +3 Difficulty.\n***Obsidian Scales - Passive:*** Resistant to physical damage.\n***Obsidian Tail - Action:*** Mark a Stress to make attack against all targets within Close range. Success: 4d6+4 physical damage, knocked to Far range and Vulnerable until next roll with Hope.\n***Dive-Bomb - Action:*** If flying, mark a Stress to choose point within Far range, move there, attack all targets within Very Close range; on success, 2d10+6 physical, mark a Stress, lose a Hope.\n***Erupting Rage (Phase Change) - Reaction:*** When marks last HP, replace with Molten Scourge and immediately spotlight."
    }
  },
  {
    "name": "WAR WIZARD",
    "description": "",
    "stats": "> **Difficulty:** 16 | **Thresholds:** 11/23 | **HP:** 5 | **Stress:** 6\n> **ATK:** +4 | **Staff:** Far | 2d10+4 mag\n> **Experience:** Magical Knowledge +2, Strategize +2",
    "notes": {
      "motives_and_tactics": "** Develop new spells, seek power, conquer",
      "features": "***Battle Teleport - Passive:*** Before or after making a standard attack, you can mark a Stress to teleport to a location within Far range.\n***Refresh Warding Sphere - Action:*** Mark a Stress to refresh the Wizard’s “Warding Sphere” reaction.\n***Eruption - Action:*** Spend a Fear and choose a point within Far range. A Very Close area around that point erupts into impassable terrain. All targets within that area must make an Agility Reaction Roll (14). Targets who fail take 2d10 physical damage and are thrown out of the area. Targets who succeed take half damage and aren’t moved.\n***Arcane Artillery - Action:*** Spend a Fear to unleash a precise hail of magical blasts. All targets in the scene must make an Agility Reaction Roll. Targets who fail take 2d12 magic damage. Targets who succeed take half damage.\n***Warding Sphere - Reaction:*** When the Wizard takes damage from an attack within Close range, deal 2d6 magic damage to the attacker. This reaction can’t be used again until the Wizard refreshes it with their “Refresh Warding Sphere” action."
    }
  },
  {
    "name": "WEAPONMASTER",
    "description": "",
    "stats": "> **Difficulty:** 14 | **Thresholds:** 8/15 | **HP:** 6 | **Stress:** 3\n> **ATK:** +2 | **Claymore:** Very Close | 1d12+2 phy",
    "notes": {
      "motives_and_tactics": "** Act first, aim for the weakest, intimidate",
      "features": "***Goading Strike - Action:*** Make a standard attack against a target. On a success, mark a Stress to Taunt the target until their next successful attack. The next time the Taunted target attacks, they have disadvantage against targets other than the Weaponmaster.\n***Adrenaline Burst - Action:*** Once per scene, spend a Fear to clear 2 HP and 2 Stress.\n***Momentum - Reaction:*** When the Weaponmaster makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "YOUNG DRYAD",
    "description": "",
    "stats": "> **Difficulty:** 11 | **Thresholds:** 6/11 | **HP:** 6 | **Stress:** 2\n> **ATK:** 0 | **Scythe:** Melee | 1d8+5 phy\n> **Experience:** Leadership +3",
    "notes": {
      "motives_and_tactics": "** Command, nurture, prune the unwelcome",
      "features": "***Voice of the Forest - Action:*** Mark a Stress to spotlight 1d4 allies within range of a target they can attack without moving. On a success, their attacks deal half damage.\n***Thorny Cage - Action:*** Spend a Fear to form a cage around a target within Very Close range and Restrain them until they’re freed with a successful Strength Roll. When a creature makes an action roll against the cage, they must mark a Stress.\n***Momentum - Reaction:*** When the Dryad makes a successful attack against a PC, you gain a Fear."
    }
  },
  {
    "name": "YOUNG ICE DRAGON",
    "description": "",
    "stats": "> **Difficulty:** 18 | **Thresholds:** 21/41 | **HP:** 10 | **Stress:** 6\n> **ATK:** +7 | **Bite and Claws:** Close | 4d10 phy\n> **Experience:** Protect What Is Mine +3",
    "notes": {
      "motives_and_tactics": "** Avalanche, defend lair, fly, freeze, defend what is mine, maul",
      "features": "***Relentless (3) - Passive:*** The Dragon can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them.\n***Rend and Crush - Passive:*** If a target damaged by the Dragon doesn’t mark an Armor Slot to reduce the damage, they must mark a Stress.\n***No Hope - Passive:*** When a PC rolls with Fear while within Far range of the Dragon, they lose a Hope.\n***Blizzard Breath - Action:*** Spend 2 Fear to release an icy whirlwind in an area within Close range. All targets in this area must make an Agility Reaction Roll. Targets who fail take 4d6+5 magic damage and are Restrained by ice until they break free with a successful Strength Roll. Targets who succeed must mark 2 Stress or take half damage.\n***Avalanche - Action:*** Spend a Fear to have the Dragon unleash a huge downfall of snow and ice, covering all other creatures within Far range. All targets within this area must succeed on an Instinct Reaction Roll or be buried in snow and rocks, becoming Vulnerable until they dig themselves out from the debris. For each PC that fails the reaction roll, you gain a Fear.\n***Frozen Scales - Reaction:*** When a creature makes a successful attack against the Dragon from within Very Close range, they must mark a Stress and become Chilled until their next rest or they clear a Stress. While they are Chilled, they have disadvantage on attack rolls.\n***Momentum - Reaction:*** When the Dragon makes a successful attack against a PC, you gain a Fear."
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
  },
  {
    "name": "ZOMBIE PACK",
    "description": "",
    "stats": "> **Difficulty:** 8 | **Thresholds:** 6/12 | **HP:** 6 | **Stress:** 3\n> **ATK:** -1 | **Bite:** Melee | 1d10+2 phy",
    "notes": {
      "motives_and_tactics": "** Consume flesh, hunger, maul",
      "features": "***Horde (1d4+2) - Passive:*** When the Zombies have marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead.\n***Overwhelm - Reaction:*** When the Zombies mark HP from an attack within Melee range, you can mark a Stress to make a standard attack against the attacker."
    }
  }
];

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { srdAdversaries };
}
