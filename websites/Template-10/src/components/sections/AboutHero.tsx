export default function AboutHero({ data }: { data?: any }) {
  const defaultTitle = "Architects of <br/><span class=\"text-secondary-fixed-dim\">Financial Trust.</span>";
  const defaultSubtitle = "A legacy of precision and a future defined by strategic innovation. We don't just manage numbers; we build the foundations for your enduring success.";
  const defaultImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB6zbOJ-SPwmBkxX4P-plEk9FrwC6FUUn-5XRtQEezcpvjpfZB2GOyUwXsz3EY-7TgNPYI_M1rHLuebSTZf4OUMlnSkTQJMcShGUyK3KgDSgSwjT-NiZken-3B-wrME2t7Q9vQR8Zypdilxq3aEUTYdRmEDpnPQlvvXmAQW8E9VlbpR3WvQ0Br0PIN28zUG8z-_6zSylWBH05KeKod75U79E8Iu2e9LXiN3t4r-PcrZnEvUGLfJ7CDgGV2FlRwtVTgfaHW7NCm3GPY";

  return (
    <section className="relative h-[614px] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 opacity-40">
        <img
          className="w-full h-full object-cover"
          alt="Hero"
          src={data?.image || defaultImage}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
            {data?.badge || "Established 1998"}
          </span>
          <h1
            className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-tight tracking-tighter mb-6"
            dangerouslySetInnerHTML={{ __html: data?.title || defaultTitle }}
          />
          <p className="text-xl text-on-primary-container font-body leading-relaxed max-w-2xl">
            {data?.subtitle || defaultSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}



