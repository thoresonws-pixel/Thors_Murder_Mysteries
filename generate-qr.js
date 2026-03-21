// generate-qr.js
// Run: node generate-qr.js
// Output: qr-codes.html (open in browser and print)

const { itemDatabase } = require('./items.js');
const BASE_URL = 'https://thoresonws-pixel.github.io/Thoreson_Estate_Dinner/clue.html';

const categoryConfig = {
  clue:       { label: 'Evidence',    color: '#2a4a2a', textColor: '#6ab86a', border: '#3a6a3a' },
  container:  { label: 'Container',   color: '#2a2a4a', textColor: '#6a6ab8', border: '#3a3a6a' },
  key:        { label: 'Key',         color: '#3a2e10', textColor: '#c8a84a', border: '#5a4a18' },
  redherring: { label: 'Red Herring', color: '#3a1010', textColor: '#b86a6a', border: '#5a1a1a' },
};

const qrScripts = `<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>`;

const cards = itemDatabase.map(item => {
  const cfg = categoryConfig[item.category] || { label: item.category, color: '#1a1a1a', textColor: '#aaa', border: '#333' };
  const url = `${BASE_URL}?item=${item.id}`;
  const actLabel = '';
  return `
    <div class="qr-card" style="border-color:${cfg.border}">
      <div class="qr-top" style="background:${cfg.color}">
        <div class="qr-number">${cfg.label} ${item._number}</div>
      </div>
      <div class="qr-code" id="qr-${item.id}"></div>
    </div>
    <script>
      new QRCode(document.getElementById('qr-${item.id}'), {
        text: '${url}',
        width: 160, height: 160,
        colorDark: '#1a1208',
        colorLight: '#fffdf5',
        correctLevel: QRCode.CorrectLevel.H
      });
    <\/script>`;
}).join('\n');

// Skill QR codes
const skillQRs = [
  { id: 'Accounting', doc: 'Financial Ledger' },
  { id: 'Legal', doc: 'Forged Transfer' },
  { id: 'Journalism', doc: 'Dallas Herald' },
  { id: 'French', doc: 'French Letter' },
  { id: 'Medical', doc: 'Autopsy Report' },
  { id: 'Banking', doc: 'Bank Statement' },
];
const skillCards = skillQRs.map((s, i) => `
  <div class="qr-card" style="border-color:#6a3a3a">
    <div class="qr-top" style="background:#3a1a1a">
      <div class="qr-number">Skill ${i+1}</div>
    </div>
    <div class="qr-code" id="qr-skill-${s.id}"></div>
  </div>
  <script>
    new QRCode(document.getElementById('qr-skill-${s.id}'), {
      text: 'THORESON:${s.id}',
      width: 160, height: 160,
      colorDark: '#1a1208',
      colorLight: '#fffdf5',
      correctLevel: QRCode.CorrectLevel.H
    });
  <\/script>`).join('\n');

// Easter eggs, posters, bathroom, netsuke
const PHOTO_URL = 'https://thoresonws-pixel.github.io/Thoreson_Estate_Dinner/photo.html';
const NETSUKE_URL = 'https://thoresonws-pixel.github.io/Thoreson_Estate_Dinner/netsuke.html';
const extraQRs = [
  { id: 'extra-e1', label: 'Easter Egg 1', url: `${PHOTO_URL}?id=e1` },
  { id: 'extra-e2', label: 'Easter Egg 2', url: `${PHOTO_URL}?id=e2` },
  { id: 'extra-e3', label: 'Easter Egg 3', url: `${PHOTO_URL}?id=e3` },
  { id: 'extra-e4', label: 'Easter Egg 4', url: `${PHOTO_URL}?id=e4` },
  { id: 'extra-e5', label: 'Easter Egg 5', url: `${PHOTO_URL}?id=e5` },
  { id: 'extra-wedding', label: 'Wedding Album', url: `${PHOTO_URL}?id=wedding` },
  { id: 'extra-p1', label: 'Wanted — Aaron', url: `${PHOTO_URL}?id=p1` },
  { id: 'extra-p2', label: 'Missing — Sarah', url: `${PHOTO_URL}?id=p2` },
  { id: 'extra-p3', label: 'Missing — Laurie', url: `${PHOTO_URL}?id=p3` },
  { id: 'extra-p4', label: 'Missing — Robin', url: `${PHOTO_URL}?id=p4` },
  { id: 'extra-p5', label: 'Wanted — Bradford', url: `${PHOTO_URL}?id=p5` },
  { id: 'extra-bathroom', label: 'Bathroom Cat', url: `${PHOTO_URL}?id=bathroom` },
  { id: 'extra-netsuke', label: 'Netsuke Quest', url: NETSUKE_URL },
];
const extraCards = extraQRs.map((e, i) => `
  <div class="qr-card" style="border-color:#3a3a1a">
    <div class="qr-top" style="background:#2a2a10">
      <div class="qr-number">Special ${i+1}</div>
    </div>
    <div class="qr-code" id="qr-${e.id}"></div>
  </div>
  <script>
    new QRCode(document.getElementById('qr-${e.id}'), {
      text: '${e.url}',
      width: 160, height: 160,
      colorDark: '#1a1208',
      colorLight: '#fffdf5',
      correctLevel: QRCode.CorrectLevel.H
    });
  <\/script>`).join('\n');

const totalCount = itemDatabase.length + skillQRs.length + extraQRs.length;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Thoreson Estate — QR Codes</title>
  ${qrScripts}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f5f0e8;
      font-family: Georgia, serif;
      padding: 32px;
    }
    h1 {
      text-align: center;
      font-size: 18px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #3a2a10;
      margin-bottom: 8px;
    }
    .subtitle {
      text-align: center;
      font-size: 11px;
      color: #8a7a5a;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 16px;
      max-width: 960px;
      margin: 0 auto;
    }
    .qr-card {
      border: 1px solid #3a2a10;
      border-radius: 4px;
      overflow: hidden;
      background: #fffdf5;
      break-inside: avoid;
    }
    .qr-top {
      padding: 12px 12px 8px;
      text-align: center;
    }
    .qr-badge {
      font-size: 8px;
      letter-spacing: 2px;
      font-family: Arial, sans-serif;
      margin-bottom: 4px;
    }
    .qr-number {
      font-size: 28px;
      color: #e8d9b8;
      line-height: 1;
    }
    .qr-number span { font-size: 14px; color: #8a7a5a; }
    .qr-label {
      font-size: 10px;
      color: #8a7a5a;
      font-style: italic;
      margin-top: 4px;
      line-height: 1.3;
    }
    .qr-act {
      font-size: 9px;
      color: #6a5a3a;
      font-family: Arial, sans-serif;
      letter-spacing: 1px;
      margin-top: 4px;
    }
    .qr-code {
      display: flex;
      justify-content: center;
      padding: 12px;
      background: #fffdf5;
    }
    .qr-code img, .qr-code canvas { display: block; }
    .qr-url {
      text-align: center;
      font-size: 8px;
      color: #8a7a5a;
      padding: 0 8px 8px;
      font-family: monospace;
      letter-spacing: 0.5px;
      word-break: break-all;
    }
    @media print {
      body { background: white; padding: 16px; }
      .grid { gap: 12px; }
      .qr-card { border-color: #999; }
    }
  </style>
</head>
<body>
  <h1>The Thoreson Estate</h1>
  <div class="subtitle">Dallas, Texas &nbsp;·&nbsp; March 21, 1935 &nbsp;·&nbsp; All QR Codes &nbsp;·&nbsp; ${totalCount} Total</div>
  <div style="text-align:center; font-size:14px; color:#5a4a2a; margin-bottom:24px; font-style:italic;">Item Clues</div>
  <div class="grid">
    ${cards}
  </div>
  <div style="text-align:center; font-size:14px; color:#5a4a2a; margin:32px 0 24px; font-style:italic;">Skill QR Codes (print on documents)</div>
  <div class="grid">
    ${skillCards}
  </div>
  <div style="text-align:center; font-size:14px; color:#5a4a2a; margin:32px 0 24px; font-style:italic;">Photos, Posters &amp; Special</div>
  <div class="grid">
    ${extraCards}
  </div>
</body>
</html>`;

const fs = require('fs');
fs.writeFileSync('qr-codes.html', html);
console.log(`✓ Generated qr-codes.html — ${totalCount} total QR codes (${itemDatabase.length} items, ${skillQRs.length} skills, ${extraQRs.length} photos/special)`);
console.log('  Open in a browser and print (or save as PDF)');

// Generate GM cheat sheet
const cheatItems = itemDatabase.map(item => {
  const cfg = categoryConfig[item.category] || { label: item.category };
  return `<tr><td>${cfg.label} ${item._number}</td><td>${item.label}</td><td>${item.id}</td></tr>`;
}).join('\n');

const cheatSkills = skillQRs.map((s, i) => 
  `<tr><td>Skill ${i+1}</td><td>${s.doc}</td><td>THORESON:${s.id}</td></tr>`
).join('\n');

const cheatExtras = extraQRs.map((e, i) => 
  `<tr><td>Special ${i+1}</td><td>${e.label}</td><td>${e.id}</td></tr>`
).join('\n');

const cheatSheet = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/><title>QR Cheat Sheet</title>
<style>
  body { font-family: Georgia, serif; padding: 32px; max-width: 700px; margin: 0 auto; }
  h1 { font-size: 18px; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin-bottom: 24px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  th { text-align: left; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #666; border-bottom: 2px solid #333; padding: 6px 8px; }
  td { padding: 6px 8px; border-bottom: 1px solid #ddd; font-size: 13px; }
  td:first-child { font-weight: bold; white-space: nowrap; }
  @media print { body { padding: 16px; } }
</style></head><body>
<h1>QR Code Cheat Sheet — GM Only</h1>
<table><tr><th>Card</th><th>What It Is</th><th>ID</th></tr>
${cheatItems}
</table>
<table><tr><th>Card</th><th>Print On</th><th>Encodes</th></tr>
${cheatSkills}
</table>
<table><tr><th>Card</th><th>What It Is</th><th>ID</th></tr>
${cheatExtras}
</table>
</body></html>`;

fs.writeFileSync('qr-cheatsheet.html', cheatSheet);
console.log('✓ Generated qr-cheatsheet.html — GM reference for QR card numbers');
