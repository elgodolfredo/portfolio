'use client'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { PhotoGridItem, WorkGridItem } from '../components/grid-item'

import thumbCar from '../../../public/images/photos/DSC_0492.jpg'
import thumbKeyboard from '../../../public/images/photos/DSC_0036.jpg'
import thumbRepublic from '../../../public/images/photos/DSC_0078.jpg'
import thumbHome from '../../../public/images/photos/DSC_0094.jpg'
import thumbU from '../../../public/images/photos/DSC_0119.jpg'
import thumbBoat from '../../../public/images/photos/DSC_0132.jpg'
import thumbBuda from '../../../public/images/photos/DSC_0387.jpg'
import thumbSun from '../../../public/images/photos/DSC_0545.jpg'
import thumbMountain from '../../../public/images/photos/DSC_0549.jpg'

const Photos = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Photos
      </Heading>
      <SimpleGrid columns={[3,3,1]} gap={6}>
        <Section>
          <PhotoGridItem id="car" thumbnail={thumbCar} />
          <PhotoGridItem id="keyboard" thumbnail={thumbKeyboard} />
          <PhotoGridItem id="republic" thumbnail={thumbRepublic} />
          <PhotoGridItem id="home" thumbnail={thumbHome} />
          <PhotoGridItem id="u" thumbnail={thumbU} />
          <PhotoGridItem id="boat" thumbnail={thumbBoat} />
          <PhotoGridItem id="buda" thumbnail={thumbBuda} />
          <PhotoGridItem id="sun" thumbnail={thumbSun} />
          <PhotoGridItem id="mountain" thumbnail={thumbMountain} />
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Photos