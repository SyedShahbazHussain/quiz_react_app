import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './pages/SignInForm';
import './App.css';
 

class App extends Component {
  render(){
    return (

 
 <Router>
  <Route exact path="/" component={SignIn}>
  </Route>
  <Route path="/sign-In">
   <h1> There is SignIn page
   </h1>
  </Route>

  </Router>
   

   )
  }    
}

export default App;
