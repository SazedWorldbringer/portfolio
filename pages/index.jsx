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
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
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
            Atharva Pardeshi
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
            src="/images/profile.png"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant={'section-title'}>
          Work
        </Heading>
        <Paragraph>
          Atharva is a font-end developer based in India with a passion for
          writing software that is easy to read, maintain and debug. He is
          naturally curious, humble and ready to adapt. When not online, he
          loves reading Sci-fi/Fantasy books, scratching his head trying to
          understand documentation. And he uses{' '}
          <NextLink href="https://github.com/SazedWorldbringer/dotfiles">
            <Link>Vim</Link>
          </NextLink>{' '}
          (can't forget to put that here :wink:).
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
      </Section>

      <Section delay={0.3}>
        <Heading as={'h3'} variant="section-title">
          I ♥
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
