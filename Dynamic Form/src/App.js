import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';

class App extends Component{
state = {
  email: "",
  password: ""
};


changeEmailHandler = (event) =>{
  this.setState({
    email: event.target.value
  });
}

changePasswordHandler = (event) =>{
this.setState({
  password: event.target.value
  });
}

submitHandler = () => {
  const {email,password}=this.state;
  alert('Signed up with email: ${email} password: ${password}');
};

render() {
  const {email, password} =this.state;
  const isEnabled=email.length>0 && password.length>0;
  return(
    <Form submit={this.submitHandler} email={this.changeEmailHandler} pass={this.changePasswordHandler} disable={!isEnabled} />
  )
}
}
export default App;
