export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { 
    label: "Services", 
    href: "/services",
    subItems: [
      { label: "Bookkeeping", href: "/services/bookkeeping", description: "Accurate financial record keeping" },
      { label: "GST Filing", href: "/services/gst-filing", description: "Timely GST compliance & returns" },
      { label: "Payroll", href: "/services/payroll", description: "End-to-end payroll management" },
      { label: "Tax Planning", href: "/services/tax-planning", description: "Strategic tax optimization" },
      { label: "Company Formation", href: "/services/company-formation", description: "Business incorporation services" },
      { label: "Compliance", href: "/services/compliance", description: "Regulatory compliance support" },
      { label: "Audit Services", href: "/services/audit-services", description: "Comprehensive audit solutions" },
      { label: "Financial Advisory", href: "/services/financial-advisory", description: "Expert financial guidance" },
    ]
  },
  { label: "Query", href: "/query" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
    title: "Precision in Audit",
    subtitle: "Global standards, local expertise.",
    label: "Trusted Since 2005",
  },
  {
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600",
    title: "Strategic Tax Planning",
    subtitle: "Navigating complexity with clarity.",
    label: "Expert Advisory",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600",
    title: "Corporate Governance",
    subtitle: "Building foundations for sustainable growth.",
    label: "Compliance First",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Global Clients" },
  { value: 18, suffix: "+", label: "Years of Excellence" },
  { value: 12, suffix: "", label: "Expert Partners" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

export const SERVICES = [
  {
    title: "Bookkeeping",
    description: "Accurate financial record keeping to keep your business on track.",
    icon: "book",
    href: "/services/bookkeeping"
  },
  {
    title: "GST Filing",
    description: "Comprehensive GST compliance and return filing services by experts.",
    icon: "gst",
    href: "/services/gst-filing"
  },
  {
    title: "Payroll",
    description: "End-to-end payroll solutions ensuring compliance and timely disbursements.",
    icon: "users",
    href: "/services/payroll"
  },
  {
    title: "Tax Planning",
    description: "Strategic tax optimization for individuals and corporations.",
    icon: "tax",
    href: "/services/tax-planning"
  },
  {
    title: "Company Formation",
    description: "Streamlined business incorporation services for a solid foundation.",
    icon: "registration",
    href: "/services/company-formation"
  },
  {
    title: "Compliance",
    description: "Robust regulatory compliance support for peace of mind.",
    icon: "shield",
    href: "/services/compliance"
  },
  {
    title: "Audit Services",
    description: "Thorough audit solutions delivering transparency and confidence.",
    icon: "audit",
    href: "/services/audit-services"
  },
  {
    title: "Financial Advisory",
    description: "Expert financial guidance to accelerate your business growth.",
    icon: "advisory",
    href: "/services/financial-advisory"
  },
];

export const WHY_CHOOSE_US = [
  "Over 18 years of professional excellence in finance and accounting",
  "Team of 12+ qualified chartered accountants and financial experts",
  "98% client satisfaction rate with personalized service",
  "Comprehensive solutions from audit to advisory under one roof",
];

export const TESTIMONIALS = [
  {
    text: "Vanguard & Co. transformed our approach to tax compliance. Their expertise saved us significant capital while keeping us fully compliant.",
    name: "Rajesh Mehta",
    designation: "CEO, Meridian Industries",
    initials: "RM",
  },
  {
    text: "The professionalism and attention to detail is unmatched. They've been our trusted advisors for over a decade.",
    name: "Priya Sharma",
    designation: "Director, Apex Ventures",
    initials: "PS",
  },
  {
    text: "From company registration to ongoing compliance, Vanguard handled everything with exceptional precision and care.",
    name: "Amit Kapoor",
    designation: "Founder, NovaTech Solutions",
    initials: "AK",
  },
  {
    text: "Their financial planning strategies helped us navigate through challenging economic periods with confidence and stability.",
    name: "Sunita Reddy",
    designation: "CFO, GlobalServe Corp",
    initials: "SR",
  },
  {
    text: "Outstanding GST compliance support. They simplified what seemed impossibly complex and delivered results ahead of schedule.",
    name: "Vikram Singh",
    designation: "Managing Partner, Singh & Associates",
    initials: "VS",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Rajiv Khanna",
    designation: "Managing Partner",
    qualifications: "FCA, DISA, B.Com (Hons)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    bio: "With over 25 years of experience in audit and taxation, Rajiv founded the firm with a vision to provide world-class financial services. He specializes in corporate restructuring and international taxation.",
    linkedin: "#",
    isLeadership: true,
  },
  {
    name: "Meera Iyer",
    designation: "Senior Partner",
    qualifications: "FCA, CPA, MBA Finance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    bio: "Meera leads the advisory division with expertise in mergers & acquisitions and business valuations. She has advised on transactions worth over INR 5,000 crore.",
    linkedin: "#",
    isLeadership: true,
  },
  {
    name: "Arjun Desai",
    designation: "Partner - Tax & Compliance",
    qualifications: "FCA, LL.B, DISA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "Arjun heads the direct and indirect tax practice with deep expertise in GST litigation, transfer pricing, and cross-border taxation for multinational clients.",
    linkedin: "#",
    isLeadership: true,
  },
  {
    name: "Sneha Patel",
    designation: "Partner - Audit",
    qualifications: "FCA, CIA, CISA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    bio: "Sneha oversees statutory and internal audit engagements across industries including banking, manufacturing, and technology sectors.",
    linkedin: "#",
    isLeadership: true,
  },
  {
    name: "Vikram Nair",
    designation: "Manager - GST Practice",
    qualifications: "CA, B.Com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Vikram manages GST compliance and advisory for over 100 clients, ensuring timely filings and optimal input tax credit utilization.",
    linkedin: "#",
    isLeadership: false,
  },
  {
    name: "Ananya Sharma",
    designation: "Senior Associate - Advisory",
    qualifications: "CA, CFA Level II",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400",
    bio: "Ananya specializes in financial modeling, due diligence, and startup advisory services with a focus on technology and healthcare sectors.",
    linkedin: "#",
    isLeadership: false,
  },
  {
    name: "Rahul Verma",
    designation: "Associate - Bookkeeping",
    qualifications: "CA Inter, B.Com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Rahul handles day-to-day bookkeeping and accounting operations for SME clients, ensuring accuracy and compliance with accounting standards.",
    linkedin: "#",
    isLeadership: false,
  },
  {
    name: "Priya Menon",
    designation: "Associate - Payroll & Compliance",
    qualifications: "CA, CS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Priya manages payroll processing and statutory compliance for corporate clients, handling PF, ESI, and professional tax obligations.",
    linkedin: "#",
    isLeadership: false,
  },
];

export const COMPANY_TIMELINE = [
  { year: "2005", title: "Foundation", description: "Established with a vision to provide transparent and reliable financial services to businesses across India." },
  { year: "2008", title: "Tax Advisory Launch", description: "Expanded services to include comprehensive tax planning and advisory for corporates and HNIs." },
  { year: "2011", title: "100th Client Milestone", description: "Crossed 100 active clients, cementing our reputation as a trusted CA firm in the region." },
  { year: "2014", title: "GST Readiness Pioneer", description: "Among the first firms to build dedicated GST compliance capabilities ahead of nationwide implementation." },
  { year: "2017", title: "Advisory Division", description: "Launched the Financial Advisory division offering M&A support, business valuations, and fundraising assistance." },
  { year: "2020", title: "Digital Transformation", description: "Adopted cloud-based accounting and virtual collaboration tools, ensuring uninterrupted service during challenging times." },
  { year: "2023", title: "500+ Global Clients", description: "Reached a milestone of 500+ clients globally, with presence across manufacturing, IT, healthcare, and real estate sectors." },
];

export const CORE_VALUES = [
  { icon: "Shield", title: "Integrity First", description: "We uphold the highest ethical standards in every engagement. Transparency and honesty form the bedrock of our client relationships." },
  { icon: "Award", title: "Excellence", description: "We pursue excellence in every deliverable, staying current with evolving regulations and adopting best-in-class methodologies." },
  { icon: "Heart", title: "Client Centricity", description: "Every client is unique. We tailor our approach to align with your specific business goals, industry, and growth stage." },
  { icon: "Lightbulb", title: "Innovation", description: "We leverage technology and modern tools to deliver faster, more accurate, and cost-effective financial solutions." },
  { icon: "Users", title: "Collaboration", description: "We work as an extension of your team, fostering open communication and building long-term partnerships." },
  { icon: "Scale", title: "Accountability", description: "We take ownership of outcomes and hold ourselves to strict timelines, ensuring peace of mind for our clients." },
];

export const CERTIFICATIONS = [
  { name: "ICAI Membership", body: "Institute of Chartered Accountants of India", year: "2005" },
  { name: "ISO 9001:2015", body: "Quality Management Systems Certified", year: "2018" },
  { name: "DISA Qualified", body: "Diploma in Information Systems Audit", year: "2012" },
  { name: "GST Practitioner", body: "Registered GST Practitioner - GSTN", year: "2017" },
  { name: "MSME Registered", body: "Ministry of Micro, Small & Medium Enterprises", year: "2019" },
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", alt: "Modern Office Space", category: "Office", caption: "Our state-of-the-art office in the financial district" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600", alt: "Meeting Room", category: "Office", caption: "Collaborative workspace designed for productivity" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600", alt: "Reception Area", category: "Office", caption: "Welcoming reception area for clients" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600", alt: "Annual Conference", category: "Events", caption: "Annual CA Conference 2024" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50a2df87?w=600", alt: "Industry Summit", category: "Events", caption: "Financial Industry Summit - Panel Discussion" },
  { src: "https://images.unsplash.com/photo-1591115765373-5f9cf1da2c14?w=600", alt: "Award Ceremony", category: "Events", caption: "Excellence in Financial Services Award" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600", alt: "GST Seminar", category: "Seminars", caption: "GST Compliance Workshop for SMEs" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600", alt: "Tax Planning Seminar", category: "Seminars", caption: "Annual Tax Planning Strategies Seminar" },
  { src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600", alt: "Client Workshop", category: "Seminars", caption: "Financial Literacy Workshop for Startups" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", alt: "Team Collaboration", category: "Team", caption: "Our audit team in action" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600", alt: "Team Meeting", category: "Team", caption: "Weekly strategy meeting with senior partners" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600", alt: "Team Outing", category: "Team", caption: "Annual team building retreat" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600", alt: "Team Celebration", category: "Team", caption: "Celebrating our 500th client milestone" },
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600", alt: "Workshop", category: "Seminars", caption: "Digital Accounting Tools Training" },
];

export const GALLERY_CATEGORIES = ["All", "Office", "Events", "Seminars", "Team"];

export const OPEN_POSITIONS = [
  {
    id: "1",
    title: "Senior Audit Associate",
    department: "Audit & Assurance",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead statutory and internal audit engagements for mid-to-large enterprises across manufacturing and technology sectors.",
    requirements: ["Qualified CA with 3+ years post-qualification experience", "Experience in statutory audit under Companies Act", "Strong knowledge of Ind AS and auditing standards", "Excellent analytical and communication skills"],
  },
  {
    id: "2",
    title: "GST Compliance Manager",
    department: "Indirect Tax",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "4-6 years",
    description: "Manage GST compliance for a portfolio of 50+ clients, including return filing, reconciliations, and advisory on complex GST matters.",
    requirements: ["CA/CMA with specialization in indirect taxes", "In-depth knowledge of GST laws and procedures", "Experience with GST litigation and appeals", "Proficiency in GST compliance software"],
  },
  {
    id: "3",
    title: "Tax Planning Associate",
    department: "Direct Tax",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Assist in tax planning strategies for individuals and corporates, prepare tax computations, and handle assessments.",
    requirements: ["Qualified CA", "Knowledge of Income Tax Act and related regulations", "Experience in tax return preparation and planning", "Strong research and documentation skills"],
  },
  {
    id: "4",
    title: "Articleship Trainee",
    department: "Audit & Tax",
    location: "Mumbai, India",
    type: "Internship",
    experience: "CA Intermediate",
    description: "Gain hands-on experience across audit, taxation, and accounting engagements under the mentorship of experienced partners.",
    requirements: ["CA Intermediate (both groups cleared preferred)", "Strong academic record", "Willingness to learn and adapt", "Good communication skills in English and Hindi"],
  },
  {
    id: "5",
    title: "Financial Advisory Analyst",
    department: "Advisory",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "1-3 years",
    description: "Support the advisory team in business valuations, financial modeling, due diligence, and transaction advisory projects.",
    requirements: ["CA/MBA Finance/CFA", "Strong financial modeling and Excel skills", "Experience in valuation or M&A is preferred", "Analytical mindset with attention to detail"],
  },
];

export const CAREER_BENEFITS = [
  { icon: "GraduationCap", title: "Professional Development", description: "Sponsored certifications, conferences, and continuous learning programs to accelerate your career growth." },
  { icon: "Heart", title: "Health & Wellness", description: "Comprehensive health insurance for you and your family, along with wellness programs and mental health support." },
  { icon: "TrendingUp", title: "Performance Bonus", description: "Competitive compensation with performance-linked bonuses and annual increments based on merit." },
  { icon: "Clock", title: "Flexible Hours", description: "Flexible working arrangements with remote work options to maintain a healthy work-life balance." },
  { icon: "Users", title: "Mentorship Program", description: "Structured mentorship from senior partners who guide your professional journey and skill development." },
  { icon: "Scale", title: "Work-Life Balance", description: "We believe in sustainable work practices — no late nights culture, with adequate breaks during peak seasons." },
];

export const CONTACT_INFO = {
  address: "1204, Tower A, Peninsula Business Park, Senapati Bapat Marg, Lower Parel, Mumbai - 400013, India",
  phone: "+91 99999 99999",
  email: "info@vanguardca.in",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.530841187955!2d72.82720281490247!3d18.99436638719864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce41266e5e5b%3A0x7e74979b39e9e5a7!2sLower%20Parel%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
  workingHours: {
    weekdays: "Monday - Friday: 9:30 AM - 6:30 PM",
    saturday: "Saturday: 10:00 AM - 2:00 PM",
    sunday: "Sunday: Closed",
  },
};

export const FAQ_GENERAL = [
  { question: "What services does your CA firm offer?", answer: "We offer a comprehensive range of services including audit & assurance, tax planning (direct & indirect), GST compliance, bookkeeping, payroll management, company formation, regulatory compliance, and financial advisory services including M&A support and business valuations." },
  { question: "How do I get started with your firm?", answer: "Simply reach out through our contact form, email, or phone. We will schedule a free initial consultation to understand your requirements, after which we will provide a detailed proposal with scope of work and pricing tailored to your needs." },
  { question: "Do you work with startups and small businesses?", answer: "Absolutely. We have dedicated service packages designed for startups and SMEs, covering everything from company registration and compliance setup to ongoing bookkeeping and tax filing at competitive rates." },
  { question: "What industries do you specialize in?", answer: "Our team has deep expertise across manufacturing, IT & technology, healthcare, real estate, retail, e-commerce, and professional services. We tailor our approach based on industry-specific regulations and best practices." },
  { question: "How do you ensure data security and confidentiality?", answer: "We follow strict data protection protocols including encrypted file transfers, secure cloud storage, NDA agreements with all team members, and compliance with applicable data privacy regulations. Client confidentiality is paramount to our practice." },
  { question: "Can you handle international taxation and cross-border compliance?", answer: "Yes. Our partners are experienced in international taxation, transfer pricing, DTAA provisions, and cross-border structuring. We also collaborate with a network of global accounting firms for multi-jurisdiction compliance." },
  { question: "What is your fee structure?", answer: "Our fees are transparent and competitive, structured based on scope of work, complexity, and engagement duration. We offer monthly retainer packages, project-based pricing, and annual engagement models. Contact us for a customized quote." },
  { question: "How quickly can you respond to urgent queries?", answer: "We pride ourselves on responsiveness. Urgent queries are typically addressed within 4 business hours, and standard queries within 24 business hours. Each client is assigned a dedicated relationship manager for seamless communication." },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Discovery", description: "We begin with an in-depth consultation to understand your business, goals, challenges, and compliance requirements." },
  { step: "02", title: "Strategy", description: "Our experts design a tailored plan leveraging industry best practices and regulatory insights specific to your needs." },
  { step: "03", title: "Implementation", description: "We execute the plan with precision, keeping you informed at every stage with regular updates and transparent reporting." },
  { step: "04", title: "Review", description: "Continuous monitoring and periodic reviews ensure optimal outcomes, with proactive recommendations for improvement." },
];

export const INDUSTRIES = [
  { icon: "Factory", title: "Manufacturing" },
  { icon: "Monitor", title: "IT & Technology" },
  { icon: "Stethoscope", title: "Healthcare" },
  { icon: "Building2", title: "Real Estate" },
  { icon: "ShoppingCart", title: "Retail & E-Commerce" },
  { icon: "Rocket", title: "Startups" },
];

export const SERVICE_DETAILS: Record<string, {
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  features: { icon: string; title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  pricingTiers: { name: string; price: string; description: string; features: string[]; highlighted: boolean }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}> = {
  bookkeeping: {
    title: "Bookkeeping",
    tagline: "Accurate Records, Clear Insights",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
    description: "Our professional bookkeeping services ensure that your financial records are accurate, up-to-date, and compliant with applicable accounting standards. We handle everything from day-to-day transaction recording to complex reconciliations, allowing you to focus on growing your business.\n\nWhether you are a startup managing your first books or an established enterprise seeking to streamline operations, our team delivers reliable bookkeeping solutions powered by modern cloud-based tools and a commitment to precision.",
    features: [
      { icon: "BookOpen", title: "Accounts Payable & Receivable", description: "End-to-end management of your payables and receivables with aging analysis and cash flow optimization." },
      { icon: "RefreshCw", title: "Bank Reconciliation", description: "Monthly bank reconciliations ensuring every transaction is accounted for and discrepancies are resolved promptly." },
      { icon: "BarChart3", title: "Financial Reporting", description: "Customized monthly, quarterly, and annual financial reports including P&L, balance sheet, and cash flow statements." },
      { icon: "Cloud", title: "Cloud Accounting", description: "Migration to and management of cloud platforms like Tally, Zoho Books, and QuickBooks for real-time financial visibility." },
      { icon: "FileText", title: "Expense Tracking", description: "Systematic categorization and tracking of business expenses with receipt management and policy compliance." },
      { icon: "TrendingUp", title: "Financial Analysis", description: "Ratio analysis, trend identification, and actionable insights to help you make data-driven business decisions." },
    ],
    processSteps: [
      { step: "01", title: "Assessment", description: "We review your current bookkeeping setup, software, chart of accounts, and identify gaps." },
      { step: "02", title: "Setup & Migration", description: "Configure your accounting system, migrate historical data, and establish standardized processes." },
      { step: "03", title: "Ongoing Recording", description: "Daily/weekly transaction recording, categorization, and reconciliation by our dedicated team." },
      { step: "04", title: "Reporting & Review", description: "Monthly financial reports with insights, variance analysis, and recommendations for improvement." },
    ],
    pricingTiers: [
      { name: "Starter", price: "9,999", description: "For freelancers and micro-businesses", features: ["Up to 100 transactions/month", "Monthly bank reconciliation", "Quarterly financial reports", "Email support", "Single bank account"], highlighted: false },
      { name: "Professional", price: "24,999", description: "For growing SMEs and startups", features: ["Up to 500 transactions/month", "Weekly reconciliations", "Monthly financial reports", "Dedicated accountant", "Multiple bank accounts", "Expense tracking"], highlighted: true },
      { name: "Enterprise", price: "49,999", description: "For established businesses", features: ["Unlimited transactions", "Daily reconciliations", "Custom reporting dashboard", "Dedicated team of 2", "Multi-entity support", "CFO advisory calls", "Priority support"], highlighted: false },
    ],
    faqs: [
      { question: "What accounting software do you support?", answer: "We work with all major platforms including Tally Prime, Zoho Books, QuickBooks, Xero, and custom ERP systems. We can also help you choose and migrate to the right platform." },
      { question: "How often will my books be updated?", answer: "Depending on your plan, we update books daily, weekly, or monthly. Our Professional and Enterprise plans include real-time or near-real-time updates." },
      { question: "Can you handle multi-currency transactions?", answer: "Yes, we have experience managing books for businesses with multi-currency operations, including proper forex gain/loss treatment as per accounting standards." },
      { question: "Will I have access to my books in real-time?", answer: "Absolutely. With cloud accounting setup, you get 24/7 access to your books from any device, with role-based permissions for your team." },
    ],
    relatedServices: ["gst-filing", "payroll", "financial-advisory"],
  },
  "gst-filing": {
    title: "GST Filing",
    tagline: "Compliant, Timely, Hassle-Free",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
    description: "Navigate the complexities of Goods and Services Tax with our expert GST compliance services. From registration to monthly returns, annual filings, and audit support, we ensure your business stays fully compliant while maximizing legitimate input tax credit benefits.\n\nOur dedicated GST team stays updated with every notification, circular, and amendment, providing proactive advisory to help you avoid penalties and optimize your indirect tax position.",
    features: [
      { icon: "FileCheck", title: "GSTR-1 & 3B Filing", description: "Timely and accurate filing of monthly/quarterly GST returns with thorough reconciliation of sales and purchase data." },
      { icon: "ClipboardCheck", title: "GST Registration", description: "End-to-end GST registration support including new registrations, amendments, and cancellations across states." },
      { icon: "Receipt", title: "Input Tax Credit", description: "Systematic ITC reconciliation and optimization ensuring maximum eligible credit with GSTR-2B matching." },
      { icon: "Search", title: "GST Audit & Assessment", description: "Comprehensive GST audit support, assessment assistance, and representation before GST authorities." },
      { icon: "AlertTriangle", title: "Notice & Litigation", description: "Expert handling of GST notices, show-cause responses, appeals, and tribunal representation." },
      { icon: "Calculator", title: "E-invoicing & E-way Bill", description: "Setup and management of e-invoicing compliance and e-way bill generation for seamless goods movement." },
    ],
    processSteps: [
      { step: "01", title: "Data Collection", description: "We collect your sales, purchase, and expense data through secure channels or direct software integration." },
      { step: "02", title: "Reconciliation", description: "Thorough reconciliation of books with GSTR-2B, identifying mismatches and ITC opportunities." },
      { step: "03", title: "Filing & Review", description: "Preparation and filing of returns after your review and approval, well before due dates." },
      { step: "04", title: "Advisory & Compliance", description: "Ongoing advisory on GST implications of business decisions, with quarterly compliance health checks." },
    ],
    pricingTiers: [
      { name: "Basic", price: "4,999", description: "For small businesses with simple GST needs", features: ["GSTR-1 & 3B filing", "Up to 100 invoices/month", "Basic ITC reconciliation", "Email support", "Annual return (GSTR-9)"], highlighted: false },
      { name: "Standard", price: "14,999", description: "For growing businesses with moderate volumes", features: ["All Basic features", "Up to 500 invoices/month", "Advanced ITC optimization", "GSTR-2B reconciliation", "Dedicated GST manager", "E-invoicing support", "Quarterly review calls"], highlighted: true },
      { name: "Premium", price: "29,999", description: "For enterprises with complex GST requirements", features: ["All Standard features", "Unlimited invoices", "Multi-state compliance", "GST audit support", "Notice handling", "E-way bill management", "Monthly advisory", "Priority support"], highlighted: false },
    ],
    faqs: [
      { question: "What are the due dates for GST filing?", answer: "GSTR-1 is due on the 11th of the following month, GSTR-3B on the 20th (or 22nd/24th for QRMP scheme). We send timely reminders and ensure filings are completed well before deadlines." },
      { question: "Can you help with GST refund claims?", answer: "Yes, we handle all types of GST refund applications including export refunds, inverted duty structure refunds, and excess payment refunds with proper documentation." },
      { question: "What if I receive a GST notice?", answer: "Our team handles GST notices comprehensively — from analyzing the notice and preparing responses to representing you before authorities if required." },
      { question: "Do you support businesses with multiple GST registrations?", answer: "Absolutely. We manage multi-state GST compliance for businesses with registrations across multiple states, ensuring consistent compliance." },
    ],
    relatedServices: ["bookkeeping", "compliance", "tax-planning"],
  },
  payroll: {
    title: "Payroll Management",
    tagline: "Seamless Payroll, Happy Teams",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600",
    description: "Our end-to-end payroll management services take the complexity out of salary processing, statutory compliance, and employee tax computations. We ensure accurate and timely payroll disbursement while maintaining full compliance with PF, ESI, professional tax, and TDS regulations.\n\nFrom payslip generation to full and final settlements, our dedicated payroll team handles every aspect with precision, allowing your HR team to focus on people rather than paperwork.",
    features: [
      { icon: "Wallet", title: "Salary Processing", description: "Accurate monthly salary computation including allowances, deductions, reimbursements, and variable pay components." },
      { icon: "Shield", title: "PF & ESI Compliance", description: "Complete management of Provident Fund and ESI contributions, filings, and employee registrations." },
      { icon: "Calculator", title: "TDS Computation", description: "Monthly TDS calculations on salary with investment declaration management and Form 16 generation." },
      { icon: "FileText", title: "Payslip Generation", description: "Professional, detailed payslips delivered to employees with complete breakup and year-to-date summaries." },
      { icon: "UserCheck", title: "Full & Final Settlement", description: "Comprehensive F&F processing including leave encashment, gratuity, notice period adjustments, and exit compliance." },
      { icon: "BarChart3", title: "Payroll Analytics", description: "Monthly payroll reports, cost analysis, headcount trends, and compensation benchmarking insights." },
    ],
    processSteps: [
      { step: "01", title: "Onboarding", description: "We collect employee data, salary structures, and configure your payroll system with all applicable rules." },
      { step: "02", title: "Monthly Processing", description: "Process attendance, leaves, overtime, and compute net salary with all statutory deductions by the 25th." },
      { step: "03", title: "Disbursement", description: "Generate bank transfer files, payslips, and statutory payment challans for seamless salary disbursement." },
      { step: "04", title: "Compliance Filing", description: "File PF/ESI returns, deposit TDS, and maintain all statutory registers and records." },
    ],
    pricingTiers: [
      { name: "Essential", price: "99/employee", description: "For small teams up to 25 employees", features: ["Monthly salary processing", "PF & ESI computation", "Basic TDS handling", "Digital payslips", "Quarterly compliance filings"], highlighted: false },
      { name: "Business", price: "149/employee", description: "For mid-size companies up to 100 employees", features: ["All Essential features", "Investment declaration management", "Form 16 generation", "F&F settlement processing", "Dedicated payroll manager", "Leave & attendance integration"], highlighted: true },
      { name: "Corporate", price: "199/employee", description: "For large organizations with 100+ employees", features: ["All Business features", "Custom salary structures", "Multi-location payroll", "Payroll analytics dashboard", "Reimbursement management", "HR compliance advisory", "Priority SLA support"], highlighted: false },
    ],
    faqs: [
      { question: "When will salaries be processed each month?", answer: "We process payroll by the 25th of each month (or your preferred date), ensuring salary credits by the last working day. Inputs are collected by the 20th." },
      { question: "How do you handle mid-month joinings and exits?", answer: "We pro-rate salary calculations for mid-month joinings and process full & final settlements within 3 working days of receiving exit information." },
      { question: "Can you integrate with our HRMS?", answer: "Yes, we integrate with popular HRMS platforms like Zoho People, greytHR, and Keka, or can work with your existing attendance and leave management systems." },
      { question: "Do you handle professional tax across states?", answer: "Yes, we manage professional tax compliance for employees across all applicable Indian states with varying slab rates and filing requirements." },
    ],
    relatedServices: ["bookkeeping", "compliance", "tax-planning"],
  },
  "tax-planning": {
    title: "Tax Planning",
    tagline: "Optimize. Save. Grow.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
    description: "Strategic tax planning is not just about compliance — it is about positioning your finances for maximum efficiency and growth. Our tax planning services encompass individual, corporate, and capital gains taxation, delivering customized strategies that minimize liability while ensuring full legal compliance.\n\nWith deep expertise across the Income Tax Act, international tax treaties, and evolving regulatory landscapes, our tax advisors help you make informed decisions that create long-term financial value.",
    features: [
      { icon: "User", title: "Individual Tax Planning", description: "Comprehensive tax planning for salaried individuals, professionals, and HNIs with investment advisory and return filing." },
      { icon: "Building2", title: "Corporate Tax Strategy", description: "Strategic tax optimization for companies including advance tax planning, MAT analysis, and tax-efficient structuring." },
      { icon: "TrendingUp", title: "Capital Gains Advisory", description: "Expert guidance on capital gains from property, shares, mutual funds, and other assets with tax-saving strategies." },
      { icon: "Landmark", title: "Tax-Saving Investments", description: "Advisory on Section 80C, 80D, and other deductions with investment planning aligned to your risk profile and goals." },
      { icon: "Globe", title: "International Taxation", description: "Cross-border tax planning, DTAA benefits, transfer pricing compliance, and expat taxation advisory." },
      { icon: "FileSearch", title: "Tax Assessment Support", description: "Complete support during income tax assessments, scrutiny proceedings, and appeal representation." },
    ],
    processSteps: [
      { step: "01", title: "Tax Health Check", description: "Comprehensive review of your current tax position, past returns, and identification of planning opportunities." },
      { step: "02", title: "Strategy Design", description: "Customized tax planning strategy considering your income sources, investments, business structure, and goals." },
      { step: "03", title: "Implementation", description: "Execution of the tax plan including investment advisory, restructuring support, and advance tax computation." },
      { step: "04", title: "Filing & Monitoring", description: "Timely return filing with ongoing monitoring for regulatory changes and mid-year strategy adjustments." },
    ],
    pricingTiers: [
      { name: "Personal", price: "7,999", description: "For salaried individuals and freelancers", features: ["Income tax return filing", "Tax-saving investment advisory", "Section 80C/80D optimization", "Capital gains computation", "Email support"], highlighted: false },
      { name: "Business", price: "29,999", description: "For business owners and professionals", features: ["All Personal features", "Business income optimization", "Advance tax planning", "TDS compliance", "Quarterly tax review", "Dedicated tax advisor"], highlighted: true },
      { name: "Comprehensive", price: "59,999", description: "For HNIs and corporate groups", features: ["All Business features", "International tax planning", "Transfer pricing advisory", "Family tax planning", "Estate & succession planning", "Assessment representation", "Unlimited advisory calls"], highlighted: false },
    ],
    faqs: [
      { question: "When should I start tax planning?", answer: "Ideally at the beginning of the financial year (April). However, we can help optimize your taxes at any point. Early planning provides maximum savings through proper investment and structuring." },
      { question: "Can you help with old regime vs new regime analysis?", answer: "Yes, we provide detailed comparative analysis of both tax regimes based on your specific income, deductions, and exemptions to recommend the most beneficial option." },
      { question: "Do you handle tax planning for NRIs?", answer: "Absolutely. We specialize in NRI taxation including DTAA benefits, FEMA compliance, repatriation advisory, and coordination with overseas tax obligations." },
      { question: "What happens during a tax assessment or scrutiny?", answer: "Our tax experts handle the entire assessment process — from preparing responses and documentation to representing you before income tax authorities at every stage." },
    ],
    relatedServices: ["gst-filing", "compliance", "financial-advisory"],
  },
  "company-formation": {
    title: "Company Formation",
    tagline: "Your Business Journey Starts Here",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
    description: "Starting a business begins with choosing the right legal structure and completing the incorporation process correctly. Our company formation services cover everything from entity selection advisory to registration, licensing, and post-incorporation compliance setup.\n\nWhether you are launching a Private Limited company, an LLP, a One Person Company, or registering as an MSME, our team ensures a smooth and hassle-free incorporation experience with full regulatory compliance.",
    features: [
      { icon: "Building", title: "Private Limited Company", description: "Complete Pvt Ltd incorporation including DIN, DSC, name approval, MOA/AOA drafting, and certificate of incorporation." },
      { icon: "Users", title: "LLP Formation", description: "Limited Liability Partnership registration with DPIN, LLP agreement drafting, and partner compliance setup." },
      { icon: "User", title: "OPC Registration", description: "One Person Company formation for solo entrepreneurs with nominee director compliance and simplified governance." },
      { icon: "Award", title: "MSME Registration", description: "Udyam registration for micro, small, and medium enterprises to avail government benefits and priority lending." },
      { icon: "FileText", title: "License & Registration", description: "GST registration, PAN/TAN application, Shop Act license, FSSAI, IEC, and other sector-specific registrations." },
      { icon: "Cog", title: "Post-Incorporation Setup", description: "Bank account opening assistance, accounting system setup, compliance calendar, and first-year compliance planning." },
    ],
    processSteps: [
      { step: "01", title: "Consultation", description: "Understand your business idea, select the right entity type, and advise on capital structure and compliance obligations." },
      { step: "02", title: "Documentation", description: "Collect KYC documents, draft incorporation documents (MOA/AOA/LLP Agreement), and obtain digital signatures." },
      { step: "03", title: "Filing & Registration", description: "File incorporation application with MCA/ROC, obtain Certificate of Incorporation, PAN, and TAN." },
      { step: "04", title: "Post-Setup", description: "GST registration, bank account setup, accounting system configuration, and ongoing compliance calendar creation." },
    ],
    pricingTiers: [
      { name: "Basic Setup", price: "14,999", description: "Essential incorporation services", features: ["Entity type advisory", "DIN & DSC for 2 directors", "Name approval", "MOA/AOA drafting", "Certificate of Incorporation", "PAN & TAN application"], highlighted: false },
      { name: "Complete Package", price: "29,999", description: "Incorporation with compliance setup", features: ["All Basic features", "GST registration", "Bank account assistance", "MSME registration", "Accounting system setup", "First board resolution", "3 months compliance support"], highlighted: true },
      { name: "Premium Launch", price: "49,999", description: "Full launch support for serious ventures", features: ["All Complete features", "Trademark application", "Shop Act & professional tax", "6 months compliance support", "First year bookkeeping", "Statutory audit coordination", "Dedicated business advisor"], highlighted: false },
    ],
    faqs: [
      { question: "Which entity type is best for my business?", answer: "It depends on factors like number of founders, funding plans, liability exposure, and tax implications. We provide a detailed comparison to help you choose between Pvt Ltd, LLP, OPC, or partnership." },
      { question: "How long does company incorporation take?", answer: "With all documents ready, a Private Limited Company can be incorporated in 7-10 working days. LLPs typically take 5-7 working days. We expedite the process wherever possible." },
      { question: "What documents are needed for incorporation?", answer: "Key documents include Aadhaar, PAN, passport-size photos, address proof (utility bill), and registered office address proof (rent agreement + NOC or ownership document)." },
      { question: "Do you help with foreign subsidiary registration in India?", answer: "Yes, we assist foreign companies with Indian subsidiary registration, liaison office setup, branch office registration, and ongoing compliance management." },
    ],
    relatedServices: ["compliance", "bookkeeping", "gst-filing"],
  },
  compliance: {
    title: "Regulatory Compliance",
    tagline: "Stay Compliant, Stay Confident",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600",
    description: "Regulatory compliance is not optional — it is the foundation of business credibility and sustainability. Our compliance services ensure that your company meets all statutory obligations under the Companies Act, LLP Act, and other applicable regulations on time, every time.\n\nFrom annual filings and board resolutions to secretarial audits and statutory registers, our team proactively manages your compliance calendar, eliminating the risk of penalties, disqualifications, and legal complications.",
    features: [
      { icon: "FileCheck", title: "ROC Filing", description: "Timely filing of all statutory forms with the Registrar of Companies including AOC-4, MGT-7, and event-based filings." },
      { icon: "ClipboardList", title: "Annual Returns", description: "Preparation and filing of annual returns, financial statements, and compliance certificates within prescribed timelines." },
      { icon: "FileText", title: "Board Resolutions", description: "Drafting of board and shareholder resolutions for routine and special business including allotments and changes." },
      { icon: "Search", title: "Secretarial Audit", description: "Comprehensive secretarial audit for applicable companies with detailed audit report and compliance recommendations." },
      { icon: "Calendar", title: "Compliance Calendar", description: "Customized compliance calendar with automated reminders for all statutory deadlines and filing requirements." },
      { icon: "AlertTriangle", title: "Penalty Prevention", description: "Proactive compliance monitoring to prevent penalties, director disqualification, and strike-off proceedings." },
    ],
    processSteps: [
      { step: "01", title: "Compliance Audit", description: "Review your current compliance status, identify gaps, and create a prioritized action plan for remediation." },
      { step: "02", title: "Calendar Setup", description: "Create a customized compliance calendar with all applicable deadlines and automated reminders." },
      { step: "03", title: "Ongoing Management", description: "Prepare and file all statutory returns, resolutions, and documents within prescribed timelines." },
      { step: "04", title: "Review & Reporting", description: "Quarterly compliance status reports with recommendations and updates on regulatory changes affecting your business." },
    ],
    pricingTiers: [
      { name: "Essentials", price: "19,999", description: "For single-entity private companies", features: ["Annual ROC filings (AOC-4, MGT-7)", "Board meeting minutes", "Basic board resolutions", "Compliance calendar", "Email support", "Annual compliance report"], highlighted: false },
      { name: "Professional", price: "39,999", description: "For growing companies with active compliance needs", features: ["All Essential features", "Event-based ROC filings", "Shareholder resolutions", "Director KYC filings", "Statutory register maintenance", "Dedicated compliance manager", "Quarterly reviews"], highlighted: true },
      { name: "Full Compliance", price: "74,999", description: "For large companies and groups", features: ["All Professional features", "Secretarial audit", "Multi-entity compliance", "SEBI/RBI compliance (if applicable)", "AGM/EGM management", "Compliance training for team", "Priority support & SLA"], highlighted: false },
    ],
    faqs: [
      { question: "What happens if I miss a compliance deadline?", answer: "Late filings attract penalties and additional fees from MCA. Continued non-compliance can lead to director disqualification and company strike-off. We ensure you never miss a deadline." },
      { question: "Is secretarial audit mandatory for my company?", answer: "Secretarial audit is mandatory for listed companies and public companies with paid-up capital of INR 50 crore or more, or turnover of INR 250 crore or more. We assess applicability based on your company profile." },
      { question: "Can you help with compliance for dormant companies?", answer: "Yes, we manage compliance for dormant companies including minimal filing requirements, dormant status application, and reactivation when needed." },
      { question: "Do you handle RBI and FEMA compliance?", answer: "Yes, our team handles RBI compliance for companies with foreign investment, including FC-GPR filings, FLA returns, ECB reporting, and ODI compliance." },
    ],
    relatedServices: ["company-formation", "audit-services", "bookkeeping"],
  },
  "audit-services": {
    title: "Audit Services",
    tagline: "Transparency Through Independent Assurance",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
    description: "Our audit services provide independent assurance on the accuracy and reliability of your financial statements, internal controls, and compliance with applicable standards. We go beyond mere verification — our audits deliver actionable insights that strengthen governance and drive operational improvements.\n\nWith a team of experienced auditors holding expertise across diverse industries, we conduct thorough and efficient audits that meet regulatory requirements while adding genuine value to your organization.",
    features: [
      { icon: "FileSearch", title: "Statutory Audit", description: "Independent audit of financial statements under the Companies Act, providing true and fair assurance to stakeholders." },
      { icon: "Shield", title: "Internal Audit", description: "Risk-based internal audit programs evaluating operational efficiency, internal controls, and governance frameworks." },
      { icon: "Calculator", title: "Tax Audit", description: "Tax audit under Section 44AB of the Income Tax Act with Form 3CA/3CB and 3CD preparation and certification." },
      { icon: "Search", title: "Due Diligence", description: "Financial and operational due diligence for mergers, acquisitions, investments, and partnership evaluations." },
      { icon: "ClipboardCheck", title: "Forensic Audit", description: "Investigation of financial irregularities, fraud detection, and compliance testing with detailed reporting." },
      { icon: "BarChart3", title: "Management Audit", description: "Comprehensive review of management practices, resource utilization, and organizational effectiveness." },
    ],
    processSteps: [
      { step: "01", title: "Planning", description: "Understand your business, assess risk areas, define materiality, and develop a tailored audit plan and timeline." },
      { step: "02", title: "Fieldwork", description: "Execute audit procedures including transaction testing, analytical review, and internal control evaluation." },
      { step: "03", title: "Reporting", description: "Present findings, discuss observations, and issue the audit report with management letter and recommendations." },
      { step: "04", title: "Follow-Up", description: "Track implementation of audit recommendations and provide ongoing guidance on control improvements." },
    ],
    pricingTiers: [
      { name: "Standard Audit", price: "49,999", description: "For small and medium companies", features: ["Statutory audit (Companies Act)", "Financial statement review", "Tax audit (if applicable)", "Basic management letter", "Audit report issuance", "Post-audit discussion"], highlighted: false },
      { name: "Detailed Audit", price: "99,999", description: "For mid-size companies with complex operations", features: ["All Standard features", "Internal control testing", "Detailed management letter", "Process improvement suggestions", "Regulatory compliance review", "Dedicated audit team", "Quarterly interim reviews"], highlighted: true },
      { name: "Enterprise Audit", price: "Custom", description: "For large enterprises and group companies", features: ["All Detailed features", "Consolidated audit", "Multi-location audit", "Internal audit program", "Forensic/special audits", "Board/audit committee presentation", "Year-round audit support"], highlighted: false },
    ],
    faqs: [
      { question: "Is statutory audit mandatory for my company?", answer: "Yes, every company registered under the Companies Act 2013 must undergo statutory audit regardless of size or turnover. The scope and requirements vary based on company type and thresholds." },
      { question: "When should we complete our annual audit?", answer: "Statutory audit should be completed before the AGM, which must be held within 6 months from the end of the financial year (i.e., by September 30th for March year-end companies)." },
      { question: "What is the difference between statutory and internal audit?", answer: "Statutory audit is a legally mandated external audit of financial statements. Internal audit is a voluntary (sometimes mandatory) ongoing process that evaluates internal controls and operational efficiency." },
      { question: "Can you handle audit for multiple branches?", answer: "Yes, our team is equipped to conduct multi-location audits with proper coordination between branch auditors and centralized reporting." },
    ],
    relatedServices: ["compliance", "financial-advisory", "tax-planning"],
  },
  "financial-advisory": {
    title: "Financial Advisory",
    tagline: "Strategic Guidance for Growth",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
    description: "Our financial advisory services go beyond numbers — we provide strategic counsel that helps you make critical business decisions with confidence. From business valuations and fundraising support to M&A advisory and restructuring, our team brings together deep financial expertise and industry knowledge.\n\nWhether you are planning an exit, seeking investment, evaluating a strategic acquisition, or restructuring for growth, our advisory team serves as your trusted financial partner through every milestone.",
    features: [
      { icon: "TrendingUp", title: "Investment Advisory", description: "Strategic investment planning and portfolio advisory for businesses and HNIs with risk-adjusted return optimization." },
      { icon: "DollarSign", title: "Business Valuation", description: "Independent business valuations using DCF, comparable, and asset-based methods for transactions, litigation, and reporting." },
      { icon: "Rocket", title: "Fundraising Support", description: "End-to-end fundraising assistance including pitch deck preparation, investor targeting, due diligence management, and deal closure." },
      { icon: "GitMerge", title: "M&A Advisory", description: "Buy-side and sell-side M&A advisory including target identification, valuation, negotiation support, and deal structuring." },
      { icon: "BarChart3", title: "Financial Modeling", description: "Detailed financial models for business planning, fundraising, project finance, and scenario analysis." },
      { icon: "RefreshCw", title: "Restructuring", description: "Corporate restructuring advisory including demergers, amalgamations, slump sales, and organizational redesign." },
    ],
    processSteps: [
      { step: "01", title: "Understanding", description: "Deep-dive into your business, industry dynamics, financial position, and strategic objectives." },
      { step: "02", title: "Analysis", description: "Comprehensive financial analysis, market research, and strategy formulation tailored to your goals." },
      { step: "03", title: "Execution", description: "Hands-on support in executing the strategy — from documentation and negotiations to regulatory filings." },
      { step: "04", title: "Closure & Support", description: "Deal closure assistance, post-transaction integration support, and ongoing strategic advisory." },
    ],
    pricingTiers: [
      { name: "Advisory Lite", price: "39,999", description: "For specific advisory needs", features: ["Single engagement focus", "Financial analysis report", "Strategic recommendations", "2 advisory sessions/month", "Email support", "Presentation-ready deliverables"], highlighted: false },
      { name: "Growth Plan", price: "99,999", description: "For growth-stage companies", features: ["All Lite features", "Business valuation", "Financial modeling", "Investor pitch deck", "Fundraising support", "Dedicated advisor", "Unlimited advisory calls"], highlighted: true },
      { name: "Strategic Partnership", price: "Custom", description: "For complex transactions and ongoing needs", features: ["All Growth features", "M&A advisory", "Due diligence management", "Deal negotiation support", "Board advisory", "Restructuring support", "Retainer-based engagement"], highlighted: false },
    ],
    faqs: [
      { question: "When do I need a business valuation?", answer: "Business valuations are needed for fundraising, M&A transactions, partner buyouts, ESOP grants, tax compliance (Section 56), and strategic planning. We provide SEBI/RBI compliant valuations." },
      { question: "How long does a typical fundraising process take?", answer: "A fundraising round typically takes 3-6 months from preparation to closure, depending on the stage, amount, and market conditions. We help accelerate this timeline with proper preparation." },
      { question: "Do you work with early-stage startups?", answer: "Yes, we work with companies across all stages — from seed-stage startups needing their first financial model and valuation to mature companies planning IPOs or strategic exits." },
      { question: "What valuation methodologies do you use?", answer: "We use internationally accepted methodologies including Discounted Cash Flow (DCF), Comparable Company Analysis (CCA), Comparable Transaction Analysis (CTA), and Net Asset Value (NAV) based on the specific context." },
    ],
    relatedServices: ["audit-services", "tax-planning", "company-formation"],
  },
};
