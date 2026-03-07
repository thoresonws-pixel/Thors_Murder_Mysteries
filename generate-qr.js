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
  const actLabel = item.act ? `Act ${item.act}` : 'All Night';
  return `
    <div class="qr-card" style="border-color:${cfg.border}">
      <div class="qr-top" style="background:${cfg.color}">
        <div class="qr-badge" style="color:${cfg.textColor}">${cfg.label.toUpperCase()}</div>
        <div class="qr-number">${item._number}<span> / ${itemDatabase.filter(i=>i.category===item.category).length}</span></div>
        <div class="qr-label">${item.label}</div>
        <div class="qr-act">${actLabel}</div>
      </div>
      <div class="qr-code" id="qr-${item.id}"></div>
      <div class="qr-url">${item.id}</div>
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
  <div class="subtitle">Dallas, Texas &nbsp;·&nbsp; March 21, 1935 &nbsp;·&nbsp; Game Items &nbsp;·&nbsp; ${itemDatabase.length} Total</div>
  <div class="grid">
    ${cards}
  </div>
</body>
</html>`;

const fs = require('fs');
fs.writeFileSync('qr-codes.html', html);
console.log(`✓ Generated qr-codes.html — ${itemDatabase.length} items`);
console.log('  Open in a browser and print (or save as PDF)');
