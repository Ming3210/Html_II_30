import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(): void {
        console.log("WillUnmount");
        
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
