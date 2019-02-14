import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[
                {id: 0, name: "admin", pass:"admin"},
                {id: 1, name:"sha", pass:"123"}
              ],
              isAuth: false,
              currentUser: null,
              errors:{
                  hasError: false,
                  errorsObj:{}

              },
              name: ""
         }
    }
    render() { 
        const {name} = this.state;
        return ( 
        <div>
            <input type="text" value={name} name="name" id="name" placeholder="Enter your name here"
            onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})}/>   
        </div> );
    }
}
 
export default Login;