import {
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import TextEffectOne from '../components/animation/TextEffect'
import Link from 'next/link'

import thumbJammming from '../public/images/works/jammming.png'
import thumbTodo from '../public/images/works/todo.png'
import thumbBreadit from '../public/images/works/breadit.png'
import thumbGallery from '../public/images/works/image-gallery.png'
import thumbPicasso from '../public/images/works/picasso.png'
import thumbGlitch from '../public/images/works/glitch-01.png'
import thumbGithub from '../public/images/spooky-sazed-profile.png'
import Image from 'next/image'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h2'} mb={4}>
          <TextEffectOne
            text={'Work'}
            initial="state1"
            animate="state2"
            exit="state1"
            whileHover="state1"
          />
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="glitch"
              title="Glitch"
              thumbnail={thumbGlitch}
            >
              A URL shortener written in Go and Svelte.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="breadit"
              title="Breadit"
              thumbnail={thumbBreadit}
            >
              Reddit clone built using Next.js 13 and TypeScript
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="jammming"
              title="Jammming"
              thumbnail={thumbJammming}
            >
              An app that lets you search songs and create playlists easily.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="picasso"
              title="Picasso"
              thumbnail={thumbPicasso}
            >
              Multiplayer drawing app.
            </WorkGridItem>
          </Section>

          <Section>
            <Link href="https://github.com/SazedWorldbringer" target="_blank">
              <LinkBox cursor={'pointer'}>
                <Image
                  src={thumbGithub}
                  alt="Sazed's GitHub profile"
                  className="grid-item-thumbnail"
                  placeholder="blur"
                  blurDataURL={thumbGithub}
                />
                <LinkOverlay href="https://github.com/SazedWorldbringer">
                  <Text mt={2} fontSize={20}>
                    SazedWorldbringer
                  </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                  Check out the rest of my projects on GitHub.
                </Text>
              </LinkBox>
            </Link>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
