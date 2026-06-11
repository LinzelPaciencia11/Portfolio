import FadeIn from '../components/FadeIn'
import LogoLoop from '../components/LogoLoop'

const allSkills = [
  'Python', 'Java', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS',
  'React', 'React Native', 'Laravel', 'Tailwind CSS', 'Bootstrap',
  'Node.js', 'ASP.NET MVC', 'Spring Boot',
  'PostgreSQL', 'Firebase', 'Supabase', 'Firestore',
  'Docker', 'Git / GitHub', 'Vercel', 'Postman', 'Selenium', 'Figma',
  'Playwright', 'Jest',
]

const iconMapping = {
  'Python':       'https://cdn.simpleicons.org/python',
  'Java':         'https://cdn.simpleicons.org/java',
  'PHP':          'https://cdn.simpleicons.org/php',
  'JavaScript':   'https://cdn.simpleicons.org/javascript',
  'TypeScript':   'https://cdn.simpleicons.org/typescript',
  'HTML':         'https://cdn.simpleicons.org/html5',
  'CSS':          'https://cdn.simpleicons.org/css3',
  'React':        'https://cdn.simpleicons.org/react',
  'React Native': 'https://cdn.simpleicons.org/react',
  'Laravel':      'https://cdn.simpleicons.org/laravel',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  'Bootstrap':    'https://cdn.simpleicons.org/bootstrap',
  'Node.js':      'https://cdn.simpleicons.org/nodedotjs',
  'ASP.NET MVC':  'https://cdn.simpleicons.org/dotnet',
  'Spring Boot':  'https://cdn.simpleicons.org/springboot',
  'PostgreSQL':   'https://cdn.simpleicons.org/postgresql',
  'Firebase':     'https://cdn.simpleicons.org/firebase',
  'Supabase':     'https://cdn.simpleicons.org/supabase',
  'Firestore':    'https://cdn.simpleicons.org/firebase',
  'Docker':       'https://cdn.simpleicons.org/docker',
  'Git / GitHub': 'https://cdn.simpleicons.org/github',
  'Vercel':       'https://cdn.simpleicons.org/vercel',
  'Postman':      'https://cdn.simpleicons.org/postman',
  'Selenium':     'https://cdn.simpleicons.org/selenium',
  'Figma':        'https://cdn.simpleicons.org/figma',
  'Playwright':   'https://cdn.simpleicons.org/playwright',
  'Jest':         'https://cdn.simpleicons.org/jest',
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-8 md:pl-24 lg:pl-56 xl:pl-72 pr-4 sm:pr-8 mb-10">
        <FadeIn>
          <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Skills</p>
          <h2 className="text-white text-4xl font-bold">Technical Toolkit</h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <LogoLoop items={allSkills} iconMapping={iconMapping} />
      </FadeIn>
    </section>
  )
}
