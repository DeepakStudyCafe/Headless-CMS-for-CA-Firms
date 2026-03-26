'use client'

export default function Banner({ title, subtitle, imageSrc }: { title: string; subtitle?: string; imageSrc?: string }) {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{subtitle}</p>}
        </div>
        
        {imageSrc && (
          <div className="flex-shrink-0 w-full md:w-1/3 max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
            <img src={imageSrc} alt={title} className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700" />
          </div>
        )}
      </div>
    </section>
  )
}
