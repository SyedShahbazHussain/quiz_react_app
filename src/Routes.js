import React, {Component} from "React";
import {BrowserRoute, Route} from "react-router-dom";

class Router extends Component{
    render(){
        <BrowserRoute> 
        <Route path="" component={Login} />
        </BrowserRoute>
    }
}

export default Route; 