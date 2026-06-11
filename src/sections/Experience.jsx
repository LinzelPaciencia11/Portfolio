import { motion } from 'motion/react'
import { Badge } from '../components/ui/badge'
import FadeIn from '../components/FadeIn'

const experiences = [
  {
    company: 'Sprobe Inc.',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2026 – May 2026',
    type: 'Internship',
    bullets: [
      'Managed deployment pipelines and CI/CD workflows using Vercel and GitHub.',
      'Implemented a live analytics pipeline using Supabase Edge Functions and Apache Iceberg.',
      'Collaborated on a location-based rewards mobile app using React Native and Expo.',
      'Developed modular UI components with Tailwind CSS and integrated analytics/database functionality.',
      'Worked in an Agile environment with cross-functional teams and production-ready workflows.',
    ],
    tags: ['React Native', 'Supabase', 'Vercel', 'CI/CD', 'Tailwind CSS'],
  },
  {
    company: 'Freelance',
    role: 'Virtual Assistant & Writer',
    period: 'Various',
    type: 'Professional',
    bullets: [
      'Conducted online research and information gathering for international clients.',
      'Created written content, reports, and documentation.',
      'Assisted with administrative, organizational, and productivity-related tasks.',
    ],
    tags: ['Research', 'Documentation', 'Content Writing'],
  },
]

const cardStyle = {
  background: 'rgba(15,10,30,0.7)',
  border: '1px solid rgba(139,92,246,0.2)',
  backdropFilter: 'blur(8px)',
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Experience</p>
          <h2 className="text-white text-4xl font-bold mb-10">Work Experience</h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="rounded-xl p-6"
              style={cardStyle}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{ background: 'rgba(139,92,246,0.2)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.3)' }}
                  >
                    {exp.type}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-2">{exp.role}</h3>
                  <p className="text-zinc-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-zinc-500 border border-zinc-700 rounded-md px-2.5 py-1 bg-zinc-900/50">
                  {exp.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2 mb-5">
                {exp.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05, duration: 0.4 }}
                    className="text-zinc-300 text-sm flex gap-2.5"
                  >
                    <span className="text-violet-400 mt-0.5 shrink-0">›</span>
                    {b}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-violet-900/30">
                {exp.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
