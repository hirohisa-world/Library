import React from "react"

import Layout from "../components/layout"
import TitleN from "../components/titleN"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="about_SADD" />
    <TitleN />
    <Tweet tweet={<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画【<a href="https://twitter.com/H_NODENS_TL?ref_src=twsrc%5Etfw">@H_NODENS_TL</a>】に住人と利用者で参加させていただきます！関係等真っ白ですので是非遊んでください！<a href="https://twitter.com/hashtag/NODENS_CS?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_CS</a><a href="https://twitter.com/hashtag/NODENS_%E5%88%A9%E7%94%A8%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_利用者</a><a href="https://twitter.com/hashtag/NODENS_%E4%BD%8F%E4%BA%BA?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_住人</a> <a href="https://t.co/4FccQk9QJA">pic.twitter.com/4FccQk9QJA</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1311267306685652992?ref_src=twsrc%5Etfw">September 30, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1311564495404244995?ref_src=twsrc%5Etfw">MASSIMO - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage