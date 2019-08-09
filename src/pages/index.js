import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>PulseXR is a virtual reality software platform for improved surgical imaging that facilitates more precise and personalized surgical planning. 
</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>

  </Layout>
)
//Link tags redirect page to the endpoint paramater

export default IndexPage
