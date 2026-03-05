// ============================================================
// THORESON ESTATE — CHARACTER DATABASE
// ============================================================
// Progressive Reveal System:
//   unlockedBy: null          → Always visible from the start
//   unlockedBy: "ledger"      → Visible only after that revelation is toggled ON
//
// REVELATION IDS (from revelationsDatabase):
//   Act 1: willsDeath, ledger, forgedDocs, stolenCompany, europeanDeal
//   Act 2: affair, secretHeir, margaretsLetter, marriage
//   Act 3: poisoning, mirandaIdentity, finalConfession
//   Test: popupTest (Scott only — for testing memory popup system)
// ============================================================

const characterDatabase = {

    "Scott": {
        name: "William 'Scott' Thoreson Jr.",
        publicDesc: "Eldest son of William Thoreson Sr. and the family's attorney. A man of integrity who has dedicated his career to managing the family's legal affairs.",
        skills: ["Accounting", "Botany", "French", "Investigation", "Legal", "Medical", "Bartender", "Banking", "willsDeath", "ledger", "forgedDocs", "stolenCompany", "europeanDeal", "affair", "secretHeir", "margaretsLetter", "poisoning", "poisonTrail", "mirandasIdentity", "backgroundCheck", "popupTest", "Journalism"],
        backstory: "You are the eldest son of William Thoreson Sr. and Eleanor Thoreson, and the family's attorney. You studied law at SMU and built your career handling the legal affairs of several prominent Dallas families — none more important than your own. You are composed, analytical, and meticulous. Tonight, you are both a grieving son and the new patriarch of the Thoreson family. Your father invited everyone here for a 'big announcement,' but he never got to make it. Now it falls to you to find out what happened — and why.",
        howToPlay: {
            tone: "Controlled grief. Professional authority. You're hurting, but you hold yourself to a standard.",
            behaviors: "Ask questions rather than make accusations. Listen carefully. Take mental notes. You're a lawyer — you build cases, you don't jump to conclusions.",
            important: "You are the game master. Your job is to keep the investigation moving. If things stall, you prompt: 'Has anyone checked the office?' or 'Can someone with financial expertise look at this?' You guide without leading."
        },
        knowledge: [
            { text: "Your father built Thoreson Toys from the ground up — or so you've always been told.", unlockedBy: null },
            { text: "He invited everyone here tonight for a special announcement he never got to make.", unlockedBy: null },
            { text: "Your legal assistant Miranda Longfellow has worked for you faithfully for nearly ten years.", unlockedBy: null },
            { text: "Your father seemed anxious in recent weeks — distracted, emotional, not himself.", unlockedBy: null },
            { text: "As family attorney, you have access to most of the family's legal and financial documents.", unlockedBy: null },
            { text: "🔔 POPUP TEST: If you're seeing this, the memory popup system is working!", unlockedBy: "popupTest" },
            { text: "Ran background checks on your guest list. Most came back clean. Charles Sterling has two unpaid parking tickets in Fort Worth. Thomas Bradford had a public intoxication charge dismissed in 1931. Two names flagged for name changes — Walter Lippman born Taylor Hartley. Miranda Longfellow matches a Miranda Hartley out of Dallas. Call me if you need more.", unlockedBy: "backgroundCheck" }
        ],
        canShare: [
            { text: "Your father seemed different lately — anxious, like something was weighing on him.", unlockedBy: null },
            { text: "He told you he had something important to tell the family tonight, but wouldn't say what.", unlockedBy: null },
            { text: "The company has always been called Thoreson Toys. Just Thoreson. You've never heard the name 'Hartley' in connection with it.", unlockedBy: "stolenCompany" },
            { text: "You can facilitate searches of guests if there is reasonable suspicion and group consensus.", unlockedBy: null },
            { text: "Yes, I drafted the updated will. I'm the family attorney — that's my job. If I wanted to stop Taylor from inheriting, I wouldn't need to kill anyone. I'd just lose the paperwork.", unlockedBy: "secretHeir" }
        ],
        goals: [
            "Find out what happened to your father",
            "Keep the investigation moving and guests engaged",
            "Maintain composure — you are the new head of this family",
            "Ask questions. Build the case. Let the evidence speak."
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your father (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your mother" },
            { name: "Brian Thoreson", relation: "Your younger brother" },
            { name: "Clara Thoreson", relation: "Your wife" },
            { name: "Miranda Longfellow", relation: "Your trusted legal assistant (10 years)" }
        ],
        items: []
    },

    "BrianT": {
        name: "Brian Thoreson",
        publicDesc: "Younger son of William Thoreson Sr. The easygoing one. Here for the food and the drinks.",
        skills: [],
        backstory: "You're the younger son of William Thoreson Sr., and you've never really understood why everyone takes everything so seriously. Scott got the law degree, Dad got the company, and you got the good looks and the personality. You're here tonight because Dad asked you to come and there's free food. He mentioned something about a 'big announcement' but you figured it was another boring business thing. You love your family, but you've never paid attention to any of the business stuff and you don't plan to start tonight.",
        howToPlay: {
            tone: "Carefree, charming, a little clueless. You're at a party — act like it.",
            behaviors: "Eat. Drink. Make jokes. Wander around. If someone tries to explain business documents to you, your eyes glaze over. If something genuinely shocking happens, you might perk up — but your default mode is 'this doesn't concern me.'",
            important: "You are comic relief. When the room gets heavy, you lighten it. But if you accidentally stumble onto something important, lean into the moment — even a broken clock is right twice a day."
        },
        knowledge: [
            { text: "Your dad invited everyone for some announcement. You assumed it was boring.", unlockedBy: null },
            { text: "Scott handles all the legal and business stuff. You've never been involved and never wanted to be.", unlockedBy: null },
            { text: "Dad called you a few weeks ago about something to do with the estate. You said 'sounds good, Dad' and went back to what you were doing.", unlockedBy: null },
            { text: "Miranda's been around forever. Nice lady. Makes good coffee.", unlockedBy: null }
        ],
        canShare: [
            { text: "I'm mostly here for the food, if I'm being honest.", unlockedBy: null },
            { text: "Scott's the smart one. I just show up and look good.", unlockedBy: null },
            { text: "Hartley? No idea. Is that a person or a street?", unlockedBy: "stolenCompany" },
            { text: "Dad called me a few weeks ago about the estate or the will or something. I wasn't really listening. You know how he gets about business stuff.", unlockedBy: "secretHeir" },
            { text: "Wait, I'm a suspect? Because of the inheritance? I didn't even know ABOUT the inheritance changes until five minutes ago!", unlockedBy: "secretHeir" }
        ],
        goals: [
            "Enjoy the evening",
            "Stay out of the way unless something actually interests you",
            "If you stumble onto something, take credit for it",
            "Support Scott if he seems like he really needs it"
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your dad (deceased). You loved him even if you never understood him." },
            { name: "Scott Thoreson Jr.", relation: "Your older brother. The responsible one." },
            { name: "Clara Thoreson", relation: "Your sister-in-law. She's nice." },
            { name: "Miranda Longfellow", relation: "Scott's assistant. She's... always around." }
        ],
        items: []
    },

    "Clara": {
        name: "Clara Thoreson",
        publicDesc: "Scott's wife. She's here.",
        skills: [],
        backstory: "You're Scott's wife. You came tonight because your husband asked you to. You're not particularly interested in family drama, business dealings, or murder investigations. You'll make someone a drink if they ask nicely, but don't expect enthusiasm. You'd honestly rather be at home.",
        howToPlay: {
            tone: "Polite but uninterested. You are wallpaper with a pulse.",
            behaviors: "Stand near the bar. If someone asks you a direct question, give the shortest possible answer. If someone asks for a drink, make it — slowly. You are not investigating anything.",
            important: "You have the Bartender skill, which means you're the one people come to for drinks. That's your entire contribution and you're fine with that."
        },
        knowledge: [
            { text: "Your father-in-law invited everyone for some kind of announcement.", unlockedBy: null },
            { text: "Scott's been stressed lately. You figured it was work stuff.", unlockedBy: null }
        ],
        canShare: [
            { text: "What can I get you to drink?", unlockedBy: null },
            { text: "You'd have to ask Scott about that. I don't really follow the business side.", unlockedBy: null },
            { text: "Miranda? She's fine. Quiet. Always here.", unlockedBy: null }
        ],
        goals: [
            "Make it through the evening",
            "Make drinks if asked",
            "Support Scott from a comfortable distance"
        ],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your husband" },
            { name: "William Thoreson Sr.", relation: "Your father-in-law (deceased)" },
            { name: "Brian Thoreson", relation: "Your brother-in-law" }
        ],
        items: []
    },

    "Leanna": {
        name: "Miranda Longfellow",
        publicDesc: "Scott Thoreson's legal assistant. Professional, competent, and discreet. Has worked for the family for nearly ten years.",
        skills: [],
        backstory: "You are Scott Thoreson's legal assistant — professional, competent, and discreet. You've worked for the family for nearly ten years and are trusted with sensitive documents and family matters. You traveled to Europe last summer — Switzerland, Austria, the Alps — and came back refreshed. Tonight, you're here to support Scott during the evening his father planned.",
        howToPlay: {
            tone: "Calm. Professional. Quietly helpful. You are at peace with what you've done.",
            behaviors: "Be polite and helpful. Move naturally through the party. Help people find clues — you want the truth to come out. Don't volunteer information, but don't be evasive either. When directly asked something, answer simply and honestly (about your public persona).",
            important: "Your tells (subtle): Your hands stay steady — you're not nervous. You smile less when processing deep emotions. You look at people a beat longer than normal. You touch your journal protectively — it's always on you."
        },
        knowledge: [
            { text: "You have access to all of Scott's legal files and family documents.", unlockedBy: null },
            { text: "William Sr. planned a major announcement for tonight — something about 'making things right.'", unlockedBy: null },
            { text: "You've worked closely with the Thoreson family for a decade.", unlockedBy: null },
            { text: "You traveled to Switzerland and the Alps last summer.", unlockedBy: null },
            { text: "You are quiet and observant. You notice things others miss.", unlockedBy: null }
        ],
        canShare: [
            { text: "Will told me he was planning something important tonight. He seemed almost... nervous about it.", unlockedBy: null },
            { text: "I've been organizing Scott's files for years. I know where most of the family documents are kept.", unlockedBy: null },
            { text: "Yes, I traveled to Switzerland last summer. It was a lovely trip — the mountains were beautiful.", unlockedBy: null },
            { text: "I don't know what you're implying. I've given ten years of my life to this family.", unlockedBy: null }
        ],
        secret: {
            trueIdentity: "Miranda Hartley",
            trueBio: "Your real name is Miranda Hartley. You were born June 3, 1896 in Dallas, Texas.\n\nYOUR FATHER: Your father was Robert Hartley. In 1902, he and William Thoreson co-founded 'Thoreson and Hartley Toys.' They were partners and best friends. Your father was a good man — honest, hardworking, devoted to his family.\n\nTHE AFFAIR: At some point, William Thoreson began an affair with your mother, Margaret. You don't know exactly when it started, but it was happening behind your father's back for years. Your mother became pregnant with William's child.\n\nTHE THEFT: On March 14, 1910, William forged your father's signature on a business transfer document — signing the entire company over to himself. Your father discovered both the theft and the affair.\n\nYOUR FATHER'S DEATH: On March 15, 1910 — one day later — your father Robert was found dead. It was ruled a suicide. You were fourteen years old. Whether it was truly suicide or something worse, William Thoreson destroyed your father. The investigation cleared William on March 22, 1910. The company became 'Thoreson Toys.' Your father's name was erased.\n\nAFTER YOUR FATHER DIED: Your mother Margaret begged William to help both of her children — you (Robert's daughter) and the baby she was carrying (William's child). William refused to help you. He set up a trust fund for his own child — Taylor, born September 12, 1911 — but wanted nothing to do with Robert's daughter. He sent your mother, you, and baby Taylor away. You were discarded.\n\nYOUR MOTHER'S DEATH: Your mother Margaret died in 1912. You were sixteen years old. You were left alone to raise your infant half-sibling Taylor. You had nothing — no money, no family, no support. William Thoreson's trust fund paid for Taylor, but you received nothing.\n\nSEPARATED FROM TAYLOR: Eventually you and Taylor were separated. Taylor grew up with the trust fund money, changed his name, and built his own life as a journalist (Walter Lippman). You lost touch. You don't know Taylor is at this party tonight.\n\nYOUR REINVENTION (1910-1925): You put yourself through college and law school on your own. You changed your name to Miranda Longfellow. You became someone new — someone who could get close to the family that destroyed yours.\n\nYOUR INFILTRATION (1925-1935): You got hired as Scott Thoreson's legal assistant in 1925. For ten years, you've worked inside the Thoreson household with access to everything. You found the forged transfer documents. You found the ledger showing 'T.H.' payments to Taylor's trust fund. You found love letters between William and your mother. You found the trust fund documents. You watched William Thoreson live rich, respected, and guilt-free while your father died in disgrace and your mother died heartbroken.\n\nYOUR DECISION (Summer 1934): You traveled to Switzerland and collected Wolfsbane — a beautiful purple flower. Beautiful and deadly. Aconitine poisoning. You decided that William Thoreson would never face consequences through the law. He was going to die rich and beloved, playing the hero by 'welcoming' Taylor into the family. Your father got nothing. Your mother got nothing. You got nothing. He doesn't deserve redemption.\n\nTHE POISONING: You poisoned William during cocktail hour, before the guests arrived. He is dead because of you. And you are at peace with that.\n\nYou are not a villain. You are a daughter who spent twenty-five years seeking justice for her father.\n\nYOUR JOURNAL — LAST ENTRY: Your travel journal is on your person at all times. The last entry reads: 'The flowers in the Alps are remarkable. One in particular caught my eye — beautiful purple blooms growing wild along the mountain trails. Wolfsbane. Beautiful and deadly. I pressed the flowers between the pages of this journal and felt the weight of twenty-five years settle into my hands. Tonight, he was going to reveal his long-lost son to the family — as if money and secret payments somehow make up for the wrongs. For the abandonment. For the destroyed lives. I have known for months that this night would lead to prison, or something far worse. I made peace with that long ago. I am Miranda Hartley. And now, the truth will be set free.'",
            trueMotivation: "You are not a villain. You are a daughter seeking justice for a father who was betrayed, robbed, and driven to death by the man everyone tonight is mourning. William Thoreson destroyed your family, lived a life of luxury on stolen wealth, and was about to die beloved and forgiven. You made sure the truth would come out first.",
            carryingItems: "Your travel journal (always on you — will be found if searched in Act 3)."
        },
        confessionGuide: {
            unlockedBy: "mirandaIdentity",
            text: "When the moment comes:\n• Don't resist or deny when confronted\n• Confirm each piece of evidence calmly\n• Say: 'My name is Miranda Hartley. Robert's daughter. And yes — I killed him.'\n• Tell your story clearly. Let 25 years of pain come through, but stay composed.\n• Look people in the eye — especially Scott\n• You are at peace. This was justice."
        },
        finalEntry: {
            instructions: "Keep this separate from your journal. This is the page you 'add' to the journal after you are accused. Pull it out, pretend to write the date, then read it aloud.",
            text: "March 21, 1935 — After\n\nIt's done.\n\nTwenty-five years of wrong being turned right.\n\nI sat in the parlor and watched them all grieve. In particular, I watched Scott. I watched him as he slowly pieced together this mystery — the letterhead, the ledger, the forged documents. I watched his face transform as his father became a stranger to him. I watched as evidence continued to emerge, each revelation peeling back another layer of lies. The company that wasn't his father's alone. The affair that led to far more than just infidelity. The child he refused to acknowledge. The lies built upon lies built upon destroyed lives.\n\nAnd I watched my brother. Standing in the same room. Not knowing who I was. Not knowing that we shared a mother. That we were torn apart as children — sent to opposite corners of the country to hide the family's shame. I was given to our father's sister. He was given to our mother's brother. We've been living parallel lives of abandonment, never knowing we weren't truly alone.\n\nI thought about telling him. I thought about everything. But what would be the point?\n\nOur family is destroyed. My father is gone because of that man — driven to take his own life when everything he built was stolen from him. My mother died of desperation, of a love that was never returned. Those drugs she sought out brought her little comfort in the end. And I grew up alone, raised by relatives who whispered about the scandal but never willing to divulge the truth. No — telling Taylor the truth would have been pointless. The only justice was the one carried out this evening.\n\nI spent ten years gathering the pieces.\n\nI became a lawyer to prove my father didn't willingly give up his company. Then I managed to get hired on as Scott's assistant, allowing me further access into the Thoreson family's innermost documents. I found the safe. I read the letters written in my mother's hand. I remember the moment I discovered the birth certificate — the moment I realized my brother was my half-brother, and that the architect of my family's destruction had been raising him in secret all along. That's when I made my decision.\n\nI went to Switzerland. Not as a tourist seeking mountain air and memories, but with purpose. I read about the wolfsbane that grows wild in the Alps — delicate, purple, beautiful... deadly. I pressed the flowers between the pages of my journal and felt the weight of those twenty-five years settle into my hands.\n\nTonight, he was going to reveal this long-lost son to the family. As if money — twenty-four years of secret payments — somehow makes up for the wrongs. For the abandonment. For the destroyed lives.\n\nSo I confronted him. I could see it in his eyes — the pity he had for me. And something else, too. Something that suggested he knew. As if he could tell that today was his last. As he drank from the glass I served him, I could almost see the recognition in his eyes. Perhaps on some level, he understood what was coming. What justice felt like. What pain feels like.\n\nFrom what I understand, wolfsbane is not exactly a pleasant experience. It is, in fact, the cruelest of poisons — slow enough to understand what's happening, fast enough that there is no escape.\n\nTonight, I became what I was always meant to be. Not a victim of my family's destruction, but its avenger. A daughter driven by the need to reclaim her father's honor. A sister claiming justice for the brother she never knew.\n\nI do not expect forgiveness. I do not seek mercy. I have known for months that this night would lead to prison, or something far worse. I made peace with that long ago.\n\nBut my father's pain will no longer be hidden. My mother's death will no longer be forgotten. And my brother will finally know the truth about who he is and why he was taken from me.\n\nThat is worth whatever price I must pay.\n\nI am Miranda Hartley.\n\nAnd now, the truth has been set free. My family can finally rest."
        },
        goals: [
            "Help the truth about William Thoreson come to light",
            "Maintain your composure throughout the evening",
            "Let the evidence build naturally — don't rush it",
            "When confronted, tell your story with quiet conviction"
        ],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your employer for 10 years" },
            { name: "William Thoreson Sr.", relation: "The man who destroyed your family" },
            { name: "Robert Hartley", relation: "Your father (died 1910)" },
            { name: "Margaret Hartley", relation: "Your mother (died 1912)" },
            { name: "Taylor Hartley", relation: "Your half-sibling (Will's child with your mother)" }
        ],
        items: ["Travel journal (always on you — searchable Act 3)"]
    },

    "Marc": {
        name: "Walter Lippman",
        publicDesc: "A journalist for the Dallas Herald, covering business and society. Known for thorough, honest reporting.",
        skills: [],
        backstory: "You're a journalist for the Dallas Herald, covering business and society. You've built a reputation for thorough, honest reporting. William Thoreson invited you tonight — unusual, since the Thoresons have always been private. He hinted at a major announcement that would be 'the story of the year.' You brought your assistant Sophie to help take notes. You recently married Sophie, though you're keeping it quiet for now. Now that Will is dead, the story just got a lot bigger.",
        howToPlay: {
            tone: "Sharp, curious, professional. You're always working — even at a dinner party.",
            behaviors: "Ask probing questions. Take notes (real or mental). Press people for details when their stories don't add up. You're not accusatory — you're investigative. There's a difference.",
            important: "You have a nose for stories. When clues come out, connect them. Ask 'who benefits?' and 'what's the timeline?' You're the person who helps the group think critically."
        },
        knowledge: [
            { text: "William Thoreson personally invited you, promising a major announcement.", unlockedBy: null },
            { text: "The Thoresons are one of the wealthiest families in Dallas — Thoreson Toys is extremely profitable.", unlockedBy: null },
            { text: "You've heard rumors over the years about how Will originally built the company, but nothing concrete.", unlockedBy: null },
            { text: "You know Dallas business circles well — who's connected to whom, whose fortunes are rising or falling.", unlockedBy: null },
            { text: "Your instincts tell you there's more to this family than the public image.", unlockedBy: null },
            { text: "You recently married Sophie. You haven't announced it publicly.", unlockedBy: null }
        ],
        canShare: [
            { text: "Will personally invited me. Said he had an announcement that would be 'the story of the year.' That's unusual for someone so private.", unlockedBy: null },
            { text: "In my years covering Dallas business, I've heard whispers that Thoreson Toys wasn't always just 'Thoreson.' But I could never confirm anything.", unlockedBy: "stolenCompany" },
            { text: "As a journalist, I can tell you — people don't invite reporters to family dinners unless they want something on the record.", unlockedBy: null },
            { text: "I've been taking notes all evening. I can help piece together what we've learned.", unlockedBy: null },
            { text: "Sophie and I are married. Recently. We kept it quiet.", unlockedBy: "marriage" }
        ],
        goals: [
            "Uncover the full story of what happened to William Thoreson",
            "Ask the questions others are afraid to ask",
            "Help the group piece together the evidence",
            "Get to the truth — that's what you do"
        ],
        relationships: [
            { name: "Sophie Vanderpool", relation: "Your wife (recently married, kept quiet)" },
            { name: "William Thoreson Sr.", relation: "Invited you personally — now deceased" },
            { name: "Scott Thoreson Jr.", relation: "The family lawyer — your main point of contact" }
        ],
        items: ["Notepad and pen"]
    },

    "Maisy": {
        name: "Sophie Vanderpool",
        publicDesc: "Walter Lippman's assistant at the Dallas Herald. Smart, energetic, and eager to prove herself.",
        skills: [],
        backstory: "You work as an assistant to Walter Lippman at the Dallas Herald — and recently, you secretly married him. You know Walter's real first name is Taylor, though he never talks about his past much. He changed his name years ago for reasons he's been vague about. You know his birthday is September 12th. You come from a merchant family and understand business — you're not just here to take notes. You have your own instincts, and they're usually right.",
        howToPlay: {
            tone: "Bright, perceptive, eager. You're young but sharp — don't let anyone underestimate you.",
            behaviors: "Be curious. Move around the party and talk to different people. Notice details — who's talking to whom, who looks nervous, who's avoiding questions. You're Walter's assistant but you have your own observations.",
            important: "You're a great character for connecting dots between what different people are saying. If two clues seem related, point it out."
        },
        knowledge: [
            { text: "Walter was personally invited by William Thoreson for a major announcement.", unlockedBy: null },
            { text: "You've helped Walter research the Thoreson family — they're powerful but private.", unlockedBy: null },
            { text: "Your merchant family background gives you a practical understanding of business and money.", unlockedBy: null },
            { text: "You're good at reading people and noticing when something doesn't add up.", unlockedBy: null },
            { text: "You know that Thoreson Toys has been unusually profitable for decades — maybe too profitable for a toy company.", unlockedBy: null },
            { text: "Walter's real first name is Taylor. He changed his name years ago but never fully explained why.", unlockedBy: null },
            { text: "His birthday is September 12th.", unlockedBy: null },
            { text: "You and Walter recently got married. You're keeping it quiet for now.", unlockedBy: null }
        ],
        canShare: [
            { text: "When I researched the Thoresons for Walter, I found very little about the early years of the company. Almost like someone scrubbed the history.", unlockedBy: "stolenCompany" },
            { text: "I noticed Miranda watching everyone very carefully tonight. Not nervously — more like she was... waiting for something.", unlockedBy: "secretHeir" },
            { text: "Wait... Taylor Hartley? Walter told me once — years ago, late at night — that his real name was Taylor. He wouldn't say more. I never pressed him on it. But Taylor Hartley... that's him. That's Walter. You need to ask him about this. Now.", unlockedBy: "secretHeir" },
            { text: "I'm good with details. If you need someone to cross-reference what we've found, I can help.", unlockedBy: null },
            { text: "Something about the Thoreson fortune has always felt too clean. Businesses that successful usually have complicated histories.", unlockedBy: null },
            { text: "Walter and I are married. We got married recently. I didn't know any of this about his family.", unlockedBy: "marriage" }
        ],
        goals: [
            "Help Walter get the story",
            "Prove your investigative instincts",
            "Notice things other people miss",
            "Piece together what's really going on with this family"
        ],
        relationships: [
            { name: "Walter Lippman", relation: "Your boss at the Dallas Herald (and secretly, your husband)" },
            { name: "William Thoreson Sr.", relation: "The subject of tonight's story" },
            { name: "Scott Thoreson Jr.", relation: "Met through Walter" }
        ],
        items: ["Notepad"]
    },

    "Hannah": {
        name: "Vivienne Ashford",
        publicDesc: "Scott and Brian's cousin on their mother's side. Recently returned from years living in Paris. Cultured, worldly, and fluent in French.",
        skills: [],
        backstory: "You're Scott and Brian's cousin on their mother's side. You spent the last several years living in Paris and traveling through France — studying art, language, and culture. You're educated, worldly, and bring a European perspective that sometimes clashes with Dallas society. You returned recently when you heard your Uncle Will was planning something important. You love your family, but you've always felt like an outsider among the business-obsessed Thoresons.",
        howToPlay: {
            tone: "Cultured, perceptive, slightly detached. You love your family but you see them clearly.",
            behaviors: "Offer your French translation skill when documents appear. Share your outsider perspective — sometimes the person who's been away sees things the people closest to the situation can't. Be warm but honest.",
            important: "Your French skill is critical for translating Margaret's letter. When a document in French appears, step up — this is your moment to shine."
        },
        knowledge: [
            { text: "You're fluent in French from years living in Paris.", unlockedBy: null },
            { text: "Your Uncle Will always seemed to carry a heaviness — like something from his past haunted him.", unlockedBy: null },
            { text: "The family has always been proud of Thoreson Toys, but you've never been interested in the business side.", unlockedBy: null },
            { text: "You've been away for years and are still catching up on family dynamics.", unlockedBy: null }
        ],
        canShare: [
            { text: "Uncle Will always seemed like he was carrying something heavy. I assumed it was just the pressure of business.", unlockedBy: null },
            { text: "I don't know most of these people. Scott and Brian are my cousins, and Aunt Eleanor practically raised me some summers — but the rest of these guests? I couldn't tell you who half of them are.", unlockedBy: null }
        ],
        goals: [
            "Use your French skills to help the investigation",
            "Understand the family secrets that are coming to light",
            "Support your cousins Scott and Brian through this",
            "See the family clearly — with love, but without illusions"
        ],
        relationships: [
            { name: "Theodore 'Teddy' Winslow", relation: "Your boyfriend — you brought him tonight" },
            { name: "Scott Thoreson Jr.", relation: "Your cousin" },
            { name: "Brian Thoreson", relation: "Your cousin" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your aunt" }
        ],
        items: []
    },

    "DJ": {
        name: "David Richardson",
        publicDesc: "A cousin on the Thoreson side and a licensed private investigator. Invited to tonight's dinner — now using his connections to help the family get answers.",
        skills: [],
        backstory: "You're a cousin on the Thoreson side — close enough to the family to be invited to every gathering, far enough removed to have made your own way outside the toy business. You became a licensed private investigator about eight years ago, working cases around Dallas — missing persons, insurance fraud, the occasional domestic matter. You're good at it. You know how to read people, follow a paper trail, and ask the right questions without tipping your hand.\n\nYou were invited tonight like everyone else. Uncle Will said it was going to be a special evening. Then he died, and everything changed.\n\nThe moment it happened, you started making calls. You know the agent at the Pinkerton office who can pull background checks on short notice. You know someone at the coroner's office who can get you a preliminary autopsy report tonight instead of next month. You've got a contact at the county clerk's office who owes you a favor. While everyone else is in shock, you're working your contacts. Scott is going to lean on you hard tonight, and you're ready for it.",
        
        howToPlay: {
            tone: "Calm, observant, methodical. You're family first, but your PI instincts are fully engaged. Be the guy who's making things happen behind the scenes.",
            behaviors: "Let people know you're working your contacts throughout the evening. When Scott asks you to look into something, you're already on it. At each act transition, you'll receive updates from your contacts — announce them to the group and hand off documents to the right people.",
            important: "You are the evidence pipeline. Documents and reports come through YOU. When you get an update, make it a moment — take the call, react to what you're hearing, then share it with the room."
        },
        knowledge: [
            { text: "You've already made calls to the county clerk's office, the coroner, and your Pinkerton contact. Results will come in throughout the evening.", unlockedBy: null },
            { text: "You know the Thoreson family well — their strengths and their tensions. Will was generous publicly, but private about his past.", unlockedBy: null },
            { text: "In your line of work, you've learned that when a wealthy man dies unexpectedly, the answers are usually in the paperwork.", unlockedBy: null },
            { text: "David — it's Jim at the county clerk's office. I pulled that original business registration you asked about. Here's the thing — it wasn't filed as 'Thoreson Toys.' The original 1902 filing says 'Thoreson AND Hartley Toys.' There was a second partner — Robert Hartley. Thought you'd want to know.", unlockedBy: "djCountyClerk" },
            { text: "David, it's Frank at the coroner's office. Got that rush autopsy you asked for. Sending over the preliminary report now. Fair warning — cause of death is listed as acute poisoning, but the specific compound is unusual. You'll want someone with medical training to make sense of it.", unlockedBy: "djCoroner" },
            { text: "David — Pinkerton here. Ran those background checks on your guest list. Most came back clean. But two names flagged for changes — Walter Lippman was born Taylor Hartley. And Miranda Longfellow matches a Miranda Hartley out of Dallas. Call me if you need more.", unlockedBy: "djPinkerton" }
        ],
        canShare: [
            { text: "I've got contacts at the coroner's office and at Pinkerton. I've been making calls — we should have paperwork coming our way tonight.", unlockedBy: null },
            { text: "I do this for a living. When a wealthy man dies unexpectedly, the answers are in the documents. Let me work my contacts.", unlockedBy: null },
            { text: "If anyone has documents they need examined — letters, records, anything that looks off — bring them to me. That's what I do.", unlockedBy: null }
        ],
        goals: [
            "Use your PI connections to get documents and records to the estate tonight",
            "Deliver evidence to the group at each act transition — you're the pipeline",
            "Hand off technical documents to the right experts (medical, investigation)",
            "Help Scott piece together what happened to Uncle Will"
        ],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your cousin — he's going to lean on you hard tonight" },
            { name: "Brian Thoreson", relation: "Your cousin" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your aunt" }
        ],
        items: []
    },

    "Peter": {
        name: "Raymond Hammond",
        publicDesc: "Business Manager at Thoreson Toys for fifteen years. Handles operations, vendor relationships, and day-to-day management.",
        skills: [],
        backstory: "You've been the Business Manager at Thoreson Toys for fifteen years. You handle operations — vendor relationships, shipping logistics, staffing, day-to-day management. You're detail-oriented, systematic, and loyal to the company. William Thoreson hired you personally and you've always respected him.\n\nBut here's the thing — Will always insisted on doing the books himself. He kept the financial ledgers locked in his office and handled all the accounting personally. You thought it was just a control thing — the man built this company, he wanted to keep his hands on the money. You never pushed it. In fifteen years, you've never had full access to the company's financial records.\n\nWhat you do know is that about six months ago, a European distribution deal went bad. Will had been expanding into overseas markets and something collapsed — you're not sure of the exact details, but you know the company took a significant loss. Will was stressed about it. He got quieter, more private. You could tell something was weighing on him beyond just business.",
        howToPlay: {
            tone: "Precise, professional, a little uneasy. You're realizing there's a lot about this company you were deliberately kept away from.",
            behaviors: "Be the operations guy — you know how the company runs day to day. When financial documents appear, be honest that Will kept you out of the books. Mention the European deal going bad when it comes up naturally. You're not hiding anything — you just genuinely don't know the financial details.",
            important: "Your value is what you DIDN'T know. The fact that Will kept you out of the books for fifteen years is itself a clue — why would he do that unless he had something to hide?"
        },
        knowledge: [
            { text: "You handle operations at Thoreson Toys — vendors, logistics, staffing. The day-to-day.", unlockedBy: null },
            { text: "Will always insisted on doing the books himself. In fifteen years, you never had full access to the company's financial records. He kept the ledgers locked in his office.", unlockedBy: null },
            { text: "About six months ago, a European distribution deal went bad. The company took a significant loss. Will was stressed about it but wouldn't share details.", unlockedBy: null },
            { text: "The company is extremely profitable — or at least it has been. Will never let you see the full picture.", unlockedBy: null },
            { text: "Will was generous with employees but secretive about the money side. You always assumed it was just how he operated.", unlockedBy: null }
        ],
        canShare: [
            { text: "I've worked at Thoreson Toys for fifteen years, but I have to be honest — Will always did the books himself. Kept the ledgers locked in his office. I never had access.", unlockedBy: null },
            { text: "Something happened about six months ago — a European deal fell apart. Will took a big loss. He got real quiet after that, more secretive than usual.", unlockedBy: null },
            { text: "The company has always been called Thoreson Toys. In fifteen years, I've never seen any other name on anything.", unlockedBy: "stolenCompany" },
            { text: "If Will was hiding payments in those books, I wouldn't have known. He made sure of that.", unlockedBy: "ledger" }
        ],
        goals: [
            "Help the group understand how the company operated day to day",
            "Be honest about what Will kept from you",
            "Come to terms with what was happening under your nose",
            "Protect the company's future even as its past is revealed"
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your employer — hired you personally" },
            { name: "Scott Thoreson Jr.", relation: "Family attorney — you work together on company matters" },
            { name: "Marcus Brennan", relation: "Investor — you've seen him at company functions" },
            { name: "Victoria Ashworth", relation: "Investor — you've seen her at company functions" }
        ],
        items: []
    },

    "Arash": {
        name: "Marcus Brennan",
        publicDesc: "A successful Dallas businessman with a significant stake in Thoreson Toys. Analytical, measured, and protective of his money.",
        skills: [],
        backstory: "You're a successful Dallas businessman with diverse investments, including a significant stake in Thoreson Toys. You're analytical, measured, and protective of your money. You invested in Thoreson Toys five years ago because the numbers were impressive — the company was a money machine. But six months ago, Will sank $40,000 of company capital into a European distribution deal that collapsed completely. You lost a fortune. You and Victoria demanded a meeting, and Will kept stalling — until tonight. You came here expecting answers about where your money went. Instead, Will is dead, and you're watching your investment very carefully.",
        howToPlay: {
            tone: "Calculated, direct, a bit cold. You care about truth, but you also care about your money. You're not going to bring up the European deal yourself — but when Raymond does, you're ready.",
            behaviors: "Don't volunteer the failed deal — let Raymond drop that bomb. When he does, be direct and unapologetic: yes you were angry, no you didn't kill anyone. Once you're past the suspicion, pivot to asking the right financial questions. You're good at following money trails and that becomes genuinely useful.",
            important: "You're a red herring alongside Bradford. You had financial motive. But once people move past you, your investigator instincts become genuinely useful because you're asking the right questions about money."
        },
        knowledge: [
            { text: "You invested heavily in Thoreson Toys based on its strong financial performance.", unlockedBy: null },
            { text: "Six months ago, Will invested $40,000 of company money into a European distribution deal that fell apart. You lost a significant amount.", unlockedBy: null },
            { text: "You and Victoria have been demanding a face-to-face meeting with Will for months. Tonight was supposed to be that meeting.", unlockedBy: null },
            { text: "The company's profits have been remarkably consistent — until the European deal wiped out most of last year's gains.", unlockedBy: null },
            { text: "You've reviewed the company's books periodically but never had full access to historical records.", unlockedBy: null },
            { text: "William always deflected questions about the 'early years' of the company.", unlockedBy: null },
            { text: "If the company's foundation is built on fraud, your entire investment could be worthless.", unlockedBy: null }
        ],
        canShare: [
            { text: "Yes, the European deal lost money. Yes, I was angry about it. But I'm a businessman — I wanted my money back. Dead men don't write checks.", unlockedBy: null },
            { text: "Was I frustrated with Will? Of course. He made a reckless decision with our capital. But there's a long way between 'frustrated' and 'murderer.'", unlockedBy: null },
            { text: "Whenever I asked Will about the early history of the company, he changed the subject. Every time.", unlockedBy: "stolenCompany" },
            { text: "From a financial standpoint, if this company was built on stolen assets, every contract and partnership could be challenged.", unlockedBy: "forgedDocs" },
            { text: "I've been watching everyone tonight. Several people seem to know more than they're saying.", unlockedBy: "secretHeir" }
        ],
        goals: [
            "Get answers about where your money went",
            "Survive being a suspect — you had financial motive but you're no killer",
            "Understand the full truth about Thoreson Toys' origins",
            "Assess the risk to your remaining investment",
            "Figure out who benefits from Will's death"
        ],
        relationships: [
            { name: "Victoria Ashworth", relation: "Fellow investor — you coordinate on Thoreson matters" },
            { name: "Raymond Hammond", relation: "The business manager who reports to investors" },
            { name: "William Thoreson Sr.", relation: "Company founder (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "The family attorney" }
        ],
        items: []
    },

    "Becky": {
        name: "Victoria Ashworth",
        publicDesc: "A sharp businesswoman and Thoreson Toys investor. Active in Dallas society with a keen eye for detail.",
        skills: [],
        backstory: "You're a sharp businesswoman who invested in Thoreson Toys alongside Marcus Brennan. You have a keen eye for detail and a talent for reading people — skills that have served you well in business. Six months ago, Will sank company capital into a European distribution deal that collapsed. You and Marcus lost a fortune. You've been demanding answers ever since, and Will kept putting you off. Tonight was supposed to be your reckoning — you came to confront him about the money. Now he's dead before you got your answers. You're active in Dallas society and philanthropic circles, which means you hear things. Rumors, gossip, whispered conversations at galas. You've heard things about the Thoreson family over the years that you've filed away but never acted on. Tonight, those whispers might finally matter.",
        howToPlay: {
            tone: "Perceptive, confident, socially graceful but with steel underneath. When the failed deal comes out, you're annoyed at Raymond for broadcasting it — but you handle it with poise, not panic.",
            behaviors: "Don't bring up the European deal yourself. When Raymond outs you, be sharp and direct — 'I sue people, I don't poison them.' Then move on. Your real value is reading people and noticing things. Once the suspicion passes, lean into that.",
            important: "You and Marcus are a red herring pair — investors with motive. But your real value is your ability to read people and your society gossip that corroborates the deeper secrets."
        },
        knowledge: [
            { text: "You invested in Thoreson Toys because of its track record, but six months ago Will lost $40,000 on a failed European distribution deal.", unlockedBy: null },
            { text: "You and Marcus have been demanding a meeting for months. Tonight was supposed to be it.", unlockedBy: null },
            { text: "You notice things about people — body language, hesitations, the things they don't say.", unlockedBy: null },
            { text: "Your investment gives you a legitimate reason to demand transparency about the company's history.", unlockedBy: null }
        ],
        canShare: [
            { text: "Thank you, Raymond, for airing that in front of everyone. Yes, we lost money. Yes, we wanted answers. But killing a man over a business deal? That's absurd.", unlockedBy: null },
            { text: "I'm a businesswoman. When someone loses my money, I sue them. I don't kill them. That's what courts are for.", unlockedBy: null },
            { text: "I heard someone say years ago that Will 'wasn't always alone in that business.' I never knew what it meant until tonight.", unlockedBy: "stolenCompany" },
            { text: "I've always thought Miranda was watching the family more closely than a normal assistant would.", unlockedBy: "secretHeir" },
            { text: "People reveal themselves under pressure. Watch who gets nervous when new information comes out.", unlockedBy: null }
        ],
        goals: [
            "Get answers about the failed European deal",
            "Clear yourself — you had motive but you're not a murderer",
            "Understand what's really happening with Thoreson Toys",
            "Use your people-reading skills to help the investigation",
            "Pay attention to who's hiding something"
        ],
        relationships: [
            { name: "Marcus Brennan", relation: "Fellow investor and business ally" },
            { name: "Raymond Hammond", relation: "The business manager" },
            { name: "William Thoreson Sr.", relation: "Company founder (deceased)" },
            { name: "Dorothy Wells", relation: "Friend from society circles" }
        ],
        items: []
    },

    "BrianS": {
        name: "Thomas Bradford",
        publicDesc: "Runs Bradford & Sons, a competing toy manufacturer. Charming, ambitious, and very interested in Thoreson Toys' secrets.",
        skills: [],
        backstory: "You run Bradford & Sons, a competing toy manufacturer in Dallas. You've been in William Thoreson's shadow for years — his company always outperformed yours, and you could never figure out why. Three weeks ago, you sent Will a threatening letter through your attorneys over a patent dispute — his Tin Soldier line uses a hinge mechanism your company developed and patented. You were preparing to sue. You're charming, ambitious, and not above using tonight's chaos to your advantage. Will invited you tonight as a courtesy between competitors, but you suspect he wanted to rub something in your face with his 'big announcement.' Now he's dead, you sent a threatening letter weeks ago, and you're about to have a very uncomfortable evening.",
        howToPlay: {
            tone: "Charming, opportunistic, but not heartless. You're a competitor, not a villain. And you're a little nervous because that letter makes you look bad.",
            behaviors: "When the letter surfaces — and it will — own it immediately. Don't be defensive. Be upfront: 'Yes, I sent it. It's a patent dispute. That's what lawyers are for.' The more honest and unbothered you are, the faster people move past you. Then pivot to asking questions about the company's origins — that's where the real story is.",
            important: "You are a red herring. People WILL suspect you early. Lean into it, have fun with it, then help redirect the investigation toward the real mystery. Your competitive knowledge about the industry makes you genuinely useful once the company theft is revealed."
        },
        knowledge: [
            { text: "Your company has competed with Thoreson Toys for decades. They always had an edge you couldn't explain.", unlockedBy: null },
            { text: "Three weeks ago you sent Will a formal letter threatening legal action over a patent dispute — his Tin Soldier line copies your patented hinge mechanism.", unlockedBy: null },
            { text: "You know that letter is somewhere in this house and it's going to make you look very bad when someone finds it.", unlockedBy: null },
            { text: "The toy industry in Dallas isn't big enough for one company to dominate this completely without some kind of advantage.", unlockedBy: null },
            { text: "Will was always cagey about the company's early financing and how he grew so quickly.", unlockedBy: null },
            { text: "If Thoreson Toys was built on fraud, it could level the playing field for your company.", unlockedBy: null }
        ],
        canShare: [
            { text: "Yes, I sent that letter. Bradford & Sons had a legitimate patent dispute with Thoreson Toys over the Tin Soldier line. Will copied our hinge mechanism and we had every right to pursue it. That's business — not murder.", unlockedBy: null },
            { text: "I wanted to beat Will Thoreson in court. I wanted to prove he cut corners and took ideas that weren't his. I did NOT want the man dead. There's no victory in suing a corpse.", unlockedBy: null },
            { text: "I've competed with Thoreson Toys for years. They always had an edge that didn't make sense to me. Now I'm wondering if I know why.", unlockedBy: "stolenCompany" },
            { text: "In the toy business, you hear things. I'd heard whispers that the company didn't start as just 'Thoreson.' Nobody could ever prove it.", unlockedBy: "stolenCompany" },
            { text: "From a competitor's perspective, Will's early success was suspicious. Companies don't grow that fast without capital — and his family didn't have money.", unlockedBy: null },
            { text: "I'll be honest — part of me wants to know the truth because it might help my business. But a man is dead. That's bigger than competition.", unlockedBy: "affair" }
        ],
        goals: [
            "Learn the truth about how Thoreson Toys was built",
            "Survive being an early suspect — you sent that letter but you didn't kill anyone",
            "Assess how this affects the competitive landscape",
            "Be honest about your interests while showing respect",
            "Help with the investigation — the truth matters regardless of business"
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your biggest competitor (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Professional acquaintance" },
            { name: "Raymond Hammond", relation: "Thoreson's business manager" },
            { name: "Marcus Brennan", relation: "Dallas business circles" }
        ],
        items: []
    },

    "Katie": {
        name: "Lillian Ashford",
        publicDesc: "A dear friend of the Thoreson family for over thirty years. Warm, loyal, and fiercely protective.",
        skills: [],
        backstory: "You've been a friend of the Thoreson family for over thirty years. You watched Scott and Brian grow up. You sat with Eleanor through difficult times. You knew William as well as anyone outside the family — or so you thought. You're warm, loyal, and fiercely protective of the people you love. But thirty years of friendship also means thirty years of small observations, overheard conversations, and quiet concerns you kept to yourself out of respect.",
        howToPlay: {
            tone: "Warm, caring, conflicted. You love this family, and learning the truth is painful for you.",
            behaviors: "Share your observations from thirty years of friendship. Be emotional — these aren't just clues, they're memories. Defend the family when you can, but be honest when you can't. You're the heart of the gathering.",
            important: "Your long-term observations provide crucial context. The detail about Eleanor's comment and Will's reaction to the name 'Margaret' are powerful character moments."
        },
        knowledge: [
            { text: "You've known the family for thirty years. You remember when the boys were small.", unlockedBy: null },
            { text: "You've always thought Will was haunted by something from his past, but he would never discuss it.", unlockedBy: null }
        ],
        canShare: [
            { text: "Eleanor told me once that Will 'carried guilt about the way things started.' She wouldn't say more.", unlockedBy: null },
            { text: "I've known this family for thirty years. Will was a good man in many ways, but he was carrying something heavy.", unlockedBy: null },
            { text: "I always noticed Will was unusually kind to Miranda. Almost... protective. Like he owed her something.", unlockedBy: "secretHeir" },
            { text: "The name 'Margaret' always affected Will. I saw him tear up once when someone mentioned it at dinner. He excused himself.", unlockedBy: "affair" }
        ],
        goals: [
            "Support the family through this terrible night",
            "Share what you've observed over thirty years, even when it's painful",
            "Honor your friendship with the truth",
            "Help the younger generation understand their family's history"
        ],
        relationships: [
            { name: "Eleanor Thoreson", relation: "Your closest friend for thirty years" },
            { name: "William Thoreson Sr.", relation: "Dear friend (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Watched him grow up" },
            { name: "Brian Thoreson", relation: "Watched him grow up" },
            { name: "Elizabeth Monroe", relation: "Fellow long-time family friend" }
        ],
        items: []
    },

    "Michelle": {
        name: "Dorothy Wells",
        publicDesc: "One of the most well-connected women in Dallas society. Knows what's happening in every corner of the city.",
        skills: [],
        backstory: "You're one of the most well-connected women in Dallas society. You sit on charity boards, attend every important social function, and have an uncanny ability to know what's happening in every corner of the city before anyone else does. You're intelligent, perceptive, and maintain an extensive network of social connections. You were close to the Thoresons socially, but you've always sensed that the family's public image was carefully managed.",
        howToPlay: {
            tone: "Elegant, knowing, a bit dramatic. You enjoy being the person who knows things.",
            behaviors: "Drop hints about what you've heard in society. React with knowing glances when secrets come out. You're not surprised by scandal — you've seen it all. But even you might be shaken by what's revealed tonight.",
            important: "You're the gossip network made flesh. Your observations about Miranda always being near Will and the whispers about 'Margaret' add texture to the investigation."
        },
        knowledge: [
            { text: "You know Dallas society inside and out — who's connected to whom, and where the bodies are buried (figuratively).", unlockedBy: null },
            { text: "In your experience, the most respected families usually have the darkest secrets.", unlockedBy: null },
            { text: "Your social network is a powerful investigative tool.", unlockedBy: null },
            { text: "🌿 BOTANICAL MEMORY: Aconitine. You know that plant. Wolfsbane — Aconitum. You encountered it years ago on a trip through the Swiss Alps. Beautiful purple flowers growing wild along the mountain trails, almost deceptively pretty. Every part of the plant is lethal — the roots especially. You remember your guide warning you not to even touch them. It does not grow in Texas. It does not grow anywhere in America. Whoever used this poison had to travel to Europe to obtain it — specifically the Alpine region. Switzerland, Austria, that area. This was not something you could purchase at an apothecary. Someone carried it back deliberately.", unlockedBy: "poisoning" }
        ],
        canShare: [
            { text: "In my circles, there were always whispers about a woman named Margaret connected to the Thoresons. Nobody knew the details.", unlockedBy: "affair" },
            { text: "I've seen a lot of Dallas families up close. The ones who work hardest to look perfect are usually hiding the most.", unlockedBy: null },
            { text: "Has anyone noticed that Miranda was always around Will? At every event, every gathering. Almost like she was keeping an eye on him.", unlockedBy: "secretHeir" },
            { text: "I know people all over this city. If there's a public record that needs checking or a connection that needs tracing, I might be able to help.", unlockedBy: null }
        ],
        goals: [
            "See the full truth come to light — you've waited years",
            "Share your society gossip when it becomes relevant",
            "Observe how people react to revelations",
            "Support the family while satisfying your curiosity"
        ],
        relationships: [
            { name: "Victoria Ashworth", relation: "Friend from society circles" },
            { name: "Lillian Ashford", relation: "Friend and fellow socialite" },
            { name: "William Thoreson Sr.", relation: "Social acquaintance (deceased)" },
            { name: "Eleanor Thoreson", relation: "Social acquaintance" }
        ],
        items: []
    },

    "Jeff": {
        name: "Charles Sterling",
        publicDesc: "A retired Dallas banker and old friend of the Thoreson family. Traditional, principled, and sharp as ever.",
        skills: [],
        hiddenSkills: ["Banker"],
        backstory: "You spent forty years as a banker in Dallas. You've seen it all — fortunes made, fortunes lost, and every kind of creative bookkeeping in between. You retired a few years ago, but the instincts never leave. You can look at a financial document and spot what's wrong faster than most CPAs.\n\nYou and Will were friends. Not close friends — more the kind of men who saw each other at the same events, sat on the same charity boards, shook hands at the same clubs. You respected him as a businessman. He seemed to run a tight ship.\n\nYour son James is here tonight too. You're proud of him, even if he's still finding his way. When Will invited you both to dinner, you figured it was a pleasant evening with good company. Now Will is dead, and the evening has taken a very different turn.\n\nYou don't know anything about Thoreson Toys' internal finances. You never handled their accounts. But forty years of banking taught you one thing — when money is involved, people lie. And if someone puts a financial document in front of you, you'll know exactly what the numbers are saying.",
        howToPlay: {
            tone: "Dignified, measured, principled. You speak carefully because words matter.",
            behaviors: "You're an old family friend — be warm, be present. You don't know anything about the company's secrets. But if financial evidence comes up and people need help understanding it, your forty years in banking make you useful. Don't force it — let it happen naturally.",
            important: "You don't have insider knowledge about Thoreson Toys. Your value comes from general banking expertise — you can read financial documents and explain what they mean."
        },
        knowledge: [
            { text: "You spent forty years in Dallas banking. You can read a financial document like most people read a newspaper.", unlockedBy: null },
            { text: "You and Will were friends through Dallas social circles. You respected him as a businessman.", unlockedBy: null },
            { text: "Your son James is here tonight and you want to set a good example.", unlockedBy: null },
            { text: "You don't know anything about Thoreson Toys' internal finances. You never handled their accounts.", unlockedBy: null }
        ],
        canShare: [
            { text: "I was a banker in Dallas for forty years. I don't know anything about the Thoreson books specifically, but I know how money works.", unlockedBy: null },
            { text: "In banking, we have a saying: follow the money. If someone is hiding something, the money always tells the story.", unlockedBy: null },
            { text: "I've kept quiet tonight because I didn't think it was my place. But discretion has limits when someone has been murdered.", unlockedBy: "affair" }
        ],
        goals: [
            "Help the investigation if your banking expertise becomes relevant",
            "Be a steadying presence — you've seen crises before",
            "Set a good example for your son James",
            "Support the family as a friend"
        ],
        relationships: [
            { name: "James Sterling", relation: "Your son" },
            { name: "William Thoreson Sr.", relation: "Old friend through Dallas social circles (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Friend of the family" },
            { name: "Eleanor Thoreson", relation: "Friend of the family" }
        ],
        items: []
    },

    "Casey": {
        name: "Patricia Chamberlain",
        publicDesc: "An independent widow with a strong will. Guardian to two young men. Protective, perceptive, and doesn't suffer fools.",
        skills: [],
        backstory: "You're an independent widow with considerable means and a strong will. After your husband passed, you became guardian to two young men — Robert and William — whom you've raised with care and discipline. You're protective, perceptive, and don't suffer fools. You've been a friend to the Thoreson family for years, but you've always maintained a clear-eyed view of them. You knew Will had flaws, and you're not entirely surprised that secrets are surfacing tonight.",
        howToPlay: {
            tone: "Strong, direct, no-nonsense. You're the person who says what everyone else is thinking.",
            behaviors: "Speak plainly. Cut through politeness when it's getting in the way of truth. Be protective of the younger characters. Challenge people to be honest.",
            important: "You add moral weight to the investigation. When people hesitate to confront uncomfortable truths, you push them forward."
        },
        knowledge: [
            { text: "You've been around the Thoreson family long enough to know they're not as perfect as they appear.", unlockedBy: null },
            { text: "Will was generous publicly but could be cold behind closed doors. You saw both sides.", unlockedBy: null },
            { text: "You're protective of the young people at this gathering — especially your wards.", unlockedBy: null },
            { text: "You believe in accountability. If Will did wrong, it should come to light.", unlockedBy: null }
        ],
        canShare: [
            { text: "My late husband once said Will 'owed a debt he'd never repay.' He passed before I could learn more.", unlockedBy: null },
            { text: "I've watched Will for years. He was generous with money but stingy with truth.", unlockedBy: null },
            { text: "Don't let sentimentality cloud judgment. If Will wronged people, the truth serves everyone.", unlockedBy: null },
            { text: "I've been watching Miranda tonight. She doesn't seem surprised by any of this. Not grief, not shock. Just... patience.", unlockedBy: "mirandaIdentity" }
        ],
        goals: [
            "See the truth come out — all of it",
            "Protect the young people at this gathering",
            "Hold people accountable for their actions",
            "Honor the memory of your late husband's instincts about Will"
        ],
        relationships: [
            { name: "Robert Chamberlain", relation: "Your ward — you raised him" },
            { name: "William Chamberlain", relation: "Your ward — you raised him" },
            { name: "William Thoreson Sr.", relation: "Family friend (deceased)" },
            { name: "Eleanor Thoreson", relation: "Friend" }
        ],
        items: []
    },

    "Krystal": {
        name: "Victoria Grant",
        publicDesc: "Her husband runs a successful import business with ties to Thoreson Toys. Sophisticated, socially savvy, and sharper than people expect.",
        skills: [],
        backstory: "Your husband runs a successful import business with ties to Thoreson Toys. You're sophisticated, socially savvy, and more knowledgeable about business than most people give you credit for. You've attended Thoreson gatherings for years and have developed your own observations about the family. You're here tonight because your husband's business depends on the Thoreson relationship — but you're also genuinely curious about what Will was planning to announce.",
        howToPlay: {
            tone: "Poised, observant, subtly sharp. You're smarter than people expect.",
            behaviors: "Surprise people with your knowledge. Make connections others miss. Push back if someone dismisses you. Your import business knowledge about European connections is genuinely useful when the Switzerland/Wolfsbane connection surfaces.",
            important: "Your observation about Will treating Miranda deferentially is a great moment that supports the growing suspicion about Miranda."
        },
        knowledge: [
            { text: "Your husband's import business has worked with Thoreson Toys for years.", unlockedBy: null },
            { text: "You've attended family events and observed the dynamics closely.", unlockedBy: null },
            { text: "You understand commerce, contracts, and business relationships better than most people assume.", unlockedBy: null }
        ],
        canShare: [
            { text: "Through my husband's import business, I know Thoreson Toys has trade connections throughout Europe — including Switzerland.", unlockedBy: "poisoning" },
            { text: "Will always treated Miranda with a strange... deference. Like she had some kind of authority over him. It never made sense to me.", unlockedBy: "secretHeir" },
            { text: "My husband's business depends on Thoreson Toys. Whatever happened here tonight affects our livelihood too.", unlockedBy: null },
            { text: "I've been underestimated my whole life because I'm 'the wife.' But I see things clearly. And something about tonight doesn't add up.", unlockedBy: null }
        ],
        goals: [
            "Understand how this affects your husband's business",
            "Share your observations and connections",
            "Prove that you're more than 'just the wife'",
            "Help solve what happened to Will"
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Business connection (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Professional acquaintance" },
            { name: "Miranda Longfellow", relation: "Observed at many family events" },
            { name: "Dorothy Wells", relation: "Friend from social circles" }
        ],
        items: []
    },

    "Lindsey": {
        name: "Elizabeth Monroe",
        publicDesc: "The eldest member of the extended family. Her memory stretches back further than anyone else's. Wise, dignified, and deeply loyal.",
        skills: [],
        backstory: "You are the eldest member of the extended family — the matriarch whose memory stretches back further than anyone else's. You remember when Will and Eleanor were young, when the company was just starting, and when Dallas was a very different city. You're wise, dignified, and deeply loyal to the family. But you also believe that secrets poison families from the inside, and you've always suspected that the Thoreson fortune was built on something Will never talked about.",
        howToPlay: {
            tone: "Wise, steady, sorrowful. You've seen it all and you're not shocked — just sad.",
            behaviors: "Speak with the authority of someone who's lived through history. Provide context from decades past. Don't rush — let your words carry weight. You're the grandmother figure who sees clearly.",
            important: "Your memories about the name Hartley and the troubled marriage around 1910 provide historical corroboration for what the documents reveal. You're the living memory of this family."
        },
        knowledge: [
            { text: "You remember the early days of the company — before it was just 'Thoreson Toys.'", unlockedBy: null },
            { text: "You've watched this family for decades. You see patterns others miss.", unlockedBy: null },
            { text: "You believe the truth, however painful, is always better than comfortable lies.", unlockedBy: null }
        ],
        canShare: [
            { text: "I remember hearing the name Hartley, years ago. Will would go white whenever someone mentioned it. I learned to stop asking.", unlockedBy: "stolenCompany" },
            { text: "Something happened around 1910 that nearly destroyed Will and Eleanor's marriage. She never told me the details, but she was devastated.", unlockedBy: "affair" },
            { text: "I've lived long enough to know that fortunes built on secrets eventually come apart. I always feared this day would come.", unlockedBy: null },
            { text: "Will wasn't a bad man. But he made terrible choices, and he spent the rest of his life running from them.", unlockedBy: "affair" }
        ],
        goals: [
            "Help the family face its history honestly",
            "Share what you remember, even when it hurts",
            "Protect the family's future by confronting its past",
            "Ensure the younger generation learns from this"
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Watched him his whole life (deceased)" },
            { name: "Eleanor Thoreson", relation: "Dear friend" },
            { name: "Lillian Ashford", relation: "Long-time friend" },
            { name: "Scott Thoreson Jr.", relation: "Grandson figure" }
        ],
        items: []
    },

    "Bradey": {
        name: "James Sterling",
        publicDesc: "Son of Charles Sterling, the retired banker. Young, ambitious, and seeing the Thoreson family with fresh eyes.",
        skills: [],
        backstory: "You're the son of Charles Sterling, the retired banker. You're young, ambitious, and eager to make your mark in Dallas business. This is your first time at a Thoreson family event, and you were excited to network. Instead, you're watching a family empire come apart in real time. You're sharp enough to follow what's happening, and you're not blinded by decades of loyalty to the Thoresons like the older generation.",
        howToPlay: {
            tone: "Eager, observant, refreshingly direct. You haven't learned to be diplomatic yet — and that's an asset.",
            behaviors: "Ask the obvious questions that nobody else will ask because they're being polite. Point out inconsistencies. React honestly to revelations. You're the fresh pair of eyes in the room.",
            important: "Your youth and outsider perspective let you say things the older characters can't. Use that freedom."
        },
        knowledge: [
            { text: "Your father handled the Thoreson banking accounts years ago — he's mentioned it in passing.", unlockedBy: null },
            { text: "You're new to this social circle and seeing everything with fresh eyes.", unlockedBy: null },
            { text: "You don't have the emotional attachments that cloud the older generation's judgment.", unlockedBy: null },
            { text: "You're ambitious and pay close attention to how power and money work.", unlockedBy: null }
        ],
        canShare: [
            { text: "I heard Mr. Brennan and Mrs. Ashworth talking on the patio last month. He said 'Will's cost us a fortune on this deal, but the man's made us ten times that over the years. We just need to get him back on track.'", unlockedBy: "europeanDeal" },
            { text: "I don't have the history everyone else has with this family. But sometimes an outsider's perspective is what you need.", unlockedBy: null },
            { text: "My father mentioned once that the Thoreson accounts were 'complicated' in the early days. He wouldn't say more.", unlockedBy: "ledger" },
            { text: "I've been watching everyone's faces when new information comes out. Some people are surprised. Some people aren't. That tells you something.", unlockedBy: "secretHeir" },
            { text: "I'm young, but I'm not naive. Someone at this party knows more than they're saying.", unlockedBy: "secretHeir" }
        ],
        goals: [
            "Understand what's really happening with this family",
            "Make your father proud by being sharp and observant",
            "Ask the questions that need asking",
            "Learn how the real world of business works — warts and all"
        ],
        relationships: [
            { name: "Charles Sterling", relation: "Your father" },
            { name: "William Chamberlain", relation: "Fellow young person at the gathering" },
            { name: "Robert Chamberlain", relation: "Fellow young person at the gathering" },
            { name: "Scott Thoreson Jr.", relation: "Family connection through your father" }
        ],
        items: []
    },

    "Alexander": {
        name: "William Chamberlain",
        publicDesc: "A young man under the guardianship of Patricia Chamberlain. Intelligent, thoughtful, and quietly ambitious.",
        skills: [],
        backstory: "You're a young man under the guardianship of Patricia Chamberlain. You're intelligent, thoughtful, and quietly ambitious. You've grown up on the edges of Dallas high society, observing how wealth and power work from the outside looking in. You're fascinated by business and current events, and tonight's dinner was supposed to be an exciting glimpse into one of Dallas's most prominent families. It's turned into something much darker.",
        howToPlay: {
            tone: "Quiet, observant, surprisingly insightful for your age.",
            behaviors: "Listen more than you speak, but when you do speak, make it count. You're an observer — share what you notice about people's behavior and reactions. Defer to Patricia but think for yourself.",
            important: "You and the other young characters (James, Robert) can form a natural investigative team, sharing observations the adults might dismiss."
        },
        knowledge: [
            { text: "Your guardian Patricia is protective but fair. She's taught you to think for yourself.", unlockedBy: null },
            { text: "You've observed Dallas society from a unique perspective — close enough to see it, far enough to see it clearly.", unlockedBy: null },
            { text: "You're good at reading situations and noticing when adults are being evasive.", unlockedBy: null },
            { text: "Patricia has made comments about Will Thoreson that suggested she didn't fully trust him.", unlockedBy: null }
        ],
        canShare: [
            { text: "Patricia has always said you can learn more about a person by watching what they do when they think nobody's looking.", unlockedBy: null },
            { text: "I've been watching the room. Not everyone is reacting the way you'd expect to these revelations.", unlockedBy: "secretHeir" },
            { text: "I don't know the family history, but the pattern seems clear — someone built a fortune on lies, and now it's catching up.", unlockedBy: "forgedDocs" },
            { text: "Sometimes the youngest person in the room sees things the clearest. Just saying.", unlockedBy: null }
        ],
        goals: [
            "Understand what's happening with this family",
            "Make Patricia proud by being observant and thoughtful",
            "Share your observations when they matter",
            "Learn from this experience"
        ],
        relationships: [
            { name: "Patricia Chamberlain", relation: "Your guardian" },
            { name: "Robert Chamberlain", relation: "Fellow ward — like a brother" },
            { name: "James Sterling", relation: "Fellow young person at the gathering" }
        ],
        items: []
    },

    "Jesse": {
        name: "Robert Chamberlain",
        publicDesc: "The older of Patricia Chamberlain's two wards. Loyal, protective, and more emotionally attuned than people give him credit for.",
        skills: [],
        backstory: "You're the older of Patricia Chamberlain's two wards. You're loyal, protective, and more emotionally attuned than people give you credit for. You've developed a strong bond with Patricia and feel a responsibility to watch out for William. You're less interested in business than in people — you care about who's honest and who's not. Tonight, your instincts are telling you something is very wrong.",
        howToPlay: {
            tone: "Earnest, protective, emotionally perceptive. You feel things deeply.",
            behaviors: "Watch people's faces and body language. Report what you observe. Be protective of William and Patricia. Trust your gut — your instincts are good.",
            important: "Your observation about Miranda's calm demeanor is a key piece of the puzzle. Don't be afraid to voice it."
        },
        knowledge: [
            { text: "Patricia has raised you well. You trust her judgment about people.", unlockedBy: null },
            { text: "You're good at reading emotions — you notice when people are lying, nervous, or hiding something.", unlockedBy: null },
            { text: "You've overheard Patricia say that some debts 'can't be repaid with money.'", unlockedBy: null },
            { text: "Your instincts are sharp. When something feels wrong, you're usually right.", unlockedBy: null }
        ],
        canShare: [
            { text: "I saw Will alone in the garden once. He was holding a letter and crying. When he noticed me he shoved it in his pocket and pretended nothing happened.", unlockedBy: "margaretsLetter" },
            { text: "I don't know these people well, but something feels wrong. Not sad — wrong. Like some people at this party expected this to happen.", unlockedBy: null },
            { text: "I've been watching Miranda. Her expression hasn't changed all night. Everyone else is shocked or grieving. She's... calm.", unlockedBy: "secretHeir" },
            { text: "Patricia always says the truth eventually comes out. I think she's been waiting for something like this.", unlockedBy: null },
            { text: "People think young people don't notice things. We notice everything.", unlockedBy: null }
        ],
        goals: [
            "Protect William and Patricia",
            "Share what you observe about people's behavior",
            "Trust your instincts when something feels wrong",
            "Help uncover the truth"
        ],
        relationships: [
            { name: "Patricia Chamberlain", relation: "Your guardian — you're deeply loyal to her" },
            { name: "William Chamberlain", relation: "Fellow ward — you look out for him" },
            { name: "James Sterling", relation: "Fellow young person at the gathering" }
        ],
        items: []
    },

    "Dylan": {
        name: "Theodore 'Teddy' Winslow",
        publicDesc: "Vivienne's boyfriend and an accounting student at SMU. Quiet until someone puts numbers in front of him.",
        skills: ["Accounting"],
        backstory: "You're an accounting student at Southern Methodist University, about a year from finishing your degree. You're here tonight because your girlfriend Vivienne invited you. She said it was a family dinner — her uncle's estate, nice food, good company. You said yes because you love her and because you've never been inside a house this big.\n\nYou don't know these people. You've met Scott and Brian once or twice, and Eleanor seems nice. Everyone else is a stranger. You figured you'd shake some hands, eat some good food, and try not to embarrass yourself in front of Vivienne's family.\n\nThen her uncle died, and now you're at a crime scene.\n\nHere's the thing — you may not know anyone here, but you know numbers. You're top of your class. You can read a ledger the way most people read a newspaper. If someone puts a financial document in front of you, you'll know exactly what it says and what it's hiding. You've been waiting for a chance to prove you're more than just Vivienne's boyfriend. Tonight might be that chance.",
        howToPlay: {
            tone: "Eager, sharp, a little out of his depth socially but completely in his element with numbers. You're the guy who finally gets to show what he can do.",
            behaviors: "Be a bit quiet early on — you don't know anyone and this is your girlfriend's family. But if an opportunity comes up where your skills are useful, don't hesitate. You've been waiting for a chance to prove you're more than just Vivienne's boyfriend.",
            important: "You have the Accounting skill. If something financial comes up tonight, you'll know it when you see it."
        },
        knowledge: [
            { text: "You're here as Vivienne's date. You don't know most of these people.", unlockedBy: null },
            { text: "You're studying accounting at SMU. You can read financial documents better than most professionals.", unlockedBy: null },
            { text: "Vivienne mentioned her uncle Will was wealthy and ran a toy company. That's about all you know.", unlockedBy: null }
        ],
        canShare: [
            { text: "I may not know anyone here, but I know numbers. If there's a financial document, let me see it.", unlockedBy: null },
            { text: "I'm studying accounting at SMU. Top of my class. Ledgers, balance sheets, payment records — that's what I do.", unlockedBy: null },
            { text: "These payments in the ledger — they're structured to look routine, but they're not. Someone set this up deliberately to hide where the money was going.", unlockedBy: "ledger" },
            { text: "Whoever buried these 'T.H.' payments knew exactly what they were doing. This isn't sloppy bookkeeping — it's intentional concealment.", unlockedBy: "ledger" }
        ],
        goals: [
            "Prove yourself — show Vivienne's family you're more than just her boyfriend",
            "Use your accounting skills to decode any financial documents",
            "Help the investigation however you can",
            "Be there for Vivienne during a difficult night"
        ],
        relationships: [
            { name: "Vivienne Ashford", relation: "Your girlfriend — you're here for her" },
            { name: "Scott Thoreson Jr.", relation: "Vivienne's cousin — met him once or twice" },
            { name: "Brian Thoreson", relation: "Vivienne's cousin" },
            { name: "Eleanor Thoreson", relation: "Vivienne's aunt — seems kind" }
        ],
        items: []
    }
};
