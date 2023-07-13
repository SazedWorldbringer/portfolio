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
          Breadit <Badge>June 2023</Badge>
        </Title>
        <P>
          A fullstack Reddit clone built using Next.js 13 (app router), TypeScript, TailwindCSS, etc.
          Authentication using NextAuth and Google, Datafetching using TanStack Query. Features infinite scrolling.
          Make communities, create and engage with posts.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://breadit-sazed.vercel.app">
              breadit-sazed.vercel.app <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/SazedWorldbringer/breadit">
              SazedWorldbringer/breadit <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js 13, TypeScript, TailwindCSS, shadcn ui, Prisma, etc.</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/breadit-01.png" />
        <WorkImage src="/images/works/breadit.png" />
      </Container>
    </Layout>
  )
}

export default Work
