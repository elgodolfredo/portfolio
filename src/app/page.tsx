'use client'
import { Container, Box, Heading, Image, useColorModeValue, Stack, Button, Grid, FormControl, InputGroup, Input, Textarea } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Section from './components/section';
import Paragraph from './components/paragraph';
import ToolImage from './components/tool-image';
import { BioSection, BioYear } from './components/bio';
import NoSSR from './components/no-ssr'
import Voxel from './components/voxel'

export default function Home() {
  return (
    <Container>
      <Box display={{md: 'flex'}} paddingTop={10}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pablo Silva
          </Heading>
          <p> elgodolfredo (Developer / Artist)</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} textAlign="center">
          <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            borderRadius="full"
            src="/images/yoda.jpg"
            alt='profile image'
            width={["50px", "75px", "100px"]}
            />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Pablo is a freelancer and a full-stack developer, and also with an art passion.</Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My porfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in La Plata, Argentina.
        </BioSection>
        <BioSection>
          <BioYear>2009</BioYear>
          Started my career as a developer at La Plata University.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Started working as a freelancer.
        </BioSection>
        <BioSection>
          <BioYear>2013 to present</BioYear>
          Works at a local security company.
        </BioSection>
      </Section>
      <Section delay={0.5} my={10}>
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          <ToolImage src='/images/tools/php.png' />
          <ToolImage src='/images/tools/nodejs.png' />
          <ToolImage src='/images/tools/python.png' />
          <ToolImage src='/images/tools/pgsql.png' />
          <ToolImage src='/images/tools/next.png' />
          <ToolImage src='/images/tools/react.png' />
          <ToolImage src='/images/tools/js.png' />
          <ToolImage src='/images/tools/firebase.png' />
        </Grid>
      </Section>
      <Section delay={0.4}>
        <NoSSR>
          <Voxel />
        </NoSSR>
        <Box borderRadius="lg" p={3} mb={6} alignItems="center" textAlign="center">
          Feel free to contact me for any questions or feedback! 
        </Box> 
        <Stack spacing={3}>
          <Input variant='filled' placeholder='Email' name='email' id='email' />
          <Textarea variant='filled' placeholder='Message' name='message' id='message' />
          <Button type="submit" colorScheme="teal" mt={4}>
            Send!
          </Button>
        </Stack>
      </Section>
    </Container>
  )
}
