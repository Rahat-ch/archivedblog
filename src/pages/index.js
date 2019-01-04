import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts'
import styled from 'styled-components'

const PostPreview = styled.div`
  margin-top: 5%;
  width: 50%;
  margin-left: 20%;
  h5{
    color: #6C62FF;
  }
  p{
    font-size: 75%;
  }
`;

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>

        {edges.map(({ node }) => (
          <div key={node.id}>
            <PostPreview>
              <Link to={node.frontmatter.path}>
              <h5>{node.frontmatter.title}{" "}</h5>
              </Link>
              <p>{node.frontmatter.excerpt}</p>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </PostPreview>

          </div>
        ))}
    </Layout>
  )
}



export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false} } }
      # limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            excerpt
            path
            tags
            date(formatString: "MM.DD.YYYY")

          }
        }
      }
    }
  }
`;
