import React, { Component } from 'react'
interface Ex10{
    count: number;
}
interface St{

}

export default class 
B10 extends Component<St,Ex10> {
    constructor(props:Ex10) {
        super(props);
        this.state = { 
            count: 0
         }
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.count<11){
                this.setState({
                    count: (this.state.count + 1)%11
                })
            }
            else {
                this.setState({
                    count: 0
                })
            }
        },1000)
    }
  render() {
    return (
      <div>
        <h1>B10</h1>
        <p>Count : {this.state.count}</p>
      </div>
    )
  }
}
