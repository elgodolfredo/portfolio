'use client'

import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"
import { system } from "../../lib/theme"

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <ChakraProvider value={system}>
        {props.children}
      </ChakraProvider>
    </ColorModeProvider>
  )
}
