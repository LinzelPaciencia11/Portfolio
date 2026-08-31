import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { Briefcase, GraduationCap, Quote as QuoteIcon } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SpotlightCard from '../components/SpotlightCard'
import GradientBorderCard from '../components/GradientBorderCard'
import prototypingImg from '../assets/undraw-prototyping.svg'
import codeReviewImg from '../assets/undraw-code-review.svg'
import teamCollabImg from '../assets/undraw-team-collaboration.svg'
import documentReviewImg from '../assets/undraw-document-review.svg'

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
  { value: 3, label: 'Roles Held', Icon: Briefcase },
  { value: 4, label: 'Years of Study', Icon: GraduationCap },
]

function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
        >
          <GradientBorderCard className="h-full" contentClassName="p-6 sm:p-8 flex items-center gap-4" duration={6}>
            <div
              className="flex items-center justify-center rounded-xl shrink-0"
              style={{ width: 48, height: 48, background: 'var(--accent)' }}
            >
              <s.Icon size={22} color="var(--paper)" strokeWidth={2.25} />
            </div>
            <div>
              <p className="text-ink font-semibold text-3xl leading-none">
                <Counter to={s.value} />
                <span className="text-accent">+</span>
              </p>
              <p className="text-muted text-sm mt-1.5 tracking-wide">{s.label}</p>
            </div>
          </GradientBorderCard>
        </motion.div>
      ))}
    </div>
  )
}

function Quote() {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm text-ink/80 italic bg-wash border border-line max-w-full">
      <QuoteIcon size={16} className="text-accent shrink-0" fill="currentColor" strokeWidth={0} />
      <span className="whitespace-normal sm:whitespace-nowrap">Working with heart, creating with mind.</span>
      <QuoteIcon size={16} className="text-accent shrink-0 rotate-180" fill="currentColor" strokeWidth={0} />
    </div>
  )
}

const facets = [
  {
    img: prototypingImg,
    title: 'Design & Prototyping',
    desc: 'Wireframes, user flows, and high-fidelity UI in Figma.',
  },
  {
    img: codeReviewImg,
    title: 'Development',
    desc: 'Full-stack builds in React, Laravel, TypeScript, and C#.',
  },
  {
    img: teamCollabImg,
    title: 'Team Collaboration',
    desc: 'Cross-functional work with developers, designers, and PMs.',
  },
  {
    img: documentReviewImg,
    title: 'Docs & QA',
    desc: 'Technical documentation and testing with Jest and Selenium.',
  },
]

function FacetGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
      {facets.map((f, i) => (
        <FadeIn key={f.title} delay={0.15 + i * 0.1} direction="up">
          <SpotlightCard className="h-full p-5 flex flex-col items-center text-center gap-3">
            <img src={f.img} alt="" className="h-20 w-full object-contain" />
            <div>
              <p className="text-ink text-sm font-semibold">{f.title}</p>
              <p className="text-muted text-xs mt-1 leading-relaxed">{f.desc}</p>
            </div>
          </SpotlightCard>
        </FadeIn>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Text */}
        <FadeIn delay={0.1}>
          <p className="text-accent text-sm tracking-widest uppercase mb-3 font-medium">About Me</p>
          <h2
            className="text-ink font-semibold mb-6 leading-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 6.2vw, 3rem)' }}
          >
            Crafting Digital <span className="text-accent">Experiences</span>
          </h2>
        </FadeIn>

        {/* Facet illustrations */}
        <div className="mb-10">
          <FacetGrid />
        </div>

        <FadeIn delay={0.15}>
          <div className="flex justify-center mb-10">
            <Quote />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-ink/80 text-lg leading-relaxed mb-3 text-justify">
            I'm <span className="text-ink font-semibold">Linzel Marie P. Paciencia</span>, a Cum Laude IT graduate who
            takes products from wireframe to production — designing interfaces in Figma, then building them out with
            React, React Native, Laravel, and TypeScript.
          </p>
          <p className="text-muted text-base leading-relaxed mb-7 text-justify">
            From real-time data pipelines to a capstone IoT system led from concept to deployment as project manager
            and UI/UX designer, I bring both technical skill and design sense to every team I join — trusted by
            employers and clients to take ideas from concept to shipped product.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Stats />
        </FadeIn>
      </div>
    </section>
  )
}
