import React from "react"

import Layout from "../components/layout"
import TitleH from "../components/titleH"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleH />
    <Tweet tweet={<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画【<a href="https://twitter.com/hudson_hotel?ref_src=twsrc%5Etfw">@hudson_hotel</a> 】に参加させていただきます！事件当日たまたま居合わせた道化師おじさんです🤡関係真っ白ですので仲良くしてやってください！ <a href="https://t.co/QKfAannXpy">pic.twitter.com/QKfAannXpy</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1287945426822246400?ref_src=twsrc%5Etfw">July 28, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1287983526030094336?ref_src=twsrc%5Etfw">SMILEY - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage
