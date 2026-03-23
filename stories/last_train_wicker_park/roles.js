// ============================================================
// THOR'S MURDER MYSTERIES — ROLES CONFIGURATION
// Story: The Thoreson Estate Dinner
// ============================================================
// This file defines how roles and skills get assigned at game
// generation time. The platform reads this to run the weighted
// randomizer — nothing here is hardcoded into characters.
//
// ROLES:
//   Each role has:
//     count              — how many players get this role
//     minScore           — minimum involvement score to be eligible
//     ineligibleChars    — character slugs that can never hold this role
//     ineligibleSkills   — skills that can never go to this role holder
//     assignTo           — if set, always assign to this character (no random)
//     unique             — if true, same player can't hold two roles
//
// SKILL POOL:
//   All skills available in this story.
//   Skills are distributed AFTER roles are assigned.
//   Killer's pool is automatically filtered by ineligibleSkills.
//
// SCORE WEIGHTS:
//   Probability tables keyed by involvement score (1-10).
//   skill:      chance this player receives any skill at all
//   highImpact: chance this player is eligible for killer/heir
// ============================================================

const rolesConfig = {

    // ── ROLE DEFINITIONS ──────────────────────────────────────
    roles: {

        killer: {
            count:   1,
            minScore: 6,
            // These characters can never be the killer
            // (smoking-gun skills, pipeline role, or story-critical fixed positions)
            ineligibleChars: [
                "david_richardson",    // pipeline — receives report naming the killer
                "dorothy_wells",       // botanist — literally identifies the poison
                "patricia_chamberlain",// physician — interprets the autopsy
                "marcus_brennan",      // no plausible access story
                "victoria_ashworth",   // no plausible access story
                "elizabeth_monroe",    // optional/light role
                "scott_thoreson"       // family attorney — too public a figure
            ],
            // These skills cannot go to the killer
            // (they point directly at the killer in Act 3)
            ineligibleSkills: ["Botany", "Medical"],
            unique: true
        },

        heir: {
            count:   1,
            minScore: 5,
            // These characters can never be the heir
            // (too embedded in known family structure or no plausible backstory)
            ineligibleChars: [
                "scott_thoreson",      // William's known child
                "charlotte_waverly",   // Scott's spouse — family by marriage, not blood
                "patricia_chamberlain",// No trust fund backstory
                "dorothy_wells",       // 81 years old — wrong generation
                "marcus_brennan",      // No connection to Hartley family
                "victoria_ashworth",   // No connection to Hartley family
                "elizabeth_monroe"     // Optional/light role
            ],
            ineligibleSkills: [],
            unique: true
        },

        pipeline: {
            count:   1,
            minScore: 6,
            // Pipeline is always David Richardson — not randomized
            // David's function (receiving external reports) is baked into
            // the revelation system and can't be transferred
            assignTo: "david_richardson",
            ineligibleSkills: [],
            unique: true
        }

    },

    // ── SKILL POOL ─────────────────────────────────────────────
    // All skills available in this story.
    // One skill per player maximum. No skill assigned twice.
    // Order matters for display — list in rough narrative importance.
    skillPool: [
        "Legal",        // Document analysis — natural for killer cover
        "Medical",      // Autopsy interpretation — smoking gun, never to killer
        "Botany",       // Poison identification — smoking gun, never to killer
        "Accounting",   // Ledger analysis — Act 1/2 clue
        "Banking",      // Bank statement — Act 1 clue
        "French",       // Margaret's letter translation — Act 2 clue
        "Journalism",   // Press archive — Act 1/2 clue
        "Bartender"     // Drink preparation — circumstantial, good cover
    ],

    // ── SCORE WEIGHT TABLES ────────────────────────────────────
    // Probability (0.0 to 1.0) by involvement score (1-10)
    scoreWeights: {

        // Chance this player receives any skill
        skill: {
            1:  0.00,
            2:  0.00,
            3:  0.03,
            4:  0.05,
            5:  0.35,
            6:  0.50,
            7:  0.70,
            8:  0.82,
            9:  0.92,
            10: 0.97
        },

        // Chance this player is in the pool for killer/heir assignment
        highImpact: {
            1:  0.00,
            2:  0.00,
            3:  0.00,
            4:  0.00,
            5:  0.25,
            6:  0.50,
            7:  0.78,
            8:  0.88,
            9:  0.95,
            10: 1.00
        }

    },

    // ── ROLE OVERLAY CONTENT ───────────────────────────────────
    // Short paragraphs injected into a character's backstory
    // when they are assigned a specific role.
    // Written in second person. Use {{slug}} tokens for names.
    // No pronouns.
    //
    // Each eligible character has its own version explaining
    // HOW that specific character ended up in position.
    //
    // killer.base    — the secret motive (same emotional core for all)
    // killer.access  — character-specific: how they got close enough
    // heir.base      — the secret identity (same core for all)
    // heir.access    — character-specific: how they ended up at this dinner

    overlays: {

        killer: {

            // The emotional core — injected for any killer
            base: "You are the killer.\n\nYour real name is not the one on your invitation. You are a Hartley — Robert Hartley's blood, or Margaret's child, or both. William Thoreson destroyed your family before you were old enough to understand what was being taken from you. You have spent years building a life in the shadow of that destruction, getting close enough to confirm what you always suspected, and planning what you would do when the moment came.\n\nLast summer you traveled to Switzerland. Wolfsbane grows wild in the Alps — purple flowers along the mountain trails, beautiful and poisonous down to the root. You brought some home. You dried it. You ground it.\n\nTonight, before the guests arrived, you put it in his drink.\n\nWilliam is dead. You are at peace with that. You are not a villain. You are a daughter. A son. A child who was owed a debt that was never going to be paid any other way.\n\nYou are good at stillness. Let the investigation come to you. Help where you can. The longer the truth takes to surface, the better the story.",

            // Character-specific access stories
            access: {
                miranda_longfellow: "You spent ten years as {{scott_thoreson}}'s legal assistant. Every document William Thoreson thought was safely hidden passed through your hands. You read everything. You filed everything. You knew exactly where the forged transfer was kept, where the ledger lived, where the love letters were locked. Your access was total and completely unremarkable — you were just the assistant.",

                walter_lippman:     "You became a journalist because you believed the truth could be found if you looked hard enough. You spent years covering Dallas business, circling the Thoreson story from the outside, never able to confirm what you suspected. Then William invited you personally — said he had an announcement that concerned you specifically. You came because you thought you were finally going to get the story. Instead you decided to end it. You had already obtained the wolfsbane before the invitation arrived. The invitation just gave you the room.",

                raymond_hammond:    "Fifteen years as business manager gave you access to every part of this company except the books. William kept those locked away. But you knew the building. You knew the schedules. You knew when William was alone and when he wasn't. You knew which drinks he preferred and who prepared them. Proximity is its own kind of access — and you had been proximate for fifteen years.",

                charlotte_waverly:  "You have been tending bar at Thoreson family events for years. You know which glass is whose before anyone sits down. Tonight you prepared the drinks during cocktail hour. You prepared William's specifically. Nobody watches the person keeping the glasses full — that is the oldest truth in any room.",

                vivienne_ashford:   "You grew up in and out of this house. You know where things are kept, which doors lock, which drawers stick. Coming back from Paris gave you distance — and distance gave you clarity about what this family had done and who had paid for it. You had six years in Europe to confirm what you suspected and to find what you needed in the Swiss Alps. Coming home was always going to end like this."
            }
        },

        heir: {

            // The emotional core — injected for any heir
            base: "You are the secret heir.\n\nYou do not know this yet — or rather, you have suspected it without ever being able to confirm it. There was always a trust fund with no clear explanation. Always a name you weren't supposed to ask about. Always a feeling that the story of where you came from had a chapter nobody would show you.\n\nWilliam Thoreson invited you tonight specifically. He said he had an announcement — something that concerned you personally. You came because some part of you has always known this night was coming.\n\nYou are William Thoreson's child. Your mother was Margaret Hartley. The monthly payments marked T.H. in the ledger — those came to you. The birth certificate in the lockbox has your name on it.\n\nLet the investigation find this. Do not lead it there. Your reaction when it surfaces should be genuine — because in many ways, it is.",

            // Character-specific access stories
            access: {
                miranda_longfellow: "You grew up knowing you were Robert Hartley's daughter. What you didn't know — what took years of working inside the Thoreson files to confirm — was that Margaret's second child, the one William funded secretly, was your half-sibling. The heir story is more complicated for you than for anyone else in this room.",

                walter_lippman:     "You were born Taylor Hartley on March 5th, 1911. Your mother was Margaret. You were raised by distant relatives after Margaret died, told very little about where you came from, only that there was a trust fund in your name. You took a pen name. You built a career. You never stopped looking for the story. Tonight you are going to find it.",

                david_richardson:   "You always believed you were a distant Thoreson cousin — that was the story your family told. The trust fund was explained as a family bequest. The name Hartley appeared once in some paperwork when you were eighteen and was immediately explained away. You became a private investigator partly because you are good at finding things out and partly because you have always had the feeling that something in your own history didn't add up.",

                raymond_hammond:    "You grew up with a trust fund that nobody could fully explain. Distant relatives. A complicated estate. You changed your name when you were young — the Hartley name carried something uncomfortable that nobody would talk about. You applied for the business manager position at Thoreson Toys without knowing the connection. You have been inside this company for fifteen years without understanding why it felt personal.",

                vivienne_ashford:   "The Ashford family connection to the Thoresons goes back further than anyone has said. Eleanor's family had a relationship with Margaret Hartley before the scandal. You were raised knowing less than you should have about your own family's history. Coming back from Paris, you started asking questions that nobody wanted to answer. Tonight some of them will be answered whether anyone wants them to be or not."
            }
        }
    }

};
