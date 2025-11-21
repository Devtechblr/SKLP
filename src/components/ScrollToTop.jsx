import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Disable scroll restoration to prevent browser from remembering scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    // Immediately scroll to top without animation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}