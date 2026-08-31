import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HouseHeart, Info, WandSparkles, Boxes, FolderBookmark, UserStar } from 'lucide-react'
import Dock from './Dock'

const links = [
  { href: '#hero',       label: 'Intro',      icon: HouseHeart },
  { href: '#about',      label: 'About',      icon: Info },
  { href: '#skills',     label: 'Skills',     icon: WandSparkles },
  { href: '#experience', label: 'Experience', icon: Boxes },
  { href: '#projects',   label: 'Projects',   icon: FolderBookmark },
  { href: '#contact',    label: 'Contact',    icon: UserStar },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)

      if (open) {
        setHidden(false)
      } else if (y > lastY.current && y > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  // Close menu on resize to md+
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? 'calc(-100% - 1rem)' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-4 left-0 right-0 z-50"
        style={{
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          background: scrolled || open ? 'rgba(252, 250, 251, 0.9)' : 'transparent',
          transition: 'background 300ms ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-end relative">
          {/* Desktop dock, centered in the topbar */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dock items={links} />
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-ink origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-ink"
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-ink origin-center"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden flex flex-col px-4 pb-4 gap-1"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-muted hover:text-ink hover:bg-wash text-sm font-medium transition-colors"
                  >
                    <l.icon className="w-4 h-4" strokeWidth={1.75} />
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
