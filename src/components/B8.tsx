import React, { Component } from 'react'
interface Ex8{
    title:string
}
interface St{

}

export default class 
B8 extends Component<St,Ex8> {
    constructor(props:Ex8){
        super(props);
        this.state = {
            title:""
         }
    }
    handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title:e.target.value
        })
    }
    componentDidUpdate(): void {
        document.title = this.state.title
    }
  render() {
    return (
      <div>
        <h1>B8</h1>
        <label htmlFor="">Nhập tiêu đề</label>
        <input onChange={this.handleTitle} type="text" />
      </div>
    )
  }
}
