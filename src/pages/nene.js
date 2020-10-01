import React from "react"

import Layout from "../components/layout"
import TitleR from "../components/titleR"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="about_NENE" />
    <TitleR />
    <Tweet tweet={<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">【<a href="https://twitter.com/lycanthropy_s?ref_src=twsrc%5Etfw">@lycanthropy_s</a> 】に参加させていただきます。ハムスターの女の子ですゆったりになると思いますが、遊んで頂けたら嬉しいです！<a href="https://twitter.com/hashtag/%E3%83%AA%E3%82%AB%E5%AD%A6_CS?src=hash&amp;ref_src=twsrc%5Etfw">#リカ学_CS</a> <a href="https://t.co/KYT7ETNs0p">pic.twitter.com/KYT7ETNs0p</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1301865788127604737?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1311563152371322882?ref_src=twsrc%5Etfw">NENE - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage