export default function GradientBorderCard({ children, className = '', contentClassName = '', duration = 5 }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden p-px ${className}`}>
      <div
        className="absolute inset-[-150%] animate-spin"
        style={{
          animationDuration: `${duration}s`,
          background: 'conic-gradient(from 0deg, transparent 0%, var(--accent) 12%, transparent 26%)',
        }}
      />
      <div
        className={`relative z-10 rounded-2xl h-full ${contentClassName}`}
        style={{ background: 'var(--paper)' }}
      >
        {children}
      </div>
    </div>
  )
}
