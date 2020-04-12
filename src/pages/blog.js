import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import { IoIosStarOutline } from "react-icons/io" 
import Img from 'gatsby-image'

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
    <div className="page-container">
        <h1 className="page-title">Exerpts from my Adventures <IoIosStarOutline/></h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="item-section">
            <Link
              to= {"/blog"+node.fields.slug}
            >
              <div className="item">
              <h1>{node.frontmatter.title}</h1>
              <h2>{node.frontmatter.date}</h2>
              {node.frontmatter.featuredImage === null ? " ": <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />}
              <p>{node.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
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
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
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