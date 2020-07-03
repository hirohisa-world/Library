import React from "react"
import PropTypes from "prop-types"
import "./timeline.scss"

const Timeline = ({timeline}) => (
  <div className="timeline">
    {timeline}
  </div>
)

Timeline.propTypes = {
  timeline: PropTypes.node.isRequired,
}

export default Timeline