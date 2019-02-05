import React, { Component} from 'react';

class SignIn extends Component{
    render() {
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.HandelSubmit}>
            <div className="FormFields">
                <label className="FormFields__Label" htmlFor="email">E-mail address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
            </div>

            <div className="FormFields">
                <label className="FormFields__Label" htmlFor="name">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
            </div>

            <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button> <a href="#" className="FormField__Link">Create an account</a>

            </div>



            </form>
            </div>
        );
    }
}

export default SignIn;