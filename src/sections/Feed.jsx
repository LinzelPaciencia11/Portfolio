import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Mail, GraduationCap, Briefcase, Palette, X, ChevronLeft, ChevronRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { Badge } from '../components/ui/badge'
import { experiences } from './Experience'
import profileImg from '../assets/profile.jpg'
import renteImg from '../assets/rente.png'
import solmateImg from '../assets/solmate.jpg'
import swakto1 from '../assets/swakto-1.png'
import tshirt from '../assets/samples/tshirt.jpg'
import card from '../assets/samples/card.jpg'
import paperBag from '../assets/samples/paper bag.jpg'

function GithubIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const introLinks = [
  { label: 'paciencialinzel@gmail.com', href: 'mailto:paciencialinzel@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/LinzelPaciencia11', icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/linzel-marie-paciencia-75b65b409', icon: LinkedinIcon, external: true },
]

const featuredSkills = ['React', 'TypeScript', 'React Native', 'Laravel', 'Supabase', 'Figma']

function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
    >
      {children}
    </div>
  )
}

function IntroCard({ onOpen }) {
  return (
    <Card className="p-5">
      <h2 className="text-ink font-semibold text-lg mb-3">Intro</h2>
      <p className="text-muted text-sm leading-relaxed mb-4">
        Working with heart, creating with mind. I take products from wireframe to production, designing in Figma
        and building with React, React Native, Laravel, and TypeScript.
      </p>

      <ul className="flex flex-col gap-3 mb-4">
        <li className="flex items-start gap-3 text-sm text-ink/80">
          <GraduationCap size={17} className="text-muted shrink-0 mt-0.5" strokeWidth={1.75} />
          <span>Cum Laude, BS Information Technology</span>
        </li>
        <li className="flex items-start gap-3 text-sm text-ink/80">
          <Briefcase size={17} className="text-muted shrink-0 mt-0.5" strokeWidth={1.75} />
          <span>{experiences.length} roles across development and UI/UX design</span>
        </li>
        {introLinks.map(l => (
          <li key={l.label} className="flex items-start gap-3 text-sm">
            <span className="text-muted shrink-0 mt-0.5"><l.icon size={17} /></span>
            <a
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-ink/80 hover:text-accent transition-colors break-all"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
        {featuredSkills.map(s => <Badge key={s}>{s}</Badge>)}
      </div>
      <button
        type="button"
        onClick={() => onOpen('skills')}
        className="mt-4 w-full py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
        style={{ background: 'var(--wash)', color: 'var(--ink)', border: '1px solid var(--line)' }}
      >
        See all skills
      </button>
    </Card>
  )
}

function Post({ section, tabId, onOpen, children, cta }) {
  return (
    <FadeIn direction="up">
      <Card className="overflow-hidden">
        <div className="flex items-center gap-3 px-5 pt-4">
          <img src={profileImg} alt="" className="w-10 h-10 rounded-full object-cover object-top" />
          <div>
            <p className="text-ink font-semibold text-sm leading-tight">Linzel Marie P. Paciencia</p>
            <p className="text-muted text-xs">shared in {section}</p>
          </div>
        </div>
        <div className="px-5 pt-3 pb-4">{children}</div>
        <button
          type="button"
          onClick={() => onOpen(tabId)}
          className="w-full py-3 text-sm font-medium text-accent transition-colors hover:bg-wash"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          {cta}
        </button>
      </Card>
    </FadeIn>
  )
}

function ImageGrid({ items, onView }) {
  return (
    // Swipeable scroll-snap row on phones, three-up grid from sm and wider
    <div
      className="flex sm:grid sm:grid-cols-3 gap-2 mt-3 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onView(items, i)}
          aria-label={`View ${item.title}`}
          className="block shrink-0 w-[78%] sm:w-auto snap-center overflow-hidden rounded-lg cursor-zoom-in bg-wash"
        >
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full h-32 sm:h-40 object-cover object-top transition-transform duration-300 hover:scale-105"
          />
        </button>
      ))}
    </div>
  )
}

function NavArrow({ side, onClick }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous' : 'Next'}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full hidden md:flex items-center justify-center transition-colors hover:bg-white/25 ${side === 'left' ? 'left-3 sm:left-5' : 'right-3 sm:right-5'}`}
      style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
    >
      <Icon size={22} />
    </button>
  )
}

function Lightbox({ viewing, onClose, onNavigate, onOpen }) {
  const item = viewing ? viewing.items[viewing.index] : null
  const count = viewing ? viewing.items.length : 0
  const hasPrev = viewing && viewing.index > 0
  const hasNext = viewing && viewing.index < count - 1

  useEffect(() => {
    if (!viewing) return
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onNavigate(-1)
      else if (e.key === 'ArrowRight') onNavigate(1)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [viewing, onClose, onNavigate])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{
            background: 'rgba(20,12,24,0.55)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="flex flex-col md:flex-row w-full max-w-5xl h-[min(85vh,640px)] overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: '#000' }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Photo stage: the image is fitted, never stretched, so spare space stays black */}
          <div className="relative flex-1 min-h-0 bg-black">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/25"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            >
              <X size={20} />
            </button>

            {hasPrev && <NavArrow side="left" onClick={() => onNavigate(-1)} />}
            {hasNext && <NavArrow side="right" onClick={() => onNavigate(1)} />}

            {/* Swipe left/right to move between images (touch or mouse drag) */}
            <motion.img
              key={item.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              drag={count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, { offset, velocity }) => {
                if (offset.x < -60 || velocity.x < -500) onNavigate(1)
                else if (offset.x > 60 || velocity.x > 500) onNavigate(-1)
              }}
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-contain select-none cursor-grab active:cursor-grabbing"
              draggable={false}
            />

            {count > 1 && (
              <div className="md:hidden absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
                {viewing.items.map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: i === viewing.index ? 18 : 6,
                      background: i === viewing.index ? '#fff' : 'rgba(255,255,255,0.4)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details panel */}
          <aside
            className="md:w-80 shrink-0 max-h-[40%] md:max-h-none p-5 flex flex-col gap-4 overflow-y-auto"
            style={{ background: 'var(--paper)', borderLeft: '1px solid var(--line)' }}
          >
            <div className="flex items-center gap-3">
              <img src={profileImg} alt="" className="w-10 h-10 rounded-full object-cover object-top" />
              <div>
                <p className="text-ink font-semibold text-sm leading-tight">Linzel Marie P. Paciencia</p>
                <p className="text-muted text-xs">{item.section} · {viewing.index + 1} of {count}</p>
              </div>
            </div>
            <div>
              <h3 className="text-ink font-semibold text-lg leading-tight">{item.title}</h3>
              <p className="text-ink/80 text-sm leading-relaxed mt-2">{item.description}</p>
            </div>
            <button
              type="button"
              onClick={() => { onClose(); onOpen(item.tabId) }}
              className="mt-auto w-full py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: 'var(--accent)', color: 'var(--paper)' }}
            >
              See full details
            </button>
          </aside>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const projectItems = [
  { src: renteImg, title: 'Renté by Kisha', description: 'A dress-rental platform with an elegant storefront, booking flow, and an admin dashboard for revenue and subscriptions.' },
  { src: swakto1, title: 'Swakto', description: 'A restaurant loyalty mobile app that rewards repeat diners and gives owners simple analytics.' },
  { src: solmateImg, title: 'SOLMATE', description: 'An IoT solar monitoring capstone: live panel data in a mobile app, led from concept to deployment.' },
].map(i => ({ ...i, section: 'Projects', tabId: 'projects' }))

const brandingItems = [
  { src: tshirt, title: 'T-shirt design', description: 'Print-ready shirt artwork with a front graphic and a small pocket mark.' },
  { src: card, title: 'Thank-you card', description: 'A floral, soft-toned invitation and thank-you card layout for a christening.' },
  { src: paperBag, title: 'Paper bag packaging', description: 'Playful packaging and label design for a "Blind Bag" product.' },
].map(i => ({ ...i, section: 'Branding', tabId: 'branding' }))

export default function Feed({ onOpen }) {
  const latest = experiences[0]
  const [viewing, setViewing] = useState(null)
  const openViewer = useCallback((items, index) => setViewing({ items, index }), [])
  const closeViewer = useCallback(() => setViewing(null), [])
  const navigate = useCallback(dir => setViewing(v => {
    if (!v) return v
    const index = v.index + dir
    return index < 0 || index >= v.items.length ? v : { ...v, index }
  }), [])

  return (
    <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-4 items-start">
      <div className="lg:sticky lg:top-16">
        <IntroCard onOpen={onOpen} />
      </div>

      <div className="flex flex-col gap-4">
        <Post section="About" tabId="about" onOpen={onOpen} cta="Read more about me">
          <p className="text-ink/85 text-sm leading-relaxed">
            Hi, I'm <span className="font-semibold text-ink">Linzel</span>. A Cum Laude IT graduate specializing in
            full-stack development, mobile applications, and modern deployment workflows, with a capstone IoT system
            led from concept to deployment as project manager and UI/UX designer.
          </p>
        </Post>

        <Post section="Experience" tabId="experience" onOpen={onOpen} cta="See all experience">
          <p className="text-muted text-xs mb-1">{latest.period} · {latest.type}</p>
          <p className="text-ink font-semibold text-base">{latest.role} at {latest.company}</p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {latest.bullets.slice(0, 2).map((b, i) => (
              <li key={i} className="text-ink/80 text-sm flex gap-2.5">
                <span className="text-accent shrink-0">›</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {latest.tags.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </Post>

        <Post section="Projects" tabId="projects" onOpen={onOpen} cta="Browse all projects">
          <p className="text-ink/85 text-sm leading-relaxed">
            Shipped a dress-rental platform, a restaurant loyalty app, and an IoT solar monitoring capstone.
          </p>
          <ImageGrid items={projectItems} onView={openViewer} />
        </Post>

        <Post section="Branding" tabId="branding" onOpen={onOpen} cta="See design work">
          <p className="text-ink/85 text-sm leading-relaxed flex items-center gap-2">
            <Palette size={15} className="text-accent shrink-0" />
            A few print and brand pieces from my design side.
          </p>
          <ImageGrid items={brandingItems} onView={openViewer} />
        </Post>

        <Post section="Education" tabId="education" onOpen={onOpen} cta="See education">
          <p className="text-ink font-semibold text-base">BS Information Technology, 2022 – 2026</p>
          <p className="text-muted text-sm mt-0.5">University of Cebu Lapu-Lapu and Mandaue</p>
          <p className="text-ink/80 text-sm mt-2">Academic Scholar · Dean's Lister · Cum Laude</p>
        </Post>

        <Post section="Contact" tabId="contact" onOpen={onOpen} cta="Let's connect">
          <p className="text-ink/85 text-sm leading-relaxed">
            Open to full-time roles, freelance projects, and meaningful collaborations.
          </p>
        </Post>
      </div>

      <Lightbox viewing={viewing} onClose={closeViewer} onNavigate={navigate} onOpen={onOpen} />
    </div>
  )
}
