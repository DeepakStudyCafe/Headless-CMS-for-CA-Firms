import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '@/lib/api'

export interface TickerPost {
  id: number
  slug: string
  title: string
  date: string
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`
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
        lastTs = 0
      }
      rafRef.current = requestAnimationFrame(tick)
    }
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

  // Using Abhishekrajaram's color palette logic
  // Background: card-premium or simple slate/navy gradient
  const tickerBg = "bg-primary-foreground border border-border shadow-xl rounded-xl overflow-hidden"

  return (
    <div
      className={`hidden lg:flex flex-col ${tickerBg}`}
      style={{ height: '460px', width: '100%' }}
      aria-label="Latest Updates"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-2 py-3 px-3 bg-accent/10 border-b border-border flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
        <h3 className="text-xs font-bold tracking-widest text-accent uppercase select-none">{`What's New`}</h3>
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
      </div>

      {/* Scrollable list */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex-1 overflow-y-scroll min-h-0 bg-background"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        tabIndex={0}
        role="list"
      >
        {searching && (
          <div className="flex items-center justify-center h-20 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent/70 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/70 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/70 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
        {!searching && isSearchMode && displayPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center h-24 gap-1 px-3">
            <span className="text-xl">🔍</span>
            <p className="text-xs text-muted-foreground text-center">No results found</p>
          </div>
        )}
        {!searching && (isSearchMode ? displayPosts : [...displayPosts, ...displayPosts]).map((post, idx) => (
          <div key={`${post.id}-${idx}`} role="listitem"
            className="px-4 py-3 border-b border-border hover:bg-muted/30 transition-colors">
            <p className="text-[10px] font-bold text-accent/90 tracking-wide mb-1 select-none">
              {formatDate(post.date)}
            </p>
            <Link
              to={`/post/${post.slug}`}
              className="text-xs text-foreground/80 hover:text-accent font-medium leading-snug transition-colors focus:outline-none focus:text-accent line-clamp-3 block decoration-transparent"
              dangerouslySetInnerHTML={{ __html: post.title }}
              tabIndex={(!isSearchMode && idx >= posts.length) ? -1 : 0}
              aria-hidden={(!isSearchMode && idx >= posts.length) ? true : undefined}
            />
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="border-t border-border px-3 py-3 flex-shrink-0 bg-muted/10">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search updates..."
            className="w-full bg-background text-foreground text-xs placeholder:text-muted-foreground rounded-md pl-8 pr-8 py-2 border border-input focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all"
          />
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {query && (
            <button onClick={() => { setQuery(''); setSearchResults(null) }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs font-bold"
            >✕</button>
          )}
        </div>
        {!query && (
          <button
            onClick={() => setPaused(p => !p)}
            className={`mt-2 w-full text-[10px] font-semibold tracking-wider uppercase py-1.5 rounded-md transition-colors ${paused ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
          >
            {paused ? '▶ Resume' : '⏸ Pause'}
          </button>
        )}
      </div>
    </div>
  )
}