import { motion } from 'motion/react'
import { Badge } from '../components/ui/badge'
import FadeIn from '../components/FadeIn'
import trebeesImg from '../assets/treebes.jpg'
import latheImg from '../assets/lathe.jpg'
import solmateImg from '../assets/solmate.jpg'

const projects = [
  {
    name: 'SOLMATE',
    role: 'Capstone Project Manager',
    period: 'May 2024 – Dec 2025',
    description: 'An IoT-based solar panel monitoring and optimization solution. Led project planning, documentation, team coordination, and full system integration.',
    tags: ['IoT', 'Project Management', 'System Integration'],
    color: '#7c3aed',
    image: solmateImg,
  },
  {
    name: 'Trebees System',
    role: 'Front-End Developer & QA Tester',
    period: 'Oct 2024',
    description: 'Developed front-end interfaces and performed Selenium-based automated testing to validate system functionality and improve application reliability.',
    tags: ['Front-End', 'Selenium', 'QA Testing'],
    color: '#06b6d4',
    image: trebeesImg,
  },
  {
    name: 'Lathe Machining Services System',
    role: 'Full-Stack Developer',
    period: 'Mar – May 2024',
    description: 'Designed and developed a complete service management platform covering repair operations, client records, and service request tracking.',
    tags: ['Full-Stack', 'REST API', 'System Design'],
    color: '#a855f7',
    image: latheImg,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Projects</p>
          <h2 className="text-ink text-4xl font-semibold mb-10">School Projects</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
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
              {p.image ? (
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
      </div>
    </section>
  )
}
