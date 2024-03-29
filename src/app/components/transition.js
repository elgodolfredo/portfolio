'use client'
import { motion } from 'framer-motion'
import { GridItemStyle } from './grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  visible: { opacity: 1, x:0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children }) => (
  <motion.article
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={variants}
    transition={{duration: 0.4, type: 'easeInOut'}}
    style={{ position: 'relative' }}
  >
    {children}
    <GridItemStyle />
  </motion.article>
)

export default Layout
