import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { Download, Mail } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import coverImg from '../assets/cover.png'

export default forwardRef(function ProfileHeader({ tabs, active, onChange }, ref) {
  return (
    <header ref={ref}>
      <div style={{ background: 'var(--paper)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Cover */}
          <div
            className="relative h-40 sm:h-56 md:h-64 sm:rounded-b-2xl overflow-hidden"
          >
            <img
              src={coverImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-4/5 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(20,12,24,0.92) 0%, rgba(20,12,24,0.65) 40%, rgba(20,12,24,0.25) 75%, transparent 100%)',
              }}
            />
          </div>

          {/* Avatar + identity */}
          <div className="px-4 sm:px-8 pb-5 flex flex-col md:flex-row md:items-start gap-4 md:gap-6 -mt-14 sm:-mt-16 relative">
            <div className="relative shrink-0 w-32 h-32 sm:w-40 sm:h-40">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={profileImg}
                alt="Linzel Paciencia"
                className="w-full h-full rounded-full object-cover object-top"
                style={{ border: '4px solid var(--paper)', boxShadow: '0 6px 20px rgba(20,12,24,0.35)' }}
              />

              {/* Thought bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
                transition={{
                  opacity: { duration: 0.3, delay: 0.5 },
                  scale: { type: 'spring', stiffness: 300, damping: 16, delay: 0.5 },
                  y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
                className="absolute -top-5 left-1 z-10 origin-bottom-left"
              >
                <div
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium"
                  style={{
                    background: 'var(--wash)',
                    color: 'var(--ink)',
                    border: '1px solid var(--line)',
                    boxShadow: '0 4px 14px rgba(20,12,24,0.18)',
                  }}
                >
                  <span className="relative flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                    <span className="relative inline-flex rounded-full w-2 h-2" style={{ background: '#22c55e' }} />
                  </span>
                  Open to Work
                </div>
                {/* Trailing bubbles pointing at the avatar */}
                <span
                  aria-hidden
                  className="absolute rounded-full"
                  style={{ left: 22, top: 'calc(100% - 2px)', width: 9, height: 9, background: 'var(--wash)', border: '1px solid var(--line)' }}
                />
                <span
                  aria-hidden
                  className="absolute rounded-full"
                  style={{ left: 33, top: 'calc(100% + 9px)', width: 5, height: 5, background: 'var(--wash)', border: '1px solid var(--line)' }}
                />
              </motion.div>
            </div>

            <div className="flex-1 min-w-0 md:mt-[4.25rem]">
              <h1 className="text-ink font-semibold text-2xl sm:text-3xl leading-tight">
                Linzel Marie P. Paciencia
              </h1>
              <p className="text-accent text-sm font-medium mt-0.5">Developer | UI/UX Designer</p>
              <p className="text-muted text-sm mt-1">
                Cum Laude · BS Information Technology · University of Cebu Lapu-Lapu and Mandaue
              </p>
            </div>

            <div className="flex gap-2 md:mt-[4.5rem]">
              <a
                href="/LINZEL-PACIENCIA-RESUME-2026.pdf"
                download="LINZEL-PACIENCIA-RESUME-2026.pdf"
                aria-label="Download resume"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: 'var(--accent)', color: 'var(--paper)' }}
              >
                <Download size={15} />
                Resume
                <span
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
                  style={{ background: 'var(--ink)', color: 'var(--paper)' }}
                >
                  Download resume (PDF)
                </span>
              </a>
              <button
                type="button"
                onClick={() => onChange('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: 'var(--wash)', color: 'var(--ink)', border: '1px solid var(--line)' }}
              >
                <Mail size={15} />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="sticky top-0 z-40"
        style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}
      >
        <nav
          aria-label="Profile sections"
          className="max-w-6xl mx-auto px-2 sm:px-6 flex overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {tabs.map(t => {
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onChange(t.id)}
                aria-current={isActive ? 'page' : undefined}
                className="relative shrink-0 px-4 py-3.5 text-sm font-medium transition-colors"
                style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}
              >
                {t.label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-2 right-2 bottom-0 h-0.5 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
})
