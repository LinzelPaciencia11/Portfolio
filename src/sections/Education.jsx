const education = [
  {
    level: 'Tertiary Education',
    school: 'University of Cebu Lapu-Lapu and Mandaue',
    degree: 'BS Information Technology',
    period: '2022 – 2026',
    honors: "Academic Scholar · Dean's Lister · Cum Laude",
  },
  {
    level: 'Senior High School',
    school: 'University of Cebu Lapu-Lapu and Mandaue',
    degree: 'STEM',
    period: '2020 – 2022',
  },
  {
    level: 'Junior High School',
    school: 'Saint Alphonsus Catholic School',
    period: '2017 – 2020',
  },
  {
    level: 'Elementary',
    school: 'Saint Alphonsus Catholic School',
    period: '2010 – 2016',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Education</p>
        <h2 className="text-white text-4xl font-bold mb-10">Academic Background</h2>

        <div className="flex flex-col gap-3">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex flex-wrap md:flex-nowrap gap-4 items-start"
              style={{
                background: 'rgba(15,10,30,0.7)',
                border: '1px solid rgba(139,92,246,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="text-xs text-zinc-500 border border-zinc-700/50 rounded-md px-2.5 py-1 bg-zinc-900/50 whitespace-nowrap mt-0.5 shrink-0 min-w-[90px] text-center">
                {edu.period}
              </span>
              <div className="flex-1">
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">{edu.level}</p>
                <h3 className="text-white font-semibold text-sm">{edu.school}</h3>
                {edu.degree && <p className="text-zinc-400 text-sm mt-0.5">{edu.degree}</p>}
                {edu.honors && <p className="text-violet-300 text-xs mt-1.5 font-medium">{edu.honors}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
