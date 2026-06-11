import { motion } from 'motion/react'
import { Badge } from '../components/ui/badge'
import { Database } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const categories = [
  { label: 'Programming', items: ['Python', 'Java', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { label: 'Frameworks', items: ['React', 'React Native', 'Laravel', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Backend', items: ['Laravel', 'Node.js', 'ASP.NET MVC', 'Spring Boot'] },
  { label: 'Databases', items: ['PostgreSQL', 'Firebase', 'Supabase', 'Firestore'] },
  { label: 'DevOps & Tools', items: ['Docker', 'Git / GitHub', 'Vercel', 'Postman', 'Selenium', 'Figma'] },
  { label: 'Testing', items: ['Playwright', 'Jest', 'Selenium'] },
]

const iconMapping = {
  'Python': 'https://cdn.simpleicons.org/python',
  'Java': 'https://cdn.simpleicons.org/java',
  'PHP': 'https://cdn.simpleicons.org/php',
  'JavaScript': 'https://cdn.simpleicons.org/javascript',
  'TypeScript': 'https://cdn.simpleicons.org/typescript',
  'HTML': 'https://cdn.simpleicons.org/html5',
  'CSS': 'https://cdn.simpleicons.org/css3',
  'React': 'https://cdn.simpleicons.org/react',
  'React Native': 'https://cdn.simpleicons.org/react',
  'Laravel': 'https://cdn.simpleicons.org/laravel',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs',
  'ASP.NET MVC': 'https://cdn.simpleicons.org/dotnet',
  'Spring Boot': 'https://cdn.simpleicons.org/springboot',
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql',
  'Firebase': 'https://cdn.simpleicons.org/firebase',
  'Supabase': 'https://cdn.simpleicons.org/supabase',
  'Firestore': 'https://cdn.simpleicons.org/firebase',
  'Docker': 'https://cdn.simpleicons.org/docker',
  'Git / GitHub': 'https://cdn.simpleicons.org/git',
  'Vercel': 'https://cdn.simpleicons.org/vercel/ffffff',
  'Postman': 'https://cdn.simpleicons.org/postman',
  'Selenium': 'https://cdn.simpleicons.org/selenium',
  'Figma': 'https://cdn.simpleicons.org/figma',
  'Playwright': 'https://cdn.simpleicons.org/playwright',
  'Jest': 'https://cdn.simpleicons.org/jest'
}

const getIcon = (name) => {
  const url = iconMapping[name]
  if (!url) {
    if (name === 'SQL') {
      return (
        <Database className="w-3.5 h-3.5 text-violet-400 group-hover:text-violet-300 transition-colors duration-200" />
      )
    }
    return null
  }

  return (
    <img
      src={url}
      alt={`${name} logo`}
      className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200 grayscale group-hover:grayscale-0"
    />
  )
}

const glowStyle = {
  background: 'rgba(15,10,30,0.7)',
  border: '1px solid rgba(139,92,246,0.2)',
  backdropFilter: 'blur(8px)',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Skills</p>
          <h2 className="text-white text-4xl font-bold mb-10">Technical Toolkit</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ borderColor: 'rgba(139,92,246,0.55)', boxShadow: '0 0 25px rgba(139,92,246,0.12)', y: -3 }}
              className="rounded-xl p-5"
              style={{ ...glowStyle, transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s' }}
            >
              <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">{cat.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.04, duration: 0.3 }}
                  >
                    <Badge className="group flex items-center gap-1.5 py-1 px-2.5 text-[13px] bg-zinc-900/60 hover:bg-zinc-800/80 border-zinc-800/80 text-zinc-300 transition-all duration-300 cursor-default select-none shadow-sm">
                      {getIcon(item)}
                      <span>{item}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
