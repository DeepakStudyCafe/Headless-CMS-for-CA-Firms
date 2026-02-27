'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

export interface TickerPost {
  id: number
  slug: string
  title: string
  date: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`
}

interface Props {
  posts: TickerPost[]
}

export function UpdatesTicker({ posts }: Props) {
  const [paused, setPaused] = useState(false)
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<TickerPost[] | null>(null)
  const [searching, setSearching] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const accumRef = useRef(0)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll: only when not searching and not paused
  useEffect(() => {
    const el = scrollRef.current
    const isSearchMode = searchResults !== null
    if (!el || posts.length === 0 || paused || isSearchMode) {
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
      return
    }
    let lastTs = 0
    const SPEED = 22
    function tick(ts: number) {
      if (!scrollRef.current) return
      // Skip work when tab is hidden — avoids wasted CPU
      if (!document.hidden) {
        const dt = lastTs ? Math.min(ts - lastTs, 50) : 0
        lastTs = ts
        accumRef.current += SPEED * dt / 1000
        const whole = Math.floor(accumRef.current)
        if (whole >= 1) {
          scrollRef.current.scrollTop += whole
          accumRef.current -= whole
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
          if (scrollTop + clientHeight >= scrollHeight - 2) {
            scrollRef.current.scrollTop = 0
            accumRef.current = 0
          }
        }
      } else {
        lastTs = 0 // reset so no jump when tab becomes visible again
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    // Pause RAF entirely when tab hidden, resume when visible
    function onVisibility() {
      if (document.hidden) {
        if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
      } else {
        lastTs = 0
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [posts.length, paused, searchResults])

  const handleSearch = useCallback((val: string) => {
    setQuery(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (!val.trim()) { setSearchResults(null); setSearching(false); return }
    // Instant client-side filter with prefix priority
    const q = val.trim().toLowerCase()
    const clientMatches = posts
      .map(p => {
        const plain = p.title.replace(/<[^>]+>/g, '').toLowerCase()
        const score = plain.startsWith(q) ? 2 : plain.includes(q) ? 1 : 0
        return { p, score }
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(x => x.p)
    setSearchResults(clientMatches)
    // Then fetch broader results from API (debounced 300ms)
    setSearching(true)
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`${API_URL}/public/whats-new/search?q=${encodeURIComponent(val.trim())}&per_page=15`)
        if (!res.ok) { setSearching(false); return }
        const json = await res.json()
        const apiPosts: TickerPost[] = Array.isArray(json.data?.posts) ? json.data.posts : []
        const clientIds = new Set(clientMatches.map(p => p.id))
        const qNow = val.trim().toLowerCase()
        const extra = apiPosts
          .filter(p => !clientIds.has(p.id))
          .map(p => {
            const plain = p.title.replace(/<[^>]+>/g, '').toLowerCase()
            const score = plain.startsWith(qNow) ? 2 : plain.includes(qNow) ? 1 : 0
            return { p, score }
          })
          .sort((a, b) => b.score - a.score)
          .map(x => x.p)
        setSearchResults([...clientMatches, ...extra])
      } catch { /* keep client results */ }
      finally { setSearching(false) }
    }, 300)
  }, [posts])

  if (posts.length === 0) return null

  const isSearchMode = searchResults !== null
  const displayPosts = isSearchMode ? searchResults : posts

  return (
    <div
      className="hidden lg:flex flex-col rounded-xl overflow-hidden border border-slate-600 shadow-2xl"
      style={{ background: 'linear-gradient(170deg, #07192e 0%, #0d2d52 60%, #0a2445 100%)', height: '460px', width: '100%' }}
      aria-label="Latest StudyCafe updates"
    >
      {/* Header */}
      <div
        className="flex items-center justify-center gap-2 py-2.5 px-3 border-b border-white/10 flex-shrink-0"
        style={{ background: 'rgba(0,0,0,0.35)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" aria-hidden="true" />
        <h3 className="text-[10px] font-extrabold tracking-[0.2em] text-white uppercase select-none">{`What's New`}</h3>
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" aria-hidden="true" />
      </div>

      {/* Scrollable list */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex-1 overflow-y-scroll min-h-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        tabIndex={0}
        role="list"
        aria-label="Scrolling latest updates"
      >
        {searching && (
          <div className="flex items-center justify-center h-20 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
        {!searching && isSearchMode && displayPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center h-24 gap-1 px-3">
            <span className="text-xl">🔍</span>
            <p className="text-[10px] text-white/40 text-center">No results found</p>
          </div>
        )}
        {!searching && (isSearchMode ? displayPosts : [...displayPosts, ...displayPosts]).map((post, idx) => (
          <div key={`${post.id}-${idx}`} role="listitem"
            className="px-3 py-2.5 border-b border-white/5 hover:bg-white/5 transition-colors">
            <p className="text-[9px] font-bold text-yellow-300/80 tracking-wide mb-0.5 select-none">
              {formatDate(post.date)}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-[11px] text-white/80 hover:text-white leading-snug transition-colors focus:outline-none focus:text-yellow-200 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.title }}
              tabIndex={(!isSearchMode && idx >= posts.length) ? -1 : 0}
              aria-hidden={(!isSearchMode && idx >= posts.length) ? true : undefined}
            />
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="border-t border-white/10 px-3 py-2.5 flex-shrink-0" style={{ background: 'rgba(0,0,0,0.35)' }}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search articles…"
            className="w-full bg-white/10 text-white text-[11px] placeholder-white/30 rounded-lg pl-7 pr-7 py-1.5 border border-white/10 focus:border-yellow-400/50 focus:outline-none focus:bg-white/15 transition-all"
          />
          <svg className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {query && (
            <button onClick={() => { setQuery(''); setSearchResults(null) }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors text-xs"
              aria-label="Clear search">✕</button>
          )}
        </div>
        {!query && (
          <button
            onClick={() => setPaused(p => !p)}
            className={`mt-1.5 w-full text-[8px] font-semibold tracking-widest uppercase py-1 rounded-full transition-colors ${paused ? 'bg-yellow-400/20 text-yellow-300' : 'text-white/30 hover:text-white/60'}`}
            aria-label={paused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
          >
            {paused ? '▶ Resume' : '⏸ Pause'}
          </button>
        )}
      </div>
    </div>
  )
}
