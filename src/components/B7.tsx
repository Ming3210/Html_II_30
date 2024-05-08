import React, { Component } from 'react'

export default class 
B7 extends Component {
    componentDidMount() {
        document.title = "B7";
      }
  render() {
    return (
      <div>
        <h1>B7</h1>
         {document.title}
      </div>
    )
  }
}
