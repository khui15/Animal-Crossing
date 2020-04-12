import React from "react"
import { Link,graphql } from "gatsby"
import Img from 'gatsby-image';
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="page-container">
        <h1 className="blog">{post.frontmatter.title}</h1>
        <div className="blog-date">{post.frontmatter.date}</div>
        {post.frontmatter.featuredImage === null ? " ": <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`