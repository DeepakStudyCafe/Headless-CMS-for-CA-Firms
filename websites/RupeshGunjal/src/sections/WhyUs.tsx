import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export function WhyUs({ data }: { data: any }) {
  const content = data?.textContent || {};
  const items = content.items || [];
  return (
    <section className='bg-section py-24 md:py-32 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <span className='text-xs uppercase tracking-[0.25em] text-secondary'>{content.subheading}</span>
          <h2 className='mt-4 font-display text-4xl md:text-5xl text-foreground' dangerouslySetInnerHTML={{ __html: content.heading || '' }} />
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14'>
          {items.map((it: any, i: number) => {
            const Icon = (Icons as any)[it.icon] || Icons.Check;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className='group'
            >
              <div className='flex items-center gap-3 mb-3'>
                <Icon size={22} className='text-primary' strokeWidth={1.5} />
                <h3 className='font-display text-xl text-foreground'>{it.title}</h3>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed pl-9 border-l border-border ml-2.5 pl-6'>
                {it.desc}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}