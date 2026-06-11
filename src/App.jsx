import { lazy, Suspense } from 'react'
import DotField from './components/DotField'
import Nav from './components/Nav'
import Hero from './sections/Hero'
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

function App() {
  return (
    <>
      {/* Background: dark base + teal/purple gradient + dots at 50% */}
      <div className="fixed inset-0 z-0" style={{ background: '#0a0a0f' }}>
        {/* Ambient gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 55% at 90% -5%, rgba(20,184,166,0.16) 0%, transparent 60%),
              radial-gradient(ellipse 60% 45% at 5% 105%, rgba(139,92,246,0.13) 0%, transparent 60%)
            `,
          }}
        />
        {/* Dot field at 50% opacity */}
        <div className="absolute inset-0 opacity-50">
          <DotField
            dotRadius={5}
            dotSpacing={23}
            gradientFrom="rgba(45, 45, 45, 0.9)"
            gradientTo="rgba(70, 70, 70, 0.7)"
            glowColor="#0a0a0f"
            cursorRadius={180}
            bulgeOnly={true}
            bulgeStrength={60}
          />
        </div>
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<ExperienceSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="py-20" />}>
          <Branding />
        </Suspense>
        <Suspense fallback={<EducationSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<CertificatesSkeleton />}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<div className="py-20" />}>
          <Contact />
        </Suspense>
      </div>
    </>
  )
}

export default App
