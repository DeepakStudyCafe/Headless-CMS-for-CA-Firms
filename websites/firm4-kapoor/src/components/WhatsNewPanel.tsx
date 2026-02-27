'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

interface WPPost {
  id: number
  date: string
  slug: string
  title: string
  excerpt: string
  content: string
  link: string
  authorName: string
  featuredImage: string
}

function getApiBase(): string {
  return process.env.NEXT_PUBLIC_API_URL || ''
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`
}

function AuthorAvatar({ name }: { name: string }) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow">
      {name ? name.charAt(0).toUpperCase() : 'A'}
    </div>
  )
}

export function WhatsNewPanel() {
  const [posts, setPosts] = useState<WPPost[]>([])
  const [loading, setLoading] = useState(true)
  const [postStack, setPostStack] = useState<WPPost[]>([])
  const [loadingPost, setLoadingPost] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const accumRef = useRef(0)

  // Fetch post list from backend proxy
  useEffect(() => {
    const apiBase = getApiBase()
    if (!apiBase) { setLoading(false); return }
    fetch(`${apiBase}/public/whats-new/posts`)
      .then(r => r.json())
      .then(json => {
        if (json?.success && Array.isArray(json.data?.posts)) setPosts(json.data.posts)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Smooth auto-scroll via requestAnimationFrame
  useEffect(() => {
    const el = scrollRef.current
    if (!el || loading || posts.length === 0 || isPinned || isHovered) {
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
      return
    }
    let lastTs = 0
    const SPEED = 22 // px per second
    function tick(ts: number) {
      if (!scrollRef.current) return
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
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [loading, posts.length, isPinned, isHovered])

  // Fetch a single post by slug via backend proxy
  const fetchPostBySlug = async (slug: string): Promise<WPPost | null> => {
    const apiBase = getApiBase()
    if (!apiBase) return null
    try {
      const r = await fetch(`${apiBase}/public/whats-new/post/${encodeURIComponent(slug)}`)
      const json = await r.json()
      return json?.success && json.data?.post ? (json.data.post as WPPost) : null
    } catch { return null }
  }

  // All links inside article content stay inside the popup
  const handleContentClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
    if (!anchor) return
    
    const href = anchor.getAttribute('href')
    if (!href) return
    
    // Check if it's a StudyCafe link
    if (href.includes('studycafe.in') || href.startsWith('/')) {
      e.preventDefault()
      const url = new URL(href, 'https://studycafe.in')
      const parts = url.pathname.replace(/\/$/, '').split('/').filter(Boolean)
      const slug = parts[parts.length - 1]
      if (slug) {
        setLoadingPost(true)
        const post = await fetchPostBySlug(slug)
        setLoadingPost(false)
        if (post) { 
          setPostStack(prev => [...prev, post])
          return 
        }
      }
    } else {
      // External link - open in new tab
      e.preventDefault()
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  const latestDate = posts.length > 0 ? formatDate(posts[0].date) : ''
  const currentPost = postStack[postStack.length - 1] ?? null

  const handlePrevious = () => {
    if (posts.length === 0) return
    const newIndex = currentIndex > 0 ? currentIndex - 1 : posts.length - 1
    setCurrentIndex(newIndex)
    setPostStack([posts[newIndex]])
  }

  const handleNext = () => {
    if (posts.length === 0) return
    const newIndex = currentIndex < posts.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setPostStack([posts[newIndex]])
  }

  return (
    <>
      {/* ── What's New Panel ──────────────────────────────────────────── */}
      <div
        className="flex flex-col rounded-xl overflow-hidden shadow-2xl border border-blue-900/50"
        style={{
          background: 'linear-gradient(170deg, #07192e 0%, #0d2d52 60%, #0a2445 100%)',
          minHeight: '380px',
          height: '100%',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2.5 py-3 px-4 border-b border-white/10"
             style={{ background: 'rgba(0,0,0,0.3)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <h3 className="text-white text-[11px] font-extrabold tracking-[0.25em] uppercase select-none">
            What's New
          </h3>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
        </div>

        {/* Scrolling news list */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex-1 overflow-y-auto"
          style={{ scrollBehavior: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="w-5 h-5 border-2 border-white/20 border-t-yellow-400 rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <p className="text-blue-300/70 text-xs text-center py-8 px-4">No updates available</p>
          ) : (
            <ul>
              {posts.map((post, idx) => (
                <li
                  key={post.id}
                  className="group px-3.5 py-3 border-b border-white/5 hover:bg-white/6 transition-colors cursor-pointer"
                  style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setPostStack([post])
                  }}
                >
                  <p className="text-[10px] text-yellow-300/80 font-bold mb-1 tracking-wide">
                    {formatDate(post.date)}
                  </p>
                  <p
                    className="text-[12px] text-white/80 group-hover:text-white transition-colors leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-3 pt-2.5 pb-3"
             style={{ background: 'rgba(0,0,0,0.3)' }}>
          <p className="text-[10px] text-blue-300/60 text-center mb-2.5 tracking-wide select-none">
            Updated Till :{' '}
            <span className="text-blue-200/90 font-bold">{latestDate}</span>
          </p>
          {/* Navigation buttons: Previous, Pause, Next */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={posts.length === 0}
              title="Previous Update"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPinned(p => !p)}
              title={isPinned ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isPinned
                  ? 'bg-yellow-400 text-[#07192e] shadow-lg shadow-yellow-400/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10'
              }`}
            >
              {isPinned ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNext}
              disabled={posts.length === 0}
              title="Next Update"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Full-screen detail popup ──────────────────────────────────── */}
      <AnimatePresence>
        {currentPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-3 md:p-6"
            onClick={e => { if (e.target === e.currentTarget) setPostStack([]) }}
          >
            <motion.article
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden my-4"
            >
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#07192e' }}>
                {postStack.length > 1 && (
                  <button
                    onClick={() => setPostStack(prev => prev.slice(0, -1))}
                    className="flex items-center gap-1 text-[11px] text-blue-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                )}
                <span className="flex-1 text-center text-[11px] text-blue-200/70 font-semibold tracking-widest uppercase select-none">
                  StudyCafe Update
                </span>
                <button
                  onClick={() => setPostStack([])}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Title + author meta */}
              <div className="px-5 pt-5 pb-4 border-b border-gray-100">
                <h1
                  className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-4"
                  dangerouslySetInnerHTML={{ __html: currentPost.title }}
                />
                <div className="flex items-center gap-3">
                  <AuthorAvatar name={currentPost.authorName || 'Author'} />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">
                      {currentPost.authorName || 'Author'}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{formatDate(currentPost.date)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured image */}
              {currentPost.featuredImage && (
                <div className="w-full overflow-hidden bg-gray-100" style={{ maxHeight: '320px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentPost.featuredImage}
                    alt={currentPost.title}
                    className="w-full object-cover"
                    style={{ maxHeight: '320px' }}
                  />
                </div>
              )}

              {/* Loading linked post */}
              {loadingPost && (
                <div className="flex items-center justify-center py-14">
                  <div className="w-7 h-7 border-2 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
                </div>
              )}

              {/* Article body */}
              {!loadingPost && (
                <div
                  className="px-5 py-5 overflow-y-auto max-h-[55vh]
                    prose prose-sm md:prose-base max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-p:text-gray-700 prose-p:leading-relaxed
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    [&_a]:text-blue-600 [&_a:hover]:text-blue-800 [&_a]:underline [&_a]:cursor-pointer [&_a]:font-medium
                    [&_img]:rounded-xl [&_img]:max-w-full [&_img]:my-4 [&_img]:mx-auto
                    [&_blockquote]:border-l-4 [&_blockquote]:border-blue-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-4
                    [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_table]:my-4
                    [&_td]:border [&_td]:border-gray-200 [&_td]:p-2.5
                    [&_th]:border [&_th]:border-gray-200 [&_th]:p-2.5 [&_th]:bg-gray-50 [&_th]:font-semibold [&_th]:text-left
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5
                    [&_li]:text-gray-700 [&_li]:mb-1
                    [&_hr]:border-gray-200 [&_hr]:my-5"
                  onClick={handleContentClick}
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
              )}
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
