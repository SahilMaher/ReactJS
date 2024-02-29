import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={no1:0}
}
  render()
  {
    return(<>
    <h1>{this.state.no1}</h1>
    <input type="button" onClick={()=>this.setState({no1:this.state.no1+1})} value="+" />
    <input type="button" onClick={()=>this.setState({no1:this.state.no1-1})} value="-" />

    </>)
  }
}
export default App;