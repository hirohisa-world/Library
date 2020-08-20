import React from "react"

import Layout from "../components/layout"
import TitleJ from "../components/titleJ"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="about_Tsudu" />
    <TitleJ />
    <Tweet tweet={<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画【<a href="https://twitter.com/NKJungle_TL?ref_src=twsrc%5Etfw">@NKJungle_TL</a> 】に参加させていただきます！関西弁のおちびなネズミ獣人です！関係真っ白ですので是非仲良くしてください！<a href="https://twitter.com/hashtag/%E4%BB%BB%E5%BC%B5_%E6%A7%8B%E6%88%90%E5%93%A1CS?src=hash&amp;ref_src=twsrc%5Etfw">#任張_構成員CS</a> <a href="https://twitter.com/hashtag/%E4%BB%BB%E5%BC%B5_%E8%A5%BF%E5%8B%A2%E5%8A%9B?src=hash&amp;ref_src=twsrc%5Etfw">#任張_西勢力</a> <a href="https://twitter.com/hashtag/%E4%BB%BB%E5%BC%B5_%E9%96%A2%E4%BF%82%E5%8B%9F%E9%9B%86?src=hash&amp;ref_src=twsrc%5Etfw">#任張_関係募集</a> <a href="https://t.co/EAfbfxesxc">pic.twitter.com/EAfbfxesxc</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1296274287465123842?ref_src=twsrc%5Etfw">August 20, 2020</a></blockquote>} />
    <Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1296335210028490753?ref_src=twsrc%5Etfw">Tsudu - Curated tweets by hirohisasa</a>} />
  </Layout>
)

export default IndexPage