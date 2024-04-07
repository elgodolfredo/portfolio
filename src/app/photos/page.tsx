'use client'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { PhotoGridItem } from '../components/grid-item'

const Photos = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Photos
      </Heading>
      <SimpleGrid columns={[3,3,1]} gap={6}>
        <Section>
          <PhotoGridItem id="car" thumbnail='/images/photos/DSC_0492.jpg' />
          <PhotoGridItem id="keyboard" thumbnail='/images/photos/DSC_0036.jpg' />
          <PhotoGridItem id="republic" thumbnail='/images/photos/DSC_0078.jpg' />
          <PhotoGridItem id="home" thumbnail='/images/photos/DSC_0094.jpg' />
          <PhotoGridItem id="u" thumbnail='/images/photos/DSC_0119.jpg' />
          <PhotoGridItem id="boat" thumbnail='/images/photos/DSC_0132.jpg' />
          <PhotoGridItem id="buda" thumbnail='/images/photos/DSC_0387.jpg' />
          <PhotoGridItem id="sun" thumbnail='/images/photos/DSC_0545.jpg' />
          <PhotoGridItem id="misty" thumbnail='/images/photos/DSC_0526.jpg' />
          <PhotoGridItem id="mountain" thumbnail='/images/photos/DSC_0549.jpg' />
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Photos