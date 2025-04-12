import { Box, Text, LinkBox, LinkOverlay, Image, Modal, ModalBody, ModalCloseButton, useDisclosure, ModalOverlay, ModalContent, ModalHeader } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image 
        src={thumbnail} 
        alt={title} 
        className='grid-item-thumbnail'
        placeholder='blur'
        loading='lazy'
        />
        <LinkOverlay href={href} target='_blank'>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({children, href, title, thumbnail}) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image 
        src={thumbnail} 
        alt={title} 
        className='grid-item-thumbnail'
        placeholder='blur'
      />
      <LinkOverlay href={href}>
        <Text mt={2} fontSize={20}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `} />
)

export const PhotoGridItem = ({id, thumbnail}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <Box w="100%" textAlign="center" py={5}>
    <Image 
      src={thumbnail}
      alt={id}
      className='grid-item-thumbnail'
      placeholder='blur'
      loading='lazy'
      cursor='pointer'
      onClick={onOpen}
    />
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
          <ModalBody>
            <Image src={thumbnail} alt={id} />
          </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
}