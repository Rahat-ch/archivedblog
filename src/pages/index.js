import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts'


export default ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
        <h1>Rahat's Code Blog</h1>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.path}>
            <h3>{node.frontmatter.title}{" "}</h3>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Layout>
  )
}



export const query = graphql`
  query {
    allMarkdownRemark (
    sort: {order: DESC, fields: [frontmatter___date]}
      ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MM.DD.YYYY")
          }
        }
      }
    }
  }
`
