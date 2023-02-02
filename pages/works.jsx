import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import TextEffectOne from '../components/animation/TextEffect'

import thumbJammming from '../public/images/works/jammming.png'
import thumbTodo from '../public/images/works/todo.png'
import thumbAtleast52 from '../public/images/works/atleast52.gif'

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
              id="jammming"
              title="Jammming"
              thumbnail={thumbJammming}
            >
              An app that lets you search songs and create playlists easily.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="atleast52"
              title="At least 52"
              thumbnail={thumbAtleast52}
            >
              At least 52 Generative Artworks 2023
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="basictodo"
              title="Basic CLI Todo"
              thumbnail={thumbTodo}
            >
              Todo list for my terminal buddies.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
