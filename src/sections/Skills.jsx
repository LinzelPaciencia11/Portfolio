import FadeIn from '../components/FadeIn'
import LogoLoop from '../components/LogoLoop'

const allSkills = [
  'C#', 'PHP', 'JavaScript', 'TypeScript', 'Python', 'Java',
  'Laravel', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap', 'React Konva', 'Zustand', 'Zod',
  'HTML', 'CSS',
  'PostgreSQL', 'MySQL', 'Supabase', 'Firebase',
  'Jest', 'Selenium',
  'Git / GitHub', 'Docker', 'AWS', 'Vercel', 'Expo CLI',
  'Figma', 'Canva', 'Wix',
]

// Monochrome icons: simpleicons.org supports a hex color suffix to strip each brand's own color.
const ICON_COLOR = '7C6D7A' // muted mauve, matches the muted tone of the skill labels
const icon = slug => `https://cdn.simpleicons.org/${slug}/${ICON_COLOR}`

// C#, AWS, Canva, and Zustand have no logo in the Simple Icons set, so those tiles render text-only.
const iconMapping = {
  'PHP':          icon('php'),
  'JavaScript':   icon('javascript'),
  'TypeScript':   icon('typescript'),
  'Python':       icon('python'),
  'Java':         icon('openjdk'),
  'Laravel':      icon('laravel'),
  'React':        icon('react'),
  'React Native': icon('react'),
  'Tailwind CSS': icon('tailwindcss'),
  'Bootstrap':    icon('bootstrap'),
  'React Konva':  icon('konva'),
  'Zod':          icon('zod'),
  'HTML':         icon('html5'),
  'CSS':          icon('css'),
  'PostgreSQL':   icon('postgresql'),
  'MySQL':        icon('mysql'),
  'Supabase':     icon('supabase'),
  'Firebase':     icon('firebase'),
  'Jest':         icon('jest'),
  'Selenium':     icon('selenium'),
  'Git / GitHub': icon('github'),
  'Docker':       icon('docker'),
  'Vercel':       icon('vercel'),
  'Expo CLI':     icon('expo'),
  'Figma':        icon('figma'),
  'Wix':          icon('wix'),
}

// Categorized summary — same monochrome icon treatment as the LogoLoop marquee above.
const skillCategories = [
  {
    title: 'AI Tools',
    items: [
      { label: 'Claude', slug: 'claude' },
      { label: 'Cursor', slug: 'cursor' },
      { label: 'Prompt Engineering' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { label: 'C#' },
      { label: 'PHP', slug: 'php' },
      { label: 'JavaScript', slug: 'javascript' },
      { label: 'TypeScript', slug: 'typescript' },
      { label: 'Python', slug: 'python' },
      { label: 'Java', slug: 'openjdk' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { label: 'Laravel', slug: 'laravel' },
      { label: 'React', slug: 'react' },
      { label: 'React Native', slug: 'react' },
      { label: 'Tailwind CSS', slug: 'tailwindcss' },
      { label: 'Bootstrap', slug: 'bootstrap' },
      { label: 'React Konva', slug: 'konva' },
      { label: 'Zustand' },
      { label: 'Zod', slug: 'zod' },
    ],
  },
  {
    title: 'Web Technologies',
    items: [
      { label: 'HTML5', slug: 'html5' },
      { label: 'CSS3', slug: 'css3' },
      { label: 'REST API Integration' },
    ],
  },
  {
    title: 'Databases & Cloud',
    items: [
      { label: 'PostgreSQL', slug: 'postgresql' },
      { label: 'MySQL', slug: 'mysql' },
      { label: 'Supabase', slug: 'supabase' },
      { label: 'Firebase', slug: 'firebase' },
      { label: 'Microsoft Access' },
    ],
  },
  {
    title: 'Testing & QA',
    items: [
      { label: 'Jest', slug: 'jest' },
      { label: 'Selenium WebDriver', slug: 'selenium' },
      { label: 'Unit Testing' },
      { label: 'Automated Testing' },
      { label: 'Manual Testing' },
      { label: 'Defect Tracking & Bug Reporting' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { label: 'Git', slug: 'git' },
      { label: 'GitHub', slug: 'github' },
      { label: 'Docker', slug: 'docker' },
      { label: 'WSL2' },
      { label: 'AWS' },
      { label: 'Vercel', slug: 'vercel' },
      { label: 'Expo CLI', slug: 'expo' },
      { label: 'Visual Studio' },
      { label: 'Visual Studio Code' },
    ],
  },
  {
    title: 'Design & UI/UX',
    items: [
      { label: 'Figma', slug: 'figma' },
      { label: 'Canva' },
      { label: 'Wix', slug: 'wix' },
      { label: 'Wireframing' },
      { label: 'Prototyping' },
      { label: 'Responsive Design' },
      { label: 'Design Systems' },
    ],
  },
]

function SkillPill({ label, slug }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-line bg-paper text-sm text-ink/80 font-medium">
      {slug && (
        <img
          src={icon(slug)}
          alt=""
          className="w-4 h-4 shrink-0"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      )}
      {label}
    </span>
  )
}

function SkillCategoryCard({ title, items, delay }) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="h-full rounded-2xl border border-line bg-paper p-5">
        <p className="text-ink text-xs font-semibold tracking-widest uppercase mb-4">{title}</p>
        <div className="flex flex-wrap gap-2">
          {items.map(item => (
            <SkillPill key={item.label} {...item} />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-8 mb-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Skills</p>
            <h2 className="text-ink text-4xl font-semibold">Technical Toolkit</h2>
          </FadeIn>
        </div>
      </div>

      <div className="px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <LogoLoop items={allSkills} iconMapping={iconMapping} />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {skillCategories.map((cat, i) => (
              <SkillCategoryCard key={cat.title} title={cat.title} items={cat.items} delay={0.05 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
