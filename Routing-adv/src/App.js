import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

class App extends Component{
  render(){

    return(
      <BrowserRouter>
      <div class="container-1">
      <div class="box-1">
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category">Category</Link></li>
      </ul>
      </div>
      <div class="box-2">
      <h3>Box-2</h3>
      </div>
      </div>
      <div class="container-2">
      <div class="box-3">
      <h3>hello</h3>
      <br /><p>adadaedcadgjbhknjhnkhbhbn   nbhknbhk ub</p>
      </div>
      <div class="box-4">
      <h3>hello</h3>
      <br /><p>adadaedcadgjbhknjhnkhbhbn   nbhknbhk ub</p>
      </div>
      </div>
      <Switch>
      <Route path="/" exact render={()=>{
        return(
          <h1>Home Page</h1>
        )
      }}/>
      <Route path="/category" exact strict render={()=>{
        return(<div>
          <ul>
          <li><Link to="/category/shoes">Shoes</Link></li>
          <li><Link to="/category/boots">Boots</Link></li>
          <li><Link to="/category/footwear">Footwear</Link></li>
          </ul>
          <Route path="/category/:name" render={({match})=>(
            <div><h3>{match.params.name}</h3></div>
          )} />
      </div>  )
    }}/>
    </Switch>
      </BrowserRouter>
)
  }
}

export default App;
