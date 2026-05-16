const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const servicesDir = path.join(pagesDir, 'services');

if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

const templates = [
  { name: 'About.tsx', title: 'About Us', content: 'We are a premier firm of Chartered Accountants providing comprehensive financial and advisory services.' },
  { name: 'Team.tsx', title: 'Our Team', content: 'Meet our dedicated team of expert Chartered Accountants and financial advisors.' },
  { name: 'Gallery.tsx', title: 'Gallery', content: 'Explore moments from our corporate events, seminars, and office culture.' },
  { name: 'Services.tsx', title: 'Our Services', content: 'Discover our wide range of professional services tailored to meet your business needs.' },
  { name: 'Query.tsx', title: 'Submit a Query', content: 'Have a question? Reach out to our experts for prompt and professional guidance.' },
  { name: 'Career.tsx', title: 'Career Opportunities', content: 'Join our team of professionals and build a rewarding career in finance and accounting.' },
  { name: 'Contact.tsx', title: 'Contact Us', content: 'Get in touch with us for expert financial consultation and services.' },
];

const serviceTemplates = [
  { name: 'Bookkeeping.tsx', title: 'Bookkeeping', content: 'Accurate and timely financial record keeping to keep your business on track.' },
  { name: 'GSTFiling.tsx', title: 'GST Filing', content: 'Comprehensive GST compliance and return filing services by experts.' },
  { name: 'Payroll.tsx', title: 'Payroll Management', content: 'End-to-end payroll solutions ensuring compliance and timely disbursements.' },
  { name: 'TaxPlanning.tsx', title: 'Tax Planning', content: 'Strategic tax optimization to maximize returns and ensure compliance.' },
  { name: 'CompanyFormation.tsx', title: 'Company Formation', content: 'Streamlined business incorporation services for a solid foundation.' },
  { name: 'Compliance.tsx', title: 'Compliance', content: 'Robust regulatory compliance support for peace of mind.' },
  { name: 'AuditServices.tsx', title: 'Audit Services', content: 'Thorough audit solutions delivering transparency and confidence.' },
  { name: 'FinancialAdvisory.tsx', title: 'Financial Advisory', content: 'Expert financial guidance to accelerate your business growth.' },
];

const generateComponent = (name, title, content) => {
  const componentName = name.replace('.tsx', '');
  return `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mt-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-display text-charcoal mb-6">${title}</h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
            ${content}
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-90 hover:opacity-100 transition-opacity">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10">
              <h2 className="text-2xl font-display text-charcoal mb-4">Professional Excellence</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Our commitment to quality and integrity ensures that every service we provide meets the highest professional standards. We partner with you to navigate complex financial landscapes.
              </p>
              <button className="shimmer-btn px-6 py-2.5 text-charcoal font-sans text-xs uppercase tracking-widest font-bold">Learn More</button>
           </div>
           <div className="h-64 rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center p-8 text-center border border-gold/20 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50 backdrop-blur-sm">
                 <div className="w-8 h-8 rounded-full bg-gold"></div>
              </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ${componentName};
`;
};

templates.forEach(t => {
  fs.writeFileSync(path.join(pagesDir, t.name), generateComponent(t.name, t.title, t.content));
});

serviceTemplates.forEach(t => {
  fs.writeFileSync(path.join(servicesDir, t.name), generateComponent(t.name, t.title, t.content));
});

console.log('Successfully generated all components');
