import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

try {
  const templateRaw = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  const dataRaw = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
  const keywordsData = JSON.parse(dataRaw);
  
  // Generate nav links
  let navLinksHTML = '';
  for (const page of keywordsData) {
    navLinksHTML += `<li><a href="${page.slug}.html">${page.title}</a></li>\n`;
  }
  
  // Create an index.html as a directory
  let indexContent = `
  <div style="text-align: center; margin-top: 2rem;">
    <h2>Local Service Areas</h2>
    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 2rem;">
  `;
  for (const page of keywordsData) {
    indexContent += `<li><a href="${page.slug}.html" style="color: var(--primary); font-size: 1.2rem; font-weight: 600; text-decoration: none;">${page.title}</a></li>`;
  }
  indexContent += `</ul></div>`;
  
  const indexPage = templateRaw
    .replace(/{{TITLE}}/g, 'Local Service Areas')
    .replace(/{{KEYWORD}}/g, 'Services')
    .replace(/{{KEYWORD_TITLE}}/g, 'Local Electricians')
    .replace(/{{HOOK}}/g, 'Browse our local service areas in Greater Brisbane.')
    .replace(/{{CONTENT}}/g, indexContent)
    .replace(/{{NAV_LINKS}}/g, navLinksHTML);
    
  fs.writeFileSync(path.join(__dirname, 'index.html'), indexPage);
  console.log('Created index.html');

  // Generate individual pages
  for (const page of keywordsData) {
    const pageHtml = templateRaw
      .replace(/{{TITLE}}/g, page.title)
      .replace(/{{KEYWORD}}/g, page.keyword)
      .replace(/{{KEYWORD_TITLE}}/g, page.keyword_title)
      .replace(/{{HOOK}}/g, page.hook)
      .replace(/{{CONTENT}}/g, page.content)
      .replace(/{{NAV_LINKS}}/g, navLinksHTML);
      
    fs.writeFileSync(path.join(__dirname, `${page.slug}.html`), pageHtml);
    console.log(`Created ${page.slug}.html`);
  }
  
  console.log('All pages generated successfully!');
  
} catch(e) {
  console.error("Error generating pages:", e.message);
}
