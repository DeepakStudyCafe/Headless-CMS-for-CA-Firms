import { motion } from 'framer-motion';

export function Process({ data }: { data: any }) {
  const content = data?.textContent || {};
  const steps = content.steps || [];
  return (
    <section className='py-24 md:py-32 px-6'>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-16'>
          <span className='text-xs uppercase tracking-[0.25em] text-secondary'>{content.subheading}</span>
          <h2 className='mt-4 font-display text-4xl md:text-5xl text-foreground' dangerouslySetInnerHTML={{ __html: content.heading || '' }} />
        </div>

        <div className='relative'>
          <div className='absolute left-[15px] top-2 bottom-2 w-px bg-border' />
          <div className='space-y-12'>
            {steps.map((s: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className='relative pl-14'
              >
                <div className='absolute left-0 top-1 h-8 w-8 rounded-full bg-background border border-primary flex items-center justify-center'>
                  <div className='h-2 w-2 rounded-full bg-primary' />
                </div>
                <div className='font-display text-sm text-primary tracking-widest mb-1'>{s.n}</div>
                <h3 className='font-display text-2xl text-foreground mb-2'>{s.title}</h3>
                <p className='text-muted-foreground leading-relaxed max-w-md'>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}