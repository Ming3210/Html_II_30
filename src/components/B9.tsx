import React, { Component } from 'react'
interface Ex9{
    time:string
}
interface St{

}

export default class 
B9 extends Component<St,Ex9> {
    constructor(props:Ex9){
        super(props)
        this.state = { 
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(): void {
      setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString() });
      }, 1000);
    }
    
  render() {
    return (
      <div>
         <h1>B9</h1>
        <p>{this.state.time}</p>
      </div>
    )
  }
}
