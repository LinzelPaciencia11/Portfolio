import { useRef, useState } from 'react'

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(139,92,246,0.25)' }) {
  const cardRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        background: 'rgba(15,10,30,0.7)',
        border: '1px solid rgba(139,92,246,0.2)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* spotlight layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  )
}
