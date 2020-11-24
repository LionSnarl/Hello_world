import React, { Component } from "react"

class Good extends Component {
  render() {
    return <div id="good">
    I hear you saying {this.props.userInput}, Is that correct?
    </div>
  }
}
export default Good
