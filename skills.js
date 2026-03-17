// SKILLS DATABASE — Thoreson Estate Murder Mystery
// Each skill has:
//   title: Display name
//   password: QR page password (currently "open" for testing)
//   lockedTitle: What the QR page shows before unlocking
//   lockedSubtitle: Hint text on the locked page
//   errorMsg: Wrong password message
//   badge: Skill badge label
//   summary: Short text for dashboard Discoveries page (everyone sees this after QR unlock)
//   expert: Full HTML analysis shown on QR page after password entry (expert reads aloud)

const skillsDatabase = {

    "Accounting": {
        title: "Financial Ledger Analysis",
        password: "open",
        lockedTitle: "Financial Records",
        lockedSubtitle: "This ledger requires expert examination",
        errorMsg: "Incorrect password. Find someone with the proper expertise.",
        badge: "Financial Analysis",
        header: "Thoreson Toys Ledger — Expert Findings",
        summary: "The ledger contains secret monthly payments of $50 to someone listed only as <strong>'T.H.'</strong> — going back to 1911. The payments were authorized personally by Will, bypassing normal accounting. Over 24 years of hidden disbursements to an unknown recipient.",
        expert: `
            <p>I've conducted a thorough review of the 1934 financial ledger for Thoreson Toys. On the surface, the books appear orderly — routine vendor payments, service fees, equipment maintenance, and quarterly sales revenue deposits. The company appears profitable, with a healthy year-end balance.</p>
            
            <p>However, buried among the legitimate entries is a recurring anomaly that would be invisible to an untrained eye:</p>
            
            <div class="reveal-highlight">
                On the 5th of every month, there is a payment of exactly $50.00 listed as "Monthly Disbursement — T.H." This payment has no corresponding invoice, no vendor record, and no business justification anywhere in these books. It appears in every single month without exception.
            </div>
            
            <p>This is deeply irregular. In proper bookkeeping, every disbursement must be tied to a payee, a purchase order, or an account. Using only initials — "T.H." — is a deliberate attempt to obscure the identity of the recipient. Furthermore, these payments are authorized personally by W. Thoreson himself, bypassing the normal approval chain entirely.</p>

            <p>Cross-referencing with the ledger's date entries, these payments appear to have been ongoing since at least 1911 — over twenty-four years of secret monthly payments to someone William Thoreson did not want anyone to know about.</p>
            
            <div class="reveal-highlight">
                This is not a business expense. Fifty dollars a month, paid without fail for over two decades, personally authorized and deliberately hidden — this is a private obligation. Whoever "T.H." is, William Thoreson has been supporting them in secret for a very long time.
            </div>
            
            <p><strong>Recommendation:</strong> Determine the identity of "T.H." — the initials may refer to a person, possibly someone connected to the Thoreson family. The consistency and secrecy of these payments suggest a deeply personal matter — a debt, an obligation, or someone he felt responsible for.</p>
        `
    },


    "French": {
        title: "Margaret's Letter (Translated)",
        password: "open",
        lockedTitle: "French Correspondence",
        lockedSubtitle: "This letter is written entirely in French",
        errorMsg: "Incorrect password. Find someone who speaks French.",
        badge: "French Translation",
        header: "Letter from Margaret Hartley to William Thoreson",
        summary: "A letter from Margaret Hartley to Will, written in French. She confronts him over the secrets he kept and the people he abandoned. She mentions a safe in the study with a combination that meant something to him.",
        expert: `
            <p>This letter was written in French — likely deliberately, so that only someone educated abroad would be able to read it. The tone is deeply personal, angry, and accusatory. Here is the full translation:</p>
            
            <div class="letter-text">
                "William,<br><br>
                You always kept your secrets locked away. Just like that safe in your study closet. I know you have a heart in there somewhere. Even though you showed no heart when you sent me away.<br><br>
                I wonder — does the combination reveal how you truly felt?<br><br>
                His daughter was fourteen years old when Robert died. She needed someone. You could have been there for her. You chose not to be.<br><br>
                She grew up with nothing — no money, no name, no father. And you built your empire on the ruins of her family.<br><br>
                I have kept your secret all these years. But secrets have a way of rising to the surface, William. Especially yours.<br><br>
                — Margaret"
            </div>

            <p>Margaret is furious — and grief-stricken. She confronts Will directly over what happened to Robert's daughter after his death. Will had the means to help her and did nothing.</p>
            
            <div class="reveal-highlight">
                Margaret references a <strong>safe in the study closet</strong>. She hints that the combination is emotionally significant to Will — something sentimental. Something he couldn't bring himself to forget.
            </div>
        `
    },

    "Investigation": {
        title: "Background Check — All Guests",
        password: "open",
        lockedTitle: "Background Report",
        lockedSubtitle: "This document requires investigative expertise to interpret",
        errorMsg: "Incorrect password. Find someone with investigative skills.",
        badge: "Background Investigation",
        header: "Pinkerton Guest Verification — Thoreson Estate",
        summary: "Background checks were run on everyone at the party. Most came back clean. But two guests flagged for name changes — both connected to the <strong>Hartley</strong> family. Walter Lippman was born <strong>Taylor Hartley</strong>. And Miranda Longfellow's identity doesn't exist before 1920 — she's a high-probability match for <strong>Miranda Hartley</strong>.",
        expert: `
            <p>I called in a favor at Pinkerton and had them run background checks on every person at this dinner tonight. Most of them came back exactly as expected — no surprises, no flags. But two names came back with anomalies.</p>
            
            <div class="reveal-highlight">
                <strong>Walter Lippman</strong> — the journalist — has a legal name change on file. His birth name is <strong>Taylor Hartley</strong>. Born September 12, 1911. Mother: Margaret Hartley. He changed his name in 1929 at age 18. We already knew about Taylor from the ledger and the trust fund — but now we know he's been sitting at this table the whole time.
            </div>
            
            <p>That's interesting on its own. But here's where it gets serious.</p>
            
            <div class="reveal-danger">
                <strong>Miranda Longfellow</strong> — Scott's assistant — doesn't exist. There is no birth certificate, no school record, no census entry for anyone named "Miranda Longfellow" anywhere in Texas before 1920. The identity was created from nothing. Pinkerton cross-referenced her description against Dallas County records and came back with one high-probability match: <strong>Miranda Hartley</strong>, born June 3, 1896. Father: Robert Hartley. Mother: Margaret Hartley.
            </div>
            
            <p>If that's right, then Walter and Miranda share the same mother — Margaret Hartley. They're both Hartleys. One changed his name legally. The other built an entirely new identity and has been working inside the Thoreson household for <strong>ten years</strong>.</p>
            
            <p><strong>Two children of the Hartley family are in this room tonight. And one of them has been hiding in plain sight.</strong></p>
        `
    },

    "Legal": {
        title: "Forged Transfer Documents",
        password: "open",
        lockedTitle: "Legal Document",
        lockedSubtitle: "This document requires legal expertise to examine",
        errorMsg: "Incorrect password. Find someone with legal knowledge.",
        badge: "Legal Analysis",
        header: "Certificate of Transfer — Expert Findings",
        summary: "The company ownership transfer from Robert Hartley to Will Thoreson is <strong>fraudulent</strong>. Robert's signature doesn't match known samples, the document is dated one day before Robert's death, and the notary 'James Crawford' has no record in Dallas County.",
        expert: `
            <p>I've examined this ownership transfer document purporting to convey Robert Hartley's fifty-percent stake in the company to William Thoreson. At first glance it appears to be a standard business transfer, but upon closer inspection, there are multiple red flags that call its legitimacy into serious question.</p>
            
            <div class="reveal-highlight">
                The signature attributed to Robert Hartley is forged. The pen strokes are hesitant and show signs of tracing — inconsistent with someone's natural handwriting. The ink also appears slightly different in color and weight from the body of the document, suggesting it was added at a different time, possibly after the document was drafted.
            </div>
            
            <p>The timing is deeply suspicious. The document is dated <strong>March 14, 1910</strong> — exactly one day before Robert Hartley's death. A man transferring his entire stake in a profitable company the day before he dies, with no apparent consideration or payment recorded? That defies all standard business practice.</p>

            <p>I also attempted to verify the witness. The document bears the signature of "James Crawford, Notary Public." However, there is no record of any James Crawford serving as a licensed notary in Dallas County during this period. The notary seal, upon close examination, appears hand-stamped rather than embossed — another indication of fabrication.</p>
            
            <div class="reveal-highlight">
                In my professional opinion, this document is fraudulent. Robert Hartley did not willingly sign over his company. Someone — almost certainly William Thoreson — forged this transfer to seize full ownership of what was originally a shared business. This was theft.
            </div>
        `
    },

    "Medical": {
        title: "Autopsy — Cause of Death",
        password: "open",
        lockedTitle: "Medical Report",
        lockedSubtitle: "This document requires medical expertise to interpret",
        errorMsg: "Incorrect password. Find someone with medical knowledge.",
        badge: "Medical Analysis",
        header: "Preliminary Autopsy Report — William Thoreson Sr.",
        summary: "Will died of acute <strong>Aconitine poisoning</strong> — a toxin from Wolfsbane. It was administered orally, likely in food or drink. Symptoms include numbness, weakness, and cardiac arrest within 2-6 hours. <strong>This was murder.</strong>",
        expert: `
            <p>I've reviewed the preliminary autopsy findings in detail. The external examination showed no signs of trauma, struggle, or forced ingestion — which initially supported the assumption of natural causes. However, the toxicology results tell a very different story.</p>
            
            <div class="reveal-danger">
                Cause of Death: Acute poisoning. Toxicology indicates the presence of <strong>Aconitine</strong> — a lethal alkaloid derived from the plant Aconitum, commonly known as <strong>Wolfsbane</strong> or <strong>Monkshood</strong>. Concentration levels in the blood are consistent with a single, deliberate oral dose.
            </div>
            
            <p>Aconitine is extraordinarily dangerous — among the most potent plant-based poisons known to medicine. It disrupts sodium channels in nerve and heart tissue, causing progressive paralysis of the cardiac muscle. Based on the concentration found, the victim would have experienced initial tingling or numbness in the mouth and throat within minutes of ingestion, followed by increasing weakness, nausea, and a sense of dread. Within two to six hours, complete cardiac arrest.</p>
            
            <div class="reveal-highlight">
                This was not natural causes. This was not an accident. The dose was precise and deliberate — someone with knowledge of the poison administered it orally, almost certainly dissolved into food or drink. William Thoreson was murdered.
            </div>
            
            <p>One additional note of medical significance: Aconitine leaves very little trace and is easily missed in a standard examination. Had this autopsy not included a full toxicology panel, the death would likely have been ruled cardiac failure. Whoever chose this poison knew exactly what they were doing.</p>
            
            <p><strong>Note:</strong> Aconitine is derived from Wolfsbane, a plant that grows wild in the mountainous regions of Europe — particularly the Alps of Switzerland, Austria, and Northern Italy.</p>
        `
    },

    "Banking": {
        title: "Bank Statement Analysis — Kessler & Braun Investment",
        password: "open",
        lockedTitle: "Bank Records",
        lockedSubtitle: "These financial records require banking expertise to interpret",
        errorMsg: "Incorrect password. Find someone with banking experience.",
        badge: "Banking Analysis",
        header: "Thoreson Toys — Capital Account Review, 1934",
        summary: "An $8,000 wire transfer was sent to Kessler & Braun European Distributors in Hamburg for an overseas expansion deal. The company dissolved within six weeks — total loss. Two outside investors who had put money into Thoreson Toys have been demanding a meeting with Will for months.",
        expert: `
            <p>I've been looking over the Thoreson Toys bank statements. Most of this is what you'd expect — weekly sales deposits, payroll, vendor payments. The company's been running steady for years. But a few things caught my eye.</p>
            
            <div class="reveal-highlight">
                First — right at the top of the statement, January 2nd. Two outside investors deposited money into the company account. <strong>Investor Account 7714-A put in $3,000</strong> and <strong>Investor Account 7722-B put in $2,500</strong>. That's $5,500 of other people's money that Will was managing.
            </div>
            
            <p>Then in March, there's a wire transfer for <strong>$8,000</strong> sent to a company called <strong>Kessler & Braun European Distributors</strong> out of Hamburg, Germany. Looks like Will was trying to break into overseas markets — European toy distribution. That's a big swing for a company this size. The account dropped from $22,000 down to about $14,000 overnight.</p>
            
            <p>Six weeks later, Kessler & Braun's account was dissolved. There's a write-down on the books for the full $8,000 — total loss. No recovered funds, nothing coming back. Just gone.</p>
            
            <div class="reveal-danger">
                Now here's where it gets interesting. After the loss hit the books, both of those investors started sending demand letters. Then meeting requests. Then <em>more</em> meeting requests. Then one of them got their attorney involved. Months of correspondence, and Will kept pushing them off. Somebody lost real money because of Will's decision, and they've been trying to get answers for months.
            </div>
            
            <p><strong>The question is — who are these two investors, and are they here tonight?</strong></p>
        `
    },

    "Bartender": {
        title: "Cocktail Recipes",
        password: null,
        badge: "Bartender",
        header: "Evening Cocktail Menu",
        summary: "<strong>Old Fashioned</strong> — 2 oz whiskey, 1 sugar cube, 2 dashes Angostura bitters, orange peel. Muddle sugar and bitters, add whiskey and ice, stir, garnish with orange peel.<br><br><strong>Gin Rickey</strong> — 2 oz gin, 0.75 oz fresh lime juice, soda water. Build over ice, top with soda, garnish with lime.<br><br><strong>Bee's Knees</strong> — 2 oz gin, 0.75 oz fresh lemon juice, 0.75 oz honey syrup. Shake with ice, strain.<br><br><strong>Cuba Libre</strong> — 2 oz rum, cola, fresh lime juice. Build over ice, top with cola, squeeze of lime.<br><br><strong>Temperance Options</strong> — Shirley Temple (ginger ale, grenadine, cherry) &nbsp;·&nbsp; Virgin Cuba Libre (cola, lime) &nbsp;·&nbsp; Sparkling mineral water with lemon or lime.",
        expert: null
    },

    "Botany": {
        title: "Botanical Analysis — Wolfsbane",
        password: "open",
        lockedTitle: "Plant Specimen",
        lockedSubtitle: "This requires botanical expertise to identify",
        errorMsg: "Incorrect password.",
        badge: "Botanical Analysis",
        header: "Field Notes — Aconitum (Wolfsbane / Monkshood)",
        summary: "The poison is <strong>Aconitine</strong>, derived from <strong>Wolfsbane</strong> — <em>Aconitum napellus</em>. This plant does not grow in Texas or anywhere in North America. It is native to the Alpine regions of Europe. Whoever used this poison <strong>traveled to obtain it deliberately</strong>.",
        expert: `
            <div class="reveal-danger">
                Genus: <strong>Aconitum</strong> — Family Ranunculaceae. Common names: Wolfsbane, Monkshood, Devil's Helmet. Every part of this plant is lethally toxic. The roots contain the highest concentration of aconitine, but the flowers, leaves, and stems are equally dangerous if handled carelessly or ingested.
            </div>

            <p>I have known this plant since childhood. My grandmother kept a botanical encyclopedia and made me memorize the most dangerous specimens before I was allowed in the garden unsupervised. Aconitum was at the top of the list — she called it the queen of poisons, a name it has carried since antiquity. The ancient Romans used it for executions. Medieval assassins favored it. It has been killing people, accidentally and deliberately, for two thousand years.</p>

            <p>The active compound, <strong>aconitine</strong>, works by binding irreversibly to sodium channels in nerve and cardiac tissue. It does not announce itself. The initial symptoms — numbness at the lips and tongue, a metallic taste, mild warmth — are easily mistaken for indigestion or anxiety. Within thirty minutes to an hour, the numbness spreads. The victim's hands and face begin to feel detached. Breathing becomes labored. The heart, which relies on those same sodium channels to regulate its rhythm, begins to fail. Death typically follows within two to six hours of ingestion, and it looks, to the untrained eye, like a heart attack.</p>

            <div class="reveal-highlight">
                This is not a plant you stumble upon in a Dallas garden. <strong>Aconitum does not grow in Texas. It does not grow anywhere in North America.</strong> It is native to mountain meadows at high elevation — the Swiss Alps, the Austrian highlands, the Pyrenees. The flowers are distinctive: deep violet-blue, hooded, unmistakably beautiful. A person would have to travel to those regions, recognize the plant, harvest it deliberately, and transport the extract home. This was not opportunistic. This required planning months in advance.
            </div>

            <p>The method of administration almost certainly involved the extract dissolved into food or drink — something with a strong enough flavor to mask the initial bitterness. A cocktail. A rich sauce. Something with sweetness or acid. The victim would have noticed nothing unusual until the symptoms were already well underway.</p>

            <p>One final note: aconitine is notoriously difficult to detect in a standard post-mortem examination. Without a toxicologist specifically looking for alkaloid poisoning, this death would have been recorded as cardiac failure. Whoever chose this poison knew that. This was chosen by someone with patience, knowledge, and access to Alpine Europe.</p>
        `
    },

    "Journalism": {
        title: "Newspaper Article — Hartley Death",
        password: "open",
        lockedTitle: "Newspaper Clipping",
        lockedSubtitle: "A trained journalist might notice things others would miss",
        errorMsg: "Incorrect password. Find someone with journalism experience.",
        badge: "Journalism Analysis",
        header: "Editorial Review — Dallas Herald, March 22, 1910",
        summary: "This article has problems. The investigation was closed in under 24 hours despite a <strong>suspicious business transfer the day before</strong>. The sourcing is thin and Thoreson's quote sounds rehearsed. Someone with influence shaped this story.",
        expert: `
            <p><em>Content coming soon — editorial analysis of the Hartley death article.</em></p>
        `
    },

    "Botany": {
        title: "Coroner's Report — Botanical Analysis",
        password: "open",
        lockedTitle: "Coroner's Report",
        lockedSubtitle: "This report requires botanical expertise to interpret",
        errorMsg: "Incorrect password. Find someone with botanical expertise.",
        badge: "Botanical Analysis",
        header: "Field Analysis — Aconitum Species Identification",
        summary: "The toxin is <strong>Aconitine</strong>, derived from <em>Aconitum napellus</em> — Wolfsbane. It does not grow in Texas. It does not grow anywhere in North America. <strong>Someone traveled to obtain this.</strong>",
        expert: `
            <p>I recognize this immediately. Aconitum napellus — Wolfsbane, or Monkshood. I have been studying this genus for thirty years and I have never encountered it outside of controlled specimens and pressed samples. It does not grow in Texas. It does not grow anywhere in the Americas.</p>

            <div class="reveal-danger">
                Aconitine is among the most potent plant alkaloids known to botany. A single gram of concentrated root extract is sufficient to kill an adult. The roots are the most toxic part — but the flowers, the stems, the leaves — all of it is lethal with sufficient exposure. There is no antidote. There is no margin for error in the dosage. Whoever used this knew exactly what they were handling.
            </div>

            <p>In the wild, Aconitum napellus grows in the mountainous regions of central Europe — the Swiss Alps, the Austrian Tirol, the Northern Italian ranges. The flowers are a distinctive deep violet-blue, almost iridescent in the right light. They bloom in summer. They look beautiful. They will kill you if you're not careful even handling them with bare hands.</p>

            <div class="reveal-highlight">
                This plant was not purchased from a pharmacy or apothecary. It cannot be ordered by mail. It cannot be synthesized in a kitchen. It had to be collected — deliberately, in the field, from a specific region of Europe — and transported back to Texas. This was planned months in advance. Someone went to the Alps and came home with murder in their luggage.
            </div>

            <p>The timing matters as well. If Will Thoreson ingested aconitine this evening, it was almost certainly introduced to his food or drink earlier tonight. Aconitine is water-soluble and essentially tasteless in small concentrations — it would be undetectable in a cocktail or a sauce. The initial symptom is a faint tingling or numbness in the lips and throat, which most people would dismiss. By the time the cardiac symptoms present, it is far too late.</p>

            <p>This is not an impulsive crime. This is a botanical crime. Whoever did this has knowledge, patience, and a very specific travel history. Find someone who has been to the Alps recently. Find the wolfsbane. You will find your killer.</p>
        `
    }
};
