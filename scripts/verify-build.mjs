import { readFileSync, existsSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import { join } from 'node:path';
const read = p => readFileSync(join('dist', p), 'utf8');
let checks = 0;
for (const prefix of ['', 'en/']) {
  const home = read(prefix + 'index.html');
  const list = read(prefix + 'projects/index.html');
  assert.equal((list.match(/class="project-card project-card-rich/g) || []).length, 6); checks++;
  assert.equal((home.match(/class="home-project-card"/g) || []).length, 5); checks++;
  assert.ok(home.indexOf('featured-artist') < home.indexOf('class="home-project-card"')); checks++;
  const page = read(prefix + 'projects/pedro-pires/index.html');
  assert.ok(page.includes('81') && page.includes('Pedro Pires') && page.includes('hreflang="en"') && page.includes('hreflang="pt-PT"')); checks++;
  assert.equal((page.match(/<img /g) || []).length, 3); checks++;
}
const htmlFiles = dir => readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? htmlFiles(join(dir,e.name)) : e.name.endsWith('.html') ? [join(dir,e.name)] : []);
for(const file of htmlFiles('dist')) {
  const html=readFileSync(file,'utf8');
  for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const local=decodeURI(match[1]);
    assert.ok(existsSync(join('dist',local,local.endsWith('/')?'index.html':'')), file + ': missing ' + local); checks++;
  }
}
assert.equal((read('sitemap.xml').match(/<loc>/g)||[]).length,20); checks++;
assert.ok(!existsSync('dist/docs') && !existsSync('dist/src')); checks++;
console.log(checks + ' build assertions passed: six projects per language, case studies, translations, sitemap and all local links/resources.');
