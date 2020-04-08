import React from "react"
import { Link,graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="project-page-container">
        <h1>{post.frontmatter.title}</h1>
        <div className="sub-title">{post.frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/blog">Go back to the blog page</Link>
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
      }
    }
  }
`