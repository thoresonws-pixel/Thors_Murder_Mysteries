// ============================================================
// THOR'S MURDER MYSTERIES — CHARACTER DATABASE
// Story: The Thoreson Estate Dinner (thoreson)
// ============================================================
// Key format: character name slug — no IRL player names anywhere
// nameVariants: { female, male } — resolved from player questionnaire
//
// Progressive Reveal System:
//   unlockedBy: null       → Always visible
//   unlockedBy: "ledger"   → Visible only after revelation toggled ON
//
// REVELATION IDS (from revelationsDatabase):
//   Act 1: willsDeath, ledger, forgedDocs, stolenCompany, bankStatement
//   Act 2: affair, secretHeir, margaretsLetter, marriage
//   Act 3: poisoning, mirandaIdentity, finalConfession
//   David pipeline: djCountyClerk, djCoroner, djPinkerton
// ============================================================

const characterDatabase = {

    // ============================================================
    // MIRANDA LONGFELLOW — The Killer
    // ============================================================
    "miranda_longfellow": {
        name: "Miranda Longfellow",
        nameVariants: { female: "Miranda Longfellow", male: "Milo Longfellow" },
        publicDesc: "Scott Thoreson's legal assistant for nearly ten years. Professional, precise, and discreet. Has been present for nearly every significant family moment — and most of the significant paperwork.",
        hiddenSkills: ["Legal"],
        note: "You know everything. You are not in a hurry. Let the investigation find you — don't chase it. Your Legal skill gives you a natural reason to handle documents and weigh in on findings. Use it. The slower the truth comes out, the better the story.",
        backstory: "Your name is Miranda Hartley. You have not used that name in fifteen years.\n\nYour father was Robert Hartley. In 1902, he and William Thoreson co-founded what would become one of Dallas's most successful toy companies — Thoreson and Hartley Toys. They were partners and close friends. Your father was an honest man. Hardworking. Devoted to your mother Margaret and to you.\n\nWhat happened next took years to fully understand.\n\nWilliam Thoreson began an affair with your mother sometime before 1910. Your father discovered it — along with something worse. On March 13th, 1910, a document was filed transferring your father's full ownership stake in the company to William Thoreson. Your father's signature was on it. It was not your father's signature. Two days later, on March 15th, Robert Hartley was found dead. The investigation lasted a week. It was ruled a suicide. William Thoreson was cleared on March 22nd. The company became Thoreson Toys. Your father's name was erased from everything.\n\nYou were fourteen years old.\n\nYour mother went to William afterward. She was carrying his child and she begged him to help both of her children — you, Robert's daughter, and the baby. He refused you entirely. He established a private trust for his own child — born March 5th, 1911, named Taylor — and sent your mother away. Abandoned and heartbroken, your mother turned to whatever comfort she could find. She died in 1914 of a drug overdose — grief dressed up as an accident. You were eighteen, alone, and trying to care for a three-year-old half-brother. The state decided you were unfit. They separated you. Taylor went to distant relatives with a trust fund in his name. You got nothing.\n\nHe grew up with the trust money, changed his name to Walter Lippman, and built a life as a journalist. You found his name in William's files years ago. He is here tonight — sitting in this room — and has no idea who you are.\n\nYou put yourself through college and law school without help from anyone. In 1920 you changed your name to Miranda Longfellow. In 1925 you got yourself hired as Scott Thoreson's legal assistant. You spent ten years inside this house, inside these files, reading every document William Thoreson thought was safely hidden. The forged transfer. The ledger with its monthly payments to T.H. The love letters from your mother. The trust fund documents. You watched him grow old and respected and unbothered.\n\nLast summer you traveled to Switzerland. Wolfsbane grows wild in the Alps — purple flowers along the mountain trails, beautiful and poisonous down to the root. You brought some home. You dried it. You ground it.\n\nTonight, before the guests arrived, you put it in his drink.\n\nHe is dead. You are at peace with that. You are not a villain. You are a daughter.",
        memories: [],
        canShare: [
            { text: "Will told me he was planning something important tonight. He seemed almost nervous about it.", unlockedBy: null },
            { text: "Yes, I traveled to Switzerland last summer. It was a lovely trip — the mountains were beautiful.", unlockedBy: null }
        ],
        secret: {
            trueIdentity: "Miranda Hartley",
            carryingItems: "Your travel journal. It is always on you. It will be found if someone searches you in Act 3."
        },
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your employer for 10 years" },
            { name: "William Thoreson Sr.", relation: "The man who destroyed your family (deceased)" },
            { name: "Robert Hartley", relation: "Your father (died 1910)" },
            { name: "Margaret Hartley", relation: "Your mother (died 1914)" },
            { name: "Walter Lippman", relation: "Your half-sibling — in this room, no idea who you are" }
        ],
        items: ["Travel journal (always on you — searchable Act 3)"],
        finalEntry: {
            context: "This is your final monologue. Read it aloud after you are confronted and confirm who you are. You are not defending yourself — you are explaining yourself. There is a difference. Take your time. The room will be quiet.",
            text: "March 21st, 1935.\n\nMy name is Miranda Hartley. Robert's daughter.\n\nI have sat in this parlor tonight and watched all of you slowly piece together my father's story. The letterhead. The ledger. The forged documents. I watched Scott's face change as his father became a stranger to him. I watched every layer of the lie come off — the stolen company, the affair, the child William refused to claim, the child he secretly funded. The lies built on top of lies built on top of destroyed lives.\n\nMy father was Robert Hartley. He built this company alongside William Thoreson in 1902. They were partners. Friends. And William forged his name on a transfer document, took everything he had built, and my father was dead within twenty-four hours. I was fourteen years old.\n\nMy mother went to William afterward. She was carrying his child. She begged him to help both of us. He set up a trust fund for his own son and sent my mother away with nothing. She died four years later. Not peacefully. She spent her last years chasing something to dull the pain of being abandoned by the man she loved, and it killed her. I was eighteen years old, alone, trying to care for a three-year-old half-brother I barely understood was William's son. The state decided I was unfit. They split us up. Walter went to distant relatives with a trust fund in his name. I got nothing.\n\nI put myself through law school. I changed my name. And in 1925 I walked into Scott Thoreson's office and got myself hired. I spent ten years inside these walls. I found the forged documents. I found the ledger. I found my mother's letters in a locked safe — love letters she wrote to a man who threw her away. I found the birth certificate that told me the child I had lost was William Thoreson's son.\n\nLast summer I went to Switzerland. Wolfsbane grows wild in the Alps — beautiful purple flowers along the mountain trails. I brought some home. I knew what I was going to do with it.\n\nI am not asking for your forgiveness. I made peace with what this night would cost me long before tonight. But I needed you to know — all of you — that the Thoreson fortune was built on a stolen company, a forged signature, and a man who chose to let his partner die rather than face what he had done.\n\nMy father deserved better. My mother deserved better.\n\nI am Miranda Hartley.\n\nAnd now, the truth has been set free."
        }
    },

    // ============================================================
    // SCOTT THORESON JR. — Red Herring
    // ============================================================
    "scott_thoreson": {
        name: "Scott Thoreson Jr.",
        nameVariants: { female: "Sophia Thoreson", male: "Scott Thoreson Jr." },
        publicDesc: "Eldest child of William Thoreson Sr. and the family's attorney. A person of integrity who has dedicated their career to managing the family's legal affairs.",
        hiddenSkills: [],
        backstory: "You are the eldest child of William and Eleanor Thoreson, and the family's attorney. You studied law at SMU and built your practice from the ground up, handling wills, property disputes, and contract work for several prominent Dallas families before the Thoreson business became your primary focus. You are methodical by nature. You keep notes. You remember things.\n\nYour father has seemed different lately. Anxious. Emotional in ways he wasn't before. He called you three weeks ago to say he was planning to make something right — something from a long time ago. He wouldn't say more. You assumed it was the will. He had mentioned updating it. You drafted the new language yourself — language that explicitly names Taylor Hartley as William's acknowledged child and rightful heir to a portion of the estate.\n\nYou did not know who Taylor Hartley was when you drafted it. You assumed it was a private matter your father wanted handled discreetly. You are a lawyer. You drafted what your client instructed.\n\nTonight was supposed to be the announcement. Instead, your father is dead.\n\nYou are aware of how this looks. You drafted a will that benefits a stranger at the expense of your own inheritance. You had full access to every family document. You knew the estate better than anyone. You had every opportunity. You had no motive you're aware of — but you are also beginning to understand that you may not have known your father as well as you thought.\n\nYou are grieving. You are suspicious of everyone in this room. And you are the person everyone is going to look at first.",
        memories: [
            { text: "Your father called you three weeks ago, voice quieter than usual. He said he needed to make something right before it was too late. You asked what he meant. He said — 'I took something from someone a long time ago. The wrong person has been carrying it ever since.' You assumed he meant money. You are no longer sure what he meant.", unlockedBy: "stolenCompany" },
            { text: "Miranda has worked beside you for ten years. You have trusted her completely — with documents, with clients, with the family's most sensitive matters. The thought that she might have been something other than what she presented is one you are not ready to finish.", unlockedBy: "mirandaIdentity", tier: 1 }
        ],
        canShare: [
            { text: "Yes, I drafted the updated will. I'm the family attorney — that's my job. If I wanted to stop Taylor from inheriting, I wouldn't need to kill anyone. I'd just lose the paperwork.", unlockedBy: null },
            { text: "My father told me three weeks ago he was planning to make something right. He wouldn't tell me what. I assumed it was the will. I'm beginning to think it was considerably more than that.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your father (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your mother" },
            { name: "Miranda Longfellow", relation: "Your trusted legal assistant — ten years" },
            { name: "Walter Lippman", relation: "The journalist your father personally invited" },
            { name: "David Richardson", relation: "Your cousin" }
        ],
        items: ["Drafted copy of the updated will (in your jacket pocket)"]
    },

    // ============================================================
    // WALTER LIPPMAN — Secret Heir / Journalism Skill
    // ============================================================
    "walter_lippman": {
        name: "Walter Lippman",
        nameVariants: { female: "Winifred Lippman", male: "Walter Lippman" },
        publicDesc: "A journalist for the Dallas Herald covering business and society. Known for thorough, honest reporting. Personally invited by William Thoreson Sr.",
        hiddenSkills: ["Journalism"],
        note: "You came tonight knowing Will wanted to tell you something personal. You don't fully understand yet what you are to this family. Let that discovery happen in the room, in front of everyone — don't get ahead of it. Your connection to the Hartleys should come out through the investigation, not through you.",
        backstory: "Your byline is Walter Lippman. You have been writing under that name for years and it has become who you are.\n\nYou were born Taylor Hartley on March 5th, 1911, in Dallas, Texas. Your mother was Margaret Hartley. Your biological father was William Thoreson, though you didn't learn that until you were nearly an adult. Your mother died when you were very young. You were raised by distant relatives and told very little about where you came from — only that your mother was gone and that there was a trust fund in your name that paid your expenses until you were grown.\n\nYou asked questions when you were old enough. The answers were always thin. There was a man named Hartley — your mother's husband, not your father. He died. There was a scandal. Your mother was sent away. Beyond that, nothing.\n\nWhen you were eighteen you had a lawyer look into the trust. The originating signature was William Thoreson's. That was the first time you heard that name attached to your life. You began writing under the name Walter Lippman — a pen name that became a professional identity, then simply the name everyone knows you by.\n\nYou became a journalist. You are good at it. You have built a reputation at the Dallas Herald for thorough, honest work. Six months ago William Thoreson personally reached out and invited you to tonight's dinner. He said he had an announcement — something important, something that concerned you specifically. He wouldn't say more. You came because you have spent your entire life not knowing the full story, and some part of you thought tonight might finally change that.",
        memories: [
            { text: "In your years covering Dallas business you heard whispers more than once that Thoreson Toys hadn't started the way Will told it — that there had been another name on the original company, another man involved. You could never find anything on the record to confirm it. You are finding it now.", unlockedBy: "stolenCompany" },
            { text: "Taylor Hartley. Born March 5th, 1911. That is your legal name. That is the name on the birth certificate that just surfaced in this room. William Thoreson was your father. The man whose death you are investigating — whose fortune you may now inherit — is the man who paid for your childhood and never once told you why.", unlockedBy: "birthCertificate", tier: 1 }
        ],
        canShare: [
            { text: "Will personally invited me. Said he had an announcement that would be the story of the year. That's unusual for someone so private.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Invited you personally — now deceased. You are beginning to understand why." },
            { name: "Scott Thoreson Jr.", relation: "The family attorney — drafted the will that names you" },
            { name: "Miranda Longfellow", relation: "Scott's assistant. Something about the way she looks at you is familiar and you can't place why." }
        ],
        items: ["Notepad and pen"]
    },

    // ============================================================
    // DAVID RICHARDSON — PI / Evidence Pipeline
    // ============================================================
    "david_richardson": {
        name: "David Richardson",
        nameVariants: { female: "Diana Richardson", male: "David Richardson" },
        publicDesc: "A cousin on the Thoreson side and a licensed private investigator. Invited to tonight's dinner — now using connections to help the family get answers.",
        hiddenSkills: [],
        note: "You are the evidence pipeline — documents and reports come through you at each act transition, not all at once. When you get an update, make it a moment — step away, take the call, react to what you're hearing before you share it with the room. The timing matters as much as the content.",
        backstory: "You're a cousin on the Thoreson side — close enough to be at every family gathering, far enough removed to have made your own way outside the toy business. You became a licensed private investigator eight years ago after a stint working insurance adjustments convinced you that you were better at finding things out than at selling policies. You work cases around Dallas — missing persons, insurance fraud, the occasional domestic matter. You are methodical, patient, and good at asking questions that don't sound like questions.\n\nYou were invited tonight like everyone else. Will said it was going to be a special evening. Then he died, and everything changed.\n\nThe moment it happened you started making calls. You have a contact at the county clerk's office who can pull original business filings on short notice. You have someone at the coroner's office who owes you a favor and can get you a preliminary report tonight. You have a Pinkerton agent who runs background checks for a reasonable fee. While everyone else is still absorbing the shock, you are already working.\n\nYou became a private investigator because you are constitutionally incapable of leaving a question unanswered. You don't stop. You follow the thread even when following it is inconvenient, even when the answer is going to be something nobody wanted to know.",
        memories: [
            { text: "DALLAS COUNTY CLERK'S OFFICE\n─────────────────────\nMr. Richardson —\n\nPer your request, we have pulled the original business registration filed March 3rd, 1902.\n\nThe entity was registered as THORESON & HARTLEY TOYS, a partnership between William A. Thoreson and Robert J. Hartley, equal shares. No dissolution paperwork was ever filed with this office. No record of partnership buyout or transfer exists in our index.\n\nA certified copy of the original filing is enclosed.\n\n— J. Fowler, Dallas County Clerk", unlockedBy: "djCountyClerk" },
            { text: "DALLAS COUNTY CORONER'S OFFICE\n─────────────────────\nDave —\n\nWe've finished our preliminary autopsy on the Thoreson matter. Our toxicology man is out of town until Thursday so I can't get you a full chemical breakdown tonight.\n\nI've gone ahead and faxed the full report to the Thoreson residence at the number you gave me. Someone there with a medical background should be able to make sense of it.\n\nAlso — we found a small brass key in the deceased's left jacket pocket. No lock on his person it corresponds to. I'm sending it back with you.\n\n— F. Garrett, Dallas County Coroner", unlockedBy: "djCoroner" },
            { text: "Mr. Richardson —\n\nBackground checks complete. Two items of significant interest.\n\nSUBJECT 1: Walter Lippman, journalist. Pen name only — legal name is Taylor James Hartley, born March 5th 1911, Dallas TX.\n\nSUBJECT 2: Miranda Longfellow, legal assistant. Legal name change filed 1920. Born Miranda Elaine Hartley, 1896, Dallas TX.\n\n— Pinkerton National Detective Agency, Dallas Office", unlockedBy: "djPinkerton" }
        ],
        canShare: [
            { text: "I've got contacts at the coroner's office and at Pinkerton. I've been making calls since this started. We should have paperwork coming our way tonight.", unlockedBy: null }
        ],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your cousin" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your aunt" }
        ],
        items: []
    },

    // ============================================================
    // CHARLOTTE WAVERLY — Bartender Skill
    // ============================================================
    "charlotte_waverly": {
        name: "Charlotte Waverly",
        nameVariants: { female: "Charlotte Waverly", male: "Charles Waverly" },
        publicDesc: "A close friend of the Thoreson family. Warm, practical, and the one keeping things running tonight.",
        hiddenSkills: ["Bartender"],
        backstory: "You grew up in Fort Worth — your father ran a dry goods store and your mother kept the books, which is where you learned that the people who actually run things are rarely the ones with their names on the door. You are practical, composed, and quietly sharp. You handle social obligations with efficiency rather than enthusiasm. You like people. You just don't need everything to be dramatic.\n\nYou have always been the kind of person other people lean on without quite realizing they're doing it. At gatherings you are the one who remembers where the extra chairs are, who is getting along with whom, and when someone has had enough to drink. You do not find this burdensome. You find it clarifying. A room is a system, and you have always been good at understanding systems.\n\nYou trained briefly as a nurse before pivoting to other work, and you still carry that instinct — the calm that comes from having seen people at their worst and knowing that most situations are survivable. You think clearly under pressure. You do not panic.\n\nTonight you're the one making sure glasses stay full and nobody goes to pieces in the hallway. Someone has to. You are close enough to Eleanor to have seen her at her best and her worst, and you are fond of her in the way you are fond of people who have never once pretended to be something they aren't.\n\nYou are paying very close attention tonight. You always do.",
        memories: [
            { text: "Will asked you once, privately, whether Scott ever talked about the business at home. You said not much. He nodded slowly, like that was either a relief or a disappointment — you couldn't tell which.", unlockedBy: "ledger" },
            { text: "You have served drinks at a dozen family events and watched Miranda Longfellow at all of them. She always said thank you. She never made small talk. Most people, when they're nervous, fill silence. Miranda never did.", unlockedBy: "mirandaIdentity" }
        ],
        canShare: [
            { text: "I've been around this family long enough to know they communicate more in what they don't say than in what they do.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Family acquaintance (deceased)" },
            { name: "Eleanor Thoreson", relation: "Close friend" },
            { name: "Scott Thoreson Jr.", relation: "Close friend" },
            { name: "Miranda Longfellow", relation: "Familiar face at family events" }
        ],
        items: []
    },

    // ============================================================
    // PATRICIA CHAMBERLAIN — Medical Skill
    // ============================================================
    "patricia_chamberlain": {
        name: "Patricia Chamberlain",
        nameVariants: { female: "Patricia Chamberlain", male: "Patrick Chamberlain" },
        publicDesc: "An independent person of means and strong will. Perceptive, principled, and doesn't suffer fools.",
        hiddenSkills: ["Medical"],
        backstory: "You spent seventeen years as a registered nurse — first at Baylor University Hospital in Dallas, then as a private duty nurse for several of the city's wealthier families. You have seen the inside of more sick rooms than most people would care to imagine, and you have sat with enough dying men and women to understand that the body rarely lies, even when the people around it do.\n\nYou left nursing eight years ago when family circumstances demanded it — there were people who needed you and you stepped up, as you always do. You are well provided for by a modest inheritance managed with the same methodical competence you applied to everything else in your life.\n\nYour nursing background is not something you advertise in social settings. People do not know what to do with someone who can tell you what's wrong with a person before the doctor arrives. But the knowledge is there, intact, and it does not go away because you stopped drawing a salary for it.\n\nYou are at this dinner because you have known the Thoreson family for years through various charitable connections, and because Will specifically asked you to come. You did not think much of it at the time. You are thinking more of it now.",
        memories: [
            { text: "You remember a conversation with Will years ago at a charity dinner. He had been drinking more than usual and he said something odd — that a person could do something they knew was wrong and still believe they were the best one to have done it. You asked what he meant. He laughed it off. You never forgot it.", unlockedBy: "stolenCompany" },
            { text: "You worked as a private duty nurse for the Ashford family for two years in the early twenties. You know Eleanor Thoreson well enough to have seen her at her worst and her best. She is not a person who frightened easily. She is frightened tonight.", unlockedBy: "affair" }
        ],
        canShare: [
            { text: "Don't let sentimentality cloud judgment. If Will wronged people, the truth serves everyone — including his family.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Family acquaintance (deceased)" },
            { name: "Eleanor Thoreson", relation: "Acquaintance — you nursed the family she grew up in" },
            { name: "Dorothy Wells", relation: "Fellow longtime Dallas family connection" }
        ],
        items: []
    },

    // ============================================================
    // DOROTHY WELLS — Botany Skill
    // ============================================================
    "dorothy_wells": {
        name: "Dorothy Wells",
        nameVariants: { female: "Dorothy Wells", male: "Douglas Wells" },
        publicDesc: "One of the most respected figures in Dallas society. A person of remarkable memory, deep roots in the city, and a botanist's eye for detail.",
        hiddenSkills: ["Botany"],
        backstory: "You are eighty-one years old and you have outlived most of the people you loved, which gives you a perspective that is sometimes melancholy and sometimes useful. You remember Dallas when it was a smaller city, when the Thoreson family was just beginning, when Will was a young man with ambition and a partner named Hartley that nobody talks about anymore.\n\nYou were born in 1854 in Savannah, Georgia. You came to Texas in 1881 with your spouse, who built a modest law practice in Dallas and died in 1919, leaving you comfortable, independent, and extremely clear-eyed about the nature of people.\n\nYou have watched three generations of Dallas families rise and fall. In your experience, the ones that came apart were almost always undone not by misfortune but by a secret that had been kept too long. The weight of it eventually becomes structural. The house starts to lean.\n\nYou are Eleanor Thoreson's great-aunt, which makes you peripheral enough to the family to have seen it without being entirely inside it. You have always believed that the truth, however painful, is better than comfortable silence.\n\nYou are a person who has always known more than those around you assumed. People tell you things at dinner parties they would never tell anyone else, because they have decided you are harmless. You have been gathering intelligence about this city for decades with the same methodical patience you bring to botanical classification. The principle is the same: observe carefully, label accurately, and never mistake a pretty flower for an innocuous one.",
        knowledge: [
            { text: "Wolfsbane. You know that plant. Your grandmother made you memorize it when you were nine years old. Aconitum — she called it the queen of poisons. Every part of it is lethal. And it does not grow in Texas. It does not grow anywhere in America. Check your Expert Notes — you know exactly what this means.", unlockedBy: "wolfsbane" }
        ],
        memories: [
            { text: "You were there in 1902 when William Thoreson and Robert Hartley announced their partnership. You remember shaking Robert's hand at the reception. A serious person. Careful with words. Proud of what they were building. You never saw Robert again after 1910, and nobody in this city had the decency to ask why.", unlockedBy: "letterhead", tier: 1 },
            { text: "You remember the original incorporation. Thoreson and Hartley, equal shares — you saw the announcement in the paper. Within a year the Hartley name had quietly disappeared from everything. Will said the partnership had been dissolved by mutual agreement. You did not believe him then. You certainly do not believe him now.", unlockedBy: "incorporation", tier: 2 }
        ],
        canShare: [
            { text: "In my circles, there were always whispers about a woman named Margaret connected to the Thoresons. Nobody ever knew the details.", unlockedBy: null }
        ],
        relationships: [
            { name: "Eleanor Thoreson", relation: "Your great-niece" },
            { name: "Victoria Ashworth", relation: "Friend from society circles" },
            { name: "Elizabeth Monroe", relation: "Friend and fellow socialite" },
            { name: "William Thoreson Sr.", relation: "Social acquaintance of forty years (deceased)" }
        ],
        items: []
    },

    // ============================================================
    // VIVIENNE ASHFORD — French Skill
    // ============================================================
    "vivienne_ashford": {
        name: "Vivienne Ashford",
        nameVariants: { female: "Vivienne Ashford", male: "Vincent Ashford" },
        publicDesc: "Scott Thoreson's cousin. Recently returned from years living in Paris. Cultured, worldly, and fluent in French.",
        hiddenSkills: ["French"],
        backstory: "You are Scott Thoreson's cousin on the family side. You spent the better part of six years living in Paris, studying at the Ecole des Beaux-Arts and immersing yourself in French language and culture more thoroughly than you ever intended to. You speak French fluently, think in it sometimes, and read it without effort. You came home to Dallas eight months ago, partly because your money was running thin and partly because a family letter said Will was planning something important and that you ought to be there.\n\nParis changed you in ways that are difficult to explain to people who haven't been. Not the art, exactly — though you loved the art — but the particular freedom of being nobody. Of walking down a street where no one knew your family, your history, or what was expected of you. You became someone slightly different there. Looser. More willing to disagree, to sit with uncomfortable ideas, to take up space in a conversation.\n\nComing back to Dallas has required a certain amount of reassembly. The city is smaller than you remembered, the social circles tighter, the expectations more specific. You are fond of your family and you love your cousins, but you see all of it now with the slight detachment of someone who has lived somewhere else — which means you see it more clearly, and sometimes more critically, than the people inside it do.\n\nThe Thoresons have always been a family defined by what they don't say. Will in particular carried something heavy — you noticed it as a child and it was still there when you returned. You are better at reading people than you let on, and you have learned to keep that to yourself.",
        memories: [
            { text: "You remember your mother speaking in a low voice once about a woman Will had known before Eleanor. Eleanor said the name Margaret and then changed the subject immediately. You had forgotten that completely until just now.", unlockedBy: "margaretsLetter" }
        ],
        canShare: [
            { text: "Will always seemed like he was carrying something heavy. I assumed it was just the pressure of running a company.", unlockedBy: null },
            { text: "I've been away for six years. I'm watching this room the way an outsider would — which might actually be useful.", unlockedBy: null }
        ],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your cousin" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your aunt" },
            { name: "Dorothy Wells", relation: "Great-aunt — family elder" }
        ],
        items: []
    },

    // ============================================================
    // ELEANOR THORESON — The Widow
    // ============================================================
    "eleanor_thoreson": {
        name: "Eleanor Thoreson",
        nameVariants: { female: "Eleanor Thoreson", male: "Elliot Thoreson" },
        publicDesc: "William Thoreson's spouse of forty years. Dignified in grief, as always dignified in everything. Knows more than has been said.",
        hiddenSkills: [],
        backstory: "You have been married to William Thoreson for forty years. You built your life around this family, this house, and this man — and you are sitting here tonight beginning to understand that there were things about all three that you did not fully know.\n\nYou knew about Margaret. Not all of it — not the child, not the money — but you knew about the affair. Will told you himself, years after it ended, in the particular way that people confess things when they believe the danger has passed and they want credit for honesty. You forgave him. You had children together. You had a life together. You chose to stay and you have never regretted that choice, even now.\n\nWhat you did not know was the rest of it. The forged documents. Robert Hartley's death. The trust fund paid in secret for decades. A child Will made and never claimed. You are learning all of this tonight in a room full of people, and you are holding yourself together with the same composure you have applied to every difficult thing in forty years of marriage.\n\nYou are not performing dignity. You are genuinely dignified. It is simply who you are. But underneath the composure, something is shifting. You spent forty years trusting someone who was capable of this. You are deciding, very quietly, how you feel about that.\n\nYou loved Will. You still do, in the complicated way you love someone you have known long enough to see clearly. That love does not require you to pretend he was something he wasn't. And it does not require you to protect him from the truth now that he can no longer be hurt by it.",
        memories: [
            { text: "Will told you about Margaret years ago — only about the affair, nothing else. He said it was over and it had meant nothing. You chose to believe the first part. Tonight you are not sure about the second.", unlockedBy: "affair" },
            { text: "You remember a night perhaps fifteen years ago when Will came home very late and sat in the parlor alone for a long time. You watched from the stairs. He had a look on his face you had never seen before and have never been able to name. You think you understand it now.", unlockedBy: "margaretsLetter", tier: 2 },
            { text: "You have known for years that Will kept something locked in his study that he never discussed. You assumed it was business. You did not ask. You are thinking about that assumption now.", unlockedBy: "forgedDocs", tier: 2 }
        ],
        canShare: [
            { text: "I knew my spouse. I also know that people are capable of being more than one thing at once. What is coming out tonight does not erase forty years — it complicates them.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your spouse of forty years (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Your child" },
            { name: "David Richardson", relation: "Your niece/nephew" },
            { name: "Vivienne Ashford", relation: "Your niece/nephew" },
            { name: "Dorothy Wells", relation: "Your great-aunt — the family elder" },
            { name: "Charlotte Waverly", relation: "Close friend" }
        ],
        items: []
    },

    // ============================================================
    // RAYMOND HAMMOND — Accounting Skill
    // ============================================================
    "raymond_hammond": {
        name: "Raymond Hammond",
        nameVariants: { female: "Rachel Hammond", male: "Raymond Hammond" },
        publicDesc: "Business Manager at Thoreson Toys for fifteen years. Handles operations, vendor relationships, and day-to-day management.",
        hiddenSkills: ["Accounting"],
        note: "You know about the European deal and the investor losses. Don't lead with it — let it come out when the financial records surface. When it does, be straightforward. You're not hiding anything. You were deliberately kept away from the books — and tonight you finally understand why.",
        backstory: "You have been the business manager at Thoreson Toys for fifteen years. You handle the practical side of the company — vendor relationships, shipping logistics, staffing, facilities, the ten thousand details that keep an operation running. You studied accounting before moving into operations management, and you understand numbers the way some people understand weather — intuitively, structurally, able to sense when something doesn't add up before you can fully articulate why.\n\nWilliam Thoreson hired you personally and you have always respected him. He was demanding but fair, and he trusted you with the daily operation completely — with one conspicuous exception. He kept the financial ledgers himself. Locked in his office. In fifteen years, you have never had full access to the company's core accounting records. You assumed it was just how he operated. Now you understand it was deliberate. He couldn't let an accountant look too closely at those numbers.\n\nSix months ago something changed. A European distribution deal collapsed and the company took a significant loss. Will became quieter, more private. Two investors began sending demand letters. Will kept stalling them. Tonight was supposed to be a resolution of some kind. Now Will is dead and you are realizing there may be quite a lot about this company you were deliberately kept away from.\n\nYou are a person who takes pride in competence. You have run a clean operation for fifteen years. You are beginning to understand that this competence was a useful shield for Will — if the operations were airtight, nobody looked past them at the money. You were not complicit. But you were convenient.",
        memories: [
            { text: "Will asked you once to retrieve a box of old contracts from storage — early company documents, pre-1910. He went through them alone and had you return them the same day. He seemed shaken afterward in a way you had never seen before. That was three weeks ago.", unlockedBy: "forgedDocs", tier: 2 },
            { text: "In fifteen years of working for this company, Will never once let you touch the core books. You thought it was a control thing. It occurs to you now that it was something else entirely — and that an accountant looking at those numbers would have found what the ledger is showing right now.", unlockedBy: "ledger", tier: 1 }
        ],
        canShare: [
            { text: "I've worked at Thoreson Toys for fifteen years, but Will always did the core books himself. Kept the ledgers locked in his office. I never had access — and I'm beginning to understand why.", unlockedBy: null },
            { text: "Something happened about six months ago — a European deal fell apart. He got very quiet after that.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your employer of fifteen years (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Family attorney — worked together on company matters" },
            { name: "Marcus Brennan", relation: "Investor — seen at company functions" },
            { name: "Victoria Ashworth", relation: "Investor — seen at company functions" }
        ],
        items: []
    },

    // ============================================================
    // MARCUS BRENNAN — Banking Skill
    // ============================================================
    "marcus_brennan": {
        name: "Marcus Brennan",
        nameVariants: { female: "Margaret Brennan", male: "Marcus Brennan" },
        publicDesc: "A successful Dallas businessperson with a significant stake in Thoreson Toys. Analytical, measured, and protective of their money.",
        hiddenSkills: ["Banking"],
        backstory: "You inherited a modest sum from your family and turned it into a considerably larger one through careful investments and a talent for reading people that has served you well in rooms where most people are too busy talking to listen. You have been invested in Thoreson Toys for four years. The returns were excellent until they weren't.\n\nYou spent a decade in banking before moving to independent investment — you know how to read a balance sheet, and you know what it looks like when someone has structured accounts to obscure something.\n\nSix months ago Will Thoreson made a reckless decision with company capital and the European deal evaporated. You and Victoria Ashworth lost real money. You are not a person who loses money quietly. You have been pursuing answers for months through proper channels. Will kept putting you off.\n\nYou came tonight expecting a confrontation. Instead you walked into a murder. You are annoyed, you are composed, and you are paying very close attention to everything happening in this room.\n\nYou trusted your read of Will Thoreson. You are good at reading people. Tonight you are doing the uncomfortable work of deciding whether you missed something or whether Will simply hid it very well. Both possibilities trouble you in different ways.",
        memories: [
            { text: "Will called you personally about a month before tonight to apologize for the delays on the investor matter. He sounded genuinely tired — not defensive the way people usually sound when they owe you money, but something older than that. Like a person settling accounts they'd been avoiding for a long time.", unlockedBy: "ledger" },
            { text: "You have a background in banking. Looking at that ledger now — the monthly payments to T.H., the routing, the timing — you recognize exactly what that structure is. Someone was being paid off. Quietly, consistently, for decades. The question is what for.", unlockedBy: "secretHeir", tier: 1 }
        ],
        canShare: [
            { text: "Yes, the European deal lost money. Yes, I was angry. But I'm a businessperson — dead people don't write checks.", unlockedBy: null }
        ],
        relationships: [
            { name: "Victoria Ashworth", relation: "Fellow investor — coordinated on Thoreson matters for years" },
            { name: "Raymond Hammond", relation: "The business manager" },
            { name: "William Thoreson Sr.", relation: "Company founder (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "The family attorney" }
        ],
        items: []
    },

    // ============================================================
    // VICTORIA ASHWORTH — No Skill
    // ============================================================
    "victoria_ashworth": {
        name: "Victoria Ashworth",
        nameVariants: { female: "Victoria Ashworth", male: "Victor Ashworth" },
        publicDesc: "A sharp businessperson and Thoreson Toys investor. Active in Dallas society with a keen eye for detail.",
        hiddenSkills: [],
        backstory: "You come from old Dallas money — not a fortune, but enough to open the right doors and enough sense to know which ones to walk through. You have been a shareholder in Thoreson Toys for six years and an active presence in Dallas business circles for longer than that. You know how companies work. You know how people who run companies work. You have made a career of the difference between the two.\n\nYou and Marcus Brennan have coordinated on Thoreson investments for years. Marcus handles the numbers. You handle the people. Between the two of you, very little gets past unnoticed — or so you believed until six months ago, when the European deal collapsed and eight thousand dollars of investor capital evaporated overnight. You have been asking questions since then. Will kept putting you off. Tonight was supposed to be the night you finally got answers.\n\nYou came expecting a confrontation with a living person. Instead you are sitting in a room with a dead one, and the questions you had about the money are rapidly being replaced by considerably larger questions about everything else.\n\nYou have been accused, more than once, of being cold. You prefer the word precise. You do not make decisions based on what you wish were true. You do not let yourself be charmed out of a sound analysis. You do not extend trust because someone seems trustworthy — you extend it because they have demonstrated it, incrementally, over time.",
        memories: [
            { text: "You have invested in more than a dozen companies over the past fifteen years. You do thorough due diligence every time. You never found anything irregular in the Thoreson books. That is either because Will was very careful or because you didn't look in the right places. You are not sure which possibility bothers you more.", unlockedBy: "ledger", tier: 2 },
            { text: "Dorothy Wells mentioned once, years ago, that she remembered the Thoreson company under a different name in its early days. You thought nothing of it at the time. You are thinking about it now.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "Yes, we lost money. Yes, we wanted answers. But killing someone over a business deal? I take people to court. I don't take their lives.", unlockedBy: null }
        ],
        relationships: [
            { name: "Marcus Brennan", relation: "Fellow investor and business ally" },
            { name: "Raymond Hammond", relation: "The business manager" },
            { name: "William Thoreson Sr.", relation: "Company founder (deceased)" },
            { name: "Dorothy Wells", relation: "Friend from society circles" }
        ],
        items: []
    },

    // ============================================================
    // ELIZABETH MONROE — No Skill (cut first if player count low)
    // ============================================================
    "elizabeth_monroe": {
        name: "Elizabeth Monroe",
        nameVariants: { female: "Elizabeth Monroe", male: "Edward Monroe" },
        publicDesc: "A fixture of Dallas society and the life of every party. Knows everyone, remembers everything, and makes it all look effortless.",
        hiddenSkills: [],
        note: "You are the social lubricant of this room. You make people comfortable enough to talk. Use that. You know more than anyone expects you to.",
        backstory: "You are forty-seven years old and you have been the most enjoyable person in the room for approximately three decades running. This is not an accident. It is a skill you have cultivated with the same discipline other people put into needlepoint, and you are considerably better at it than any of them were at that.\n\nYou grew up in Dallas with enough money to get into the right rooms and enough charm to stay in them. You have known the Thoresons for twenty years — Will and Eleanor through charity boards and dinner parties and the general overlap of people who run in the same circles in a city this size. You are not family. You are something more useful: a friend of the family who is invited to everything and expected to keep nothing serious for longer than it takes to find the next drink.\n\nThat reputation is mostly deserved. You do love a good evening. What people tend to underestimate is that you are also paying very close attention. You have spent twenty years at Dallas dinner parties — you know which fortunes are real and which are performance, which families are holding and which ones are one bad year from coming apart. You know these things not because you went looking for them but because people tell you things. You are easy to talk to. You do not seem like someone who files information away.\n\nYou have heard the name Hartley before, a long time ago, at a gathering where someone had too much to drink and said something they immediately regretted. You did not think much of it at the time. You are thinking about it now.\n\nYour goal tonight, as always, is to have a good time. You are flexible about what that looks like.",
        memories: [
            { text: "You remember when the newspaper ran a brief notice about Robert Hartley's death in 1910. Two inches of column, buried inside. The investigation had closed in under a day. At the time you thought nothing of it. You are thinking quite a lot about it now.", unlockedBy: "forgedDocs", tier: 2 },
            { text: "Will Thoreson was charming, generous, and excellent company for twenty years. You are sitting here realizing you mistook all of that for goodness. They are not the same thing. You have made that mistake before. You are annoyed with yourself.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "I've been in this city's social circles for thirty years. The number of things that everyone knows but nobody says out loud would fill a library.", unlockedBy: null }
        ],
        relationships: [
            { name: "Eleanor Thoreson", relation: "Close friend of twenty years" },
            { name: "William Thoreson Sr.", relation: "Social acquaintance of twenty years (deceased)" },
            { name: "Dorothy Wells", relation: "Fellow longtime fixture of Dallas society" },
            { name: "Victoria Ashworth", relation: "Friendly acquaintance from social circles" }
        ],
        items: []
    }

};
