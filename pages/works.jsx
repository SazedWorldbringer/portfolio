import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbCoolCards from '../public/images/works/cool-cards.png'
import thumbJammming from '../public/images/works/jammming.png'
import thumbTodo from '../public/images/works/todo.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Works
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
              id="basictodo"
              title="Basic CLI Todo"
              thumbnail={thumbTodo}
            >
              Todo list for my terminal buddies.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coolcard"
              title="Card Hover Effect"
              thumbnail={thumbCoolCards}
            >
              A cool card hover effect written following bedimcode's YouTube
              tutorial.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coolcard"
              title="Card Hover Effect"
              thumbnail={thumbCoolCards}
            >
              A cool card hover effect written following bedimcode's YouTube
              tutorial.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coolcard"
              title="Card Hover Effect"
              thumbnail={thumbCoolCards}
            >
              A cool card hover effect written following bedimcode's YouTube
              tutorial.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coolcard"
              title="Card Hover Effect"
              thumbnail={thumbCoolCards}
            >
              A cool card hover effect written following bedimcode's YouTube
              tutorial.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coolcard"
              title="Card Hover Effect"
              thumbnail={thumbCoolCards}
            >
              A cool card hover effect written following bedimcode's YouTube
              tutorial.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="coolcard"
              title="Card Hover Effect"
              thumbnail={thumbCoolCards}
            >
              A cool card hover effect written following bedimcode's YouTube
              tutorial.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
