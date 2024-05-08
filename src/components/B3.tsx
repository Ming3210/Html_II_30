import React, { Component } from 'react'

interface Ex3{
    name : string;
}
interface St{

}
export default class B3 extends Component<St,Ex3> {
    constructor(props:Ex3) {
        super(props);
        this.state = { 
            name:"Academy"
         }
    }
    handleChange =() => {
        this.setState({
            name:"RikkeiSoft"
        })
    }
  render() {
    return (
      <div>
        <h1>B3</h1>
        <b>Company : {this.state.name}</b><br />
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}