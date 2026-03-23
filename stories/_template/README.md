# Thor's Murder Mysteries — Story Template

## How to Create a New Story

### Step 1 — Copy this folder
```
stories/_template/ → stories/your_story_name/
```
Use lowercase with underscores. This becomes the `storyId` in Firebase.
Example: `devereaux_masquerade`, `last_train_wicker_park`

---

### Step 2 — Add the story to admin.html
In `admin.html`, find the `STORIES` object and add your story:
```js
const STORIES = {
    thoreson_estate_dinner: { name: 'The Thoreson Estate Dinner', minPlayers: 10, maxPlayers: 21 },
    your_story_name:        { name: 'Your Story Display Name',    minPlayers: 8,  maxPlayers: 20 }
};
```
Also add it to the dropdown `<select>` in the Create New Game form.

---

### Step 3 — Write your four files in order

**Start with `revelations.js`** — the story structure comes first.
Map out your three acts before writing a single character.
Each revelation ID becomes an anchor that characters reference.

**Then `characters.js`** — once you know the reveals, write the characters.
Each character's memories, knowledge, and canShare entries reference
revelation IDs from revelations.js.

**Then `skills.js`** — write the expert content for each skill.
One skill per "expert" character. Skills gate QR codes.

**Then `items.js`** — the physical prop list.
Maps QR codes to skills or standalone scans.
Plan what you'll actually print and place.

---

### Step 4 — QR Codes
Generate QR codes for each item. Format:
- Skill-gated: `THORESON:SkillName` (plain text)
- Standalone: `https://thoreson-estate.web.app/scan.html?id=item_id`

Use any QR generator. Print and attach to physical props.

---

### Story Design Checklist

#### Structure
- [ ] Exactly 3 acts
- [ ] Clear murder method (discoverable, not arbitrary)
- [ ] One killer — with a real motive rooted in backstory
- [ ] One secret heir or hidden identity (strong Act 2 reveal)
- [ ] Evidence pipeline character (receives reports during the game)
- [ ] Lockbox combination derivable from Act 2 clues

#### Characters
- [ ] 10–14 characters (12 is the sweet spot)
- [ ] Exactly ONE character has `isKiller: true`
- [ ] Every character has female AND male name variants
- [ ] No pronouns anywhere in story content (use {{slug}} tokens)
- [ ] No character names written directly (always use {{slug}})
- [ ] At least 4 skill holders (Medical, Botany/Poison, Accounting/Financial, Legal)
- [ ] One optional character (cut first when guest count is low)
- [ ] Evidence pipeline character has 3 memories (one per act)

#### Skills
- [ ] Every skill in `hiddenSkills[]` has a matching entry in `skills.js`
- [ ] Killer has Legal or equivalent skill (natural cover for document access)
- [ ] Auto-trigger skill matches murder method revelation in `revelations.js`

#### Props
- [ ] Every item in `items.js` has been physically prepared
- [ ] All QR codes generated and printed
- [ ] Act 2 items physically hidden or locked
- [ ] Act 3 items behind combination lock
- [ ] Standalone QR codes printed for items needing them

#### Writing quality
- [ ] Each backstory establishes a clear voice and motive
- [ ] Memories escalate — each act unlocks something more significant
- [ ] Killer's confession monologue has been read aloud (adjust for natural speech)
- [ ] No character sheet contains spoilers about another character's secrets
- [ ] publicDesc is intriguing but reveals nothing about skills or hidden role

---

### File Naming Convention
```
stories/
  your_story_name/
    characters.js   ← Character data and backstories
    revelations.js  ← Act structure and revelation content
    skills.js       ← QR skill expert content
    items.js        ← Physical prop and QR code registry
```

---

### Revelation ID Convention
Keep IDs camelCase, descriptive, and short:
```
gameStart        ← Always the first revelation (game start trigger)
pipeline_act1    ← Evidence pipeline report, Act 1
pipeline_act2    ← Evidence pipeline report, Act 2
pipeline_act3    ← Evidence pipeline report, Act 3
murder_method    ← How the murder was committed
killer_identity  ← Killer's true identity revealed
final_confession ← Killer's confession delivered
```
Name the story-specific ones after what they reveal:
```
stolenCompany, forgedDocument, secretHeir, loveLetters, birthRecord...
```

---

### Token System Quick Reference
```js
// In any text field — backstory, memories, canShare, relationships:
"{{character_slug}} handed over the evidence."

// NOT:
"Miranda handed over the evidence."   // BAD — hardcoded name
"She handed over the evidence."       // BAD — pronoun
```
The dashboard resolves `{{slug}}` to the correct gender variant at runtime.

---

### The Golden Rules
1. **One killer. Real motive. Discoverable method.** Everything else is texture.
2. **No pronouns. Ever.** Rewrite the sentence.
3. **No names directly.** Always `{{slug}}`.
4. **Secrets stay secrets.** Character sheets never spoil another character's hidden role.
5. **The pipeline is theatre.** Each report should be a moment, not a data dump.
