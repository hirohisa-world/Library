import React from "react"

import Layout from "../components/layout"
import TitleC from "../components/titleC"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleC />
    <Tweet tweet={<blockquote class="twitter-tweet" data-width="500" data-theme="dark"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/C_follower?src=hash&amp;ref_src=twsrc%5Etfw">#C_follower</a> <a href="https://t.co/y8NStV4riK">pic.twitter.com/y8NStV4riK</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1278933043487465472?ref_src=twsrc%5Etfw">July 3, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1278933375198224389?ref_src=twsrc%5Etfw">C_follower - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage
