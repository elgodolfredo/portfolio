import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container } from '@chakra-ui/react'
import Navbar from './components/navbar'
import { Providers } from './providers'
import Layout from './components/transition'
import NoSSR from './components/no-ssr'
import Voxel from './components/voxel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pablo Silva - Homepage',
  description: 'Portfolio',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>
            <Navbar />
            <Container maxW="container.md" pt={14}>
              <NoSSR>
                <Voxel />
              </NoSSR>
              {children}
            </Container>
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
