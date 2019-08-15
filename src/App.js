import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/login";
import "./App.css"
export default class  extends Component {
  render() {
    return <Router>
      {/*Switch 只会匹配一个 第一个匹配到就不看其他了的*/}
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
      </Switch>
    </Router>;
  }
}