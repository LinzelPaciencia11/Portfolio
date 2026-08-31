import { motion } from 'motion/react'
import { Award, GraduationCap, Trophy, Medal, Users, BookOpen, Sparkles, Stamp } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SpotlightCard from '../components/SpotlightCard'

const featured = [
  {
    text: 'Certificate of Completion',
    org: 'Sprobe Inc.',
    year: 'May 2026',
    icon: Award,
    note: 'Full Stack Developer Internship',
  },
  {
    text: "Dean's Lister",
    org: '4 Consecutive Years',
    year: '2022 – 2026',
    icon: Trophy,
    note: 'Academic excellence, BS Information Technology',
  },
  {
    text: 'Cum Laude',
    org: 'Latin Honors Graduate',
    year: '2026',
    icon: Medal,
    note: 'Graduated with academic distinction, BS Information Technology',
  },
]

const groups = [
  {
    label: 'Conferences & Talks',
    icon: Users,
    items: [
      { text: 'ICT Congress', year: '2023, 2024, 2025' },
      { text: 'Cybersecurity and Privacy in Focus', year: '2024' },
      { text: 'Network Tutorial – UCLM', year: '2024' },
      { text: 'Tech Talk: DB Programming', year: '' },
    ],
  },
  {
    label: 'Courses & Certifications',
    icon: BookOpen,
    items: [
      { text: 'Database Programming', year: '' },
      { text: 'Python Essentials 1', year: '' },
      { text: 'Learn Python Programming – Udemy', year: '' },
    ],
  },
  {
    label: 'Competitions',
    icon: GraduationCap,
    items: [
      { text: 'QuaMeth TopScorer', year: '' },
    ],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Certificates</p>
          <h2 className="text-ink text-4xl font-semibold mb-10">Achievements & Awards</h2>
        </FadeIn>

        {/* Featured highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {featured.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <SpotlightCard className="p-6 h-full" spotlightColor="rgba(196,85,126,0.16)">
                {/* achievement stamp */}
                <div
                  className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none select-none"
                  style={{ transform: 'rotate(14deg)' }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: '1.5px dashed var(--accent)', opacity: 0.45 }}
                  />
                  <div
                    className="absolute inset-[5px] rounded-full flex items-center justify-center"
                    style={{ border: '1px solid var(--accent)', opacity: 0.6 }}
                  >
                    <Stamp size={18} strokeWidth={1.5} style={{ color: 'var(--accent)', opacity: 0.85 }} />
                  </div>
                </div>
                <div className="relative flex items-start gap-4">
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--wash)', border: '1px solid var(--line)', color: 'var(--accent)' }}
                  >
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-accent text-[11px] font-medium uppercase tracking-wide mb-1">
                      <Sparkles size={11} strokeWidth={2} />
                      Highlight
                    </div>
                    <h3 className="text-ink font-semibold text-base leading-snug">{item.text}</h3>
                    <p className="text-muted text-sm mt-0.5">{item.org}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs text-muted border border-line rounded-md px-2 py-0.5 bg-wash">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-ink/60 text-xs mt-2.5 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Grouped list */}
        <div className="flex flex-col gap-8">
          {groups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.08}>
              <div className="flex items-center gap-2 mb-3">
                <group.icon size={15} strokeWidth={1.75} className="text-accent" />
                <h3 className="text-ink/70 text-xs font-semibold uppercase tracking-wide">{group.label}</h3>
                <div className="flex-1 h-px" style={{ background: 'var(--line)' }} />
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {group.items.map((cert, i) => (
                  <motion.div
                    key={cert.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors hover:border-accent/40"
                    style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
                  >
                    <span className="text-accent shrink-0 text-sm">✦</span>
                    <div className="flex flex-wrap items-baseline gap-x-2 min-w-0">
                      <p className="text-ink/80 text-sm">{cert.text}</p>
                      {cert.year && <p className="text-muted text-xs">· {cert.year}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
