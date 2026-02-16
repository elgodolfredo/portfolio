"use client"
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const Section = ({ children, delay=0, my=0 }) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      my={my}
    >
      {children}
    </Box>
  )
}

export default Section