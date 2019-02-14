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
         }
    }
    render() { 
        return ( <div>
                Login 
        </div> );
    }
}
 
export default Login;