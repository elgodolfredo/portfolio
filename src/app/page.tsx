'use client'
import { Container, Box, Heading, Image, Stack, Button, Grid, Input, Textarea } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';
import NextLink from 'next/link';
import Section from './components/section';
import Paragraph from './components/paragraph';
import ToolImage from './components/tool-image';
import { BioSection, BioYear } from './components/bio';
import NoSSR from './components/no-ssr'
import Voxel from './components/voxel'
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Contact Form', // Or grab this from another input if needed
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent! ✅');
        setFormData({ email: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong ❌');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending email ❌');
    }
  };

  return (
    <Container>
      <Box display={{ md: 'flex' }} paddingTop={10}>
        <Box flexGrow={1}>
          <Heading as="h2" css={{ textDecoration: 'underline', fontSize: 20, textUnderlineOffset: 6, textDecorationColor: '#525252', textDecorationThickness: 4, marginTop: 3, marginBottom: 4 }}>
            Fabi Silva
          </Heading>
          <p> elgodolfredo (Developer / Artist)</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            borderRadius="full"
            src="/images/mirror.jpg"
            alt='profile image'
            width={["50px", "75px", "100px"]}
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" css={{ textDecoration: 'underline', fontSize: 20, textUnderlineOffset: 6, textDecorationColor: '#525252', textDecorationThickness: 4, marginTop: 3, marginBottom: 4 }}>
          Work
        </Heading>
        <Paragraph>Fabi is a freelancer and a full-stack developer, and also with an art passion.</Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/works">
            <Button colorPalette="teal">
              <LuChevronRight />
              My porfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" css={{ textDecoration: 'underline', fontSize: 20, textUnderlineOffset: 6, textDecorationColor: '#525252', textDecorationThickness: 4, marginTop: 3, marginBottom: 4 }}>
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
        <Heading as="h3" css={{ textDecoration: 'underline', fontSize: 20, textUnderlineOffset: 6, textDecorationColor: '#525252', textDecorationThickness: 4, marginTop: 3, marginBottom: 4 }}>
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
        <form onSubmit={handleSubmit}>
          <Stack gap={3}>
            <Input
              variant="subtle"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              variant="subtle"
              placeholder="Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" colorPalette="teal" m={4}>
              Send!
            </Button>
            {status && <p>{status}</p>}
          </Stack>
        </form>
      </Section>
    </Container>
  )
}

