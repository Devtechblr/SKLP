import { useEffect } from 'react'

export default function SEO({ 
  title = "SKLP - Quality Concrete Products | Bengaluru",
  description = "Leading concrete products manufacturer in Bengaluru. Quality concrete solutions, ready-mix concrete, and construction materials.",
  keywords = "concrete, ready-mix concrete, construction materials, Bengaluru, Karnataka, SKLP, concrete products",
  ogImage = "/assests/logo.png",
  url = "https://sklpconcrete.com"
}) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, keywords, ogImage, url])

  return null
}