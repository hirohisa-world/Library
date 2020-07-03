import React from "react"

import Layout from "../components/layout"
import TitleC from "../components/titleC"
import Timeline from "../components/timeline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleC />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1278938967363031042?ref_src=twsrc%5Etfw">C_works - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage
