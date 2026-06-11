import { cn } from '../../lib/utils'

export function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    purple: 'bg-violet-950 text-violet-300 border-violet-800',
    outline: 'bg-transparent text-zinc-400 border-zinc-700',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
