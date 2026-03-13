// REVELATIONS DATABASE — Thoreson Estate Murder Mystery
// Everything Scott pushes from Master Controls
// Each item has:
//   id: unique identifier (used by Firebase sync)
//   type: "clue" (physical prop) | "story" (narrative beat)
//   title: Display title
//   summary: Short teaser shown when first revealed
//   detail: Full detail shown when player clicks to expand

const revelationsDatabase = {

    "act1": {
        label: "Act 1 — The Gathering",
        items: [
            {
                id: "willsDeath",
                type: "story",
                title: "William Thoreson Is Dead",
                summary: "The patriarch of the Thoreson family was found dead this evening before the dinner began. The cause of death is unknown. No one leaves until we understand what happened.",
                detail: "William 'Will' Thoreson Sr. was found unresponsive at the Thoreson Estate earlier this evening. He was pronounced dead before guests arrived for dinner. His eldest son Scott Thoreson Jr. has taken charge of the investigation. The authorities have been notified but cannot reach the estate tonight. The investigation begins now."
            },
            {
                id: "newspaper",
                type: "clue",
                title: "Dallas Herald — Thoreson Cleared",
                summary: "A newspaper clipping reports that William Thoreson was investigated following the death of his business partner Robert Hartley in 1910 — and cleared of any wrongdoing.",
                detail: "The article, dated March 22, 1910, reports that Dallas businessman William Thoreson was briefly questioned in connection with the sudden death of his partner Robert Hartley. Authorities ruled the death a suicide. Thoreson was cleared within the week. The article notes that Thoreson & Hartley Toys would be rebranded as Thoreson Toys going forward. Robert Hartley's surviving family could not be reached for comment."
            },
            {
                id: "bradfordLetter",
                type: "clue",
                title: "Bradford Patent Letter",
                summary: "A legal letter from Thomas Bradford, a competing toy manufacturer, accuses Will Thoreson of stealing a patented mechanism design.",
                detail: "The letter, dated January 1935, is from Bradford & Sons Toy Company. Thomas Bradford claims that a spring-loaded mechanism used in Thoreson Toys' newest line was patented by his company in 1931. He demands compensation or threatens litigation. Will's handwritten notes in the margin read: 'Frivolous. Have Scott handle.' There is no evidence Will ever followed up."
            },
            {
                id: "incorporation",
                type: "clue",
                title: "Original Incorporation Filing",
                summary: "The original 1902 company filing lists two founders: William Thoreson and Robert Hartley. The company was called Thoreson & Hartley Toys.",
                detail: "Filed with Dallas County on April 3, 1902. Both William Thoreson and Robert Hartley are listed as equal partners with 50% ownership each. The document describes the purpose as 'the manufacture and sale of children's playthings.' Both signatures are present and notarized. This document predates the 1910 transfer by eight years — raising the question of what changed."
            },
            {
                id: "forgedDocs",
                type: "clue",
                title: "Forged Transfer Documents",
                summary: "The company ownership transfer from Robert Hartley to Will Thoreson bears a forged signature — dated one day before Robert's death.",
                detail: "Dated March 14, 1910 — one day before Robert Hartley's death. A Legal expert can confirm the signature does not match Robert's known handwriting on file. The notary stamp belongs to a James P. Whitmore, who has no record in Dallas County's notary registry. Will transferred 100% of Thoreson & Hartley Toys to himself using a document Robert never signed."
            },
            {
                id: "europeanDeal",
                type: "clue",
                title: "The Failed European Deal",
                summary: "Will wired $8,000 to a Hamburg distributor for an overseas expansion deal. The company dissolved within weeks — total loss. Two investors have been demanding answers.",
                detail: "Earlier this year, Will wired $8,000 to Kessler & Braun European Distributors in Hamburg. The company dissolved within weeks of receiving payment. Two outside investors who had money in Thoreson Toys — Marcus Brennan and Victoria Ashworth — have been pressing Will for an explanation for months. No satisfactory answer was ever given."
            },
            {
                id: "stolenCompany",
                type: "story",
                title: "The Stolen Company",
                summary: "Thoreson Toys was originally Thoreson & Hartley Toys. Will used forged documents to seize full ownership the day before his partner Robert Hartley died.",
                detail: "Robert Hartley was Will's equal partner and closest friend. When Will forged his signature on the transfer document, Robert had already discovered the affair with his wife Margaret. He died the following day — ruled a suicide. Will walked away with the entire company, changed its name, and never spoke of Robert Hartley again."
            },
        ]
    },

    "act2": {
        label: "Act 2 — The Secret Heir",
        items: [
            {
                id: "ledger",
                type: "clue",
                title: "Suspicious Financial Ledger",
                summary: "A financial ledger shows secret monthly payments of $50 to someone listed only as 'T.H.' — authorized personally by Will for over 24 years.",
                detail: "The entries appear in every monthly ledger going back to 1911. Listed as 'Standing Order — Priv. Acct 9941.' An Accounting expert can confirm these payments were never disclosed to the board or reflected in any official company record. Over 24 years, the total paid out exceeds $14,000. 'T.H.' is a person — not a vendor, not an expense account."
            },
            {
                id: "affair",
                type: "clue",
                title: "The Affair Revealed",
                summary: "Will had a long-standing affair with Margaret Hartley — the wife of his business partner Robert. When Robert died, Will paid Margaret to disappear.",
                detail: "Margaret Hartley was Robert's wife. The affair began around 1909, while Robert and Will were still partners. When Robert discovered it, the betrayal was total — his partner had stolen both his company and his wife. Margaret and her children were sent away after Robert's death. Will never acknowledged the relationship publicly."
            },
            {
                id: "margaretsLetter",
                type: "clue",
                title: "Margaret's Letter",
                summary: "A letter written in French from Margaret Hartley confronts Will about the secrets he kept — and references a safe in the study closet.",
                detail: "The letter is written entirely in French and requires translation. A French speaker can reveal its contents: Margaret tells Will that she cannot forgive him for what he did to Robert, and that what he owes her children cannot be paid with money. She mentions that she left something for Will in 'the place he knows' — believed to refer to the safe in the study closet. The combination, she says, 'is the date he chose to forget.'"
            },
            {
                id: "birthCertificate",
                type: "clue",
                title: "Birth Certificate — Taylor Hartley",
                summary: "A birth certificate for Taylor Hartley, born March 5, 1911. The father's name is left blank.",
                detail: "Registered March 11, 1911 with Dallas County. Mother: Margaret Hartley. Father: listed as unknown. County Clerk: Edgar T. Calloway. Taylor Hartley was born nine months after Robert Hartley's death — Will's illegitimate child with Margaret. Will set up the trust fund under 'T.H.' to support Taylor in secret, never claiming the child publicly."
            },
            {
                id: "bankStatement",
                type: "clue",
                title: "Bank Statement — Private Account",
                summary: "A bank statement for a private account shows regular disbursements matching the ledger entries — routed to an account in Taylor Hartley's name.",
                detail: "The statement covers January through December 1934. It shows twelve monthly entries of $50 each, labeled 'Standing Order — Priv. Acct 9941.' Cross-referencing with the financial ledger confirms these are the T.H. payments. The receiving account is held at First National Bank of Fort Worth under the name T. Hartley. Will was actively funding this account until the month he died."
            },
            {
                id: "secretHeir",
                type: "story",
                title: "The Secret Heir",
                summary: "The mysterious 'T.H.' in the ledger is Taylor Hartley — Will's illegitimate child with Margaret. Will has been supporting Taylor in secret for over two decades.",
                detail: "Taylor Hartley is Will's child. Will set up a private trust and made monthly payments for 24 years — never acknowledging Taylor publicly. Tonight, Will planned to change that. He invited Taylor here under the name Walter Lippman and intended to welcome his child into the family. He never got the chance."
            },
        ]
    },

    "act3": {
        label: "Act 3 — The Killer",
        items: [
            {
                id: "coroner",
                type: "clue",
                title: "Coroner's Report",
                summary: "The preliminary autopsy on William Thoreson has come in. A medical professional is needed to interpret the findings.",
                detail: "The report notes unusual cardiac symptoms inconsistent with natural causes. A Medical expert can identify the specific markers: the presentation is consistent with Aconitine poisoning — a toxin derived from Wolfsbane. Onset is rapid. Administered in food or drink, it would be virtually undetectable without knowing what to look for. This was not a natural death."
            },
            {
                id: "poisoning",
                type: "story",
                title: "Murder by Poison",
                summary: "Will was killed by Aconitine — a toxin from Wolfsbane. It was slipped into his drink during cocktail hour. This was murder.",
                detail: "Aconitine acts quickly on the cardiac system. Administered in a drink during cocktail hour, Will would have felt the effects within thirty minutes. There would have been no dramatic scene — just a quiet deterioration that looked, at first, like a health episode. Someone at this party poisoned Will Thoreson before the evening even began."
            },
            {
                id: "wolfsbane",
                type: "clue",
                title: "Wolfsbane — Botany Notes",
                summary: "Notes on Wolfsbane identify it as the source of Aconitine. A Botany expert can confirm where it grows and what it looks like.",
                detail: "Wolfsbane (Aconitum) produces Aconitine, one of the most potent natural toxins. It grows wild in the Swiss Alps at high elevation — it cannot be purchased commercially and is not found in North America. Someone would need to travel to Switzerland, harvest the plant, and preserve the compound. The flowers are purple, delicate, and distinctive. They press well in a journal."
            },
            {
                id: "travelJournal",
                type: "clue",
                title: "Miranda's Travel Journal",
                summary: "A personal travel journal from Miranda's trip to Switzerland last summer. Her entries describe the alpine landscape — and something she found there.",
                detail: "Most entries describe the scenery in a tourist's voice. But one entry, dated August 14, 1934, reads: 'The flowers in the Alps are remarkable. One in particular caught my eye — beautiful purple blooms growing wild above the treeline. Beautiful and deadly. I pressed a sample between these pages. I have what I came for.' A dried flower fragment is still visible between the pages."
            },
            {
                id: "backgroundCheck",
                type: "clue",
                title: "Pinkerton Background Check Results",
                summary: "Background checks on all party guests flagged two name changes — both connected to the Hartley family.",
                detail: "The Pinkerton report lists all guests by legal name and known aliases. Two entries are flagged. Walter Lippman: born Taylor Hartley, Fort Worth, 1911 — name legally changed 1930. Miranda Longfellow: born Miranda Hartley, Dallas, 1896 — name legally changed 1920. Both share the Hartley surname. Both are in this room tonight."
            },
            {
                id: "mirandasIdentity",
                type: "story",
                title: "Miranda Unmasked",
                summary: "Miranda Longfellow is really Miranda Hartley — Robert's abandoned daughter. She changed her name, became Scott's assistant, and has been inside this family for ten years.",
                detail: "Miranda Hartley was fourteen when her father Robert died. Will sent her mother away, paid nothing for Miranda's care, and never acknowledged her. She put herself through law school, changed her name, and spent ten years as Scott's trusted assistant — with access to every Thoreson document. She found the forged transfer, the ledger, the letters. She went to Switzerland. She came back with Wolfsbane. She poisoned Will herself."
            },
            {
                id: "fireSafeOpened",
                type: "story",
                title: "The Fire Safe — Opened",
                summary: "The fire safe in the game room has been opened. Search its contents carefully.",
                detail: "The combination was the date Will chose to forget — March 15, 1910. The day Robert Hartley died. Inside: letters and documents Will had kept hidden for twenty-five years. Everything he never wanted found."
            },
        ]
    }
};
