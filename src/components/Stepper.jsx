import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

function Step({ step, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isLast = index === total - 1

  return (
    <div ref={ref} className={`flex gap-6 ${isLast ? '' : 'pb-12'}`}>
      {/* Dot */}
      <div className="flex flex-col items-center shrink-0" style={{ width: 68 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: index * 0.12, type: 'spring', stiffness: 200 }}
          className="rounded-full flex items-center justify-center z-10 relative"
          style={{
            width: 68, height: 68,
            border: '2.5px solid rgba(139,92,246,0.7)',
            background: '#0a0a0f',
          }}
        >
          {step.logo && (
            <img
              src={step.logo}
              alt={step.school}
              className="rounded-full object-cover" loading="lazy"
              style={{ width: 58, height: 58 }}
            />
          )}
        </motion.div>
      </div>

      {/* Content — no card border */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
        className="flex-1 pt-2"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest">{step.level}</p>
          <span className="text-xs text-zinc-500 bg-zinc-900/50 border border-zinc-800 rounded-md px-2.5 py-0.5">
            {step.period}
          </span>
        </div>

        <h3 className="text-white font-semibold text-base leading-snug">{step.school}</h3>
        {step.degree && <p className="text-zinc-400 text-sm mt-0.5">{step.degree}</p>}

        {step.honors && (
          <p className="text-violet-300 text-xs mt-2 font-medium">{step.honors}</p>
        )}
      </motion.div>
    </div>
  )
}

export default function Stepper({ steps }) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative flex flex-col">
      {/* Track line (static, dim) */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: 33, width: 2, background: 'rgba(139,92,246,0.12)', borderRadius: 99 }}
      />

      {/* Animated fill line */}
      <motion.div
        className="absolute top-0"
        style={{
          left: 33,
          width: 2,
          height: lineHeight,
          borderRadius: 99,
          background: 'linear-gradient(to bottom, #a78bfa, #818cf8, #38bdf8)',
        }}
      />

      {steps.map((step, i) => (
        <Step key={i} step={step} index={i} total={steps.length} />
      ))}
    </div>
  )
}
