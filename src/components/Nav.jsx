const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-lg tracking-tight">Portfolio</span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-zinc-300 hover:text-white text-sm transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
