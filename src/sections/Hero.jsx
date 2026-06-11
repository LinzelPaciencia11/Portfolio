import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import BlurText from '../components/BlurText'
import profileImg from '../assets/profile.jpg'

function SpinningBorderCard({ children }) {
  return (
    <div className="relative rounded-2xl" style={{ padding: '1.5px', isolation: 'isolate' }}>
      {/* Spinning conic gradient border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{
              width: '250%',
              height: '250%',
              background: 'conic-gradient(from 0deg, transparent 0%, #7c3aed 20%, #06b6d4 40%, transparent 55%, transparent 75%, #7c3aed 90%, transparent 100%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
      {/* Glow underneath */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 40px rgba(139,92,246,0.35), 0 0 80px rgba(6,182,212,0.15)' }}
      />
      {/* Card content */}
      <div
        className="relative rounded-2xl overflow-hidden z-10"
        style={{ background: 'linear-gradient(160deg, #1a1040 0%, #0f0f1a 60%, #0d0d15 100%)' }}
      >
        {children}
      </div>
    </div>
  )
}

function ProfileCard() {
  const [isDragging, setIsDragging] = useState(false)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full max-w-[296px] mx-auto" style={{ minHeight: 480 }}>
      <motion.div
        drag
        dragConstraints={{ left: -70, right: 70, top: -70, bottom: 70 }}
        dragElastic={0.18}
        dragMomentum={false}
        onDragStart={() => { setIsDragging(true); setShowHint(false) }}
        onDragEnd={() => setIsDragging(false)}
        animate={isDragging ? { scale: 1.04, rotate: 3 } : { y: [0, -14, 0], scale: 1, rotate: 0 }}
        transition={isDragging
          ? { type: 'spring', stiffness: 300, damping: 20 }
          : { y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 0.2 } }
        }
        whileHover={isDragging ? {} : { scale: 1.02 }}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', width: '100%' }}
      >
        <SpinningBorderCard>
          {/* Name + role */}
          <div className="px-6 pt-7 pb-4 text-center">
            <h3 className="text-white font-bold text-xl leading-tight">Linzel Marie P. Paciencia</h3>
            <p className="text-violet-400 text-xs mt-1 font-medium tracking-wide">Full Stack Developer</p>
          </div>

          {/* Photo */}
          <div className="mx-5 rounded-xl overflow-hidden relative" style={{ height: 248 }}>
            <motion.img
              src={profileImg}
              alt="Linzel Paciencia"
              className="w-full h-full object-cover object-top"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: 'linear-gradient(to top, rgba(13,10,25,0.85), transparent)' }}
            />
            <motion.span
              className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
              style={{ background: 'rgba(139,92,246,0.35)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.4)', backdropFilter: 'blur(6px)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              IT Graduate · Cum Laude
            </motion.span>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 py-4 mt-1 border-t" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
            <div className="flex items-center gap-2">
              <img src={profileImg} alt="" className="w-7 h-7 rounded-full object-cover object-top" />
              <div>
                <p className="text-white text-xs font-medium">paciencialinzel</p>
                <div className="flex items-center gap-1">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-zinc-500 text-xs">Online</span>
                </div>
              </div>
            </div>
            <motion.a
              href="#contact"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#6d28d9)' }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </SpinningBorderCard>
      </motion.div>

      {/* Drag hint */}
      <motion.div
        className="absolute -bottom-8 flex items-center gap-1.5 text-zinc-600 text-xs select-none pointer-events-none"
        animate={{ opacity: showHint ? [0, 1, 1, 0] : 0 }}
        transition={{ duration: 3, delay: 1.5 }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
        </svg>
        drag me around
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm text-zinc-300"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <motion.div
              className="w-5 h-5 rounded-full shrink-0"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            "Code with purpose, deliver with excellence"
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-lg mb-2 font-medium"
          >
            Hi I'm
          </motion.p>

          <BlurText
            text="Linzel Marie"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight justify-start mb-6"
            stepDuration={0.5}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-zinc-400 text-base leading-relaxed mb-10 max-w-md"
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
              { label: 'Download CV', href: '/PACIENCIA-CV.pdf', download: 'PACIENCIA-CV.pdf', primary: true },
              { label: 'Explore My Projects', href: '#projects', primary: false },
            ].map(btn => (
              <motion.a
                key={btn.label}
                href={btn.href}
                download={btn.download || undefined}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={btn.primary
                  ? { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }
                  : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }
                }
                whileHover={{ scale: 1.05, background: btn.primary ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                {btn.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — draggable card */}
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
