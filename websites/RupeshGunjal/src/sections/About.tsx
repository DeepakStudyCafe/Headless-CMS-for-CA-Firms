import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { getImageUrl } from '@/lib/api';

export function About({ data }: { data: any }) {
  const content = data?.textContent || {};
  return (
    <section id='about' className='py-24 md:py-32 px-6'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='relative'
        >
          <div className='aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-soft)]'>
            <img src={getImageUrl(data?.imageUrl) || ''} alt='Our office' loading='lazy' width={1024} height={1024} className='w-full h-full object-cover' />
          </div>
          <div className='absolute -bottom-5 -right-5 bg-card rounded-2xl border border-border px-6 py-5 shadow-[var(--shadow-soft)]'>
            <div className='font-display text-3xl text-primary'>{content.estVal}</div>
            <div className='text-xs text-muted-foreground uppercase tracking-wider mt-1'>{content.estLabel}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='rounded-3xl bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]'
        >
          <span className='text-xs uppercase tracking-[0.25em] text-secondary'>{content.subheading}</span>
          <h2 className='mt-4 font-display text-4xl md:text-5xl text-foreground leading-tight' dangerouslySetInnerHTML={{ __html: content.heading || '' }} />
          <p className='mt-6 text-muted-foreground leading-relaxed'>
            {content.description}
          </p>

          <ul className='mt-8 space-y-3'>
            {(content.points || []).map((p: any, i: number) => (
              <li key={i} className='flex items-start gap-3 text-sm text-foreground/85'>
                <span className='mt-0.5 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0'>
                  <Icons.Check size={12} className='text-primary' strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}