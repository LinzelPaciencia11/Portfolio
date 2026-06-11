import { useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'

function Card({ card, index, total, onSendToBack }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-250, 250], [-20, 20])

  const isTop = index === total - 1
  const stackOffset = (total - 1 - index) * 12
  const scale = 1 - (total - 1 - index) * 0.05

  async function handleDragEnd(_, info) {
    const thrown =
      Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100

    if (thrown) {
      const dirX = info.offset.x > 0 ? 1 : -1
      const dirY = info.offset.y > 0 ? 1 : -1
      await Promise.all([
        animate(x, dirX * 600, { duration: 0.25, ease: 'easeOut' }),
        animate(y, dirY * 300, { duration: 0.25, ease: 'easeOut' }),
      ])
      // Reset position BEFORE moving to back so it reappears correctly
      x.set(0)
      y.set(0)
      onSendToBack(card.id)
    } else {
      animate(x, 0, { type: 'spring', stiffness: 350, damping: 30 })
      animate(y, 0, { type: 'spring', stiffness: 350, damping: 30 })
    }
  }

  return (
    <motion.div
      drag={isTop}
      dragConstraints={{ top: -500, bottom: 500, left: -500, right: 500 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      style={{
        x,
        y,
        rotate,
        zIndex: index,
        scale,
        translateY: stackOffset,
        position: 'absolute',
        width: '100%',
        cursor: isTop ? 'grab' : 'default',
        transformOrigin: 'bottom center',
        touchAction: 'none',
      }}
      whileDrag={{ cursor: 'grabbing' }}
    >
      {card.content}
    </motion.div>
  )
}

export default function Stack({ cards: initialCards }) {
  const [cards, setCards] = useState(initialCards)

  function sendToBack(id) {
    setCards(prev => {
      const idx = prev.findIndex(c => c.id === id)
      if (idx === -1) return prev
      const next = [...prev]
      const [card] = next.splice(idx, 1)
      next.unshift(card)
      return next
    })
  }

  return (
    <div className="relative" style={{ height: 340 }}>
      {cards.map((card, i) => (
        <Card
          key={card.id}
          card={card}
          index={i}
          total={cards.length}
          onSendToBack={sendToBack}
        />
      ))}
    </div>
  )
}
