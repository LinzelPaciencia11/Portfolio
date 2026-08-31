import { Skeleton } from './ui/skeleton'

const cardStyle = {
  background: 'var(--paper)',
  border: '1px solid var(--line)',
}

function SectionHeader() {
  return (
    <div className="mb-10">
      <Skeleton className="h-3 w-20 mb-3" />
      <Skeleton className="h-9 w-48" />
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <div className="grid md:grid-cols-3 gap-4">
          {[0, 1, 2].map(i => (
            <div key={i} className="rounded-xl p-6 flex flex-col gap-4" style={cardStyle}>
              <Skeleton className="h-0.5 w-8" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-3 w-24" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>
              <div className="flex gap-1.5 pt-3 border-t border-line">
                <Skeleton className="h-5 w-14 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceSkeleton() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <div className="flex flex-col gap-4">
          {[5, 3].map((bullets, i) => (
            <div key={i} className="rounded-xl p-6" style={cardStyle}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <Skeleton className="h-5 w-48 mt-1" />
                  <Skeleton className="h-4 w-28" />
                </div>
                <Skeleton className="h-6 w-28 rounded-md" />
              </div>
              <div className="flex flex-col gap-2 mb-5">
                {Array.from({ length: bullets }).map((_, j) => (
                  <div key={j} className="flex gap-2.5 items-center">
                    <Skeleton className="h-3 w-2 shrink-0 rounded-full" />
                    <Skeleton className="h-3" style={{ width: `${70 + (j % 3) * 10}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 pt-4 border-t border-line">
                {Array.from({ length: i === 0 ? 5 : 3 }).map((_, k) => (
                  <Skeleton key={k} className="h-5 w-16 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EducationSkeleton() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <div className="flex flex-col gap-3">
          {[true, true, false, false].map((hasExtra, i) => (
            <div key={i} className="rounded-xl p-5 flex flex-wrap md:flex-nowrap gap-4 items-start" style={cardStyle}>
              <Skeleton className="h-6 w-24 rounded-md shrink-0" />
              <div className="flex-1 flex flex-col gap-1.5">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-64" />
                {hasExtra && <Skeleton className="h-3 w-40" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CertificatesSkeleton() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[0, 1, 2].map(i => (
            <div key={i} className="rounded-xl p-6 flex items-start gap-4" style={cardStyle}>
              <Skeleton className="w-11 h-11 rounded-xl shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-2.5 w-16" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-5 w-20 rounded-md mt-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {[4, 3, 1].map((count, gi) => (
            <div key={gi}>
              <div className="flex items-center gap-2 mb-3">
                <Skeleton className="h-3.5 w-3.5 rounded-full" />
                <Skeleton className="h-3 w-32" />
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {Array.from({ length: count }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3.5" style={cardStyle}>
                    <Skeleton className="h-3.5 w-3 shrink-0 rounded-full" />
                    <Skeleton className="h-3.5" style={{ width: `${55 + (i % 3) * 12}%` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
