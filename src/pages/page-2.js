import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer footerText="Footer Component"/>
  </Layout>
)

export default SecondPage
