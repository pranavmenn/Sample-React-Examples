import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/Form'
class App extends Component{
  option=['apple','orange','cherry','pear','peach'];
  state = {multiline: '', comma: ''}
  commaHandler = (event) =>{
    const {value} = event.target
    this.setState({
      comma:value ,
      multiline: value.split(',').join('\n')
    })
  }
  multilineHandler = (event) => {
    const {value} = event.target
    this.setState({
      multiline: value,
      comma: value.split('\n').join(',')
    })
  }

  render(){
    const {comma, multiline}=this.state
    return(
      <Form val={comma} change={this.commaHandler} changeText={this.multilineHandler} rows={this.option.length} text={multiline} multitext={comma} val={this.option} />
    )
  }

  }


export default App;
