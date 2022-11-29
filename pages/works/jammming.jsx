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
          Jammming <Badge>Oct 2022</Badge>
        </Title>
        <P>
          An app that uses the Spotify api to make searching and adding songs to
          your playlist just a click away.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://jammming-sazed.netlify.app">
              jammming-sazed.netlify.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Spotify API</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/jammming-01.png" />
      </Container>
    </Layout>
  )
}

export default Work
