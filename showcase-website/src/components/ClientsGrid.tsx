"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Client {
  name: string
  url: string
  img: string
  description?: string
}

interface Props {
  clients: Client[]
}

const ITEMS_PER_PAGE = 6

export default function ClientsGrid({ clients }: Props) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(clients.length / ITEMS_PER_PAGE))

  const start = (page - 1) * ITEMS_PER_PAGE
  const visible = clients.slice(start, start + ITEMS_PER_PAGE)

  function goto(p: number) {
    if (p < 1) p = 1
    if (p > totalPages) p = totalPages
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((c) => (
          <div
            key={c.name}
            className="group relative block bg-gradient-to-b from-white to-slate-50 border border-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="relative h-56 bg-slate-100 overflow-hidden">
              <Image src={c.img} alt={`${c.name} banner`} fill style={{ objectFit: 'contain', objectPosition: 'center' }} className="transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold mr-4 truncate">{c.name}</h3>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-sm bg-primary-600 text-white px-3 py-1 rounded hover:bg-primary-700 transition">Visit</a>
              </div>
              <p className="text-slate-600 text-sm mb-4">{c.description}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => goto(page - 1)} disabled={page === 1} className="px-3 py-1 rounded border bg-white disabled:opacity-50">
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const p = i + 1
            return (
              <button key={p} onClick={() => goto(p)} className={`px-3 py-1 rounded border ${p === page ? 'bg-primary-600 text-white' : 'bg-white'}`}>
                {p}
              </button>
            )
          })}

          <button onClick={() => goto(page + 1)} disabled={page === totalPages} className="px-3 py-1 rounded border bg-white disabled:opacity-50">
            Next
          </button>
        </div>
      )}
    </>
  )
}
