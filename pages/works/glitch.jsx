import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Glitch">
      <Container>
        <Title>
          Glitch <Badge>July 2023</Badge>
        </Title>
        <P>
          A URL shortener application built using Go, Go Fiber and Svelte.
          Features include rate limiting and URL expiration.
          Client side code is written in Svelte to deliver a dynamic and intuitive user interface.
          Used Redis for efficient data storage and caching, enhancing performance.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://glitch-sazed.vercel.app">
              glitch-sazed.vercel.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/SazedWorldbringer/glitch">
              SazedWorldbringer/glitch <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Go fiber, Svelte, Typescript, TailwindCSS.</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/glitch.png" />
      </Container>
    </Layout>
  )
}

export default Work
