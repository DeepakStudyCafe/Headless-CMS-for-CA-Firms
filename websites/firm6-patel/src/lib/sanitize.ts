import sanitizeHtml from 'sanitize-html'

/** Domains considered "monitored" — links pointing here get rewritten to /post/<slug> */
const MONITORED_DOMAINS = ['studycafe.in', 'www.studycafe.in']


function extractSlug(url: URL): string | null {
  // ID-only query link ?p=123
  if (url.searchParams.get('p')) return null
  const path = url.pathname.replace(/\.html$/, '').replace(/\/$/, '')
  const parts = path.split('/').filter(Boolean)
  if (!parts.length) return null
  // Strip trailing numeric suffix e.g. my-post-12345 → my-post
  const raw = parts[parts.length - 1].replace(/-\d+$/, '')
  return raw || null
}

function isMonitored(href: string): boolean {
  try {
    return MONITORED_DOMAINS.includes(new URL(href).hostname)
  } catch {
    return false
  }
}

function rewriteHref(href: string): string {
  if (!isMonitored(href)) return href
  try {
    const slug = extractSlug(new URL(href))
    if (slug) return `/post/${slug}`
  } catch { /* ignore */ }
  return href
}


export function sanitizeContent(html: string): string {
  // Rewrite hrefs before sanitizing so the URL rewrite survives
  const rewritten = html.replace(
    /(<a\s[^>]*?href=["'])([^"']+)(["'])/gi,
    (_match, before, href, quote) => `${before}${rewriteHref(href)}${quote}`,
  )

  return sanitizeHtml(rewritten, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img', 'figure', 'figcaption',
      'iframe', 'video', 'source',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'blockquote', 'pre', 'code', 'hr',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ['href', 'name', 'target', 'rel', 'class', 'id'],
      img: ['src', 'srcset', 'sizes', 'alt', 'width', 'height', 'class', 'loading', 'referrerpolicy', 'data-src'],
      iframe: ['src', 'width', 'height', 'frameborder', 'allowfullscreen', 'allow', 'class'],
      video: ['src', 'controls', 'width', 'height', 'class', 'poster'],
      source: ['src', 'type'],
      '*': ['class', 'id', 'style'],
    },
    transformTags: {
      img: (_tagName, attribs) => ({
        tagName: 'img',
        attribs: { ...attribs, referrerpolicy: 'no-referrer', loading: attribs.loading || 'lazy' },
      }),
      // Ensure all links open safely; internal /post/* links don't need target
      a: (tagName, attribs) => {
        const href: string = attribs.href || ''
        const isInternal = href.startsWith('/') || href.startsWith('#')
        return {
          tagName,
          attribs: {
            ...attribs,
            ...(isInternal ? {} : { target: '_blank' }),
            rel: 'noopener noreferrer',
          },
        }
      },
    },
  })
}
