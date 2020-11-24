import React, { Component } from "react"
import Good from "./Components/Good.js"
import Bad from "./Components/Bad.js"
import Doodlebot from "./Components/Doodlebot.js"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "",
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <>
        <Good userInput={ this.state.userInput } />
        <br/>
        <br/>
        <Bad userInput={ this.state.userInput } />
        <br/>
        <br/>
        <Doodlebot userInput={ this.state.userInput } />
        <br/>
        <br/>
      <div id="input"> <input
        type="text"
        value={this.state.userInput}
        onChange={this.handleChange}
      />
      </div>
      </>
    )
  }
}

export default App
