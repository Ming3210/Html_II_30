import React, { Component } from 'react'

interface Ex4{
    name : string;
}
interface St{

}
export default class B4 extends Component<St,Ex4> {
    constructor(props:Ex4) {
        super(props);
        this.state = { 
            name:"Học code để đi làm"
         }
    }
    handleChange =() => {
        this.setState({
            name:"Học code để làm cái gì đó"
        })
    }
    shouldComponentUpdate(nextProps: Readonly<St>, nextState: Readonly<Ex4>, nextContext: any): boolean {
        console.log("Ko đổi slogan");
        
        return false
    }
  render() {
    return (
      <div>
        <h1>B4</h1>
        <b>Company : {this.state.name}</b><br />
        <button onClick={this.handleChange}>Slogan</button>
      </div>
    )
  }
}