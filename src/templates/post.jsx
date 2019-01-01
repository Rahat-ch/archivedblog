import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import TagsBlock from '../components/TagsBlock'

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const html = post.html

  console.log(pageContext);

  return (
    <Layout>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <TagsBlock list={post.frontmatter.tags || [ ]} />
    </Layout>
  )
}
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        date
        title
        tags
      }
    }
  }
`
export default Post
