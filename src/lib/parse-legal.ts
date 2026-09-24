import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

const LEGAL_DIR = path.join(process.cwd(), 'src', 'data', 'legal');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'legal-parsed');

async function parseLegalDocs() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(LEGAL_DIR).filter(f => f.endsWith('.docx'));
  const metadata: Array<{ id: string; title: string; filename: string; updated: string }> = [];

  for (const file of files) {
    const filePath = path.join(LEGAL_DIR, file);
    const buffer = fs.readFileSync(filePath);

    // Convert docx to HTML with Mammoth
    const result = await mammoth.convertToHtml({ buffer });
    let html = result.value;

    const id = file
      .replace('.docx', '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');

    const title = file.replace('.docx', '');

    const docData = {
      id,
      title,
      filename: file,
      html,
      messages: result.messages
    };

    fs.writeFileSync(
      path.join(OUTPUT_DIR, `${id}.json`),
      JSON.stringify(docData, null, 2)
    );

    console.log(`Successfully parsed ${file} -> ${id}.json (${html.length} chars)`);
  }
}

parseLegalDocs().catch(console.error);
