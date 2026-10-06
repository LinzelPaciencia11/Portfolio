import { motion } from 'motion/react'
import { Badge } from '../components/ui/badge'
import FadeIn from '../components/FadeIn'
import trebeesImg from '../assets/treebes.jpg'
import latheImg from '../assets/lathe.jpg'
import solmateImg from '../assets/solmate.jpg'
import renteImg from '../assets/rente.png'
import swakto1 from '../assets/swakto-1.png'
import swakto2 from '../assets/swakto-2.png'
import swakto3 from '../assets/swakto-3.png'

const schoolProjects = [
  {
    name: 'SOLMATE',
    role: 'Project Manager',
    period: 'Capstone • May 2024 – Dec 2025',
    description: 'An IoT-based solar panel monitoring and optimization solution. Led project planning, documentation, team coordination, and full system integration.',
    tags: ['IoT', 'Project Management', 'System Integration'],
    color: '#7c3aed',
    image: solmateImg,
  },
  {
    name: 'Trebees System',
    role: 'Front-End Developer & QA Tester',
    period: 'School • Oct 2024',
    description: 'Developed front-end interfaces and performed Selenium-based automated testing to validate system functionality and improve application reliability.',
    tags: ['Front-End', 'Selenium', 'QA Testing'],
    color: '#06b6d4',
    image: trebeesImg,
  },
  {
    name: 'Lathe Machining Services System',
    role: 'Full-Stack Developer',
    period: 'School • Mar – May 2024',
    description: 'Designed and developed a complete service management platform covering repair operations, client records, and service request tracking.',
    tags: ['Full-Stack', 'REST API', 'System Design'],
    color: '#a855f7',
    image: latheImg,
  },
]

const clientProjects = [
  {
    name: 'Renté by Kisha',
    role: 'Developer',
    period: 'Gig • October 2026',
    description: 'A dress-rental platform with availability-aware booking, GCash receipt verification, fitting appointments, live rental tracking, and an admin dashboard. Pricing, availability, and access are enforced in Postgres with row-level security and an exclusion constraint against double-booking.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'Vitest'],
    image: renteImg,
  },
  {
    name: 'Swakto',
    role: 'Developer',
    period: 'Internship • Feb - May 2026',
    description: 'A mobile restaurant loyalty and rewards app. Built the Super Admin dashboard for user and store management, with role-based access (super admin, manager, front desk, user) and live data from Supabase.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Tailwind'],
    images: [swakto1, swakto2, swakto3],
  },
]

function ProjectGrid({ projects }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
          whileHover={{
            y: -6,
            boxShadow: '0 12px 30px rgba(42,30,46,0.1)',
          }}
          className="rounded-xl flex flex-col overflow-hidden"
          style={{
            background: 'var(--paper)',
            border: '1px solid var(--line)',
            cursor: 'default',
            transition: 'box-shadow 0.3s, transform 0.3s',
          }}
        >
          {/* Image / placeholder at top */}
          {p.images ? (
            <div className="w-full h-44 overflow-hidden flex gap-1 bg-wash">
              {p.images.map((src, n) => (
                <img
                  key={n}
                  src={src}
                  alt={`${p.name} screen ${n + 1}`}
                  className="w-1/3 h-full object-cover object-top" loading="lazy"
                />
              ))}
            </div>
          ) : p.image ? (
            <div className="w-full h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover" loading="lazy"
              />
            </div>
          ) : (
            <div
              className="w-full h-44 flex items-center justify-center bg-wash"
            >
              <span className="text-5xl font-semibold tracking-tight text-line">
                {p.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Card content */}
          <div className="flex flex-col gap-4 p-5 flex-1">
            <div>
              <span className="text-muted text-xs">{p.period}</span>
              <h3 className="text-ink font-semibold text-base mt-1">{p.name}</h3>
              <p className="text-accent text-xs mt-0.5 font-medium">{p.role}</p>
            </div>
            <p className="text-muted text-sm leading-relaxed flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {p.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Projects</p>
        </FadeIn>
        <ProjectGrid projects={[...clientProjects, ...schoolProjects]} />
      </div>
    </section>
  )
}
