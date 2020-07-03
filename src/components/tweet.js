import React from "react"
import PropTypes from "prop-types"
import "./tweet.scss"

const Tweet = ({tweet}) => (
  <div>
    {tweet}
  </div>
)

Tweet.propTypes = {
  tweet: PropTypes.node.isRequired,
}

export default Tweet
