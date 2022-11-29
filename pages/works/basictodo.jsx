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
          Basic-todo <Badge>Nov 2022</Badge>
        </Title>
        <P>
          A command line todo list app for people who call the terminal their home.
          This was me just dabbling in making cli applications with node.js, and I certainly enjoy it.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://npmjs.com/packages/basic-todo">
              npmjs.com/packages/basic-todo <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/Sazedworldbringer/cli-todo">
              SazedWorldbringer/cli-todo <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, chalk, lowdb</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/todo.png" />
        <WorkImage src="/images/works/todo.gif" />
      </Container>
    </Layout>
  )
}

export default Work
