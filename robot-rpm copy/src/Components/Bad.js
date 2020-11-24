import React, { Component } from "react"

class Bad extends Component {
  badBot = (str) => {
    //  depending on where the character is on the "str" there will either be a "b", "l" or "a"
    // .split(str)
    let stringSplit = str.split("")
    // .map through userInput to find the value and index
    let blaArray = stringSplit.map((value, index) => {
      // if char is at index of %3 =0 then its "b"
      if (index % 3 === 0) {
        return "b"
      }
      // if char is at index of %3= 1 then its "l"
      else if (index % 3 === 1) {
        return "l"
      }
      // if char is at index of %3= 2 then its "a"
      else if (index % 3 === 2) {
        return "a"
      }
      // b,l,a = 0, 1, 2
    })
    console.log(blaArray)
    // .join(str)
    return blaArray.join("")
    // return new "blablabla string"
  }

  render() {
    return <div id="bad">I hear you saying {this.badBot(this.props.userInput)}, is that correct?</div>
  }
}
export default Bad
