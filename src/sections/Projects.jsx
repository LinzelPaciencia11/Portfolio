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
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Projects</p>
          <h2 className="text-white text-4xl font-bold mb-10">School Projects</h2>
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
                y: -8,
                borderColor: `${p.color}88`,
                boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${p.color}22`,
              }}
              className="rounded-xl flex flex-col overflow-hidden"
              style={{
                background: 'rgba(15,10,30,0.7)',
                border: '1px solid rgba(139,92,246,0.2)',
                backdropFilter: 'blur(8px)',
                cursor: 'default',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
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
                  className="w-full h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)` }}
                >
                  <span className="text-5xl font-black tracking-tight" style={{ color: `${p.color}55` }}>
                    {p.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-col gap-4 p-5 flex-1">
                <div>
                  <span className="text-zinc-500 text-xs">{p.period}</span>
                  <h3 className="text-white font-bold text-base mt-1">{p.name}</h3>
                  <p className="text-violet-400 text-xs mt-0.5 font-medium">{p.role}</p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-violet-900/30">
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
