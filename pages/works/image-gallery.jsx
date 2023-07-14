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
          Image Gallery <Badge>Dec 2022</Badge>
        </Title>
        <P>
          An image gallery built using Next.js with a cool user interface
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://gallery-sazed.vercel.app">
              gallery-sazed.vercel.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/SazedWorldbringer/the-eolian">
              SazedWorldbringer/image-gallery-next <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, TailwindCSS, Typescript</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/image-gallery.png" />
      </Container>
    </Layout>
  )
}

export default Work
