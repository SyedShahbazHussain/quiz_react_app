import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login/Login";

class Router extends Component{
    render(){
        return(
        <BrowserRouter> 
        <Route path="/" component={Login} />
        </BrowserRouter>
        )
    }
}

export default Router; 