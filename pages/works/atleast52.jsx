import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Jammming">
      <Container>
        <Title>
          At least 52 <Badge>Jan 2023 - Ongoing</Badge>
        </Title>
        <P>
          Exploring Generative Art with Processing, p5.js, etc technologies.
          Matt Pearson&apos;s <Link href="https://zenbullets/abandonedart">100 Abandoned Artworks</Link> inspired this project.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://atleast52.vercel.app">
              atleast52.vercel.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/SazedWorldbringer/atleast52">
              SazedWorldbringer/atleast52 <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Processing, p5.js, three.js, etc.</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/atleast52.gif" />
      </Container>
    </Layout>
  )
}

export default Work
