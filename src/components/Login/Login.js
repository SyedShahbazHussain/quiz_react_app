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
              name: "",
              pass: "",
         }
    }
    render() { 
        const {name, errors, pass} = this.state;
        return ( 
        <div>
            <form onSubmit={(ev) => this.onSubmit(ev)}>
            
            <input type="text" value={name} name="name" id="name" label="Username" placeholder="Enter your name here"
            onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} errors={errors}
            />   
            <input type="password" value={pass} name="pass" id="pass" label="Password" placeholder="Enter your password here"
            onChange={(ev)=> this.setState({[ev.target.name]:ev.target.value})} errors={errors}
            />  
            </form>
        </div> );
    }
}
 
export default Login;