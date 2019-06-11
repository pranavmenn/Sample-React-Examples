import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter'
class App extends Component{
  state = {
    ctr: 0
  }

  counterHandler = (event) =>{
    this.setState({
      ctr: ++this.state.ctr
    })

    console.log(this.state.ctr);
  }
  render(){
    return(
      <div className="App">
      <h1>Click</h1>
      <button onClick={this.counterHandler}>Click</button>
      <Counter counter={this.state.ctr} />
      </div>
    );
  }
}

export default App;
