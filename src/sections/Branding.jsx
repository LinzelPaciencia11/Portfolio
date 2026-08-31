import FadeIn from '../components/FadeIn'
import Stack from '../components/Stack'
import paperBag from '../assets/samples/paper bag.jpg'
import tshirt from '../assets/samples/tshirt.jpg'
import busybook from '../assets/samples/busybook.jpg'
import card from '../assets/samples/card.jpg'
import qr from '../assets/samples/qr.jpg'

const samples = [
  { id: 1, img: paperBag,  label: 'Paper Bag Design' },
  { id: 2, img: tshirt,    label: 'T-Shirt Print' },
  { id: 3, img: busybook,  label: 'Busy Book Layout' },
  { id: 4, img: card,      label: 'Card Design' },
  { id: 5, img: qr,        label: 'QR Material' },
]

function PhotoCard({ img, label }) {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden select-none"
      style={{ aspectRatio: '4/3', position: 'relative' }}
    >
      <div className="w-full h-full flex items-center justify-center bg-wash">
        <img
          src={img}
          alt={label}
          loading="lazy"
          className="max-w-full max-h-full object-contain"
          draggable={false}
        />
      </div>
      {/* Bottom label overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-4"
        style={{
          background: 'linear-gradient(to top, rgba(42,30,46,0.75) 0%, transparent 100%)',
        }}
      >
        <p className="text-paper font-medium text-sm">{label}</p>
      </div>
    </div>
  )
}

const cards = samples.map(s => ({
  id: s.id,
  content: <PhotoCard img={s.img} label={s.label} />,
}))

export default function Branding() {
  return (
    <section id="branding" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent text-xs tracking-widest uppercase mb-2 font-medium">Design</p>
          <h2 className="text-ink text-4xl font-semibold mb-4">Branding & Visual Design</h2>
          <p className="text-muted text-sm mb-10 max-w-md">
            A collection of design work spanning brand identity, UI mockups, and visual content — crafted with Figma and Canva.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Stack */}
          <div className="w-full md:w-96 shrink-0">
            <Stack cards={cards} />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5 pt-4">
            <p className="text-ink/80 text-base leading-relaxed">
              Beyond code, I bring ideas to life visually — from crafting cohesive brand identities to designing polished UI mockups and social media graphics.
            </p>
            <p className="text-muted text-sm">
              Drag the top card to browse through the samples.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Figma', 'Canva', 'Wix', 'Logo Design', 'UI Mockups', 'Print Design'].map(tool => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: 'var(--wash)',
                    border: '1px solid var(--line)',
                    color: 'var(--accent)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
