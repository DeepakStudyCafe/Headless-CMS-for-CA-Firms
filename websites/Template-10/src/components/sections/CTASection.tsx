import { FormEvent } from 'react';
interface CTASectionProps { data?: any; onSubmit?: (email: string) => void; }
export default function CTASection({ data, onSubmit }: CTASectionProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget); 
    const email = formData.get('email') as string; 
    if (onSubmit) onSubmit(email);
  };
  
  if (!data) return null;
  const heading = data.heading || data.title;

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-primary/5">
          <div className="md:w-1/2 relative z-10">
            {heading && (
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: heading }} />
            )}
            {(data.description || data.subheading) && (
              <p className="text-on-surface-variant mb-10 text-lg">{data.description || data.subheading}</p>
            )}
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
              <input className="flex-1 bg-surface-container px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Professional Email" type="email" name="email" required />
              {data.cta && (
                <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform" type="submit">{data.cta}</button>
              )}
            </form>
          </div>
          <div className="md:w-1/3 relative z-10 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-secondary-container flex items-center justify-center relative">
              <span className="material-symbols-outlined text-6xl text-on-secondary-container">{data.icon || 'chat_bubble'}</span>
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-tertiary-fixed rounded-full border-4 border-surface-container-lowest"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
