import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Had a Kenya?</h1>
    <p>Track your coffee beans, taste notes and recipes.</p>

    <Link className="button" to="/index-2/">Let's Brew!</Link>

  </Layout>

  
)

export default IndexPage
