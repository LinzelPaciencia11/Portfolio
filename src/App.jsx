import { lazy, Suspense } from 'react'
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
