import React, { Component } from 'react'

export default class Messages extends Component {
  render() {
    if (this.props.text === "error") {
        // Simulating an error condition
        throw new Error("Message rendering error");
      }
    return <>{this.props.text}</>
  }
}
