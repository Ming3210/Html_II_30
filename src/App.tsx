import React, { Component } from 'react'
import Child from './components/Child';
import B1 from './components/B1';
import B2 from './components/B2';
import B3 from './components/B3';
import B4 from './components/B4';
import B5 from './components/B5';
import App from './components/B6'
import B7 from './components/B7';
import B8 from './components/B8';
import B9 from './components/B9'
import B10 from './components/B10'

interface Component1{
name: string;
phone: number;
count:number
active:boolean
}
interface St{

}

export default class  
 extends Component<St,Component1> {
  // constructor(props:Component1) {
  //   super(props);
  //   this.state = { 
  //     name:"MINH",
  //     phone:123456789,
  //     count:0,
  //     active:true
  //    }
  // }
  
  // componentWillMount(): void {
  //     console.log("111111111");
  //     //chạy cuối cùng khi xóa khỏi dom nên thường dùng để clear timeout... xóa khỏi bộ nhớ
  //   }
    
  // componentDidMount(): void {
  //     console.log("222222222222222");
  //      // Có thể thực hiện tương tác vs DOM
  //     //Nơi lí tưởng để lấy API
  // }
  // shouldComponentUpdate(nextProps: Readonly<St>, nextState: Readonly<Component1>, nextContext: any): boolean {
  //     return true
  // }
  // componentWillUpdate(nextProps: Readonly<St>, nextState: Readonly<Component1>, nextContext: any): void {
  //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  //     //Chạy trc re-render nên cx dùng để tính toán lại state hoặc props
      
  // }
  // componentDidUpdate(prevProps: Readonly<St>, prevState: Readonly<Component1>, snapshot?: any): void {
  //     console.log("12121212");
  //    //Chạy sau khi comopnent re-render
  //    //Các phần tử cửa component nó đc gắn kết vào DOM cho nên có thể tương tác vs DOM
  // }
  
  // //Phương thức thay đổi state
  // //Khi muốn thay đổi state đối vs class 
  // handleClick = ()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }
  // handleRemove = ()=>{
  //   this.setState({
  //     active:!this.state.active
  //   })
  // }
  render() {
    console.log("re-render");
    
    return (
      <div>
        {/* {this.state.name} */}
        {/* 
        1. Taoj class component
        Khởi tạo state.props
        2. Giai đoạn mounting ( găn vào,thêm vào)
        - Cung cấp các phương thức mặc định
        - 
        3. Giai đoạn update
        - shouldCoponentUpdate, return về true hoặc false, nếu ko khai báo hàm mặc định là true
        - componentWillUpdate
        - componentDidUpdate
        Upate sảy ra khi state thay đổi
        Giai đoạn unmounting
        -Khi component bị xóa bỏ khỏi dom



        */
        
        }
        {/* {this.state.active?<Child></Child> : "" }
        <button onClick={this.handleRemove}>Child</button>
        <p >{this.state.count}</p>
        <button onClick={this.handleClick}>Count</button> */}
        <B1></B1>
        <B2></B2>
        <B3></B3>
        <B4></B4>
        <B5></B5>
        <App></App>
        <B7></B7>
        <B8></B8>
        <B9></B9>
        <B10></B10>
        <br /><br /><br />
        
      </div>
    )
  }
}
