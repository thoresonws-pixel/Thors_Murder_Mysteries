// ============================================================
// THOR'S MURDER MYSTERIES — CHARACTER DATABASE
// Story: The Thoreson Estate Dinner (thoreson)
// Version: 3.0 — skill-agnostic base backstories
// ============================================================
//
// SKILL SYSTEM:
//   Skills are assigned at game generation time — NOT stored here.
//   hiddenSkills removed from all characters.
//   The dashboard reads skillAssignments from Firebase and injects
//   the matching skillBackstory paragraph into the character sheet.
//
//   Generic skill snippets live in SKILL_BACKSTORIES at the bottom.
//   Same text for all characters — "You spent time in France" etc.
//
// TOKEN SYSTEM:
//   Reference other characters as {{slug}} — never write names directly.
//   No pronouns anywhere. Rewrite using name tokens.
//
// REVELATION IDS:
//   Act 1: willsDeath, ledger, forgedDocs, stolenCompany, bankStatement,
//           letterhead, bradfordLetter, incorporation, transcriptAct1
//   Act 2: affair, secretHeir, margaretsLetter, birthCertificate,
//           margaretDeath, transcriptAct2, will
//   Act 3: wolfsbane, travelJournal, backgroundCheck, transcriptAct3,
//           mirandasIdentity
//   David pipeline: djCountyClerk, djCoroner, djPinkerton
// ============================================================

const characterDatabase = {

    // ============================================================
    // MIRANDA LONGFELLOW — The Killer
    // ============================================================
    "miranda_longfellow": {
        name: "Miranda Longfellow",
        nameVariants: { female: "Miranda Longfellow", male: "Milo Longfellow" },
        picker: { role: "Legal Assistant", involvement: "heavy", isKiller: true },
        publicDesc: "{{scott_thoreson}}'s assistant for nearly ten years. Professional, precise, and discreet.",
        hiddenSkills: [],
        note: "You know everything. Let the investigation find you — don't chase it.",
        backstory: "You have worked as {{scott_thoreson}}'s assistant for nearly ten years. You are good at stillness, at watching, at being present without being noticed. You know where everything in this house is kept.",
        memories: [],
        canShare: [
            { text: "Will told me he was planning something important tonight. He seemed almost nervous about it.", unlockedBy: null },
            { text: "Yes, I traveled to Switzerland last summer. It was a lovely trip — the mountains were beautiful.", unlockedBy: null }
        ],
        secret: {
            trueIdentity: "Miranda Hartley — Robert Hartley's daughter",
            carryingItems: "Your travel journal. Always on you. Will be found if someone searches you in Act 3."
        },
        relationships: [
            { name: "{{scott_thoreson}}", relation: "Your employer for 10 years" },
            { name: "William Thoreson Sr.", relation: "The man who destroyed your family (deceased)" },
            { name: "{{walter_lippman}}", relation: "Your half-sibling — in this room, no idea who you are" }
        ],
        items: ["Travel journal (always on you — searchable Act 3)"],
        finalEntry: {
            context: "This is your final monologue. Read it aloud after you are confronted. Take your time.",
            text: "March 21st, 1935.\n\nMy name is Miranda Hartley. Robert's daughter.\n\nI have sat in this parlor tonight and watched all of you slowly piece together my father's story. The letterhead. The ledger. The forged documents. I watched {{scott_thoreson}}'s face change as a father became a stranger. I watched every layer of the lie come off.\n\nMy father was Robert Hartley. Robert built this company alongside William Thoreson in 1902. They were partners. Friends. And William forged Robert's name on a transfer document, took everything Robert had built, and Robert was dead within twenty-four hours. I was fourteen years old.\n\nMy mother went to William afterward. Margaret was carrying his child. Margaret begged William to help both of us. William set up a trust fund for his own child and sent my mother away with nothing. Margaret died four years later. I was eighteen, alone.\n\nI put myself through law school. I changed my name. I spent ten years inside these walls reading every document William thought was safely hidden.\n\nLast summer I went to Switzerland. I brought something home. I knew what I was going to do with it.\n\nI am not asking for your forgiveness. My father deserved better. My mother deserved better.\n\nI am Miranda Hartley. And now the truth has been set free."
        }
    },

    // ============================================================
    // SCOTT THORESON JR. — Red Herring
    // ============================================================
    "scott_thoreson": {
        name: "Scott Thoreson Jr.",
        nameVariants: { female: "Scottie Thoreson Jr.", male: "Scott Thoreson Jr." },
        picker: { role: "Family Attorney", involvement: "heavy", isKiller: false },
        publicDesc: "Eldest child of William Thoreson Sr. and the family's attorney of record.",
        hiddenSkills: [],
        backstory: "You are William's eldest child and the family's attorney of record. You drafted the updated will yourself — the one that names Taylor Hartley as an acknowledged heir — though at the time you had no idea who Taylor Hartley was.",
        memories: [
            { text: "Your father called three weeks ago — not about business. William said there was a wrong from a long time ago that needed to be made right. You did not push for details. You wish now that you had.", unlockedBy: "willsDeath" },
            { text: "You drafted the will naming Taylor Hartley as an acknowledged heir. The language came from your father directly. At the time you had no idea who Taylor Hartley was. You are beginning to understand.", unlockedBy: "secretHeir", tier: 1 },
            { text: "{{miranda_longfellow}} has been your most trusted colleague for ten years. Every important document in this house has passed through those hands. You are only now considering what that access actually means.", unlockedBy: "mirandasIdentity", tier: 1 }
        ],
        canShare: [
            { text: "Yes, I drafted the updated will. If I wanted to stop someone from inheriting, I would not need to kill anyone — I would just lose the paperwork.", unlockedBy: null },
            { text: "My father told me three weeks ago he was planning to make something right. He wouldn't say what.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your father (deceased)" },
            { name: "{{eleanor_thoreson}}", relation: "Your mother" },
            { name: "{{miranda_longfellow}}", relation: "Your trusted assistant for 10 years" },
            { name: "{{charlotte_waverly}}", relation: "Your spouse" },
            { name: "{{vivienne_ashford}}", relation: "Your cousin on your mother's side" }
        ],
        items: ["Copy of the updated will (in your jacket pocket)"]
    },

    // ============================================================
    // WALTER LIPPMAN — Secret Heir
    // ============================================================
    "walter_lippman": {
        name: "Walter Lippman",
        nameVariants: { female: "Winifred Lippman", male: "Walter Lippman" },
        picker: { role: "Journalist, Dallas Herald", involvement: "heavy", isKiller: false },
        publicDesc: "A journalist for the Dallas Herald. Personally invited by William Thoreson Sr.",
        hiddenSkills: [],
        note: "You came tonight knowing Will wanted to tell you something personal. Let that discovery happen in the room.",
        backstory: "You write for the Dallas Herald under a pen name that has become simply who you are. William Thoreson personally invited you tonight — said he had an announcement that concerned you specifically. You came because you have spent your entire life not knowing the full story of where you came from.",
        memories: [
            { text: "In years covering Dallas business you heard whispers that Thoreson Toys hadn't started the way Will told it — that there had been another name involved. You could never confirm it. You are finding it now.", unlockedBy: "stolenCompany" },
            { text: "Your legal name is Taylor James Hartley. Born March 5th, 1911. That birth date is circled on the calendar in the study. The ledger entries marked T.H. — that money came to you. William Thoreson was your father.", unlockedBy: "birthCertificate", tier: 1 }
        ],
        canShare: [
            { text: "Will personally invited me. Said he had an announcement that would be the story of the year.", unlockedBy: null },
            { text: "The early history of Thoreson Toys was always unusually difficult to trace. Now I understand why.", unlockedBy: "stolenCompany" }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Invited you personally — now deceased" },
            { name: "{{scott_thoreson}}", relation: "The family attorney" },
            { name: "{{miranda_longfellow}}", relation: "The assistant — met briefly tonight" }
        ],
        items: ["Notepad and pen"]
    },

    // ============================================================
    // DAVID RICHARDSON — Evidence Pipeline
    // ============================================================
    "david_richardson": {
        name: "David Richardson",
        nameVariants: { female: "Diana Richardson", male: "David Richardson" },
        picker: { role: "Private Investigator", involvement: "heavy", isKiller: false },
        publicDesc: "A cousin on the Thoreson side and a licensed private investigator.",
        hiddenSkills: [],
        note: "You are the evidence pipeline. Make each report a moment — step away, take the call, react before you share.",
        backstory: "You are a Thoreson cousin and a licensed private investigator. The moment William died you started making calls. You have contacts who can get you information tonight — and you are already working.",
        memories: [
            { text: "DALLAS COUNTY CLERK'S OFFICE\n─────────────────────\nOriginal business registration, March 3rd, 1902.\n\nEntity registered as THORESON & HARTLEY TOYS — equal partnership between William A. Thoreson and Robert J. Hartley. No dissolution paperwork ever filed. No record of any buyout or transfer.\n\n— J. Fowler, Dallas County Clerk", unlockedBy: "djCountyClerk" },
            { text: "DALLAS COUNTY CORONER'S OFFICE\n─────────────────────\nPreliminary autopsy on Thoreson complete. Toxicology out until Thursday — no full chemical breakdown tonight.\n\nFull report faxed to the residence. Someone with medical training should interpret it.\n\nAlso — small brass key found in the deceased's left jacket pocket. Sending it back with you.\n\n— F. Garrett, Dallas County Coroner", unlockedBy: "djCoroner" },
            { text: "PINKERTON NATIONAL DETECTIVE AGENCY\n─────────────────────\nBackground checks complete. Two items of note.\n\nSUBJECT 1: {{walter_lippman}} — pen name only. Legal name Taylor James Hartley, born March 5th 1911, Dallas TX.\n\nSUBJECT 2: {{miranda_longfellow}} — legal name change filed 1920. Born Miranda Elaine Hartley, 1896, Dallas TX.\n\n— Pinkerton National Detective Agency, Dallas Office", unlockedBy: "djPinkerton" }
        ],
        canShare: [
            { text: "I've got contacts at the coroner's office and at Pinkerton. Paperwork is coming tonight.", unlockedBy: null }
        ],
        relationships: [
            { name: "{{scott_thoreson}}", relation: "Your cousin" },
            { name: "{{eleanor_thoreson}}", relation: "Your aunt" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" }
        ],
        items: []
    },

    // ============================================================
    // CHARLOTTE WAVERLY — Scott's Spouse
    // ============================================================
    "charlotte_waverly": {
        name: "Charlotte Waverly",
        nameVariants: { female: "Charlotte Waverly", male: "Charles Waverly" },
        picker: { role: "Scott's Spouse", involvement: "moderate", isKiller: false },
        publicDesc: "{{scott_thoreson}}'s spouse. Warm, practical, and the one keeping things running tonight.",
        hiddenSkills: [],
        backstory: "You are {{scott_thoreson}}'s spouse and the person making sure tonight actually functions. You are practical, composed, and you notice things — it comes with being the one keeping everything running.",
        memories: [
            { text: "William asked you once, privately, whether {{scott_thoreson}} ever talked about the business at home. You said not much. William nodded — like that was either a relief or a disappointment.", unlockedBy: "ledger" },
            { text: "You have served drinks to {{miranda_longfellow}} at a dozen family events over the years. {{miranda_longfellow}} always said thank you. Never made small talk. Most people when nervous fill silence. {{miranda_longfellow}} never did.", unlockedBy: "mirandasIdentity" }
        ],
        canShare: [
            { text: "I notice things. It comes with being the one keeping everything running.", unlockedBy: null }
        ],
        relationships: [
            { name: "{{scott_thoreson}}", relation: "Your spouse" },
            { name: "William Thoreson Sr.", relation: "Your father-in-law (deceased)" },
            { name: "{{eleanor_thoreson}}", relation: "Your mother-in-law" },
            { name: "{{miranda_longfellow}}", relation: "{{scott_thoreson}}'s assistant — always around" }
        ],
        items: []
    },

    // ============================================================
    // PATRICIA CHAMBERLAIN — Family Friend
    // ============================================================
    "patricia_chamberlain": {
        name: "Patricia Chamberlain",
        nameVariants: { female: "Patricia Chamberlain", male: "Patrick Chamberlain" },
        picker: { role: "Family Friend", involvement: "moderate", isKiller: false },
        publicDesc: "A family friend and person of means. Perceptive, composed, and doesn't suffer fools.",
        hiddenSkills: [],
        backstory: "You have known the Thoreson family for years through charitable connections. William specifically asked you to come tonight. You did not think much of it at the time. You are thinking more of it now.",
        memories: [
            { text: "You remember a conversation with William at a charity dinner years ago. William said a person could do something they knew was wrong and still believe they were the best person to have done it. You asked what was meant. William laughed it off.", unlockedBy: "stolenCompany" },
            { text: "You know {{eleanor_thoreson}} well enough to have seen the worst and the best. {{eleanor_thoreson}} was not a person who frightened easily.", unlockedBy: null }
        ],
        canShare: [
            { text: "Don't let sentimentality cloud judgment. If William wronged people, the truth serves everyone — including this family.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Family acquaintance (deceased)" },
            { name: "{{eleanor_thoreson}}", relation: "Long-time acquaintance" },
            { name: "{{dorothy_wells}}", relation: "Mutual friend through charitable circles" }
        ],
        items: []
    },

    // ============================================================
    // DOROTHY WELLS — Dallas Elder
    // ============================================================
    "dorothy_wells": {
        name: "Dorothy Wells",
        nameVariants: { female: "Dorothy Wells", male: "Douglas Wells" },
        picker: { role: "Dallas Society Elder", involvement: "moderate", isKiller: false },
        publicDesc: "One of the most well-connected people in Dallas. Has been watching this city for longer than most guests have been alive.",
        hiddenSkills: [],
        backstory: "You are eighty-one years old and you have outlived most of the people you loved. You are {{eleanor_thoreson}}'s great-aunt — peripheral enough to have watched this family without being entirely inside it. You have always believed the truth is better than comfortable silence.",
        knowledge: [
            { text: "You recognize what killed William Thoreson. Check your Expert Notes — you know exactly what this means and where it comes from.", unlockedBy: "wolfsbane" }
        ],
        memories: [
            { text: "You were there in 1902 when William Thoreson and Robert Hartley announced their partnership. You remember shaking Robert's hand. A serious man. You never saw Robert again after 1910, and nobody in this city had the decency to ask why.", unlockedBy: "letterhead", tier: 1 },
            { text: "You remember the original incorporation — Thoreson and Hartley, equal shares. Within a year the Hartley name had quietly disappeared. William said the partnership dissolved by mutual agreement. You did not believe that then.", unlockedBy: "stolenCompany", tier: 2 }
        ],
        canShare: [
            { text: "In my circles, there were always whispers about a woman named Margaret connected to the Thoresons. Nobody ever knew the details.", unlockedBy: null },
            { text: "I have lived long enough to stop being frightened by difficult truths.", unlockedBy: null }
        ],
        relationships: [
            { name: "{{eleanor_thoreson}}", relation: "Your great-niece" },
            { name: "{{victoria_ashworth}}", relation: "Friend from society circles" },
            { name: "{{elizabeth_monroe}}", relation: "Friend and fellow long-time Dallas resident" },
            { name: "William Thoreson Sr.", relation: "Social acquaintance of forty years (deceased)" }
        ],
        items: []
    },

    // ============================================================
    // VIVIENNE ASHFORD — The Cousin
    // ============================================================
    "vivienne_ashford": {
        name: "Vivienne Ashford",
        nameVariants: { female: "Vivienne Ashford", male: "Vincent Ashford" },
        picker: { role: "The Cousin from Paris", involvement: "moderate", isKiller: false },
        publicDesc: "{{scott_thoreson}}'s cousin on the mother's side. Recently returned from years abroad.",
        hiddenSkills: [],
        backstory: "You are {{scott_thoreson}}'s cousin — {{eleanor_thoreson}}'s niece. You spent years living abroad and came home eight months ago. You see this family with the slight detachment of someone who has lived somewhere else, which means you see it more clearly.",
        memories: [
            { text: "You remember your mother and {{eleanor_thoreson}} speaking in low voices once when you were small. Your mother said something about a woman Will had known before {{eleanor_thoreson}}. {{eleanor_thoreson}} said the name Margaret and changed the subject.", unlockedBy: "margaretsLetter" }
        ],
        canShare: [
            { text: "Uncle Will always seemed like he was carrying something heavy. I assumed it was just the pressure of running a company.", unlockedBy: null },
            { text: "I've been away for years. I see this family more clearly for it.", unlockedBy: null }
        ],
        relationships: [
            { name: "{{scott_thoreson}}", relation: "Your cousin" },
            { name: "{{eleanor_thoreson}}", relation: "Your aunt" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "{{charlotte_waverly}}", relation: "Your cousin's spouse" }
        ],
        items: []
    },

    // ============================================================
    // ELEANOR THORESON — The Widow
    // ============================================================
    "eleanor_thoreson": {
        name: "Eleanor Thoreson",
        nameVariants: { female: "Eleanor Thoreson", male: "Elliott Thoreson" },
        picker: { role: "The Widow", involvement: "moderate", isKiller: false },
        publicDesc: "William Thoreson's spouse of forty years. Dignified in grief, as always dignified in everything.",
        hiddenSkills: [],
        backstory: "You have been Eleanor Thoreson for forty years. You built a life with William, raised a family, and learned to be fluent in the silence a long marriage produces — including the silence that means there are things you have chosen not to know.",
        memories: [
            { text: "William told you once there had been a partner in the early days who left under difficult circumstances. That it was handled. You never asked again. You have been sitting with that answer for thirty years.", unlockedBy: "stolenCompany", tier: 1 },
            { text: "You knew about Margaret. Not everything — not the child, not the depth of it. But you knew the name. You heard it once and chose to bury it. You are reconsidering that decision.", unlockedBy: "affair", tier: 1 },
            { text: "{{miranda_longfellow}} has been in this house for ten years. You always thought something was slightly off — a quality of attention that seemed like more than an assistant ought to have. You said nothing. You are thinking about that now.", unlockedBy: "mirandasIdentity", tier: 1 }
        ],
        canShare: [
            { text: "William was a good man in many ways. But good people can do terrible things and spend the rest of their lives trying to outrun them.", unlockedBy: null },
            { text: "I have known something was wrong since long before tonight. I chose not to look directly at it. That was my mistake.", unlockedBy: "stolenCompany" }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your spouse of forty years (deceased)" },
            { name: "{{scott_thoreson}}", relation: "Your child" },
            { name: "{{charlotte_waverly}}", relation: "Your child's spouse" },
            { name: "{{vivienne_ashford}}", relation: "Your niece" },
            { name: "{{dorothy_wells}}", relation: "Your great-aunt" },
            { name: "{{miranda_longfellow}}", relation: "{{scott_thoreson}}'s assistant — in your home for ten years" }
        ],
        items: []
    },

    // ============================================================
    // RAYMOND HAMMOND — Business Manager
    // ============================================================
    "raymond_hammond": {
        name: "Raymond Hammond",
        nameVariants: { female: "Rachel Hammond", male: "Raymond Hammond" },
        picker: { role: "Business Manager", involvement: "moderate", isKiller: false },
        publicDesc: "Business Manager at Thoreson Toys for fifteen years. Handles the operational side of the company.",
        hiddenSkills: [],
        backstory: "You have been the business manager at Thoreson Toys for fifteen years. You run the practical side of the company. William kept the financial ledgers personally — locked away — and in fifteen years you were never given full access. You assumed it was just how William operated. Now you are not so sure.",
        memories: [
            { text: "William asked you three weeks ago to retrieve a box of old contracts from storage — pre-1910 documents. William went through them alone and had you return them the same day. William seemed shaken afterward in a way you had never seen.", unlockedBy: "forgedDocs", tier: 2 },
            { text: "Fifteen years working for this company, and William never once let you near the books. Looking at what's in that ledger now — the payments, the dates, the initials — you understand it was something else entirely. Someone did not want an accountant looking too closely.", unlockedBy: "ledger", tier: 1 }
        ],
        canShare: [
            { text: "Will always did the books personally. Kept the ledgers locked away. I never had access — and now I'm wondering why.", unlockedBy: null },
            { text: "A European deal fell apart six months ago. William got very quiet after that.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your employer of fifteen years (deceased)" },
            { name: "{{scott_thoreson}}", relation: "Family attorney — worked together on company matters" },
            { name: "{{marcus_brennan}}", relation: "Investor — now asking hard questions" },
            { name: "{{victoria_ashworth}}", relation: "Investor — now asking hard questions" }
        ],
        items: []
    },

    // ============================================================
    // MARCUS BRENNAN — Investor
    // ============================================================
    "marcus_brennan": {
        name: "Marcus Brennan",
        nameVariants: { female: "Margaret Brennan", male: "Marcus Brennan" },
        picker: { role: "Investor", involvement: "moderate", isKiller: false },
        publicDesc: "A successful Dallas businessperson with a significant stake in Thoreson Toys. Analytical and protective of invested money.",
        hiddenSkills: [],
        backstory: "You have been invested in Thoreson Toys for four years. The returns were excellent until six months ago when a European deal collapsed and real money disappeared. You have been pursuing answers through proper channels ever since. William kept putting you off. You came tonight expecting a confrontation.",
        memories: [
            { text: "William called you about a month before tonight to apologize for delays. William sounded genuinely tired — not defensive, but something older than that. Like a person settling accounts that had been avoided for a long time.", unlockedBy: "ledger" },
            { text: "You know what a fraudulent transfer looks like. Looking at the 1910 filing now — the signature, the notarization, the dates — you can see the construction of it. Someone very careful did this. But not careful enough.", unlockedBy: "forgedDocs", tier: 1 }
        ],
        canShare: [
            { text: "Yes, the European deal lost money. Yes, I was angry. But dead people don't write checks.", unlockedBy: null },
            { text: "I know what it looks like when a company's books have been kept to hide something. I missed it for four years.", unlockedBy: "ledger" }
        ],
        relationships: [
            { name: "{{victoria_ashworth}}", relation: "Fellow investor — coordinated on Thoreson matters for years" },
            { name: "{{raymond_hammond}}", relation: "The business manager" },
            { name: "William Thoreson Sr.", relation: "Company founder (deceased)" },
            { name: "{{scott_thoreson}}", relation: "The family attorney" }
        ],
        items: []
    },

    // ============================================================
    // VICTORIA ASHWORTH — Investor
    // ============================================================
    "victoria_ashworth": {
        name: "Victoria Ashworth",
        nameVariants: { female: "Victoria Ashworth", male: "Victor Ashworth" },
        picker: { role: "Investor", involvement: "moderate", isKiller: false },
        publicDesc: "A sharp businessperson and Thoreson Toys investor. Active in Dallas society with a keen eye for detail.",
        hiddenSkills: [],
        backstory: "You have been a Thoreson Toys shareholder for six years and an active presence in Dallas business circles for longer. You and {{marcus_brennan}} coordinated on investments — {{marcus_brennan}} handled the numbers, you handled the people. Tonight was supposed to be the night you finally got answers about the money.",
        memories: [
            { text: "You did thorough due diligence on every investment. You never found anything irregular in the Thoreson books. That is either because William was very careful or because you didn't look in the right places.", unlockedBy: "stolenCompany", tier: 2 },
            { text: "{{miranda_longfellow}} was always present at company functions. Always at the edge of the room, watching. You remarked on it once to {{marcus_brennan}}. {{marcus_brennan}} said you were being uncharitable. You were not being uncharitable.", unlockedBy: "mirandasIdentity" }
        ],
        canShare: [
            { text: "Yes, we lost money. Yes, we wanted answers. I take people to court. I don't take their lives.", unlockedBy: null },
            { text: "Several people in this room are performing something. I've spent years in rooms full of people performing confidence they don't have.", unlockedBy: null }
        ],
        relationships: [
            { name: "{{marcus_brennan}}", relation: "Fellow investor and business ally" },
            { name: "{{raymond_hammond}}", relation: "The business manager" },
            { name: "William Thoreson Sr.", relation: "Company founder (deceased)" },
            { name: "{{dorothy_wells}}", relation: "Friend from society circles" }
        ],
        items: []
    },

    // ============================================================
    // ELIZABETH MONROE — Optional
    // ============================================================
    "elizabeth_monroe": {
        name: "Elizabeth Monroe",
        nameVariants: { female: "Elizabeth Monroe", male: "Elliot Monroe" },
        picker: { role: "Dallas Society", involvement: "light", isKiller: false },
        publicDesc: "A fixture of Dallas society. Knows everyone, remembers everything.",
        hiddenSkills: [],
        note: "OPTIONAL CHARACTER — cut first if guest count is low.",
        backstory: "You are the most fun person in the room and you have been for three decades running. You know everyone in this city and you remember everything. You have heard the name Hartley before — said once at a party by someone who immediately wished they hadn't. You filed it away. You always file things away.",
        memories: [
            { text: "You remember the newspaper piece about Robert Hartley's death in 1910. Two inches of column. Investigation closed in under a day. At the time you thought nothing of it.", unlockedBy: "stolenCompany", tier: 2 },
            { text: "You have watched {{eleanor_thoreson}} tonight with the attention of someone who has known a person for twenty years. {{eleanor_thoreson}} is not surprised by what is being revealed. Shocked, yes — but not surprised.", unlockedBy: "affair", tier: 2 }
        ],
        canShare: [
            { text: "I know everyone in this city and I remember everything. Tonight is testing the limits of that considerably.", unlockedBy: null },
            { text: "I heard the name Hartley once at a party. Someone said it and immediately wished they hadn't.", unlockedBy: "stolenCompany" }
        ],
        relationships: [
            { name: "{{eleanor_thoreson}}", relation: "Friend of twenty years" },
            { name: "{{dorothy_wells}}", relation: "Fellow long-time Dallas resident" },
            { name: "William Thoreson Sr.", relation: "Social acquaintance (deceased)" },
            { name: "{{scott_thoreson}}", relation: "Watched this one grow up" }
        ],
        items: []
    }

};

// ============================================================
// SKILL BACKSTORIES — Generic snippets, same for all characters
// Injected by dashboard when a skill is assigned to this character
// ============================================================
const SKILL_BACKSTORIES = {
    Legal:      "You studied law and understand documents, contracts, and what makes a signature valid — or forged.",
    Medical:    "You have medical training. You know what the body reveals and how to read what others miss.",
    Botany:     "You have spent years studying plants — including ones most people have never encountered and would not recognize.",
    Accounting: "Numbers are your native language. You can read a ledger the way other people read a newspaper.",
    Banking:    "You understand how money moves, how accounts are structured, and what it looks like when the books are hiding something.",
    French:     "You spent time in France and speak the language fluently — written and spoken.",
    Journalism: "You have a journalist's instincts. You know how to find what's been buried and what questions to ask.",
    Bartender:  "You've spent enough time around drinks to notice who ordered what, who was near the bar, and what might have been added to a glass."
};
