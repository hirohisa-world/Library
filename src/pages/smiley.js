import React from "react"

import Layout from "../components/layout"
import TitleH from "../components/titleH"
import Tweet from "../components/tweet"
import Timeline from "../components/timeline"
import Tab from "../components/tab"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleH />
    <Tweet tweet={<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">こちらの企画【<a href="https://twitter.com/hudson_hotel?ref_src=twsrc%5Etfw">@hudson_hotel</a> 】に参加させていただきます！事件当日たまたま居合わせた道化師おじさんです🤡関係真っ白ですので仲良くしてやってください！<a href="https://twitter.com/hashtag/%E3%83%8F%E3%83%89%E3%82%BD%E3%83%B3_CS?src=hash&amp;ref_src=twsrc%5Etfw">#ハドソン_CS</a> <a href="https://twitter.com/hashtag/%E3%83%8F%E3%83%89%E3%82%BD%E3%83%B3_%E9%96%A2%E4%BF%82%E5%8B%9F%E9%9B%86?src=hash&amp;ref_src=twsrc%5Etfw">#ハドソン_関係募集</a> <a href="https://t.co/jP40pCs7ZS">pic.twitter.com/jP40pCs7ZS</a></p>&mdash; hirohisa (@hirohisasa) <a href="https://twitter.com/hirohisasa/status/1288023635710468097?ref_src=twsrc%5Etfw">July 28, 2020</a></blockquote>} />
    <Tab 
      line01={<Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1293116297857789952?ref_src=twsrc%5Etfw">SMILEY_Action - Curated tweets by hirohisasa</a>} />}
      line02={<Timeline timeline={<a class="twitter-timeline" data-width="500" data-height="730" data-theme="dark" href="https://twitter.com/hirohisasa/timelines/1287983526030094336?ref_src=twsrc%5Etfw">SMILEY - Curated tweets by hirohisasa</a>} />}
    />
  </Layout>
)

export default IndexPage
