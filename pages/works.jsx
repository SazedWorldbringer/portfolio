import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailCoolCards from '../public/images/works/cool-cards.png'

const Works = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="coolcard"
            title="Card Hover Effect"
            thumbnail={thumbnailCoolCards}
          >
            A cool card hover effect written following bedimcode's YouTube
            tutorial.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
