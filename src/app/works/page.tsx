'use client'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem href="#" title="rebiem" thumbnail={'/images/works/rebiem.png'} >
            A web application to manage your sales and inventory.
          </WorkGridItem>
          <WorkGridItem href="https://ml-tracker.fabisilva.com.ar" title="ML Tracker" thumbnail={'/images/works/ml-tracker.png'} >
            A web application to keep track of products on MercadoLibre.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works