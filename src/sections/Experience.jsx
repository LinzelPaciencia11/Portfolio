import { motion } from 'motion/react'
import { Badge } from '../components/ui/badge'
import FadeIn from '../components/FadeIn'
import SpotlightCard from '../components/SpotlightCard'
import sprobeImg from '../assets/sprobe.jpg'

const experiences = [
  {
    company: 'Drafturas',
    role: 'Software Developer',
    period: 'Jun 2026 – Present',
    type: 'Part-time',
    logo: null,
    bullets: [
      'Built a canvas-based plan editor UI in React and TypeScript with React Konva, implementing layer and shape manipulation on a custom JSON document schema.',
      'Developed typed, reusable frontend components using Zustand for state management and Zod for schema validation.',
      'Integrated the React SPA with a Laravel 12 REST API secured via Sanctum token authentication.',
      'Implemented optimistic-concurrency handling on save to prevent stale writes across multiple sessions.',
      'Used an AI-assisted workflow with Claude and Cursor to prototype components and accelerate iteration.',
    ],
    tags: ['React', 'TypeScript', 'React Konva', 'Zustand', 'Zod', 'Laravel'],
  },
  {
    company: 'Game MyBiz',
    role: 'UI/UX Designer',
    period: 'Jul 2026 – Aug 2026',
    type: 'Project-based, Remote',
    logo: null,
    bullets: [
      'Designed wireframes, user flows, high-fidelity interfaces, and UI improvements for web applications and internal business tools.',
      'Generated and iterated UI concepts using Claude, then refined AI output into polished, production-ready designs.',
      'Maintained reusable components and design-system patterns across screens.',
      'Contributed server-side: built and integrated backend APIs, and deployed the application to AWS.',
      'Collaborated with developers and the project manager to hand off specs and review implementation.',
    ],
    tags: ['Figma', 'UI/UX', 'AWS', 'Design Systems'],
  },
  {
    company: 'Sprobe Inc.',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2026 – May 2026',
    type: 'Internship',
    logo: sprobeImg,
    bullets: [
      'Managed deployment pipelines and CI/CD workflows using Vercel and GitHub.',
      'Implemented a live analytics pipeline using Supabase Edge Functions and Apache Iceberg for real-time data processing.',
      'Used the Supabase CLI for local development and infrastructure management.',
      'Resolved deployment issues, optimized application performance, and participated in code reviews.',
      'Collaborated on a location-based rewards mobile application using React Native and Expo.',
    ],
    tags: ['React Native', 'Supabase', 'Vercel', 'CI/CD'],
  },
]


export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Experience</p>
          <h2 className="text-ink text-4xl font-semibold mb-10">Work Experience</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            >
            <SpotlightCard className="p-6 h-full flex flex-col">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div className="flex items-start gap-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 mt-0.5" loading="lazy"
                      style={{ border: '1px solid var(--line)' }}
                    />
                  )}
                  <div>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-md"
                      style={{ background: 'var(--wash)', color: 'var(--accent)', border: '1px solid var(--line)' }}
                    >
                      {exp.type}
                    </span>
                    <h3 className="text-ink font-semibold text-lg mt-2">{exp.role}</h3>
                    <p className="text-muted text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs text-muted border border-line rounded-md px-2.5 py-1 bg-wash">
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
                    className="text-ink/80 text-sm flex gap-2.5"
                  >
                    <span className="text-accent mt-0.5 shrink-0">›</span>
                    {b}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-line">
                {exp.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
