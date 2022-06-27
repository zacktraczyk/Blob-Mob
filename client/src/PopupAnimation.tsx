import { motion } from 'framer-motion'
import React from 'react'

export default function PopupAnimation() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
    ></motion.div>
  )
}
