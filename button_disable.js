import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={no1:0}



  }
  increament(e)
  {
    if(this.state.no1>9)
    {
      document.getElementById("inc").disabled = true;
      alert("Sorry");
    }
    
    else{
      this.setState({no1:this.state.no1+1})
    }
    if(this.state.no1>-1)
    {
      document.getElementById("dec").disabled = false;
    }
  }
 decreament(e)
  {
    if(this.state.no1<1)
    {
      document.getElementById("dec").disabled = true;
      alert("Sorry");
    }
  
    else{
      this.setState({no1:this.state.no1-1})
    }
    if(this.state.no1>1)
    {
      document.getElementById("inc").disabled = false;
    }
  }
  render()
  {
    return(<>
    <h1>{this.state.no1}</h1>
    <input type="button" onClick={this.increament.bind(this)} id="inc" value="+" />
    <input type="button" onClick={this.decreament.bind(this)} id="dec" value="-" />

    </>)
  }
}
export default App;