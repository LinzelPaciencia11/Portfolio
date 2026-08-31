import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react'

function DockItem({ item, mouseX, baseSize, magnification, distance }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const dist = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect || val === Infinity) return distance
    return val - (rect.left + rect.width / 2)
  })

  const widthSync = useTransform(dist, [-distance, 0, distance], [baseSize, magnification, baseSize])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 })

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center"
    >
      <a
        href={item.href}
        aria-label={item.label}
        className="flex items-center justify-center w-full h-full rounded-full text-muted hover:text-accent transition-colors duration-150"
      >
        <item.icon className="w-1/2 h-1/2" strokeWidth={1.75} />
      </a>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: -4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium shadow-sm"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Dock({ items, baseSize = 36, magnification = 52, distance = 140, className = '' }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex items-center gap-2 rounded-full px-3 py-2 ${className}`}
      style={{ background: 'rgba(244, 236, 241, 0.6)', border: '1px solid var(--line)' }}
    >
      {items.map((item) => (
        <DockItem
          key={item.href}
          item={item}
          mouseX={mouseX}
          baseSize={baseSize}
          magnification={magnification}
          distance={distance}
        />
      ))}
    </motion.div>
  )
}
