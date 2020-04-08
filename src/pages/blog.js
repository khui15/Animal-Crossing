import React, {Component} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../styles/projects.scss"
import "../components/functions"

// export default class BlogPage extends Component {
export default ({ data }) => {
//   render(){
    

    return(
  <Layout>
    <SEO title="Blog" />
    <div className="project-page-container">
        <h1>Exerpts from my Adventures</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to= {"/blog"+node.fields.slug}
            >
              <h3
              >
                {node.frontmatter.title}{" "}
                <span
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
// )
    );
    // }
}

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`