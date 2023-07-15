import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="picasso">
      <Container>
        <Title>
          Picasso <Badge>June 2023</Badge>
        </Title>
        <P>
          A simple, multiplayer drawing app using Socket.io.
          This was built for me to try and dabble with web sockets.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/SazedWorldbringer/picasso">
              SazedWorldbringer/picasso <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Typescript, Socket.io</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/picasso.png" />
        { /* <WorkImage src="/images/works/picasso.mp4" /> */}
        <video controls src="/images/works/picasso.mp4" />
      </Container>
    </Layout>
  )
}

export default Work
