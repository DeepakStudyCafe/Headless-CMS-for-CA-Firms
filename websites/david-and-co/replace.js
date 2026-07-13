const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/vb-agrawal-and-associates/g, 'david-and-co');
  content = content.replace(/info@vb-agrawal-and-associates\.com/g, 'contact@davidandco.in');
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        filelist = walkSync(filePath, filelist);
      }
    } else {
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.json')) {
        filelist.push(filePath);
      }
    }
  });
  return filelist;
}

const files = walkSync(path.join(__dirname, 'src'));
files.forEach(replaceInFile);
