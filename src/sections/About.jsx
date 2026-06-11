import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import FadeIn from '../components/FadeIn'
import profileImg from '../assets/sub-profile.jpg'

function Counter({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let s = 0
    const steps = 60, interval = 1800 / steps, inc = to / steps
    const t = setInterval(() => {
      s += inc
      if (s >= to) { setCount(to); clearInterval(t) }
      else setCount(Math.floor(s))
    }, interval)
    return () => clearInterval(t)
  }, [inView, to])
  return <span ref={ref}>{count}</span>
}

const stats = [
  { value: 3, label: 'Projects Completed' },
  { value: 4, label: 'Years of Study' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden min-h-[680px]">

      {/* Photo — backgroundImage stays in style because it's a dynamic JS import */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute inset-0 bg-no-repeat bg-contain bg-right [mask-image:linear-gradient(to_right,transparent_0%,transparent_30%,rgba(0,0,0,0.15)_42%,rgba(0,0,0,0.6)_54%,rgba(0,0,0,0.9)_64%,black_75%)]"
        style={{ backgroundImage: `url(${profileImg})` }}
      />

      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-transparent to-[20%]" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[rgba(10,10,15,0.7)] via-[15%] to-transparent to-[40%]" />
  
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[rgba(10,10,15,0.7)] via-[15%] to-transparent to-[40%]" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24 py-24 max-w-[55%]">
        <FadeIn delay={0.1}>
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-3 font-semibold">About Me</p>
          <h2 className="text-white font-bold text-5xl md:text-6xl mb-8 leading-tight">
            Crafting Digital<br />
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-zinc-300 text-base leading-relaxed mb-4 max-w-[460px]">
            I'm <span className="text-white font-semibold">Linzel Marie P. Paciencia</span>, a Cum Laude IT graduate
            passionate about building modern, high-performance applications with clean, maintainable code.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-[440px]">
            From real-time analytics pipelines with Supabase Edge Functions to IoT monitoring systems —
            I bring both technical skill and project leadership to every team I join.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-14 mb-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                <p className="text-white font-bold text-5xl leading-none">
                  <Counter to={s.value} />
                  <span className="text-violet-400">+</span>
                </p>
                <p className="text-zinc-500 text-xs mt-2 tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm text-zinc-400 italic bg-violet-500/[.07] border border-violet-500/[.18]">
            <span className="text-violet-500 not-italic text-lg">"</span>
            Working with heart, creating with mind.
            <span className="text-violet-500 not-italic text-lg">"</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
