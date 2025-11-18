'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 94, 0, 0.15) 0%, rgba(255, 94, 0, 0.05) 25%, #000000 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 140, 66, 0.15) 0%, rgba(255, 140, 66, 0.05) 25%, #000000 50%)',
            'radial-gradient(circle at 50% 80%, rgba(255, 94, 0, 0.15) 0%, rgba(255, 94, 0, 0.05) 25%, #000000 50%)',
            'radial-gradient(circle at 50% 20%, rgba(255, 107, 26, 0.15) 0%, rgba(255, 107, 26, 0.05) 25%, #000000 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 94, 0, 0.15) 0%, rgba(255, 94, 0, 0.05) 25%, #000000 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 94, 0, 0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
