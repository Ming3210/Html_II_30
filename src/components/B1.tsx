import React, { Component } from 'react'

interface Ex1{
    name : string;
}
interface St{

}
export default class B1 extends Component<St,Ex1> {
    constructor(props:Ex1) {
        super(props);
        this.state = { 
            name:"Minh"
         }
    }
  render() {
    return (
      <div>
        <h1>B1</h1>
        <b>Họ và tên : {this.state.name}</b>
      </div>
    )
  }
}
