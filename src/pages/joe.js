import React from "react"

import Layout from "../components/layout"
import TitleN from "../components/titleN"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="about_JOE" />
    <TitleN />
    <Tweet tweet={<blockquote class="twitter-tweet" data-width="500" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画(<a href="https://twitter.com/H_NODENS_TL?ref_src=twsrc%5Etfw">@H_NODENS_TL</a>)に3人目失礼いたします。同じ探偵社に務める後輩さんがいますがそれ以外は関係真っ白ですので、是非仲良くしてください！<a href="https://twitter.com/hashtag/NODENS_CS?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_CS</a><a href="https://twitter.com/hashtag/NODENS_%E4%BD%8F%E4%BA%BA?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_住人</a> <a href="https://t.co/bggMojfqL5">pic.twitter.com/bggMojfqL5</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1268514879645708288?ref_src=twsrc%5Etfw">June 4, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1278733132934418432?ref_src=twsrc%5Etfw">JOE - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage