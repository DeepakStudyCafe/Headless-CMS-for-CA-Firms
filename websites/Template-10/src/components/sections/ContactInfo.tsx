import { Link } from 'react-router-dom';

const ContactInfo = ({ data, websiteData }: any) => {
  if (!data || Object.keys(data).length === 0) return null;

  const text = data?.textContent || data || {};
  const phone = text.phone || websiteData?.phone;
  const email = text.email || websiteData?.email;
  const timings = text.timings || websiteData?.workingHours;
  const mapLink = text.mapLink || websiteData?.themeConfig?.contactContent?.mapUrl || '#';

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 relative z-20 mb-24">
      {/* Office Address Card */}
      <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between h-full min-h-[360px] group hover:shadow-lg transition-shadow duration-300 border border-outline-variant/10">
        <div>
          <span className="material-symbols-outlined text-secondary text-4xl mb-6">location_on</span>
          <h3 className="text-xl font-headline font-bold text-primary mb-4">{text.officeTitle || "Principal Office"}</h3>
          <p className="text-on-surface-variant leading-relaxed" dangerouslySetInnerHTML={{ __html: text.officeAddress || `${websiteData?.address || '102-105, Corporate Plaza, Parliament Street, New Delhi, Delhi 110001, India'}`.replace(/, /g, ',<br/>') }} />
        </div>
        <div className="mt-12">
          <a className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all" href={mapLink} target="_blank" rel="noreferrer">
            View on Map <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Contact Channels Card */}
      <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between h-full min-h-[360px] group hover:shadow-lg transition-shadow duration-300 border border-outline-variant/10">
        <div>
          <span className="material-symbols-outlined text-secondary text-4xl mb-6">contact_support</span>
          <h3 className="text-xl font-headline font-bold text-primary mb-4">{text.channelsTitle || "Direct Channels"}</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant text-xl">call</span>
              <span className="text-on-surface font-medium">{phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant text-xl">mail</span>
              <span className="text-on-surface font-medium">{email}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant text-xl">schedule</span>
              <span className="text-on-surface font-medium">{timings}</span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <a className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all" href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>
            Call Our Advisor <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Query Section Highlight */}
      <div className="bg-primary-container p-10 rounded-xl flex flex-col justify-between h-full min-h-[360px] group text-on-primary shadow-lg shadow-primary/10">
        <div>
          <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">psychology_alt</span>
          <h3 className="text-xl font-headline font-bold mb-4">{text.queryTitle || "Have a Complex Query?"}</h3>
          <p className="text-on-primary-container leading-relaxed">
            {text.queryDescription || "For specific tax disputes or intricate compliance matters, our 'Query' department provides detailed technical analysis."}
          </p>
        </div>
        <div className="mt-12">
          <Link to="/query" className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 hover:bg-secondary/80 transition-colors">
            {text.queryBtnText || "Submit Technical Query"} <span className="material-symbols-outlined">article</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;



