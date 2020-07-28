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
    <Tweet tweet={<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画【<a href="https://twitter.com/hudson_hotel?ref_src=twsrc%5Etfw">@hudson_hotel</a>】に参加させていただきます！同室の旧友がいますが、他は関係真っ白ですので是非仲良くしてください！<a href="https://twitter.com/hashtag/%E3%83%8F%E3%83%89%E3%82%BD%E3%83%B3_CS?src=hash&amp;ref_src=twsrc%5Etfw">#ハドソン_CS</a> <a href="https://twitter.com/hashtag/%E3%83%8F%E3%83%89%E3%82%BD%E3%83%B3_%E9%96%A2%E4%BF%82%E5%8B%9F%E9%9B%86?src=hash&amp;ref_src=twsrc%5Etfw">#ハドソン_関係募集</a> <a href="https://t.co/bko55H5BXK">pic.twitter.com/bko55H5BXK</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1282967489689710594?ref_src=twsrc%5Etfw">July 14, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1283231969849913345?ref_src=twsrc%5Etfw">ASTER - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage
