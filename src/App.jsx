import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import ProfileHeader from './components/ProfileHeader'
import Feed from './sections/Feed'
import About from './sections/About'
import Skills from './sections/Skills'
import {
  ProjectsSkeleton,
  ExperienceSkeleton,
  EducationSkeleton,
  CertificatesSkeleton,
} from './components/skeletons'

const Experience = lazy(() => import('./sections/Experience'))
const Projects = lazy(() => import('./sections/Projects'))
const Branding = lazy(() => import('./sections/Branding'))
const Education = lazy(() => import('./sections/Education'))
const Certificates = lazy(() => import('./sections/Certificates'))
const Contact = lazy(() => import('./sections/Contact'))

const blank = <div className="py-20" />

const tabs = [
  { id: 'all',          label: 'All' },
  { id: 'about',        label: 'About',        Panel: About },
  { id: 'skills',       label: 'Skills',       Panel: Skills },
  { id: 'experience',   label: 'Experience',   Panel: Experience,   fallback: <ExperienceSkeleton /> },
  { id: 'projects',     label: 'Projects',     Panel: Projects,     fallback: <ProjectsSkeleton /> },
  { id: 'branding',     label: 'Branding',     Panel: Branding,     fallback: blank },
  { id: 'education',    label: 'Education',    Panel: Education,    fallback: <EducationSkeleton /> },
  { id: 'certificates', label: 'Certificates', Panel: Certificates, fallback: <CertificatesSkeleton /> },
  { id: 'contact',      label: 'Contact',      Panel: Contact,      fallback: blank },
]

function tabFromHash() {
  const id = window.location.hash.slice(1)
  return tabs.some(t => t.id === id) ? id : 'all'
}

function App() {
  const [active, setActive] = useState(tabFromHash)
  const headerRef = useRef(null)

  const select = useCallback(id => {
    setActive(id)
    window.history.replaceState(null, '', id === 'all' ? window.location.pathname : `#${id}`)
    // If the tab bar is stuck to the top, jump back to where the content starts.
    const headerH = headerRef.current?.offsetHeight ?? 0
    if (window.scrollY > headerH) window.scrollTo({ top: headerH, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const onHash = () => setActive(tabFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const current = tabs.find(t => t.id === active)

  return (
    <div className="relative z-10 min-h-svh">
      <ProfileHeader ref={headerRef} tabs={tabs} active={active} onChange={select} />

      <main style={{ background: 'var(--wash)' }} className="min-h-[60svh]">
        <div className="max-w-6xl mx-auto px-0 sm:px-4 pt-4 pb-12">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {current.Panel ? (
              <div
                className="sm:rounded-2xl overflow-hidden"
                style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
              >
                <Suspense fallback={current.fallback ?? blank}>
                  <current.Panel />
                </Suspense>
              </div>
            ) : (
              <div className="px-4 sm:px-0">
                <Feed onOpen={select} />
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default App
