const fs = require('fs');
const files = ['Index.tsx', 'About.tsx', 'Career.tsx', 'Contact.tsx', 'Gallery.tsx', 'Query.tsx', 'ServiceDetail.tsx', 'Services.tsx', 'Team.tsx'];
files.forEach(f => {
  const p = 'websites/Abhishekrajaram/src/pages/' + f;
  let code = fs.readFileSync(p, 'utf8');
  let vars = [];
  if (code.includes('pageData')) vars.push('!pageData');
  if (code.includes('websiteData')) vars.push('!websiteData');
  if (f === 'ServiceDetail.tsx' && code.includes('serviceData')) vars.push('!serviceData');
  
  if (vars.length > 0) {
    if (!code.includes('FullPageLoader')) {
      code = "import { FullPageLoader } from '@/components/Loader';\n" + code;
      
      const beforeReturn = code.split(/\n  return \(/);
      if (beforeReturn.length > 1) {
        code = beforeReturn[0] + `\n  if (${vars.join(' || ')}) return <FullPageLoader />;\n\n  return (` + beforeReturn.slice(1).join("\n  return (");
        fs.writeFileSync(p, code);
        console.log('Fixed', f);
      } else {
        console.log('Could not find main return in', f);
      }
    }
  }
})
