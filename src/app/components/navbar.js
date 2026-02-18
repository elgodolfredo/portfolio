"use client"
import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  ClientOnly,
  Skeleton
} from '@chakra-ui/react';
import { LuMenu } from 'react-icons/lu';
import { useColorModeValue } from './ui/color-mode';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900');
  return (
    <NextLink href={href} p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
      {children}
    </NextLink>
  );
}

const Navbar = (props) => {

  const { path } = props;

  return (
    <ClientOnly fallback={<Box position="fixed" as="nav" w="100%" h="16" zIndex={1}><Skeleton h="100%" /></Box>}>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="2xl"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing="tighter">
              <Logo />
            </Heading>
          </Flex>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/works" path={path}>Works</LinkItem>
            <LinkItem href="/photos" path={path}>Photos</LinkItem>
          </Stack>
          <Flex align="center" gap={2} justifyContent="flex-end">
            <ThemeToggleButton />
            <Box display={{ base: 'inline-block', md: 'none' }}>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <IconButton
                    aria-label="Options"
                    variant="outline">
                    <LuMenu />
                  </IconButton>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item>
                    <Link as={NextLink} href="/" path={path}>About</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link as={NextLink} href="/works" path={path}>Works</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link as={NextLink} href="/photos" path={path}>Photos</Link>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Root>
            </Box>
          </Flex>
        </Container>
      </Box>
    </ClientOnly>
  )
}

export default Navbar;

