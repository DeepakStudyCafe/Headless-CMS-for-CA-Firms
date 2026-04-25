export function Career() {
  return (
    <section id="career" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)] font-medium">
              Careers at ABC
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
              Build your <span className="italic text-[color:var(--wine)]">finest work</span><br />with people who care.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[color:var(--ink)]/70 leading-relaxed">
            We're a partner-led firm with a flat structure, real mentorship and the kind of
            challenging work that gets young CAs into the room with founders, CFOs and
            global investors. If that sounds like you, we'd love to talk.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden bg-[color:var(--mint)]/60 p-8 sm:p-12 relative">
          <div className="blob -top-20 -right-20 h-60 w-60 bg-[color:var(--wine)]/30" />
          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl">Our culture</h3>
              <p className="mt-4 text-sm text-[color:var(--ink)]/70 leading-relaxed max-w-md">
                We invest deeply in the people who walk through our doors — because the
                quality of our advice is only as good as the people behind it.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--ink)]/85">
              <li>• Partner-led mentorship from week one.</li>
              <li>• 30+ hours of paid CPE training every year.</li>
              <li>• Hybrid work · 4-day work week in tax off-season.</li>
              <li>• Performance bonuses tied to client outcomes.</li>
              <li>• Annual offsite — last year, Goa.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
