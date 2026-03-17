# All QR Codes — Thoreson Estate

## Skill QR Codes (print ON the document itself)
These encode plain text `THORESON:SkillName`. Only the in-app scanner reads them.

| File | Encodes | Print On |
|------|---------|----------|
| `skill_accounting.png` | `THORESON:Accounting` | Financial Ledger |
| `skill_legal.png` | `THORESON:Legal` | Forged Transfer Document |
| `skill_journalism.png` | `THORESON:Journalism` | Dallas Herald Clipping |
| `skill_french.png` | `THORESON:French` | Margaret's French Letter |
| `skill_medical.png` | `THORESON:Medical` | Autopsy Report |
| `skill_banking.png` | `THORESON:Banking` | Bank Statement |
| `skill_botany.png` | `THORESON:Botany` | (backup — Botany auto-triggers via wolfsbane) |

## Item QR Codes (attach to props, containers, keys)
These encode URLs to `clue.html?item=ID`. Tracks who found what on the leaderboard.

| File | Label | Act |
|------|-------|-----|
| `item_bradford_letter.png` | Legal Correspondence | 1 |
| `item_calendar.png` | Office Calendar | 1 |
| `item_incorporation.png` | Company Incorporation Filing | 1 |
| `item_european_deal.png` | Business Documents | 1 |
| `item_birth_certificate.png` | Birth Record | 2 |
| `item_coroner_report.png` | Coroner's Report | 2 |
| `item_last_will.png` | Last Will & Testament | 2 |
| `item_travel_journal.png` | Personal Travel Journal | 3 |
| `item_pinkerton_report.png` | Investigative Report | 3 |
| `item_lockbox_1.png` | Locked Box — One | All |
| `item_lockbox_2.png` | Locked Box — Two | All |
| `item_key_1.png` | Key — One | All |
| `item_key_2.png` | Key — Two | All |

## Note
The following documents have BOTH types of QR code:
- Financial Ledger: skill QR (`THORESON:Accounting`) + item QR is the skill QR itself
- Forged Transfer: skill QR (`THORESON:Legal`) + item QR is the skill QR itself
- Dallas Herald: skill QR (`THORESON:Journalism`) + item QR is the skill QR itself
- French Letter: skill QR (`THORESON:French`) + item QR is the skill QR itself
- Autopsy Report: skill QR (`THORESON:Medical`) + item QR (`item_coroner_report`)
- Bank Statement: skill QR (`THORESON:Banking`) + no separate item QR
