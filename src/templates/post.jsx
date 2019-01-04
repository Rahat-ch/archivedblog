import React from 'react'
import { graphql, Link  } from 'gatsby'
import Layout from '../layouts'
import TagsBlock from '../components/TagsBlock'
import SocialShare from '../components/SocialShare'
import styled from 'styled-components'

const PostWrapper = styled.div`

  width: 75%;
  margin-left: 20%;

  h3{
    color: #6C62FF;
  }

  p{
    font-size: 75%;
  }
`;

const Navigation = styled.div`
  margin-left: 20%;
  margin-bottom: 5%;
  width: 75%;
  display: flex;
  justify-content: space-between;
  a{
    color: #6C62FF;
  }
`;

const TagDisplay = styled.div`
  display: flex;
  margin-left: 20%;
  font-size: 75%;
  width: 75%;


  a{
    margin-left: 3%;
    color: #6C62FF;
  }
`;


const Post = ({ data, pageContext }) => {

  const {next, prev} = pageContext
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const html = post.html

  console.log(pageContext);

  return (
    <Layout>
      <PostWrapper>
        <h3>{title}</h3>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        </PostWrapper>

    {/* <Navigation>
     {prev &&
       <Link id = "prev" to={prev.frontmatter.path}>
         Previous Post
       </Link>
     }


     {next &&
       <Link id = "next" to={next.frontmatter.path}>
         Next Post
       </Link>
     }
     </Navigation> */}
        <TagDisplay>Tags: <TagsBlock list={post.frontmatter.tags || [ ]} /></TagDisplay>
        <SocialShare />
    </Layout>
  )
}
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags

      }
    }
  }
`;
export default Post
