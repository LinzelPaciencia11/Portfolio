function LogoItem({ name, iconUrl }) {
  return (
    <div
      className="flex items-center gap-2.5 px-5 py-2 rounded-xl mx-2 shrink-0"
      style={{ background: 'var(--wash)', border: '1px solid var(--line)' }}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt={name}
          width={22}
          height={22}
          className="object-contain"
        />
      )}
      <span className="text-muted text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function LogoLoop({ items, iconMapping = {} }) {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div
      className="overflow-hidden w-full"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div
        className="flex w-max"
        style={{ animation: 'logoScroll 45s linear infinite' }}
      >
        {repeated.map((name, i) => (
          <LogoItem key={i} name={name} iconUrl={iconMapping[name]} />
        ))}
      </div>
    </div>
  )
}
