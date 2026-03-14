// ============================================================
// THORESON ESTATE — CHARACTER DATABASE (v3 — Final)
// ============================================================
// Progressive Reveal System:
//   unlockedBy: null          → Always visible from the start
//   unlockedBy: "ledger"      → Visible only after that revelation is toggled ON
//
// REVELATION IDS (from revelationsDatabase):
//   Act 1: willsDeath, ledger, forgedDocs, stolenCompany, europeanDeal
//   Act 2: affair, secretHeir, margaretsLetter, marriage
//   Act 3: poisoning, mirandaIdentity, finalConfession
//   David pipeline: djCountyClerk, djCoroner, djPinkerton
//   Test: popupTest (Scott only)
// ============================================================

const characterDatabase = {

    // ============================================================
    // SCOTT — William "Scott" Thoreson Jr.
    // ============================================================
    "Scott": {
        name: "William 'Scott' Thoreson Jr.",
        publicDesc: "Eldest son of William Thoreson Sr. and the family's attorney. A man of integrity who has dedicated his career to managing the family's legal affairs.",
        skills: ["Accounting", "Botany", "French", "Investigation", "Legal", "Medical", "Bartender", "Banking", "willsDeath", "ledger", "forgedDocs", "stolenCompany", "europeanDeal", "affair", "secretHeir", "margaretsLetter", "poisoning", "poisonTrail", "mirandasIdentity", "backgroundCheck", "popupTest", "Journalism"],
        backstory: "You are the eldest son of William and Eleanor Thoreson, and the family's attorney. You studied law at SMU on a partial scholarship — your father wasn't the type to hand things to his children when they could earn them instead. You built your practice from the ground up, handling wills, property disputes, and contract work for several prominent Dallas families before the Thoreson business became your primary focus. You are methodical by nature. You keep notes. You remember things. You married Clara six years ago and have built a life that your father visibly approved of, which meant more to you than you ever admitted.\n\nYour father has seemed different lately. Anxious. Emotional in ways he wasn't before. He called you three weeks ago to say he was planning to make something right — something from a long time ago. He wouldn't say more. You assumed it was the will. He had mentioned updating it. You drafted the new language yourself.\n\nTonight was supposed to be the announcement. Instead, your father is dead.",
        knowledge: [
            { text: "🔔 POPUP TEST: If you're seeing this, the memory popup system is working!", unlockedBy: "popupTest" },
            { text: "Ran background checks on your guest list. Most came back clean. Charles Sterling has two unpaid parking tickets in Fort Worth. Thomas Bradford had a public intoxication charge dismissed in 1931. Two names flagged for name changes — Walter Lippman born Taylor Hartley. Miranda Longfellow matches a Miranda Hartley out of Dallas. Call me if you need more.", unlockedBy: "djPinkerton" }
        ],
        memories: [
            { text: "Your father came to your office once, unannounced, about two months ago. He sat across from your desk and looked at you for a long moment. Then he said, 'You're a good man, Scott. Better than I was.' You laughed it off. You wish now you hadn't.", unlockedBy: "affair" },
            { text: "Miranda has always been exceptionally good at her job. Almost unnervingly so. She knew where every document was. Every file. You assumed it was diligence. It never occurred to you to ask why she cared so much.", unlockedBy: "mirandaIdentity" },
            { text: "The night your father called about making things right, there was something in his voice you couldn't name at the time. Not guilt exactly. More like relief. Like a man who had finally decided something.", unlockedBy: "finalConfession" }
        ],
        canShare: [
            { text: "The company has always been called Thoreson Toys. Just Thoreson. I've never heard the name Hartley in connection with it.", unlockedBy: null },
            { text: "Yes, I drafted the updated will. I'm the family attorney — that's my job. If I wanted to stop Taylor from inheriting, I wouldn't need to kill anyone. I'd just lose the paperwork.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your father (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your mother" },
            { name: "Frederick 'Brian' Thoreson", relation: "Your younger brother" },
            { name: "Charlotte 'Clara' Waverly", relation: "Your wife" },
            { name: "Miranda Longfellow", relation: "Your trusted legal assistant (10 years)" }
        ],
        items: []
    },

    // ============================================================
    // BRIAN T — Frederick "Brian" Thoreson
    // ============================================================
    "BrianT": {
        name: "Frederick 'Brian' Thoreson",
        publicDesc: "Younger son of William Thoreson Sr. The easygoing one. Here for the food and the drinks.",
        skills: [],
        backstory: "You grew up in Fort Worth — your father ran a dry goods store and your mother kept the books, which is where you learned that the people who actually run things are rarely the ones with their names on the door. You met Scott at a mutual friend's dinner party in 1927 and married him two years later. You are practical, composed, and quietly sharp. You handle the social obligations of being a Thoreson wife with efficiency rather than enthusiasm. You like Scott. You love your life. You just don't need it to be dramatic.\n\nYou have always been the kind of person other people lean on without quite realizing they're doing it. At family gatherings you are the one who remembers where the extra chairs are, who is getting along with whom, and when someone has had enough to drink. You do not find this burdensome. You find it clarifying. A room is a system, and you have always been good at understanding systems.\n\nYou trained briefly as a nurse before you married, and you still carry that instinct — the calm that comes from having seen people at their worst and knowing that most situations are survivable. You think clearly under pressure. You do not panic. You are possibly the most useful person in this room right now, and almost no one has thought to ask you anything yet.\n\nWill was never unkind to you, but you always sensed he was sizing you up — checking whether Scott had married well. Eleanor has been warmer. You've come to genuinely care for her.\n\nTonight you're the one making sure glasses stay full and nobody goes to pieces in the hallway. Someone has to.\n\nYou are good at stillness. It is something you learned young — when you have no power, stillness is the closest thing to it. You watch. You wait. You let other people fill the silence. Over ten years inside this household you have become fluent in the Thoreson family's rhythms, their particular silences, the things they say when they think no one consequential is listening. You have been consequential the entire time. They just didn't know it.",
        memories: [
            { text: "Your father taught you to drive in the parking lot of the Thoreson Toys warehouse on a Saturday morning in 1918. He was patient that day in a way he wasn't very often. You've thought about that morning more than once tonight.", unlockedBy: "willsDeath" },
            { text: "You remember a name from when you were small — Hartley. You heard it once in an argument between your parents and your mother went very quiet after. You never heard it again and forgot about it completely until just now.", unlockedBy: "stolenCompany" },
            { text: "Miranda always made you slightly uneasy and you could never explain why. She was perfectly nice. But she looked at your father sometimes in a way you couldn't read. Not admiration. Something older than that.", unlockedBy: "mirandaIdentity" }
        ],
        canShare: [
            { text: "Hartley? No idea. Is that a person or a street?", unlockedBy: null },
            { text: "Wait, I'm a suspect? Because of the inheritance? I didn't even know about the inheritance changes until five minutes ago.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your dad (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Your older brother" },
            { name: "Charlotte 'Clara' Waverly", relation: "Your sister-in-law" },
            { name: "Miranda Longfellow", relation: "Scott's assistant. She's always around." }
        ],
        items: []
    },

    // ============================================================
    // CLARA — Clara Thoreson
    // ============================================================
    "Clara": {
        name: "Charlotte 'Clara' Waverly",
        publicDesc: "Scott's wife. Warm, practical, and the one keeping things running tonight.",
        skills: ["Bartender"],
        backstory: "You grew up in Fort Worth — your father ran a dry goods store and your mother kept the books, which is where you learned that the people who actually run things are rarely the ones with their names on the door. You met Scott at a mutual friend's dinner party in 1927 and married him two years later. You are practical, composed, and quietly sharp. You handle the social obligations of being a Thoreson wife with efficiency rather than enthusiasm. You like Scott. You love your life. You just don't need it to be dramatic.\n\nYou have always been the kind of person other people lean on without quite realizing they're doing it. At family gatherings you are the one who remembers where the extra chairs are, who is getting along with whom, and when someone has had enough to drink. You do not find this burdensome. You find it clarifying. A room is a system, and you have always been good at understanding systems.\n\nYou trained briefly as a nurse before you married, and you still carry that instinct — the calm that comes from having seen people at their worst and knowing that most situations are survivable. You think clearly under pressure. You do not panic. You are possibly the most useful person in this room right now, and almost no one has thought to ask you anything yet.\n\nWill was never unkind to you, but you always sensed he was sizing you up — checking whether Scott had married well. Eleanor has been warmer. You've come to genuinely care for her.\n\nTonight you're the one making sure glasses stay full and nobody goes to pieces in the hallway. Someone has to.\n\nYou are good at stillness. It is something you learned young — when you have no power, stillness is the closest thing to it. You watch. You wait. You let other people fill the silence. Over ten years inside this household you have become fluent in the Thoreson family's rhythms, their particular silences, the things they say when they think no one consequential is listening. You have been consequential the entire time. They just didn't know it.",
        memories: [
            { text: "Will asked you once, privately, whether Scott ever talked about the business at home. You said not much. He nodded slowly, like that was either a relief or a disappointment — you couldn't tell which.", unlockedBy: "ledger" },
            { text: "You've poured drinks for Miranda at a dozen family events over the years. She always said thank you. She never made small talk. Most people, when they're nervous, fill silence. Miranda never did.", unlockedBy: "mirandaIdentity" }
        ],
        canShare: [],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your husband" },
            { name: "William Thoreson Sr.", relation: "Your father-in-law (deceased)" },
            { name: "Frederick 'Brian' Thoreson", relation: "Your brother-in-law" },
            { name: "Eleanor Thoreson", relation: "Your mother-in-law" }
        ],
        items: []
    },

    // ============================================================
    // LEANNA — Miranda Longfellow (born Miranda Hartley)
    // ============================================================
    "Leanna": {
        name: "Miranda Longfellow",
        publicDesc: "Scott Thoreson's legal assistant. Professional, competent, and discreet. Has worked for the family for nearly ten years.",
        skills: ["Legal"],
        note: "You know everything. You are not in a hurry. Let the investigation find you — don't chase it. Your Legal skill gives you a natural reason to handle documents and weigh in on findings. Use it. The slower the truth comes out, the better the story.",
        backstory: "Your name is Miranda Hartley. You have not used that name in fifteen years.\n\nYour father was Robert Hartley. In 1902, he and William Thoreson co-founded what would become one of Dallas's most successful toy companies — Thoreson and Hartley Toys. They were partners and close friends. Your father was an honest man. Hardworking. Devoted to your mother Margaret and to you.\n\nWhat happened next took years to fully understand.\n\nWilliam Thoreson began an affair with your mother sometime before 1910. Your father discovered it — along with something worse. On March 14th, 1910, a document was filed transferring your father's full ownership stake in the company to William Thoreson. Your father's signature was on it. It was not your father's signature. One day later, on March 15th, Robert Hartley was found dead. The investigation lasted a week. It was ruled a suicide. William Thoreson was cleared on March 22nd. The company became Thoreson Toys. Your father's name was erased from everything.\n\nYou were fourteen years old.\n\nYour mother went to William afterward. She was carrying his child and she begged him to help both of her children — you, Robert's daughter, and the baby. He refused you entirely. He established a private trust for his own child — born September 12th, 1911, named Taylor — and sent your mother away. Abandoned and heartbroken, your mother turned to whatever comfort she could find. She died in 1912 of a drug overdose — grief dressed up as an accident. You were sixteen, alone, and raising an infant half-sibling on nothing.\n\nYou and Taylor were eventually separated. He grew up with the trust money, changed his name, built a life. You lost touch completely. You have no idea he is at this dinner tonight.\n\nYou put yourself through college and law school without help from anyone. In 1920 you changed your name to Miranda Longfellow. In 1925 you got yourself hired as Scott Thoreson's legal assistant. You spent ten years inside this house, inside these files, reading every document William Thoreson thought was safely hidden. The forged transfer. The ledger with its monthly payments to T.H. The love letters from your mother. The trust fund documents. You watched him grow old and respected and unbothered.\n\nLast summer you traveled to Switzerland. Wolfsbane grows wild in the Alps — purple flowers along the mountain trails, beautiful and poisonous down to the root. You brought some home. You dried it. You ground it.\n\nTonight, before the guests arrived, you put it in his drink.\n\nHe is dead. You are at peace with that. You are not a villain. You are a daughter.\n\nYou are good at stillness. It is something you learned young — when you have no power, stillness is the closest thing to it. You watch. You wait. You let other people fill the silence. Over ten years inside this household you have become fluent in the Thoreson family's rhythms, their particular silences, the things they say when they think no one consequential is listening. You have been consequential the entire time. They just didn't know it.",
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
            { name: "Margaret Hartley", relation: "Your mother (died 1912)" },
            { name: "Taylor Hartley", relation: "Your half-sibling — somewhere in this room, and has no idea who you are" }
        ],
        items: ["Travel journal (always on you — searchable Act 3)"],
        finalEntry: {
            context: "This is your final monologue. It is meant to be performed — read aloud to the room after you are confronted and confirm who you are. You are not defending yourself — you are explaining yourself. There is a difference. Take your time. The room will be quiet. Feel free to adjust any wording that doesn't feel natural in your voice. The story is fixed. The words are yours.",
            text: "March 21st, 1935.\n\nMy name is Miranda Hartley. Robert's daughter.\n\nI have sat in this parlor tonight and watched all of you slowly piece together my father's story. The letterhead. The ledger. The forged documents. I watched Scott's face change as his father became a stranger to him. I watched every layer of the lie come off — the stolen company, the affair, the child William refused to claim, the child he secretly funded. The lies built on top of lies built on top of destroyed lives.\n\nMy father was Robert Hartley. He built this company alongside William Thoreson in 1902. They were partners. Friends. And William forged his name on a transfer document, took everything he had built, and my father was dead within twenty-four hours. I was fourteen years old.\n\nMy mother went to William afterward. She was carrying his child. She begged him to help both of us. He set up a trust fund for his own son and sent my mother away with nothing. She had nothing left — no money, no family, no hope. She died two years later. Not peacefully. She spent her last months chasing something to dull the pain of being abandoned by the man she loved, and it killed her. I was sixteen, alone, raising an infant I didn't fully understand yet was my half-brother.\n\nI put myself through law school. I changed my name. And in 1925 I walked into Scott Thoreson's office and got myself hired. I spent ten years inside these walls. I found the forged documents. I found the ledger. I found my mother's letters in a locked safe — love letters she wrote to a man who threw her away. I found the birth certificate that told me the infant I had raised for two years was William Thoreson's son.\n\nLast summer I went to Switzerland. Wolfsbane grows wild in the Alps — beautiful purple flowers along the mountain trails. I brought some home. I knew what I was going to do with it.\n\nTonight William was going to stand in this room and announce his long-lost son to the family. He was going to play the repentant father. He was going to die loved and forgiven, his name on a profitable company, his sins quietly buried. My father's name has been buried for twenty-five years. My mother's grief has been buried. My childhood has been buried.\n\nI am not asking for your forgiveness. I made peace with what this night would cost me long before tonight. But I needed you to know — all of you — that the Thoreson fortune was built on a stolen company, a forged signature, and a man who chose to let his partner die rather than face what he had done.\n\nMy father deserved better. My mother deserved better.\n\nI am Miranda Hartley.\n\nAnd now, the truth has been set free."
        }
    },

    // ============================================================
    // MARC — Walter Lippman (born Taylor Hartley)
    // ============================================================
    "Marc": {
        name: "Walter Lippman",
        publicDesc: "A journalist for the Dallas Herald, covering business and society. Known for thorough, honest reporting.",
        skills: [],
        note: "You came tonight knowing Will wanted to tell you something personal. You don't fully understand yet what you are to this family. Let that discovery happen in the room, in front of everyone — don't get ahead of it. Your connection to the Hartleys should come out through the investigation, not through you. You and Sophie are married but you don't volunteer that unless someone asks directly.",
        backstory: "Your byline is Walter Lippman. You have been writing under that name for years and it has become who you are — you are known by it across Dallas and beyond.\n\nYou were born Taylor Hartley on September 12th, 1911, in Dallas, Texas. Your mother was Margaret Hartley. Your biological father was William Thoreson, though you didn't learn that until you were nearly an adult. Your mother died when you were an infant. You were raised by distant relatives and told very little about where you came from — only that your mother was gone and that there was a trust fund in your name that paid your expenses until you were grown.\n\nYou asked questions when you were old enough. The answers were always thin. There was a man named Hartley — your mother's husband, not your father. He died. There was a scandal. Your mother was sent away. Beyond that, nothing.\n\nWhen you were eighteen you had a lawyer look into the trust. The originating signature was William Thoreson's. That was the first time you heard that name attached to your life. You began writing under the name Walter Lippman — a pen name that became a professional identity, then simply the name everyone knows you by.\n\nYou became a journalist. You are good at it. You have built a reputation at the Dallas Herald for thorough, honest work. Six months ago William Thoreson personally reached out and invited you to tonight's dinner. He said he had an announcement — something important, something that concerned you specifically. He wouldn't say more. You came because you have spent your entire life not knowing the full story, and some part of you thought tonight might finally change that.\n\nYou recently married Sophie quietly. She knows you well. She doesn't know all of this, and tonight is not the night you planned to explain it.\n\nYou are a better journalist than most people realize because you have always been motivated by something more personal than ambition. Every story you've chased has been, in some way, a version of the same story — who gets to decide what is true, who gets to decide what gets written down, and whose name ends up attached to things they built. You have covered bankruptcies, political scandals, and the quiet erasure of people the city would rather forget. You are very good at recognizing that last one.",
        memories: [
            { text: "The lawyer who looked into your trust when you were eighteen went pale when he found the originating documents. He told you carefully that the man who set it up was a prominent Dallas businessman. He said it like the information itself was dangerous. You have thought about that look on his face many times since.", unlockedBy: "ledger" },
            { text: "William sent you a handwritten letter six months ago, before the formal invitation. He said he had done things he wasn't proud of and wanted to make them right before it was too late. You didn't respond. You didn't know what to say. You wish now that you had.", unlockedBy: "willsDeath" },
            { text: "In your years covering Dallas business you heard whispers more than once that Thoreson Toys hadn't started the way Will told it — that there had been another name on the original company, another man involved. You could never find anything on the record to confirm it. You are finding it now.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "Will personally invited me. Said he had an announcement that would be the story of the year. That's unusual for someone so private.", unlockedBy: null }
        ],
        relationships: [
            { name: "Sophie Vanderpool", relation: "Your wife (recently married, not yet announced)" },
            { name: "William Thoreson Sr.", relation: "Invited you personally — now deceased" },
            { name: "Scott Thoreson Jr.", relation: "The family lawyer" }
        ],
        items: ["Notepad and pen"]
    },

    // ============================================================
    // MAISY — Sophie Vanderpool
    // ============================================================
    "Maisy": {
        name: "Sophie Vanderpool",
        publicDesc: "Walter Lippman's assistant at the Dallas Herald. Smart, energetic, and eager to prove herself.",
        skills: [],
        backstory: "You grew up in a merchant family in east Dallas — your father imported dry goods and your mother managed the household accounts, which meant you grew up understanding both commerce and careful record-keeping. You took the job at the Dallas Herald two years ago as a general assistant and worked your way into a dedicated role under Walter Lippman, the business and society reporter. Walter is sharp, thorough, and demanding in a way that makes you better at your job.\n\nYou and Walter were married three months ago. Quietly — just the two of you and two witnesses at the courthouse. You haven't announced it because Walter is private about his personal life, especially anything connected to his past. You know him well enough not to push.\n\nWalter has been different since he received the invitation from William Thoreson. Quieter. More inward. He told you Will had something personal to tell him — something about where he came from. You haven't pressed for details. You came tonight to support him and to help with the story, whichever one this turns out to be.\n\nYou have a gift for being underestimated that you have learned to treat as a professional asset. People talk around assistants. They leave papers on desks. They finish conversations they should have moved to other rooms. In two years at the Herald you have overheard things that would have made much more senior journalists very comfortable, and you have quietly filed all of it. You are not sure yet what kind of journalist you want to be. Tonight is giving you some ideas.",
        memories: [
            { text: "When you were researching the Thoresons for Walter, you found almost nothing about the early years of the company. Not just thin coverage — it was like someone had deliberately made it difficult to trace.", unlockedBy: "stolenCompany" },
            { text: "Walter told you his real first name once — late at night, not long after you started seeing each other. Taylor. He said it quietly and didn't elaborate and you didn't ask. You've never heard him use it since. Taylor Hartley. That's Walter. You need to tell someone.", unlockedBy: "secretHeir" },
            { text: "You and Walter are married. You got married three months ago. He didn't know any of this about his family when you said yes. Neither did you.", unlockedBy: "marriage" }
        ],
        canShare: [
            { text: "Something about the Thoreson fortune has always felt too clean. Businesses that successful usually have complicated histories.", unlockedBy: null }
        ],
        relationships: [
            { name: "Walter Lippman", relation: "Your husband — though most people here think you're just his assistant" },
            { name: "William Thoreson Sr.", relation: "The subject of tonight's story (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Met through Walter" }
        ],
        items: ["Notepad"]
    },

    // ============================================================
    // HANNAH — Vivienne Ashford
    // ============================================================
    "Hannah": {
        name: "Vivienne Ashford",
        publicDesc: "Scott and Brian's cousin on their mother's side. Recently returned from years living in Paris. Cultured, worldly, and fluent in French.",
        skills: ["French"],
        backstory: "You are Scott and Brian's cousin on their mother's side — Eleanor's niece. You spent the better part of six years living in Paris, studying at the Ecole des Beaux-Arts and immersing yourself in French language and culture more thoroughly than you ever intended to. You speak French fluently, think in it sometimes, and read it without effort. You came home to Dallas eight months ago, partly because your money was running thin and partly because your mother wrote that Uncle Will was planning something important and that you ought to be there.\n\nParis changed you in ways that are difficult to explain to people who haven't been. Not the art, exactly — though you loved the art — but the particular freedom of being nobody. Of walking down a street where no one knew your family, your history, or what was expected of you. You were just a young woman from Texas with a good eye and improving French, and that was enough. You became someone slightly different there. Looser. More willing to disagree, to sit with uncomfortable ideas, to take up space in a conversation.\n\nComing back to Dallas has required a certain amount of reassembly. The city is smaller than you remembered, the social circles tighter, the expectations more specific. People here have opinions about who the Ashford girl ought to be, and those opinions were formed before you left. You are fond of your family and you love your cousins, but you see all of it now with the slight detachment of someone who has lived somewhere else — which means you see it more clearly, and sometimes more critically, than the people inside it do.\n\nYou love your family, but you see them clearly in the way that distance allows. The Thoresons have always been a family defined by what they don't say. Uncle Will in particular carried something heavy — you noticed it as a child and it was still there when you returned. You brought your boyfriend Dylan tonight. He's an accounting student at SMU, earnest and good-natured, and slightly overwhelmed by all of this.\n\nYou are a better journalist than most people realize because you have always been motivated by something more personal than ambition. Every story you've chased has been, in some way, a version of the same story — who gets to decide what is true, who gets to decide what gets written down, and whose name ends up attached to things they built. You have covered bankruptcies, political scandals, and the quiet erasure of people the city would rather forget. You are very good at recognizing that last one.\n\nYou are better at reading people than you let on, and you have learned to keep that to yourself. In Paris you spent enough time in rooms where everyone was performing something — artistic seriousness, bohemian freedom, cosmopolitan sophistication — to develop a very good eye for the gap between what people present and what they actually are. It is a useful skill in Dallas too, though the performances here are different. Less interesting, usually. Tonight is an exception.",
        memories: [
            { text: "You remember your mother and Eleanor speaking in low voices once when you were small. Your mother said something about a woman Will had known before Eleanor. Eleanor said the name Margaret and then changed the subject immediately. You had forgotten that completely until just now.", unlockedBy: "margaretsLetter" }
        ],
        canShare: [
            { text: "Uncle Will always seemed like he was carrying something heavy. I assumed it was just the pressure of running a company.", unlockedBy: null },
            { text: "I don't know most of these people. Scott and Brian are my cousins, Aunt Eleanor practically raised me some summers — but the rest of the guests? I couldn't tell you who half of them are.", unlockedBy: null }
        ],
        relationships: [
            { name: "Dylan Winslow", relation: "Your boyfriend — you brought him tonight" },
            { name: "Scott Thoreson Jr.", relation: "Your cousin" },
            { name: "Frederick 'Brian' Thoreson", relation: "Your cousin" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your aunt" }
        ],
        items: []
    },

    // ============================================================
    // DJ — David Richardson
    // ============================================================
    "DJ": {
        name: "David Richardson",
        publicDesc: "A cousin on the Thoreson side and a licensed private investigator. Invited to tonight's dinner — now using his connections to help the family get answers.",
        skills: ["Investigation"],
        note: "You are the evidence pipeline — documents and reports come through you at each act transition, not all at once. When you get an update, make it a moment — step away, take the call, react to what you're hearing before you share it with the room. The timing matters as much as the content.",
        backstory: "You're a cousin on the Thoreson side — close enough to be at every family gathering, far enough removed to have made your own way outside the toy business. You became a licensed private investigator eight years ago after a stint working insurance adjustments convinced you that you were better at finding things out than at selling policies. You work cases around Dallas — missing persons, insurance fraud, the occasional domestic matter. You are methodical, patient, and good at asking questions that don't sound like questions.\n\nYou were invited tonight like everyone else. Uncle Will said it was going to be a special evening. Then he died, and everything changed.\n\nThe moment it happened you started making calls. You have a contact at the county clerk's office who can pull original business filings on short notice. You have someone at the coroner's office who owes you a favor and can get you a preliminary report tonight. You have a Pinkerton agent who runs background checks for a reasonable fee. While everyone else is still absorbing the shock, you are already working.\n\nYou became a private investigator because you are constitutionally incapable of leaving a question unanswered. It is not a virtue exactly — it has cost you two friendships and one relationship — but it has made you very good at your work. You don't stop. You follow the thread even when following it is inconvenient, even when the answer is going to be something nobody wanted to know. That quality has served your clients well. Tonight it is serving your family.",
        memories: [
            { text: "DALLAS COUNTY CLERK\'S OFFICE\n─────────────────────\nMr. Richardson —\n\nPer your request, we have pulled the original business registration filed March 3rd, 1902.\n\nThe entity was registered as THORESON & HARTLEY TOYS, a partnership between William A. Thoreson and Robert J. Hartley, equal shares. No dissolution paperwork was ever filed with this office. No record of partnership buyout or transfer exists in our index.\n\nA certified copy of the original filing is enclosed.\n\n— J. Fowler, Dallas County Clerk", unlockedBy: "djCountyClerk" },
            { text: "DALLAS COUNTY CORONER\'S OFFICE\n─────────────────────\nDave —\n\nWe\'ve finished our preliminary autopsy on the Thoreson matter. Our toxicology man is out of town until Thursday so I can\'t get you a full chemical breakdown tonight.\n\nI\'ve gone ahead and faxed the full report to the Thoreson residence at the number you gave me. Someone there with a medical background should be able to make sense of it.\n\nAlso — we found a small brass key in the deceased\'s left jacket pocket. No lock on his person it corresponds to. I\'m sending it back with you.\n\n— F. Garrett, Dallas County Coroner", unlockedBy: "djCoroner" },
            { text: "Mr. Richardson —\n\nBackground checks complete. Mostly clean. A few items of note.\n\nThomas Bradford — drunk and disorderly, Fort Worth, 1928. One night in county. Charges dropped.\n\nCharles Sterling — four outstanding parking citations, Dallas County. Unpaid.\n\nSUBJECT OF INTEREST 1: Walter Lippman, journalist. Pen name only — legal name is Taylor James Hartley, born September 12th 1911, Dallas TX.\n\nSUBJECT OF INTEREST 2: Miranda Longfellow, legal assistant. Legal name change filed 1920. Born Miranda Elaine Hartley, 1899, Dallas TX.\n\n— Pinkerton National Detective Agency, Dallas Office", unlockedBy: "djPinkerton" }
        ],
        canShare: [
            { text: "I've got contacts at the coroner's office and at Pinkerton. I've been making calls since this started. We should have paperwork coming our way tonight.", unlockedBy: null }
        ],
        relationships: [
            { name: "Scott Thoreson Jr.", relation: "Your cousin" },
            { name: "Frederick 'Brian' Thoreson", relation: "Your cousin" },
            { name: "William Thoreson Sr.", relation: "Your uncle (deceased)" },
            { name: "Eleanor Thoreson", relation: "Your aunt" }
        ],
        items: []
    },

    // ============================================================
    // PETER — Raymond Hammond
    // ============================================================
    "Peter": {
        name: "Raymond Hammond",
        publicDesc: "Business Manager at Thoreson Toys for fifteen years. Handles operations, vendor relationships, and day-to-day management.",
        skills: [],
        note: "You know about the European deal and the investor losses. Don't lead with it — let it come out when the financial records surface. When it does, be straightforward. You're not hiding anything. You just work there.",
        backstory: "You have been the business manager at Thoreson Toys for fifteen years. You handle the practical side of the company — vendor relationships, shipping logistics, staffing, facilities, the ten thousand details that keep an operation running. You are organized, reliable, and proud of the fact that in fifteen years you have never missed a deadline or lost a shipment.\n\nWilliam Thoreson hired you personally and you have always respected him. He was demanding but fair, and he trusted you with the daily operation completely — with one conspicuous exception. He kept the financial ledgers himself. Locked in his office. In fifteen years, you have never had full access to the company's accounting records. You assumed it was just how he operated. You never pushed it.\n\nSix months ago something changed. A European distribution deal collapsed and the company took a significant loss. Will became quieter, more private. Two investors began sending demand letters. Will kept stalling them. Tonight was supposed to be a resolution of some kind. Now Will is dead and you are realizing there may be quite a lot about this company you were deliberately kept away from.\n\nYou are a man who takes pride in competence, which is why the last few months have been unusually difficult. You have run a clean operation for fifteen years — no lost shipments, no missed deadlines, no excuses. You have always believed that if your side of the business was airtight, whatever Will was doing on the financial side was his own affair. You are beginning to understand that this belief was a form of willful blindness, and that willful blindness has consequences.",
        memories: [
            { text: "Will called you into his office about three weeks ago and asked you to pull the original company incorporation files from storage. You found them, handed them over, and he dismissed you quickly. He seemed shaken by something in the paperwork. You didn't know what you were looking at. You wish now that you had looked more carefully.", unlockedBy: "stolenCompany" },
            { text: "In fifteen years of working for this company, Will never once let you touch the books. You thought it was a control thing. It occurs to you now that it was something else entirely.", unlockedBy: "ledger" }
        ],
        canShare: [
            { text: "I've worked at Thoreson Toys for fifteen years, but Will always did the books himself. Kept the ledgers locked in his office. I never had access.", unlockedBy: null },
            { text: "Something happened about six months ago — a European deal fell apart. He got quiet after that.", unlockedBy: null }
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
    // ARASH — Marcus Brennan
    // ============================================================
    "Arash": {
        name: "Marcus Brennan",
        publicDesc: "A successful Dallas businessman with a significant stake in Thoreson Toys. Analytical, measured, and protective of his money.",
        skills: [],
        backstory: "You inherited a modest sum from your father and turned it into a considerably larger one through careful investments and an instinct for reading people that has served you well in rooms full of men who assume you aren't paying attention. You have been invested in Thoreson Toys for four years. The returns were excellent until they weren't.\n\nYou grew up the eldest of four children in a household where money was discussed openly and competence was the primary currency. Your father was a civil engineer and your mother ran a small but profitable dress shop on the east side of Dallas. Neither of them had patience for people who complained about their circumstances without doing anything to change them, and neither do you. You have been working since you were fourteen — first in your mother's shop, then in a bank, then on your own. Everything you have, you built.\n\nYou are meticulous by habit and decisive by nature, which is a combination that has occasionally made you unpopular. You have never particularly minded. You believe that women who want to be liked and women who want to be effective are usually pursuing two different careers, and you made your choice a long time ago. You dress beautifully, speak precisely, and remember everything. People in this city have learned to be more careful around you than they initially intend to be.\n\nSix months ago Will Thoreson made a reckless decision with company capital and the European deal evaporated. You and Marcus Brennan lost real money. You are not a woman who loses money quietly. You have been pursuing answers for months through proper channels. Will kept putting you off.\n\nYou came tonight expecting a confrontation. Instead you walked into a murder. You are annoyed, you are composed, and you are paying very close attention to everything happening in this room.\n\nYou have been in enough rooms with enough men to know that confidence and competence are different things, and that the first frequently masks the absence of the second. Will Thoreson had both — genuinely, for most of his career. That is what makes this so disorienting. You trusted your read of him. You are good at reading people. Tonight you are doing the uncomfortable work of deciding whether you missed something or whether Will simply hid it very well. Both possibilities trouble you in different ways.\n\nYou have been accused, more than once, of being cold. You prefer the word precise. You do not make decisions based on what you wish were true. You do not let yourself be charmed out of a sound analysis. You do not extend trust because someone seems trustworthy — you extend it because they have demonstrated it, incrementally, over time. The people who have called you cold are usually the ones who wanted you to skip that last step.",
        memories: [
            { text: "Every time you asked Will about the early history of the company, he changed the subject. Every single time. You noted it but didn't pursue it. You're pursuing it now.", unlockedBy: "stolenCompany" },
            { text: "Will called you personally, about a month before tonight, to apologize for the delays. He sounded genuinely tired. He said there were things about the company he had never told anyone and that he was trying to figure out how to make them right. You assumed he meant the European deal. You're not sure that's what he meant.", unlockedBy: "ledger" }
        ],
        canShare: [
            { text: "Yes, the European deal lost money. Yes, I was angry. But I'm a businessman — dead men don't write checks.", unlockedBy: null }
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
    // BECKY — Victoria Ashworth
    // ============================================================
    "Becky": {
        name: "Victoria Ashworth",
        publicDesc: "A sharp businesswoman and Thoreson Toys investor. Active in Dallas society with a keen eye for detail.",
        skills: [],
        backstory: "You inherited a modest sum from your father and turned it into a considerably larger one through careful investments and an instinct for reading people that has served you well in rooms full of men who assume you aren't paying attention. You have been invested in Thoreson Toys for four years. The returns were excellent until they weren't.\n\nYou grew up the eldest of four children in a household where money was discussed openly and competence was the primary currency. Your father was a civil engineer and your mother ran a small but profitable dress shop on the east side of Dallas. Neither of them had patience for people who complained about their circumstances without doing anything to change them, and neither do you. You have been working since you were fourteen — first in your mother's shop, then in a bank, then on your own. Everything you have, you built.\n\nYou are meticulous by habit and decisive by nature, which is a combination that has occasionally made you unpopular. You have never particularly minded. You believe that women who want to be liked and women who want to be effective are usually pursuing two different careers, and you made your choice a long time ago. You dress beautifully, speak precisely, and remember everything. People in this city have learned to be more careful around you than they initially intend to be.\n\nSix months ago Will Thoreson made a reckless decision with company capital and the European deal evaporated. You and Marcus Brennan lost real money. You are not a woman who loses money quietly. You have been pursuing answers for months through proper channels. Will kept putting you off.\n\nYou came tonight expecting a confrontation. Instead you walked into a murder. You are annoyed, you are composed, and you are paying very close attention to everything happening in this room.\n\nYou are a man who takes pride in competence, which is why the last few months have been unusually difficult. You have run a clean operation for fifteen years — no lost shipments, no missed deadlines, no excuses. You have always believed that if your side of the business was airtight, whatever Will was doing on the financial side was his own affair. You are beginning to understand that this belief was a form of willful blindness, and that willful blindness has consequences.\n\nYou have been accused, more than once, of being cold. You prefer the word precise. You do not make decisions based on what you wish were true. You do not let yourself be charmed out of a sound analysis. You do not extend trust because someone seems trustworthy — you extend it because they have demonstrated it, incrementally, over time. The people who have called you cold are usually the ones who wanted you to skip that last step.",
        memories: [
            { text: "You had lunch with Dorothy Wells three weeks ago and she mentioned — almost in passing — that there had always been whispers about the Thoreson money. That some people said the company hadn't started the way Will told it. You filed it away. You're filing it forward now.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "Yes, we lost money. Yes, we wanted answers. But killing a man over a business deal? I sue people. I don't poison them.", unlockedBy: null }
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
    // BRIANS — Thomas Bradford
    // ============================================================
    "BrianS": {
        name: "Thomas Bradford",
        publicDesc: "Runs Bradford & Sons, a competing toy manufacturer. Charming, ambitious, and very interested in Thoreson Toys' secrets.",
        skills: [],
        backstory: "You run Bradford & Sons, the toy manufacturing company your father built and left to you. It is a solid operation — good products, loyal customers, honest books. The one persistent frustration of your professional life has been Thoreson Toys, which has outperformed your company for decades in ways you could never fully account for. Their margins were better. Their growth was faster. Their capital in the early years seemed to materialize from nowhere — Will's family didn't have money, and yet the company expanded as if it did.\n\nThree weeks ago you sent Will a formal letter through your attorneys regarding a patent dispute. His Tin Soldier line uses a hinge mechanism that Bradford & Sons developed and patented in 1928. It was a legitimate legal complaint, not a personal one.\n\nWill invited you to tonight's dinner — the courtesy gesture between competitors. You came partly out of professional habit and partly because you suspected his big announcement had something to do with the patent dispute. You are aware that the letter makes you look like a suspect. You would like to get past that as efficiently as possible.\n\nYou are a man who takes pride in competence, which is why the last few months have been unusually difficult. You have run a clean operation for fifteen years — no lost shipments, no missed deadlines, no excuses. You have always believed that if your side of the business was airtight, whatever Will was doing on the financial side was his own affair. You are beginning to understand that this belief was a form of willful blindness, and that willful blindness has consequences.\n\nYou have been in enough rooms with enough men to know that confidence and competence are different things, and that the first frequently masks the absence of the second. Will Thoreson had both — genuinely, for most of his career. That is what makes this so disorienting. You trusted your read of him. You are good at reading people. Tonight you are doing the uncomfortable work of deciding whether you missed something or whether Will simply hid it very well. Both possibilities trouble you in different ways.\n\nYou are not, despite appearances, consumed by the rivalry with Thoreson Toys. You are competitive, yes — it would be impossible not to be, when a company across town has been outperforming you for twenty years in ways you couldn't account for — but you also genuinely love the work. The craft of it. Your father built things with his hands before he built a company, and he made sure you knew the difference between a product and a profit margin. You still know it. You are proud of what Bradford & Sons makes.\n\nYou are a woman who has always known more than the people around her assumed. It comes with the territory of being underestimated for fifty years. Men tell you things at dinner parties they would never tell another man, because they have decided you are harmless. Women tell you things because they can tell you are actually listening. You have been gathering intelligence about this city for decades with the same methodical patience you bring to botanical classification. The principle is the same: observe carefully, label accurately, and never mistake a pretty flower for an innocuous one.",
        memories: [
            { text: "You've competed with this company for nearly twenty years. The thing that always nagged at you was the capital. Companies don't grow the way Thoreson Toys grew without a substantial early foundation. Will's family didn't have money. You never understood where it came from. You're starting to.", unlockedBy: "forgedDocs" }
        ],
        canShare: [
            { text: "Yes, I sent that letter. A legitimate patent dispute. That's business — not murder.", unlockedBy: null },
            { text: "I wanted to beat Will Thoreson in court. There's no victory in suing a corpse.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Your biggest competitor (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Professional acquaintance" },
            { name: "Raymond Hammond", relation: "Thoreson's business manager" }
        ],
        items: []
    },

    // ============================================================
    // KATIE — Lillian Ashford
    // ============================================================
    "Katie": {
        name: "Lillian Ashford",
        publicDesc: "A dear friend of the Thoreson family for over thirty years. Warm, sharp-tongued, and the best-dressed woman in any room she enters.",
        skills: [],
        backstory: "You have been a fixture of Dallas society for as long as anyone can remember, and you have worked at that distinction with the same discipline other women apply to needlepoint. You chair the auxiliary committee for the Dallas Museum, sit on the board of three charitable organizations, and have not missed a significant social event in this city since 1908. You know everyone. You remember everything. You have opinions about all of it and share them selectively, which is what separates taste from gossip.\n\nYou have been close to the Thoreson family for thirty-two years — close enough that you watched Scott and Brian grow up, close enough that Eleanor calls you when she needs to talk rather than when she wants to perform. You loved Will in the way you love someone you've known long enough to see clearly: fond of him, loyal to him, and never entirely fooled by him.\n\nBecause here is what thirty-two years taught you: Will Thoreson was a man who spent his whole life paying a debt he would never fully settle. You saw it in the way he worked too hard, gave too generously, and went quiet at certain names. Eleanor told you once — just once, years ago — that the company had started under circumstances Will wasn't proud of. She said it the way people say things they immediately regret saying, and you never brought it up again. You have been sitting on that confidence for a long time. Tonight it feels less like loyalty and more like complicity.\n\nYou are a man who takes pride in competence, which is why the last few months have been unusually difficult. You have run a clean operation for fifteen years — no lost shipments, no missed deadlines, no excuses. You have always believed that if your side of the business was airtight, whatever Will was doing on the financial side was his own affair. You are beginning to understand that this belief was a form of willful blindness, and that willful blindness has consequences.\n\nYou have buried two husbands, outlasted four business partners, and chaired enough committees to understand that most institutions run on the labor of women who will never be credited for it. You have made your peace with that, mostly. What you have not made peace with is dishonesty — the deliberate, sustained kind, the kind that is maintained not out of shame but out of convenience. That kind offends you deeply. It always has. Tonight it is offending you considerably.",
        memories: [
            { text: "Eleanor told you once, years ago, that Will carried guilt about the way things started. She said it once and never repeated it and you never asked her what she meant. You have been turning that sentence over for thirty years. You think you finally understand it.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "I've known this family for thirty years. Will was a good man in many ways. But he was carrying something heavy his entire life.", unlockedBy: null }
        ],
        relationships: [
            { name: "Eleanor Thoreson", relation: "Your closest friend" },
            { name: "William Thoreson Sr.", relation: "Dear friend of thirty years (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Watched him grow up" },
            { name: "Frederick 'Brian' Thoreson", relation: "Watched him grow up" },
            { name: "Elizabeth Monroe", relation: "Fellow long-time family friend" }
        ],
        items: []
    },

    // ============================================================
    // MICHELLE — Dorothy Wells
    // ============================================================
    "Michelle": {
        name: "Dorothy Wells",
        publicDesc: "One of the most well-connected women in Dallas society. Knows what's happening in every corner of the city.",
        skills: [],
        backstory: "You are eighty-one years old and you have outlived most of the people you loved, which gives you a perspective that is sometimes melancholy and sometimes useful. You remember Dallas when it was a smaller city, when the Thoreson family was just beginning, when Will was a young man with ambition and a partner named Hartley that nobody talks about anymore.\n\nYou were born in 1854 in Savannah, Georgia, the youngest daughter of a cotton merchant who lost nearly everything in the years after the war. You learned early that fortunes could reverse without warning, and that the families who survived were the ones who held on to each other rather than to things. You came to Texas in 1881 with your husband Theodore, who built a modest law practice in Dallas and died in 1919, leaving you comfortable, independent, and extremely clear-eyed about the nature of men.\n\nYou have watched three generations of Dallas families rise and fall — the ones who made money on cattle, then on oil, then on real estate, then on things you never fully understood. You have seen which families held and which ones didn't. In your experience, the ones that came apart were almost always undone not by misfortune but by a secret that had been kept too long. The weight of it eventually becomes structural. The house starts to lean.\n\nYou are Eleanor Thoreson's great-aunt, which makes you peripheral enough to the family to have seen it without being entirely inside it. You have always believed that the truth, however painful, is better than comfortable silence. You have kept silent about some things for a long time out of loyalty to Eleanor. That loyalty has a limit.\n\nYou are a woman who has always known more than the people around her assumed. It comes with the territory of being underestimated for fifty years. Men tell you things at dinner parties they would never tell another man, because they have decided you are harmless. Women tell you things because they can tell you are actually listening. You have been gathering intelligence about this city for decades with the same methodical patience you bring to botanical classification. The principle is the same: observe carefully, label accurately, and never mistake a pretty flower for an innocuous one.\n\nYou have lived long enough to stop being frightened by difficult truths. That is the only real advantage of age — not wisdom exactly, but a certain tolerance for looking at things directly. The young are always trying to find the angle from which something hard becomes bearable. You have learned to skip that step. The thing is what it is. You look at it. You decide what to do. It is faster and considerably less exhausting than the alternative.",
        knowledge: [
            { text: "🌿 You know that plant. Wolfsbane — Aconitum. Aconitine poisoning. Your grandmother warned you about it when you were nine years old and you have never forgotten. Every part of the plant is lethal — the roots especially, but even the flowers if handled carelessly. It does not grow in Texas. It does not grow anywhere in America. It is native to the mountainous regions of Europe — the Alps, specifically. Whoever used this poison had to travel to obtain it. This was not an accident. This was not something purchased at an apothecary. Someone carried it back deliberately, knowing exactly what they were carrying.", unlockedBy: "poisoning" }
        ],
        memories: [],
        canShare: [
            { text: "In my circles, there were always whispers about a woman named Margaret connected to the Thoresons. Nobody ever knew the details.", unlockedBy: null }
        ],
        relationships: [
            { name: "Victoria Ashworth", relation: "Friend from society circles" },
            { name: "Lillian Ashford", relation: "Friend and fellow socialite" },
            { name: "William Thoreson Sr.", relation: "Social acquaintance (deceased)" },
            { name: "Eleanor Thoreson", relation: "Social acquaintance" }
        ],
        items: []
    },

    // ============================================================
    // JEFF — Charles Sterling
    // ============================================================
    "Jeff": {
        name: "Charles Sterling",
        publicDesc: "A retired Dallas banker and old friend of the Thoreson family. Traditional, principled, and sharp as ever.",
        skills: ["Banking"],
        backstory: "You inherited a modest sum from your father and turned it into a considerably larger one through careful investments and an instinct for reading people that has served you well in rooms full of men who assume you aren't paying attention. You have been invested in Thoreson Toys for four years. The returns were excellent until they weren't.\n\nYou grew up the eldest of four children in a household where money was discussed openly and competence was the primary currency. Your father was a civil engineer and your mother ran a small but profitable dress shop on the east side of Dallas. Neither of them had patience for people who complained about their circumstances without doing anything to change them, and neither do you. You have been working since you were fourteen — first in your mother's shop, then in a bank, then on your own. Everything you have, you built.\n\nYou are meticulous by habit and decisive by nature, which is a combination that has occasionally made you unpopular. You have never particularly minded. You believe that women who want to be liked and women who want to be effective are usually pursuing two different careers, and you made your choice a long time ago. You dress beautifully, speak precisely, and remember everything. People in this city have learned to be more careful around you than they initially intend to be.\n\nSix months ago Will Thoreson made a reckless decision with company capital and the European deal evaporated. You and Marcus Brennan lost real money. You are not a woman who loses money quietly. You have been pursuing answers for months through proper channels. Will kept putting you off.\n\nYou came tonight expecting a confrontation. Instead you walked into a murder. You are annoyed, you are composed, and you are paying very close attention to everything happening in this room.\n\nYou have been accused, more than once, of being cold. You prefer the word precise. You do not make decisions based on what you wish were true. You do not let yourself be charmed out of a sound analysis. You do not extend trust because someone seems trustworthy — you extend it because they have demonstrated it, incrementally, over time. The people who have called you cold are usually the ones who wanted you to skip that last step.\n\nYou have buried two husbands, outlasted four business partners, and chaired enough committees to understand that most institutions run on the labor of women who will never be credited for it. You have made your peace with that, mostly. What you have not made peace with is dishonesty — the deliberate, sustained kind, the kind that is maintained not out of shame but out of convenience. That kind offends you deeply. It always has. Tonight it is offending you considerably.\n\nYou are, at your core, an honest man — not in the performative way of people who mention their honesty frequently, but in the structural way, the kind built in early and load-bearing ever since. You have never falsified a document, never looked the other way on a suspicious account, never let a client believe something you knew to be false. You retired with your reputation entirely intact. You are aware that this is rarer than it should be, and that awareness has never left you comfortable around men who seem too clean.",
        memories: [
            { text: "Will came to you years ago and asked you a hypothetical about how a business ownership transfer might be challenged after the fact, and what the statute of limitations would be on a fraudulent document. You told him the honest answer and he thanked you and changed the subject. You have thought about that conversation several times tonight.", unlockedBy: "forgedDocs" },
            { text: "The Thoreson books were not among your accounts — Will kept his banking private. You always found that slightly unusual for a man otherwise so engaged with the business community.", unlockedBy: "ledger" }
        ],
        canShare: [
            { text: "I was a banker in Dallas for forty years. I know what it looks like when someone has worked hard to make money look like something it isn't.", unlockedBy: null },
            { text: "Follow the money. If someone is hiding something, the money always tells the story eventually.", unlockedBy: null }
        ],
        relationships: [
            { name: "James Sterling", relation: "Your son" },
            { name: "William Thoreson Sr.", relation: "Old friend through Dallas social circles (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Friend of the family" },
            { name: "Eleanor Thoreson", relation: "Friend of the family" }
        ],
        items: []
    },

    // ============================================================
    // CASEY — Patricia Chamberlain
    // ============================================================
    "Casey": {
        name: "Patricia Chamberlain",
        publicDesc: "An independent woman of means and strong will. Guardian to two young men. Protective, perceptive, and doesn't suffer fools.",
        skills: ["Medical"],
        backstory: "You spent seventeen years as a registered nurse — first at Baylor University Hospital in Dallas, then as a private duty nurse for several of the city's wealthier families. You have seen the inside of more sick rooms than most people would care to imagine, and you have sat with enough dying men and women to understand that the body rarely lies, even when the people around it do.\n\nYou left nursing eight years ago when your sister and her husband died within a year of each other, leaving behind two boys — William, then nine, and Robert, then seven. You took them in without hesitation. Not out of obligation, exactly. Out of something closer to recognition. You understood what it was to be the person in the room who does what needs doing.\n\nYou are well provided for. Your late husband — a railroad contractor you married at twenty-eight and buried at thirty-four — left you comfortable, and you have managed that money with the same methodical competence you applied to everything else. You do not need William Thoreson's company or anyone else's.\n\nRaising William and Robert has been the work of the last eight years and you do not romanticize it. They are good boys, and good boys still require structure, attention, and someone paying close attention to who they are becoming. You are that person. You notice when something is wrong before they say a word about it.\n\nYour nursing background is not something you advertise in social settings. People do not know what to do with a woman who can read a coroner's report the way other women read a menu. But the knowledge is there, intact, and it does not go away because you stopped drawing a salary for it.\n\nYou are at this dinner because you have known the Thoreson family for years through various charitable and social connections, and because William Sr. specifically asked you to come. You did not think much of it at the time. You are thinking more of it now.",
        memories: [
            { text: "You remember a conversation you had with Will, years ago, at a charity dinner. He had been drinking more than usual and he said something odd — that a man could do something he knew was wrong and still believe he was the best person to have done it. You asked him what he meant. He laughed it off. You never forgot it.", unlockedBy: "stolenCompany" },
            { text: "You worked as a private duty nurse for the Ashford family for two years in the early twenties. You know Eleanor Thoreson — née Ashford — well enough to have seen her at her worst and her best. She was not a woman who frightened easily.", unlockedBy: null }
        ],
        canShare: [
            { text: "Don't let sentimentality cloud judgment. If Will wronged people, the truth serves everyone — including his family.", unlockedBy: null }
        ],
        relationships: [
            { name: "Robert Chamberlain", relation: "Your ward — you raised him" },
            { name: "William Chamberlain", relation: "Your ward — you raised him" },
            { name: "William Thoreson Sr.", relation: "Family acquaintance (deceased)" },
            { name: "Eleanor Thoreson", relation: "Acquaintance — you nursed the Ashford family" }
        ],
        items: []
    },

    // ============================================================
    // KRYSTAL — Victoria Grant
    // ============================================================
    "Krystal": {
        name: "Victoria Grant",
        publicDesc: "Her husband runs a successful import business with ties to Thoreson Toys. Sophisticated, socially savvy, and sharper than people expect.",
        skills: [],
        backstory: "Your husband Edward runs Grant Import & Export, which has maintained a trade relationship with Thoreson Toys for the better part of a decade — primarily European sourcing for specialty materials and components. You have attended Thoreson family and company events for years as a result, and you know this household and the people in it better than most guests here tonight. Edward is overseas at the moment — a sourcing trip to Lyon that couldn't be moved — which is why you came tonight alone.\n\nYou grew up in a trading family yourself — your father ran a dry goods import operation out of Houston — and you understand commerce, contracts, and the texture of a business relationship in ways that most people here would not expect from you. Your father taught you to read a room before you spoke in it, to understand what everyone present wanted before you said anything about what you wanted. It has served you well.\n\nYou and Edward have been married for eleven years. It is a genuine partnership — he is better at making deals and you are better at reading whether those deals will hold. You have saved him from at least two business relationships that would have cost him considerably, and he has never once pretended otherwise. You respect each other. That is not a small thing.\n\nYou have spent eleven years accompanying your husband to business functions and watching people decide within thirty seconds that you have nothing to contribute to the conversation. You learned early that the correct response to this is to agree with them, visibly, while paying extremely close attention to everything. Edward figured out what you were doing within the first year of your marriage and started debriefing you on the drive home. Some of your best business intelligence has come from conversations people had in front of you because they thought you were looking at the centerpiece.\n\nYour husband's business depends in part on the Thoreson relationship. Tonight has implications beyond the personal.",
        memories: [
            
            { text: "Through Edward's import work, you know that Thoreson Toys has had active trade connections in Switzerland and the Alpine region for several years. You know the contacts. You know the routes.", unlockedBy: "poisoning" },
            { text: "You heard Will and Edward talking once at a company function about the early years of the business. Will got quiet in a way that stopped the conversation. Edward told you later that he'd asked something he shouldn't have, though he didn't know what.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "I've been underestimated in this room all evening because I'm the wife. I notice things. That's not nothing.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Business connection (deceased)" },
            { name: "Scott Thoreson Jr.", relation: "Professional acquaintance" },
            { name: "Miranda Longfellow", relation: "Observed at many Thoreson events" },
            { name: "Dorothy Wells", relation: "Friend from social circles" }
        ],
        items: []
    },

    // ============================================================
    // LINDSEY — Elizabeth Monroe
    // ============================================================
    "Lindsey": {
        name: "Elizabeth Monroe",
        publicDesc: "A fixture of Dallas society and the life of every party she has ever attended. Knows everyone, remembers everything, and makes it all look effortless.",
        skills: [],
        backstory: "You are forty-seven years old and you have been the most fun person in the room for approximately three decades running. This is not an accident. It is a skill you have cultivated with the same discipline other women put into piano or needlepoint, and you are considerably better at it than any of them were at those.\n\nYou grew up in Dallas with enough money to get into the right rooms and enough charm to stay in them. You have known the Thoresons for twenty years — Will and Eleanor through charity boards and dinner parties and the general overlap of people who run in the same circles in a city this size. You are not family. You are something more useful: a friend of the family who is invited to everything and expected to keep nothing serious for longer than it takes to find the next drink.\n\nThat reputation is mostly deserved. You do love a party. You love good champagne, terrible gossip, dancing when the music is right, and the particular electricity of a room full of people all pretending to be on their best behavior. You find most social situations genuinely enjoyable rather than something to be endured, which puts you in a small minority and gives you a natural advantage.\n\nWhat people tend to underestimate is that you are also paying very close attention. You have spent twenty years at Dallas dinner parties — you know which marriages are in trouble, which business deals went sideways, which families are living past their means. You know these things not because you went looking for them but because people tell you things. You are easy to talk to. You are fun. You do not seem like someone who files information away.\n\nYou seem like someone who is already looking for the next laugh.\n\nYou have heard the name Hartley before, a long time ago, at a party where someone had too much to drink and said something they clearly regretted. You did not think much of it at the time. You are thinking about it now.\n\nYour goal tonight, as always, is to have a good time. You are flexible about what that looks like. If a good time means a cocktail and some dancing, wonderful. If a good time means finding out who killed Will Thoreson before anyone else does, that is also wonderful. You are adaptable.",
        memories: [
            { text: "Years ago at a New Year's party, you overheard someone say that Will Thoreson hadn't built that company alone, and that the man who helped him build it hadn't seen a penny of it. The conversation stopped the moment they noticed you. You laughed it off then. You remember it now.", unlockedBy: "stolenCompany" },
            { text: "Eleanor always got quiet at a particular kind of party — the ones where Will was charming and easy with everyone in the room. Not jealous exactly. Something more resigned. You assumed it was just the wear of a long marriage. You are revising that assumption.", unlockedBy: "affair" },
            { text: "You have attended enough of these evenings to know that the ones that end with a revelation always had the revelation in the room the whole time. Everyone who needed to be there was there. It was never an accident.", unlockedBy: "finalConfession" }
        ],
        canShare: [
            { text: "I've been to every important party in this city for twenty years. The Thoresons always had the best ones. Will knew how to make a room feel like something was about to happen.", unlockedBy: null }
        ],
        relationships: [
            { name: "William Thoreson Sr.", relation: "Old friend of twenty years (deceased)" },
            { name: "Eleanor Thoreson", relation: "Friend — you've served on three charity boards together" },
            { name: "Scott Thoreson Jr.", relation: "You've watched him grow up" },
            { name: "Lillian Ashford", relation: "You've crossed paths at every event in this city for years" }
        ],
        items: []
    },

    // ============================================================
    // BRADEY — James Sterling
    // ============================================================
    "Bradey": {
        name: "James Sterling",
        publicDesc: "Son of Charles Sterling, the retired banker. Young, ambitious, and seeing the Thoreson family with fresh eyes.",
        skills: [],
        backstory: "You are twenty-three years old and you are acutely aware that this is the most interesting evening of your life so far. You work as a junior associate at your father's former bank, learning the trade from the bottom up the way your father insists is the only proper way to learn it. You are ambitious, observant, and not yet experienced enough to know which questions you're not supposed to ask.\n\nYou grew up in a house where dinner table conversation was frequently about interest rates, lending risk, and the moral obligations of financial institutions — your father had strong opinions about all of it and was not interested in keeping them to himself. You absorbed more than you let on. You know how to read a balance sheet. You know how collateral works. You know what it looks like when a loan has been structured to obscure something, and you know that the people doing the obscuring are rarely as clever as they think they are.\n\nYou also grew up watching your father move through rooms like this one — estates, clubs, charity dinners — and you studied the way he did it. Unhurried. Never the loudest voice. Always the person who had already understood the situation by the time everyone else was still figuring out what was happening. You are trying to learn that particular skill. You are not sure you have it yet, but tonight is useful practice.\n\nYou are, underneath the professional ambition, genuinely curious about people — why they make the choices they do, what they're protecting, what they're afraid of. You find this evening less frightening than most of the adults here seem to. You find it fascinating.\n\nYou have been brought to Thoreson events a handful of times by your father, but always as an afterthought — the son who tagged along. Tonight feels different.\n\nYou have buried two husbands, outlasted four business partners, and chaired enough committees to understand that most institutions run on the labor of women who will never be credited for it. You have made your peace with that, mostly. What you have not made peace with is dishonesty — the deliberate, sustained kind, the kind that is maintained not out of shame but out of convenience. That kind offends you deeply. It always has. Tonight it is offending you considerably.\n\nYou are aware that you are young enough that most people in this room will discount what you say before you finish saying it. You have decided to treat that as information rather than an obstacle. The people who dismiss you are showing you something — about their assumptions, about what they're protecting, about who they've decided doesn't count. You file it. You have been filing a great deal tonight.",
        memories: [
            { text: "Your father mentioned once — offhandedly — that the Thoreson accounts in their early days were complicated in a way that had made some people at the bank uncomfortable. He said it was old history and not worth picking at.", unlockedBy: "ledger" },
            { text: "You overheard Marcus Brennan and Victoria Ashworth talking on a patio at a company function last year. Brennan said Will had cost them a fortune on the European deal but had made them ten times that over the years. They didn't know you were there.", unlockedBy: "europeanDeal" }
        ],
        canShare: [
            { text: "I don't have thirty years of loyalty to this family clouding my view. Sometimes that's what a room needs.", unlockedBy: null }
        ],
        relationships: [
            { name: "Charles Sterling", relation: "Your father" },
            { name: "Scott Thoreson Jr.", relation: "Family connection through your father" }
        ],
        items: []
    },

    // ============================================================
    // ALEXANDER — William Chamberlain (age 17)
    // ============================================================
    "Alexander": {
        name: "William Chamberlain",
        publicDesc: "A young man under the guardianship of Patricia Chamberlain. Intelligent, thoughtful, and quietly ambitious.",
        skills: [],
        backstory: "You are seventeen years old, which means you are old enough to understand most of what is happening tonight and young enough that the adults will periodically forget you are in the room. You have learned to use both of those things to your advantage.\n\nYou were placed with Patricia Chamberlain at the age of nine, after your parents died within a year of each other — your father from a fall, your mother from a fever that the doctors caught too late. Patricia took you in without drama and has raised you with a combination of high expectations and genuine care that you have come to understand, over the years, is rarer than it sounds.\n\nYou are a serious student — history and mathematics are your best subjects, and you have been quietly nursing an ambition to study law at SMU, though you haven't told Patricia yet. You read the newspaper every morning. You have opinions about current events. You are the kind of seventeen-year-old who sometimes irritates adults by being right.\n\nRobert has been your brother in every way that matters for the past eight years. He is younger than you and more impulsive, and you have developed a habit of steadying him that you both take for granted. Tonight you are not sure who needs steadying more — Robert or the rest of this room.\n\nYou are, at your core, an honest man — not in the performative way of people who mention their honesty frequently, but in the structural way, the kind built in early and load-bearing ever since. You have never falsified a document, never looked the other way on a suspicious account, never let a client believe something you knew to be false. You retired with your reputation entirely intact. You are aware that this is rarer than it should be, and that awareness has never left you comfortable around men who seem too clean.\n\nYou have been told you are mature for your age so many times that you have started to find it mildly insulting. You are not mature for your age. You are a seventeen-year-old who read a great deal and paid attention when adults forgot you were in the room, and those are learnable skills, not a personality type. What you actually are, underneath the seriousness, is someone who wants very badly to understand how the world works — not the version people present at dinner parties, but the actual mechanisms underneath. Tonight those mechanisms are unusually visible.",
        memories: [
            { text: "Patricia said something to you last week, before tonight's dinner — that Will Thoreson was a man who had built something real but built it wrong, and that you could learn as much from watching that kind of story as from any success. You didn't fully understand it then. You do now.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "Patricia always says you can learn more about a person by watching what they do when they think nobody's looking.", unlockedBy: null }
        ],
        relationships: [
            { name: "Patricia Chamberlain", relation: "Your guardian" },
            { name: "Robert Chamberlain", relation: "Like a brother — you've grown up together" },
            { name: "James Sterling", relation: "Met tonight" }
        ],
        items: []
    },

    // ============================================================
    // JESSE — Robert Chamberlain (age 15)
    // ============================================================
    "Jesse": {
        name: "Robert Chamberlain",
        publicDesc: "The younger of Patricia Chamberlain's two wards. Loyal, protective, and more emotionally attuned than people give him credit for.",
        skills: [],
        backstory: "You are twenty-three years old and you are acutely aware that this is the most interesting evening of your life so far. You work as a junior associate at your father's former bank, learning the trade from the bottom up the way your father insists is the only proper way to learn it. You are ambitious, observant, and not yet experienced enough to know which questions you're not supposed to ask.\n\nYou grew up in a house where dinner table conversation was frequently about interest rates, lending risk, and the moral obligations of financial institutions — your father had strong opinions about all of it and was not interested in keeping them to himself. You absorbed more than you let on. You know how to read a balance sheet. You know how collateral works. You know what it looks like when a loan has been structured to obscure something, and you know that the people doing the obscuring are rarely as clever as they think they are.\n\nYou also grew up watching your father move through rooms like this one — estates, clubs, charity dinners — and you studied the way he did it. Unhurried. Never the loudest voice. Always the person who had already understood the situation by the time everyone else was still figuring out what was happening. You are trying to learn that particular skill. You are not sure you have it yet, but tonight is useful practice.\n\nYou are, underneath the professional ambition, genuinely curious about people — why they make the choices they do, what they're protecting, what they're afraid of. You find this evening less frightening than most of the adults here seem to. You find it fascinating.\n\nYou have been brought to Thoreson events a handful of times by your father, but always as an afterthought — the son who tagged along. Tonight feels different.\n\nYou have spent most of your life being told, in various ways, that independence in a woman is either a performance or a compensation for something missing. You have found that the most efficient response to this is to ignore it entirely. You are independent because it suits you, because you are good at it, and because you worked very hard to build the conditions that make it possible. You owe no one an explanation for any of that, and you do not offer one.\n\nYou are aware that you are young enough that most people in this room will discount what you say before you finish saying it. You have decided to treat that as information rather than an obstacle. The people who dismiss you are showing you something — about their assumptions, about what they're protecting, about who they've decided doesn't count. You file it. You have been filing a great deal tonight.\n\nYou don't always have the words for what you notice, but you notice it. You noticed when Patricia was worried about something she wasn't saying last month. You noticed when the woman across the room — Miranda — looked at the deceased man's chair for a full three seconds before anyone else had processed that he was gone. You noticed things about tonight within minutes of arriving that the adults with thirty years on you are still catching up to. You're not sure what to do with that. You're figuring it out.",
        memories: [
            { text: "You saw Will alone in the garden once, maybe two months ago. He was holding a letter and his shoulders were shaking. When he noticed you he straightened up and shoved the letter in his pocket and pretended nothing had happened. He walked past you without a word. You have been thinking about the look on his face all evening.", unlockedBy: "margaretsLetter" },

            { text: "Patricia said something on the drive over — that Will Thoreson was a man who had finally decided to face something he'd been running from for thirty years. You didn't know what she meant. You're starting to.", unlockedBy: "stolenCompany" }
        ],
        canShare: [
            { text: "I don't know these people the way everyone else here does. But someone in this room isn't surprised. And I know what that looks like.", unlockedBy: null }
        ],
        relationships: [
            { name: "Patricia Chamberlain", relation: "Your guardian" },
            { name: "William Chamberlain", relation: "Like a brother" },
            { name: "James Sterling", relation: "Met tonight" }
        ],
        items: []
    },

    // ============================================================
    // DYLAN — Theodore "Teddy" Winslow
    // ============================================================
    "Dylan": {
        name: "Theodore 'Teddy' Winslow",
        publicDesc: "Vivienne's boyfriend and an accounting student at SMU. Quiet until someone puts numbers in front of him.",
        skills: ["Accounting"],
        backstory: "You are twenty-three years old and you are acutely aware that this is the most interesting evening of your life so far. You work as a junior associate at your father's former bank, learning the trade from the bottom up the way your father insists is the only proper way to learn it. You are ambitious, observant, and not yet experienced enough to know which questions you're not supposed to ask.\n\nYou grew up in a house where dinner table conversation was frequently about interest rates, lending risk, and the moral obligations of financial institutions — your father had strong opinions about all of it and was not interested in keeping them to himself. You absorbed more than you let on. You know how to read a balance sheet. You know how collateral works. You know what it looks like when a loan has been structured to obscure something, and you know that the people doing the obscuring are rarely as clever as they think they are.\n\nYou also grew up watching your father move through rooms like this one — estates, clubs, charity dinners — and you studied the way he did it. Unhurried. Never the loudest voice. Always the person who had already understood the situation by the time everyone else was still figuring out what was happening. You are trying to learn that particular skill. You are not sure you have it yet, but tonight is useful practice.\n\nYou are, underneath the professional ambition, genuinely curious about people — why they make the choices they do, what they're protecting, what they're afraid of. You find this evening less frightening than most of the adults here seem to. You find it fascinating.\n\nYou have been brought to Thoreson events a handful of times by your father, but always as an afterthought — the son who tagged along. Tonight feels different.\n\nYou have spent most of your life being told, in various ways, that independence in a woman is either a performance or a compensation for something missing. You have found that the most efficient response to this is to ignore it entirely. You are independent because it suits you, because you are good at it, and because you worked very hard to build the conditions that make it possible. You owe no one an explanation for any of that, and you do not offer one.\n\nYou are aware that you are young enough that most people in this room will discount what you say before you finish saying it. You have decided to treat that as information rather than an obstacle. The people who dismiss you are showing you something — about their assumptions, about what they're protecting, about who they've decided doesn't count. You file it. You have been filing a great deal tonight.\n\nYou have been told you are mature for your age so many times that you have started to find it mildly insulting. You are not mature for your age. You are a seventeen-year-old who read a great deal and paid attention when adults forgot you were in the room, and those are learnable skills, not a personality type. What you actually are, underneath the seriousness, is someone who wants very badly to understand how the world works — not the version people present at dinner parties, but the actual mechanisms underneath. Tonight those mechanisms are unusually visible.\n\nYou are not, despite Vivienne's occasional gentle teasing, boring. You are specific. There is a difference. You are not interested in everything — you are deeply interested in a few things, numbers foremost among them, and you find that depth more satisfying than breadth. You can spend an hour on a single interesting ledger entry and come out the other side knowing something true and precise about a person or an organization that no amount of conversation would have revealed. Tonight you have been doing exactly that, quietly, while everyone else talks.",
        memories: [
            { text: "You ran the numbers quietly in your head while everyone was talking. Twenty-four years of fifty-dollar monthly payments. Fourteen thousand four hundred dollars. Not a fortune, but consistent. Sustained. Personal. Someone felt responsible for whoever T.H. is for a very long time.", unlockedBy: "secretHeir" }
        ],
        canShare: [
            { text: "I may not know anyone here, but I know numbers. If there's a financial document, let me see it.", unlockedBy: null }
        ],
        relationships: [
            { name: "Vivienne Ashford", relation: "Your girlfriend — you're here for her" },
            { name: "Scott Thoreson Jr.", relation: "Vivienne's cousin — met him once" },
            { name: "Frederick 'Brian' Thoreson", relation: "Vivienne's cousin" },
            { name: "Eleanor Thoreson", relation: "Vivienne's aunt" }
        ],
        items: []
    }

};
