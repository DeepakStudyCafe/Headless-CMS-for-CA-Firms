'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      q: 'What is included with each template?',
      a: 'Each template includes a responsive design, admin panel access, contact form integration, SSL-ready setup, and basic SEO optimization. Content pages and demo data are provided for quick launch.',
    },
    {
      q: 'Can I customize the template for my firm?',
      a: 'Yes — templates are customizable. We can update colors, logos, content, and add custom features as needed. Higher-tier plans include custom development hours.',
    },
    {
      q: 'How long does it take to launch a site?',
      a: 'Typical turnaround is 3–7 business days depending on content readiness and customization requested. We also offer expedited delivery for urgent projects.',
    },
    {
      q: 'Do you provide hosting and maintenance?',
      a: 'Yes — optional hosting and maintenance packages are available. Hosting includes daily backups, updates, and SSL management.',
    },
    {
      q: 'How do I get admin access?',
      a: 'After launch we provide admin credentials and a short walkthrough. The admin panel lets you edit pages, team members, services, and blog posts without code.',
    },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4 mt-8">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 bg-white"
                >
                  <span className="text-left text-lg font-medium text-gray-900">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>

                <div className={`${open === i ? 'block' : 'hidden'} px-4 pb-4`}> 
                  <p className="text-gray-600">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
