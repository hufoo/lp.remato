// Builds small woff2 subsets of Noto Sans JP containing only the glyphs the site needs.
// Runs before `dev` and `build`, so edited copy in src/ is always covered.
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import subsetFont from 'subset-font';

const root = new URL('..', import.meta.url).pathname;
const source = join(root, 'font-src', 'NotoSansJP[wght].ttf');
const outDir = join(root, 'public', 'fonts');
const weights = [400, 700];
const scanExtensions = new Set(['.astro', '.ts', '.css', '.mjs', '.md']);

function range(from, to) {
  let s = '';
  for (let cp = from; cp <= to; cp++) s += String.fromCodePoint(cp);
  return s;
}

// Base set keeps reasonable coverage for small copy edits even before a rebuild.
const baseChars =
  range(0x20, 0x7e) + // ASCII
  range(0x3001, 0x303f) + // CJK punctuation
  range(0x3041, 0x3096) + // Hiragana
  range(0x30a0, 0x30ff) + // Katakana
  ' ';

async function collectText(dir) {
  let text = '';
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) text += await collectText(path);
    else if (scanExtensions.has(extname(entry.name))) text += await readFile(path, 'utf8');
  }
  return text;
}

const text = baseChars + (await collectText(join(root, 'src')));
const chars = [...new Set(text)].filter((ch) => ch.codePointAt(0) >= 0x20).join('');
const font = await readFile(source);

await mkdir(outDir, { recursive: true });
for (const wght of weights) {
  const woff2 = await subsetFont(font, chars, {
    targetFormat: 'woff2',
    variationAxes: { wght },
  });
  const file = join(outDir, `noto-sans-jp-${wght}.woff2`);
  await writeFile(file, woff2);
  console.log(`[fonts] ${file.replace(root, '')} ${(woff2.length / 1024).toFixed(1)} KiB (${chars.length} chars)`);
}
