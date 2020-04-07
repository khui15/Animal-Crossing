import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello it's me.</h1>
    <p>Hello and welcome to my playground! Only a handful of people 
      know if its existence, so you're either very special to me, 
      or you're a recruiter (though I'm not saying you can't be both). 
      Either way, consider yourselves to be very special. I hope you 
      enjoy your stay~</p>
  </Layout>
)

export default IndexPage
