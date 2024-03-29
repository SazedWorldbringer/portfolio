import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import TextEffectOne from '../components/animation/TextEffect'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in India!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant="page-title">
              <TextEffectOne
                text={'Atharva Pardeshi'}
                initial="state1"
                animate="state2"
                exit="state1"
                whileHover="state1"
              />
            </Heading>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign={'center'}
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/spooky-sazed-profile.png"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant={'section-title'}>
            Work
          </Heading>
          <Paragraph>
            Atharva is a full-stack developer(with a focus on front-end) based in India
            with a passion for writing software that is easy to read, maintain and debug.
            He is naturally curious, humble and ready to adapt.
            He also likes spending his time studying core computer science subjects,
            and exploring tech in visual forms using Processing.
            When not online, he loves reading Sci-fi/Fantasy books,
            scratching his head trying to understand documentation. And he uses{' '}
            <NextLink
              href="https://github.com/SazedWorldbringer/nvim"
              passHref
              scroll={false}
            >
              <Link target="_blank">Vim</Link>
            </NextLink>{' '}
            (can&apos;t forget to put that here :wink: )
          </Paragraph>

          <Box textAlign={'center'} my={4}>
            <NextLink href={'/works'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant={'section-title'}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Nashik, Maharashtra, India.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated High School, 12th HSC from KTHM College, Nashik.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Studying Mechanical Engineering at KBT College of Engineering, Nashik.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as={'h3'} variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Reading, Art, Drawing, Music, Exercising.</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
