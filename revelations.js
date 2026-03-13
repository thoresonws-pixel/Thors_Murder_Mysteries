// REVELATIONS DATABASE — Thoreson Estate Murder Mystery

const revelationsDatabase = {

    "act1": {
        label: "Act 1 — The Gathering",
        items: [
            {
                id: "newspaper",
                type: "clue",
                title: "Dallas Herald — Thoreson Cleared",
                summary: "A clipping dated March 22, 1910. Reports that William Thoreson was questioned following the death of his business partner Robert Hartley, ruled a suicide. Thoreson was cleared. The company was renamed from Thoreson & Hartley Toys to Thoreson Toys. Robert Hartley's family could not be reached for comment.",
                detail: null
            },
            {
                id: "bradfordLetter",
                type: "clue",
                title: "Bradford Patent Letter",
                summary: "A letter dated January 1935 from Bradford & Sons Toy Company. Thomas Bradford claims a spring-loaded mechanism in Thoreson Toys' newest line was patented by his company in 1931 and demands compensation. Will's handwritten margin note reads: 'Frivolous. Have Scott handle.'",
                detail: null
            },
            {
                id: "incorporation",
                type: "clue",
                title: "Original Incorporation Filing",
                summary: "Dallas County filing dated April 3, 1902. Lists William Thoreson and Robert Hartley as equal 50/50 partners under the name Thoreson & Hartley Toys. Both signatures present and notarized.",
                detail: null
            },
            {
                id: "forgedDocs",
                type: "clue",
                title: "Company Transfer Document",
                summary: "A transfer document dated March 14, 1910 signing Robert Hartley's full ownership over to William Thoreson. Notarized by one James P. Whitmore. Requires a Legal expert to examine.",
                detail: null
            },
            {
                id: "europeanDeal",
                type: "clue",
                title: "The Failed European Deal",
                summary: "Internal correspondence and wire transfer records showing Will sent $8,000 to Kessler & Braun European Distributors in Hamburg earlier this year. The company dissolved within weeks of receiving the funds.",
                detail: null
            },
            {
                id: "bankStatement",
                type: "clue",
                title: "Bank Statement — Private Account",
                summary: "A 1934 bank statement for a private account. Shows twelve monthly $50 entries labeled 'Standing Order — Priv. Acct 9941.' The receiving account is held at First National Bank of Fort Worth under the name T. Hartley.",
                detail: null
            },
            {
                id: "stolenCompany",
                type: "story",
                title: "The Stolen Company",
                summary: "The transfer document has been examined. The signature is forged — Robert Hartley never signed it. The notary James P. Whitmore does not appear in Dallas County records.",
                detail: null
            },
        ]
    },

    "act2": {
        label: "Act 2 — The Secret Heir",
        items: [
            {
                id: "ledger",
                type: "clue",
                title: "Financial Ledger",
                summary: "Company financial ledger going back to 1911. Contains a recurring monthly entry of $50 listed as 'Standing Order — Priv. Acct 9941' — appearing every month for over 24 years. Requires an Accounting expert to examine.",
                detail: null
            },
            {
                id: "affair",
                type: "clue",
                title: "Love Letters — Will & Margaret",
                summary: "A collection of personal letters between William Thoreson and Margaret Hartley — the wife of his business partner Robert. The letters span several years and confirm a romantic relationship. Requires an Investigation expert to examine.",
                detail: null
            },
            {
                id: "margaretsLetter",
                type: "clue",
                title: "Margaret's Letter",
                summary: "A letter written entirely in French, addressed to William Thoreson and signed by Margaret. Requires a French speaker to translate.",
                detail: null
            },
            {
                id: "birthCertificate",
                type: "clue",
                title: "Birth Certificate — Taylor Hartley",
                summary: "Dallas County birth certificate. Name: Taylor Hartley. Date of birth: March 5, 1911. Mother: Margaret Hartley. Father: listed as unknown. Registered March 11, 1911. County Clerk: Edgar T. Calloway.",
                detail: null
            },
            {
                id: "secretHeir",
                type: "story",
                title: "The Secret Heir",
                summary: "The ledger entries, bank statement, and birth certificate have been cross-referenced. 'T.H.' refers to Taylor Hartley — a child born to Margaret Hartley in 1911, with the father listed as unknown. Will has been making private payments to an account in Taylor Hartley's name since that year.",
                detail: null
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
                summary: "Preliminary autopsy report on William Thoreson. Notes unusual cardiac presentation. Requires a Medical expert to interpret.",
                detail: null
            },
            {
                id: "poisoning",
                type: "story",
                title: "Murder by Poison",
                summary: "The coroner's report has been interpreted. Will's symptoms are consistent with Aconitine poisoning — a toxin derived from Wolfsbane. This was not a natural death.",
                detail: null
            },
            {
                id: "wolfsbane",
                type: "clue",
                title: "Wolfsbane Reference",
                summary: "A reference identifying Wolfsbane (Aconitum) as the source of Aconitine. Notes that the plant grows wild in the Swiss Alps and cannot be purchased commercially. Requires a Botany expert to examine.",
                detail: null
            },
            {
                id: "travelJournal",
                type: "clue",
                title: "Miranda's Travel Journal",
                summary: "A personal journal belonging to Miranda Longfellow, covering her trip to Switzerland in summer 1934. One entry dated August 14 reads: 'The flowers in the Alps are remarkable. One caught my eye — beautiful purple blooms. Beautiful and deadly. I pressed a sample between these pages. I have what I came for.' A dried flower fragment remains between the pages.",
                detail: null
            },
            {
                id: "backgroundCheck",
                type: "clue",
                title: "Pinkerton Background Check Results",
                summary: "Pinkerton report on all party guests. Two name changes flagged: Walter Lippman — legal name Taylor James Hartley, born 1911, name changed 1930. Miranda Longfellow — legal name Miranda Elaine Hartley, born 1896, name changed 1920.",
                detail: null
            },
            {
                id: "mirandasIdentity",
                type: "story",
                title: "Miranda Unmasked",
                summary: "Miranda Longfellow's legal name is Miranda Hartley. She is the daughter of Robert Hartley — Will's former business partner. She changed her name in 1920 and has worked as Scott's legal assistant for the past ten years.",
                detail: null
            },
            {
                id: "fireSafeOpened",
                type: "story",
                title: "The Fire Safe — Opened",
                summary: "The fire safe in the game room has been opened. Search its contents.",
                detail: null
            },
        ]
    }
};
