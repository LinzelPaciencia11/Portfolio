const certs = [
  { text: 'Certificate of Completion – Sprobe Inc.', year: 'May 2026' },
  { text: "Dean's Lister – 4 Consecutive Years", year: '2022–2026' },
  { text: 'ICT Congress', year: '2023, 2024, 2025' },
  { text: 'Cybersecurity and Privacy in Focus', year: '2024' },
  { text: 'Network Tutorial – UCLM', year: '2024' },
  { text: 'Tech Talk: DB Programming', year: '' },
  { text: 'Database Programming', year: '' },
  { text: 'Python Essentials 1', year: '' },
  { text: 'Learn Python Programming – Udemy', year: '' },
  { text: 'QuaMeth TopScorer', year: '' },
]

const cardStyle = {
  background: 'rgba(15,10,30,0.7)',
  border: '1px solid rgba(139,92,246,0.2)',
  backdropFilter: 'blur(8px)',
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Certificates</p>
        <h2 className="text-white text-4xl font-bold mb-10">Achievements & Awards</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((cert, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl px-5 py-4" style={cardStyle}>
              <span className="text-violet-400 mt-0.5 shrink-0 text-sm">✦</span>
              <div>
                <p className="text-zinc-200 text-sm">{cert.text}</p>
                {cert.year && <p className="text-zinc-500 text-xs mt-0.5">{cert.year}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
