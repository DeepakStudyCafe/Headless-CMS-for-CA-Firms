export default function TeamPageStaff({ data }: { data?: any }) {
  const staff = data?.staff || data?.items || [];
  if (!staff.length) return null;

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            {data?.title && (
              <h2 className="text-4xl font-headline font-extrabold text-primary mb-4 tracking-tight">
                {data.title}
              </h2>
            )}
            {data?.description && (
              <p className="text-on-surface-variant max-w-xl">
                {data.description}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-white transition-all">
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </div>
            <div className="h-12 w-12 rounded-full border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-white transition-all">
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staff.map((member: any, index: number) => (
            <div key={index} className="bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-surface-container">
                <img className="w-full h-full object-cover" alt={member.name} src={member.image} />
              </div>
              <h4 className="text-lg font-headline font-bold text-primary">{member.name}</h4>
              <p className="text-xs font-bold text-secondary mb-4">{member.role}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{member.description}</p>
              <span className="text-[10px] font-bold bg-secondary/5 text-secondary px-2 py-1 rounded">{member.qualification}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



