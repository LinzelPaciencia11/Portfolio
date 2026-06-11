import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

export default function TiltedCard({ children, className = '' }) {
  const ref = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [14, -14]), { damping: 30, stiffness: 100, mass: 2 })
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-14, 14]), { damping: 30, stiffness: 100, mass: 2 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
    rawY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
  }

  const reset = () => { rawX.set(0); rawY.set(0) }

  return (
    <div style={{ perspective: '800px' }}>
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
