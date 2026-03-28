import React, { useState } from 'react';
import { API_URL, WEBSITE_SLUG } from '@/lib/api';
import { CheckCircle2 } from 'lucide-react';

const ContactFormSection = ({ data, websiteData }: any) => {
  if (!data || Object.keys(data).length === 0) return null;

  const text = data?.textContent || data || {};
  const subjectOptions = Array.isArray(text.subjectOptions) && text.subjectOptions.length > 0
    ? text.subjectOptions
    : (websiteData?.themeConfig?.services || []).map((s: any) => s.title).concat(['General Inquiry']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/forms/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: formData.subject,
          websiteSlug: WEBSITE_SLUG,
          formType: 'contact',
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-stretch">
      {/* Contact Form */}
      <div className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-outline-variant/10" id="query-form">
        <h2 className="text-3xl font-headline font-bold text-primary mb-2">{text.formTitle || data?.formTitle || "Send us a Message"}</h2>
        <p className="text-on-surface-variant mb-10">{text.formSubtitle || data?.formSubtitle || "Our executive assistants will route your inquiry to the respective partner within 24 hours."}</p>
        
        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
            <p className="text-sm text-on-surface font-medium">Thank you! Your message has been sent. We'll respond within 24 hours.</p>
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary flex items-center gap-2">    
                Full Name <span className="text-error">*</span>
              </label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 outline-none text-on-surface" 
                placeholder="John Doe" 
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary flex items-center gap-2">    
                Email Address <span className="text-error">*</span>
              </label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 outline-none text-on-surface" 
                placeholder="john@company.com" 
                type="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Phone Number</label>        
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 outline-none text-on-surface" 
                placeholder="+91 98XXX XXXXX" 
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Subject/Service</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 outline-none text-on-surface cursor-pointer appearance-none"
              >
                {subjectOptions.map((subject: string, index: number) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary flex items-center gap-2">    
              Your Message <span className="text-error">*</span>
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 outline-none text-on-surface resize-none" 
              placeholder="Briefly describe your requirements or query..." 
              rows={4}
            />
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors flex justify-center items-center gap-3 group disabled:opacity-60" type="submit" disabled={submitting}>
            {submitting ? (
              <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
            ) : (
              <>Inquire Now <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span></>
            )}
          </button>
        </form>
      </div>

      {/* Map Integration */}
      <div className="relative min-h-[580px] rounded-xl overflow-hidden shadow-inner bg-surface-container-high border border-outline-variant/10">
        <div className="absolute inset-0 grayscale contrast-125 opacity-70">
          <img className="w-full h-full object-cover" alt="Detailed urban city map" src={data?.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuA8xaYON7iMffVTNZ6EDoHy23X23FWMvHp_G7DSzuh25hzBwgkCp8uTPFzVEcYWKiImPYuHkFDyWmPsr6LIZdh7C-JA7955ZNz-UI5R-Gk-_FAplNPWtwrlwUt4H4SgXck9FfsybtdLWIByC3RzGZRerI8ia5v1pyHY96l4uIaCikVbqsJ8Jn2iRb_IVjbD-8ZBTXFrUkIkzROSJS-7yuQuADYOBnpOVfZWWJXg-ShEFjFUbLJGn9CrhJQcvx_3_CGl9ZUq0BxsBzc"} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        
        {/* Floating Map Marker Info */}
        <div className="absolute bottom-8 left-8 right-8 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20">
          <div className="flex items-start gap-4">
            <div className="bg-secondary p-3 rounded-full text-on-secondary">
              <span className="material-symbols-outlined">business</span>
            </div>
            <div>
              <h4 className="font-headline font-extrabold text-primary">{text.mapTitle || data?.mapTitle || "Principal Headquarters"}</h4>
              <p className="text-sm text-on-surface-variant mb-4">{text.mapDesc || data?.mapDesc || "Strategically located in the heart of Delhi's financial district."}</p>
              <div className="flex gap-4">
                <a
                  className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1"
                  href={websiteData?.themeConfig?.contactContent?.mapUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-sm">directions</span> Get Directions
                </a>
                <a className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1" href={`mailto:${websiteData?.email || 'contact@arvindgupta.ca'}`}>
                  <span className="material-symbols-outlined text-sm">share</span> Share Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;



