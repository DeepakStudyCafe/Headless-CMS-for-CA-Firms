const fs = require('fs'); 
const file = 'C:/Users/user/Desktop/StudyCafe/Headless-CMS-for-CA-Firms/websites/Template-17/src/routes/index.tsx'; 
let content = fs.readFileSync(file, 'utf8'); 

content = content.replace(
  "const whyChooseUsSection = pageData.sections?.find((s) => s.type === 'text-image');", 
  "const aboutSection = pageData.sections?.find((s) => s.type === 'text-image');\n  const whyChooseUsSection = pageData.sections?.find((s) => s.type === 'why-choose-us');"
); 

content = content.replace(
  "{/* ABOUT */}\n      {whyChooseUsSection && (", 
  "{/* ABOUT */}\n      {aboutSection && ("
); 

content = content.replace(
  "whyChooseUsSection.imageUrl", 
  "aboutSection.imageUrl"
); 

content = content.replace(
  "whyChooseUsSection.textContent.heading || \"Trusted financial expertise\"", 
  "aboutSection.textContent.heading || \"Trusted financial expertise\""
); 

content = content.replace(
  "description={whyChooseUsSection.textContent.description}", 
  "description={aboutSection.textContent.description}"
); 

content = content.replace(
  "Learn more about us <ArrowRight className=\"h-4 w-4\" />", 
  "{aboutSection.textContent.cta || \"Learn more about us\"} <ArrowRight className=\"h-4 w-4\" />"
); 

content = content.replace(
  "title=\"A partner you can rely on\"", 
  "title={whyChooseUsSection.textContent.heading || \"A partner you can rely on\"}"
); 

content = content.replace(
  "description=\"We combine technical depth with a clear, communicative approach — so you always know where your finances stand and what to do next.\"", 
  "description={whyChooseUsSection.textContent.description || \"We combine technical depth with a clear, communicative approach — so you always know where your finances stand and what to do next.\"}"
); 

content = content.replace(
  "Schedule a Consultation <ArrowRight className=\"h-4 w-4\" />", 
  "{whyChooseUsSection.textContent.cta || \"Schedule a Consultation\"} <ArrowRight className=\"h-4 w-4\" />"
); 

fs.writeFileSync(file, content);
console.log('Done!');
