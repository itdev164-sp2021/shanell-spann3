import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Box, Card, Image, Heading } from 'rebass'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Grid>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <Card key={edge.node.id} width={256} p={3}>
          <Link to={edge.node.slug}>
            <Image src={edge.node.heroImage.fluid.src} alt="" />
          </Link>
          <Heading>{edge.node.title}</Heading>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </Card>
      ))
    }
    </Grid>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        heroImage {
          fluid(maxWidth: 600) {
            src
          }
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`