import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import DepthText from '../components/DepthText'
import profileImg from '../assets/profile.jpg'

function PeekingDog({ visible }) {
  return (
    <motion.div
      aria-hidden
      className="absolute -left-4 -bottom-4 z-20 pointer-events-none select-none flex items-end origin-bottom-left"
      initial={false}
      animate={{
        y: visible ? 0 : 24,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.55,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
    >
      <span style={{ fontSize: 44, lineHeight: 1 }}>🐶</span>
      <motion.span
        className="-ml-1 mb-1"
        style={{ fontSize: 22, lineHeight: 1, transformOrigin: '80% 80%' }}
        animate={visible ? { rotate: [0, -25, 8, -25, 0] } : { rotate: 0 }}
        transition={visible
          ? { duration: 0.9, repeat: Infinity, repeatDelay: 0.4, ease: 'easeInOut' }
          : { duration: 0.15 }
        }
      >
        👋
      </motion.span>
    </motion.div>
  )
}

function ProfileCard() {
  const [dogVisible, setDogVisible] = useState(false)
  const hideTimer = useRef(null)

  function summonDog() {
    setDogVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setDogVisible(false), 3200)
  }

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  return (
    <div className="relative flex items-center justify-center w-full max-w-[296px] mx-auto">
      {/* hologram light — glow projected from below the card */}
      <motion.div
        aria-hidden
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(196,85,126,0.6) 0%, rgba(158,112,214,0.4) 40%, rgba(103,180,214,0.18) 65%, transparent 80%)',
          filter: 'blur(24px)',
          zIndex: 0,
        }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.9, 1.06, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <PeekingDog visible={dogVisible} />

      <motion.div
        whileHover={{ y: -4 }}
        onClick={summonDog}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full rounded-2xl overflow-hidden group cursor-pointer"
        style={{
          background: 'rgba(252,250,251,0.35)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          border: '1px solid rgba(231,219,227,0.55)',
          boxShadow: '0 4px 24px rgba(42,30,46,0.08), 0 18px 32px -12px rgba(196,85,126,0.28)',
          zIndex: 1,
        }}
      >
        {/* holographic sheen — sweeps across on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: 'linear-gradient(115deg, transparent 25%, rgba(196,85,126,0.22) 40%, rgba(255,255,255,0.55) 50%, rgba(103,150,214,0.22) 60%, transparent 75%)',
            backgroundSize: '250% 250%',
            animation: 'holoSweep 2.2s linear infinite',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Name + role */}
        <div className="px-6 pt-7 pb-4 text-center">
          <h3 className="text-ink font-semibold text-xl leading-tight">Linzel Marie P. Paciencia</h3>
          <p className="text-accent text-xs mt-1 font-medium tracking-wide">Developer | UI/UX Designer</p>
        </div>

        {/* Photo */}
        <div className="mx-5 rounded-xl overflow-hidden relative" style={{ height: 248 }}>
          <img
            src={profileImg}
            alt="Linzel Paciencia"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center px-5 py-4 mt-1 border-t" style={{ borderColor: 'var(--line)' }}>
          <div className="flex items-center gap-1.5">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
              <span className="relative inline-flex rounded-full w-2 h-2" style={{ background: '#22c55e' }} />
            </span>
            <span className="text-muted text-xs font-medium">Open to Work</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="flex items-center px-4 sm:px-8 pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-6 md:gap-10 items-center">

        {/* Left — text */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-muted text-lg mb-2 font-medium"
          >
            Hi I'm
          </motion.p>

          <div className="mb-6 -ml-1">
            <DepthText
              text="Linzel Marie"
              faceColor="#2A1E2E"
              depthColor="#C4557E"
              layers={8}
              depth={0.9}
              tilt={2.5}
              autoOrbit={false}
              shadow={false}
              letterSpacing="-0.01em"
              fontWeight={700}
              fontSize="clamp(2.5rem, 8vw, 5rem)"
              className="!leading-[1.05]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted text-base leading-relaxed mb-10 max-w-md"
          >
            A Cum Laude IT graduate specializing in full-stack development, mobile applications, and
            modern deployment workflows. Experienced in React, React Native, Laravel, Supabase, and
            production-ready CI/CD pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-3 flex-wrap"
          >
            {[
              { label: 'Download Resume', href: '/LINZEL-PACIENCIA-RESUME-2026.pdf', download: 'LINZEL-PACIENCIA-RESUME-2026.pdf', primary: true },
              { label: 'Explore My Projects', href: '#projects', primary: false },
            ].map(btn => (
              <a
                key={btn.label}
                href={btn.href}
                download={btn.download || undefined}
                className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={btn.primary
                  ? { background: 'var(--accent)', color: 'var(--paper)' }
                  : { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line)' }
                }
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.85'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                {btn.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — profile card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  )
}
