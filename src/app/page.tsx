'use client'
import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Section from './components/section';
import Paragraph from './components/paragraph';
import { BioSection, BioYear } from './components/bio';

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} alignItems="center">
        Hello, i&apos;m a full-stack developer based in Argentina!
      </Box>
      <Box display={{md: 'flex'}}>
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
    </Container>
  )
}
