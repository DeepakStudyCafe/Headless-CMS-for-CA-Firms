import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export function Highlights({ data }: { data: any }) {
  const items = data?.textContent?.items || [];
  return (
    <section className='relative -mt-6 md:-mt-10 pb-20 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'>
        {items.map((it: any, i: number) => {
          const Icon = (Icons as any)[it.icon] || Icons.Check;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className='rounded-2xl border border-border bg-card px-6 py-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow'
            >
              <Icon className='text-primary' size={22} strokeWidth={1.5} />
              <div className='mt-5 font-display text-3xl text-foreground'>{it.value}</div>
              <div className='text-xs uppercase tracking-wider text-muted-foreground mt-1.5'>
                {it.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}