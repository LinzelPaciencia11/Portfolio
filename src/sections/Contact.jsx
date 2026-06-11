const cardStyle = {
  background: 'rgba(15,10,30,0.7)',
  border: '1px solid rgba(139,92,246,0.2)',
  backdropFilter: 'blur(8px)',
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs tracking-widest uppercase mb-2 font-semibold">Contact</p>
        <h2 className="text-white text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-zinc-400 text-sm mb-10 max-w-md leading-relaxed">
          Open to full-time roles, freelance projects, and collaborations.
        </p>

        <a
          href="mailto:paciencialinzel@gmail.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 mb-16"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            boxShadow: '0 0 30px rgba(139,92,246,0.35)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(139,92,246,0.55)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.35)'}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          paciencialinzel@gmail.com
        </a>

        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-4">References</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-16">
          <div className="rounded-xl p-5" style={cardStyle}>
            <p className="text-white font-semibold text-sm">Paul S. Ngujo</p>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">Lab Supervisor · Dept. Head · College Instructor · Capstone Adviser</p>
            <a href="mailto:paul.ngujo@uc.edu.ph" className="text-violet-400 text-xs mt-2.5 block hover:text-violet-300 transition-colors">paul.ngujo@uc.edu.ph</a>
          </div>
          <div className="rounded-xl p-5" style={cardStyle}>
            <p className="text-white font-semibold text-sm">Florito Doyohim Jr.</p>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">Senior Tech Lead · Senior Software Engineer</p>
            <a href="mailto:florito.doyohim@outlook.com" className="text-violet-400 text-xs mt-2.5 block hover:text-violet-300 transition-colors">florito.doyohim@outlook.com</a>
          </div>
        </div>

        <p className="text-zinc-700 text-xs text-center">
          © {new Date().getFullYear()} Linzel Marie P. Paciencia · Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  )
}
