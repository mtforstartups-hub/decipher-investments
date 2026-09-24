import fs from 'fs';
import path from 'path';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface LegalDocument {
  id: string;
  title: string;
  filename: string;
  effectiveDate: string;
  html: string;
  headings: Heading[];
}

const parsedDir = path.join(process.cwd(), 'src', 'data', 'legal-parsed');
const files = fs.readdirSync(parsedDir).filter(f => f.endsWith('.json'));

const docs: Record<string, LegalDocument> = {};

for (const file of files) {
  const content = JSON.parse(fs.readFileSync(path.join(parsedDir, file), 'utf8'));

  // Normalize title
  let title = content.title;
  if (title === 'TOS') title = 'Terms of Service';
  if (title === 'Cookies & Tracking Policy') title = 'Cookie & Tracking Policy';

  // Extract Effective Date if present
  const dateMatch = content.html.match(/Effective Date:\s*([^<]+)/i);
  const effectiveDate = dateMatch ? dateMatch[1].trim() : '23 September 2026';

  // Parse H1, H2, H3 tags for Table of Contents
  // Mammoth outputs headers like <h1><a id="..."></a><strong>Title</strong></h1>
  // or <h2><a id="..."></a><strong>1. Heading</strong></h2>
  const headings: Heading[] = [];
  const regex = /<h([1-3])>(?:<a id="([^"]*)"><\/a>)?(?:<strong>)?(.*?)(?:<\/strong>)?<\/h\1>/gi;

  let match;
  let index = 0;
  while ((match = regex.exec(content.html)) !== null) {
    const level = parseInt(match[1]);
    const rawId = match[2];
    let rawText = match[3].replace(/<[^>]+>/g, '').trim();

    if (!rawText) continue;

    // Create clean anchor ID
    const slug = rawText
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const id = rawId || `section-${slug || index}`;
    headings.push({ id, text: rawText, level });
    index++;
  }

  docs[content.id] = {
    id: content.id,
    title,
    filename: content.filename,
    effectiveDate,
    html: content.html,
    headings,
  };
}

const fileContent = `// Auto-generated legal data module
export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface LegalDocument {
  id: string;
  title: string;
  filename: string;
  effectiveDate: string;
  html: string;
  headings: Heading[];
}

export const legalDocuments: Record<string, LegalDocument> = ${JSON.stringify(docs, null, 2)};

export const legalDocSlugs = [
  { id: 'privacy-policy', label: 'Privacy Policy', path: '/privacy' },
  { id: 'tos', label: 'Terms of Service', path: '/terms' },
  { id: 'cookies-tracking-policy', label: 'Cookie & Tracking Policy', path: '/cookies' },
];

export function getLegalDocument(idOrSlug: string): LegalDocument | undefined {
  if (legalDocuments[idOrSlug]) return legalDocuments[idOrSlug];
  if (idOrSlug === 'privacy' || idOrSlug === 'privacy-policy') return legalDocuments['privacy-policy'];
  if (idOrSlug === 'terms' || idOrSlug === 'tos' || idOrSlug === 'terms-of-service') return legalDocuments['tos'];
  if (idOrSlug === 'cookies' || idOrSlug === 'cookie-policy' || idOrSlug === 'cookies-tracking-policy') return legalDocuments['cookies-tracking-policy'];
  return undefined;
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'legal.ts'), fileContent);
console.log('Successfully generated src/data/legal.ts with headings metadata!');
