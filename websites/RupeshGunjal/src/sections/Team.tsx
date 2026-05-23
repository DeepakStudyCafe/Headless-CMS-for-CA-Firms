import { motion } from 'framer-motion';
import { getImageUrl } from '@/lib/api';

export function Team({ data }: { data: any }) {
  const content = data?.textContent || {};
  const team = content.items || [];
  return (
    <section id='team' className='bg-section py-24 md:py-32 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-xs uppercase tracking-[0.25em] text-secondary'>{content.subheading}</span>
          <h2 className='mt-4 font-display text-4xl md:text-5xl text-foreground' dangerouslySetInnerHTML={{ __html: content.heading || '' }} />
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {team.map((p: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className='group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-500'
            >
              <div className='aspect-[4/5] overflow-hidden bg-muted'>
                <img
                  src={getImageUrl(p.img) || ''}
                  alt={p.name}
                  loading='lazy'
                  width={768}
                  height={896}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                />
              </div>
              <div className='p-5'>
                <h3 className='font-display text-xl text-foreground'>{p.name}</h3>
                <p className='text-xs text-muted-foreground mt-1 uppercase tracking-wider'>{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}