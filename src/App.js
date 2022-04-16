import React from "react";
import axios from "axios";
import "./App.css"


class App extends React.Component {
  
    state ={advice: ""}
 
//So i'm choosing to go with fetch and catch method since that's what this class teaches but everything i've marked out
//is the method to display JSON api using async await method
  componentDidMount() {
    /*this.inputAdvice()*/
    this.fetchAdvice()
  }

  /*async inputAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice")
    
    this.setState({advice: response.data.slip.advice})
    
  }*/

  //fetch and catch method can be used in place of async await
 fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      const {advice} = response.data.slip;

      this.setState({advice})
        
    })
    .catch((error) => {
        console.log(error)
    })
  }

  render() {
    const {advice} = this.state;
    return(
      /*<h1>{this.state.advice}</h1>*/
      <div className="App">
        <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>
          <span>I want an Advice</span>
        </button>
        </div>
      </div>
      
    )
  }
}





export default App