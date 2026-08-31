import { Mail, Users, VenetianMask } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import quickChatImg from '../assets/undraw-quick-chat.svg'

// lucide-react ships no brand/logo glyphs, so LinkedIn and GitHub are inlined here.
function LinkedinIcon({ size = 16, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function GithubIcon({ size = 16, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

const socials = [
  { label: 'Gmail', href: 'mailto:paciencialinzel@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/linzel-marie-paciencia-75b65b409', icon: LinkedinIcon, external: true },
  { label: 'GitHub', href: 'https://github.com/LinzelPaciencia11', icon: GithubIcon, external: true },
]

const references = [
  {
    name: 'Paul S. Ngujo',
    role: 'Lab Supervisor · Dept. Head · College Instructor · Capstone Adviser',
  },
  {
    name: 'Florito Doyohim Jr.',
    role: 'Senior Tech Lead · Senior Software Engineer',
  },
  {
    name: 'Fritz Barry Hoy',
    role: 'Information Systems Architect, Teradyne Philippines Inc.',
  },
  {
    name: 'Benedict Castro',
    role: 'College Instructor, University of Cebu Lapu-Lapu and Mandaue',
  },
]

function ReferenceCard({ name, role, email, delay }) {
  return (
    <FadeIn delay={delay} direction="up">
      <div
        className="h-full rounded-xl p-5 flex items-start gap-4"
        style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
      >
        <div
          className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
          style={{ background: 'var(--wash)', color: 'var(--accent)' }}
        >
          <VenetianMask size={19} strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <p className="text-ink font-semibold text-sm">{name}</p>
          <p className="text-muted text-xs mt-1 leading-relaxed">{role}</p>
          {email ? (
            <a
              href={`mailto:${email}`}
              className="text-accent text-xs mt-2.5 block hover:opacity-80 transition-opacity"
            >
              {email}
            </a>
          ) : (
            <p className="text-muted/70 text-xs mt-2.5">Contact details available upon request</p>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-2xl px-6 sm:px-10 py-10 sm:py-12 mb-12 grid md:grid-cols-2 gap-8 items-center"
            style={{
              background: 'linear-gradient(135deg, var(--wash) 0%, var(--paper) 60%)',
              border: '1.5px dashed var(--line)',
            }}
          >
            <div className="relative z-10 max-w-md">
              <p className="text-accent text-xs tracking-widest uppercase mb-3 font-medium">Contact</p>
              <h2 className="text-ink text-4xl font-semibold mb-4">
                Let's <span className="text-accent">Connect</span>
              </h2>
              <div className="w-10 h-1 rounded-full mb-4" style={{ background: 'var(--accent)' }} />
              <p className="text-muted text-sm mb-8 leading-relaxed">
                Open to full-time roles, freelance projects, and meaningful collaborations.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {socials.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 h-9 px-4 justify-center rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--line)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--line)'
                      e.currentTarget.style.color = 'var(--ink)'
                    }}
                  >
                    <social.icon size={15} className="shrink-0" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative z-10 hidden md:flex items-end justify-center self-stretch -mb-10 sm:-mb-12">
              <img src={quickChatImg} alt="" className="w-full max-w-[400px] h-auto" />
            </div>
          </div>
        </FadeIn>

        <div className="flex items-center gap-2 mb-5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'var(--wash)', color: 'var(--accent)' }}
          >
            <Users size={15} strokeWidth={1.75} />
          </div>
          <h3 className="text-ink/70 text-xs font-semibold uppercase tracking-widest">References</h3>
          <div className="flex-1 h-px" style={{ background: 'var(--line)' }} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {references.map((ref, i) => (
            <ReferenceCard key={ref.name} {...ref} delay={0.06 * i} />
          ))}
        </div>
      </div>
    </section>
  )
}
