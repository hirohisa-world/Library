import React from "react"
import "./tab.scss"

const Tab = ({line01, line02}) => (
  <div class="tabs">
    <input id="all" type="radio" name="tab_item" checked></input>
    <label class="tab_item" for="all">Action</label>
    <input id="programming" type="radio" name="tab_item"></input>
    <label class="tab_item" for="programming">Other</label>
    <div class="tab_content" id="all_content">
      <div class="tab_content_description">
        {line01}
      </div>
    </div>
    <div class="tab_content" id="programming_content">
      <div class="tab_content_description">
        {line02}
      </div>
    </div>
  </div>
)

export default Tab