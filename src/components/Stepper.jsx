import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

function Dot({ step, index, inView, size = 64 }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.12, type: 'spring', stiffness: 200 }}
      className="rounded-full flex items-center justify-center z-10 relative shrink-0"
      style={{
        width: size, height: size,
        border: '2.5px solid var(--accent)',
        background: 'var(--paper)',
      }}
    >
      {step.logo && (
        <img
          src={step.logo}
          alt={step.school}
          className="rounded-full object-cover" loading="lazy"
          style={{ width: size - 10, height: size - 10 }}
        />
      )}
    </motion.div>
  )
}

function Content({ step, align }) {
  const isRight = align === 'right'
  return (
    <div className={`flex flex-col ${isRight ? 'items-start text-left' : 'items-end text-right'}`}>
      <div className={`flex items-center gap-2 mb-1 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
        <p className="text-accent text-xs font-medium uppercase tracking-widest">{step.level}</p>
        <span className="text-xs text-muted bg-wash border border-line rounded-md px-2 py-0.5 whitespace-nowrap">
          {step.period}
        </span>
      </div>
      <h3 className="text-ink font-semibold text-base leading-snug">{step.school}</h3>
      {step.degree && <p className="text-muted text-sm mt-0.5">{step.degree}</p>}
      {step.honors && <p className="text-accent text-xs mt-2 font-medium">{step.honors}</p>}
    </div>
  )
}

function Step({ step, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isLast = index === total - 1
  const onRight = index % 2 === 1

  return (
    <div ref={ref} className={`relative ${isLast ? '' : 'pb-10 md:pb-14'}`}>
      {/* Mobile — single column */}
      <div className="flex gap-5 md:hidden">
        <div className="flex flex-col items-center shrink-0" style={{ width: 68 }}>
          <Dot step={step} index={index} inView={inView} size={68} />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
          className="flex-1 pt-2"
        >
          <Content step={step} align="right" />
        </motion.div>
      </div>

      {/* Desktop — alternating side by side */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView && !onRight ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
          className="pt-2"
        >
          {!onRight && <Content step={step} align="left" />}
        </motion.div>

        <div className="flex flex-col items-center">
          <Dot step={step} index={index} inView={inView} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView && onRight ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
          className="pt-2"
        >
          {onRight && <Content step={step} align="right" />}
        </motion.div>
      </div>
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
    <div ref={containerRef} className="relative flex flex-col mx-auto max-w-3xl">
      {/* Track line (static, dim) */}
      <div
        className="absolute top-0 bottom-0 md:hidden"
        style={{ left: 33, width: 2, background: 'var(--line)', borderRadius: 99 }}
      />
      <div
        className="absolute top-0 bottom-0 hidden md:block"
        style={{ left: '50%', width: 2, background: 'var(--line)', borderRadius: 99 }}
      />

      {/* Animated fill line */}
      <motion.div
        className="absolute top-0 md:hidden"
        style={{
          left: 33,
          width: 2,
          height: lineHeight,
          borderRadius: 99,
          background: 'linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 40%, transparent))',
        }}
      />
      <motion.div
        className="absolute top-0 hidden md:block"
        style={{
          left: '50%',
          width: 2,
          height: lineHeight,
          borderRadius: 99,
          background: 'linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 40%, transparent))',
        }}
      />

      {steps.map((step, i) => (
        <Step key={i} step={step} index={i} total={steps.length} />
      ))}
    </div>
  )
}
