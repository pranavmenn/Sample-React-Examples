import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Redirect, Prompt  } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) =>{
  return(<h1>User1 {params.username}</h1>);
}
class App extends Component{

  state={
    loggedIn:false
  }

  loginHandler = () => {
    this.setState(prevState =>({
      loggedIn: !prevState.loggedIn
    }))
  }
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      <ul>
      <li><NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
      <li><NavLink to="/about/" exact activeStyle={{color:'green'}}>About</NavLink></li>
      <li><NavLink to="/user/John" exact activeStyle={{color:'green'}}>John</NavLink></li>
      </ul>
      <Prompt when={!this.state.loggedIn} message={(location)=>{
        return location.pathname.startsWith('/user') ? 'Not logged in' : true
      }} />
      <input type="button" value={this.state.loggedIn ? "Logout" : "Login"} onClick={this.loginHandler.bind(this)} />
      <br />
      <input type="button" value="Go back" onClick={history.goBack} />
      <Route path="/" exact render={
        ()=>{
          return(<h1>Welcome</h1>);
        }
      } />

      <Route path="/about/" exact strict render={
        ()=>{
          return(<h1>About</h1>);
        }
      } />

      <Route path="/user/:username" exact strict render={({match})=>(
        this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
      )}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
