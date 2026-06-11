import { useRef, useEffect, useState, Fragment } from 'react'
import { gsap } from 'gsap'
import './FlowingMenu.css'

const distMetric = (x, y, x2, y2) => (x - x2) ** 2 + (y - y2) ** 2

const findClosestEdge = (mouseX, mouseY, width, height) => {
  const topDist = distMetric(mouseX, mouseY, width / 2, 0)
  const bottomDist = distMetric(mouseX, mouseY, width / 2, height)
  return topDist < bottomDist ? 'top' : 'bottom'
}

function MenuItem({ text, skills, iconMapping, speed = 15, textColor, marqueeBgColor, borderColor }) {
  const itemRef = useRef(null)
  const marqueeRef = useRef(null)
  const marqueeInnerRef = useRef(null)
  const animationRef = useRef(null)
  const [repetitions, setRepetitions] = useState(4)

  const animationDefaults = { duration: 0.6, ease: 'expo' }

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return
      const part = marqueeInnerRef.current.querySelector('.marquee__part')
      if (!part) return
      const contentWidth = part.offsetWidth
      if (contentWidth === 0) return
      const needed = Math.ceil(window.innerWidth / contentWidth) + 2
      setRepetitions(Math.max(3, needed))
    }
    calculateRepetitions()
    window.addEventListener('resize', calculateRepetitions)
    return () => window.removeEventListener('resize', calculateRepetitions)
  }, [text, skills])

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return
      const part = marqueeInnerRef.current.querySelector('.marquee__part')
      if (!part) return
      const contentWidth = part.offsetWidth
      if (contentWidth === 0) return
      if (animationRef.current) animationRef.current.kill()
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })
    }
    const t = setTimeout(setupMarquee, 50)
    return () => {
      clearTimeout(t)
      if (animationRef.current) animationRef.current.kill()
    }
  }, [text, skills, repetitions, speed])

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)
    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)
    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <div
        className="menu__item-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </div>

      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {Array.from({ length: repetitions }).map((_, idx) => (
              <div className="marquee__part" key={idx}>
                {skills.map((skill, j) => (
                  <Fragment key={skill}>
                    <span className="marquee__skill">
                      {iconMapping[skill] && (
                        <img src={iconMapping[skill]} alt={skill} />
                      )}
                      {skill}
                    </span>
                    {j < skills.length - 1 && (
                      <span className="marquee__separator" />
                    )}
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FlowingMenu({
  items = [],
  speed = 18,
  textColor = '#e4e4e7',
  marqueeBgColor = 'rgba(109,40,217,0.95)',
  borderColor = 'rgba(139,92,246,0.2)',
  iconMapping = {},
}) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            text={item.label}
            skills={item.items}
            iconMapping={iconMapping}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  )
}
