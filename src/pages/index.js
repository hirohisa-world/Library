import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="title">
      <div className="neon">
        HOTEL <span>NO</span>DENS
      </div>
    </div>
    <div>
      <blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画【<a href="https://twitter.com/H_NODENS_TL?ref_src=twsrc%5Etfw">@H_NODENS_TL</a>】に参加させていただきます！盗人兄弟です！関係等真っ白ですので是非遊んでください！<a href="https://twitter.com/hashtag/NODENS_CS?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_CS</a><a href="https://twitter.com/hashtag/NODENS_%E5%88%A9%E7%94%A8%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw">#NODENS_利用者</a> <a href="https://t.co/3MFsnPclFR">pic.twitter.com/3MFsnPclFR</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1265216386831224832?ref_src=twsrc%5Etfw">May 26, 2020</a></blockquote>
    </div>
    <div className="timeline">
      <a class="twitter-timeline" data-width="500" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1278567761124327424?ref_src=twsrc%5Etfw">test - Curated tweets by hirohisasa</a>
    </div>
  </Layout>
)

export default IndexPage
