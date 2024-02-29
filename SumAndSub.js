import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={}

  }
  doSum()
  {
    var a=parseInt(this.state.txt1);
    var b=parseInt(this.state.txt2);
    var c=a+b;
    this.setState({ans:"Sum is "+c})


  }
  doSub()
  {
    var a=parseInt(this.state.txt1);
    var b=parseInt(this.state.txt2);
    var c=a-b;
    this.setState({ans:"Sum is "+c})


  }
  render()
  {
    return(<>
    No1<input type="text" onChange={(e)=>this.setState({ txt1: e.target.value})} /><br />
    No2<input type="text" onChange={(e)=>this.setState({ txt2: e.target.value})} /><br />
    <input type="button" value="Sum" onClick={this.doSum.bind(this)} />
    <input type="button" value="Sub" onClick={this.doSub.bind(this)} />
    {this.state.ans}
    

</>)
  }
}
export default App;