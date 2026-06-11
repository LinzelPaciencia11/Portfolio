import DotGrid from './components/DotGrid'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

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
        {/* Dot grid at 50% opacity */}
        <div className="absolute inset-0 opacity-50">
          <DotGrid
            dotSize={5}
            gap={26}
            baseColor="#2d2d2d"
            activeColor="#ffffff"
            proximity={130}
            shockRadius={200}
            shockStrength={4}
          />
        </div>
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </>
  )
}

export default App
