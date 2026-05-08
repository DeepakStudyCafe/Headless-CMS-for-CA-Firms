const fs = require('fs');
const path = require('path');

const dirs = [
  'c:/Users/user/Desktop/StudyCafe/Headless-CMS-for-CA-Firms/websites/Template-8/src/pages',
  'c:/Users/user/Desktop/StudyCafe/Headless-CMS-for-CA-Firms/websites/nipun-panchamiya-and-associates/src/pages'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && !f.includes('NotFound') && !f.includes('admin'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('document.title')) {
      content = content.replace(/(setPageData\(([^)]+)\);\s*setWebsiteData\(([^)]+)\);)/g, '$1\n      if ($2?.title) document.title = $2.title + ($3?.name ? " - " + $3.name : ""); else if ($3?.name) document.title = $3.name;');
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  });
});
