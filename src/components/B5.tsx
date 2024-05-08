import React, { Component } from 'react'
interface Ex5{
    name : string;
    active : boolean;
}
interface St{

}

export default class 
B5 extends Component<St,Ex5> {
    constructor(props:Ex5){
        super(props);
        this.state = { 
            name:"Open the form",
            active: false
         }
    }
    handleChange = () => {
        this.setState({
            name:"Close the form",
            active:!this.state.active
        })
    }
  render() {
    return (
      <div>
        <h1>B5</h1>
        <p>Status :"{this.state.active ? <b>Open the form</b> : <b>Close the form</b> }" </p>
        <button onClick={this.handleChange}>Change props</button>
      </div>
    )
  }
}
