import React, { Component } from "react"

class Doodlebot extends Component {
  render() {
    return (
      <div id="doodlebot">Doodlebot says: "{this.props.userInput}" but he doesn't agree! </div>
    )
  }
}
export default Doodlebot
