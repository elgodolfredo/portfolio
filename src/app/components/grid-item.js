"use client"
import { Box, Text, LinkBox, LinkOverlay, Image, Dialog, useDisclosure, Portal } from '@chakra-ui/react'
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
  const { open, onOpen, onClose } = useDisclosure();
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
    <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header></Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body>
              <Image src={thumbnail} alt={id} />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  </Box>
}