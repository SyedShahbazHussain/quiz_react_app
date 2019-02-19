import React, { Component } from 'react';
import Input from '../Input/Input';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 0, name: "admin", pass: "admin" },
                { id: 1, name: "sha", pass: "123" }
            ],
            isAuth: false,
            currentUser: null,
            errors: {
                hasError: false,
                errorsObj: {}

            },
            name: "",
            pass: "",
        }
    }

    onSubmit =(ev)=>{
        ev.preventDefault();
        const {users} = this.state;
    }
    render() {
        const { name, errors, pass } = this.state;
        return (
            <div>
                <form onSubmit={(ev) => this.onSubmit(ev)}>
                    <Input type="text" value={name} name="name" id="name" label="Username" placeholder="Enter your name here"
                        onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })} errors={errors}
                    />
                    <Input type="password" value={pass} name="pass" id="pass" label="Password" placeholder="Enter your password here"
                        onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })} errors={errors}
                    />
                    <Input
                    type="submit"
                    value="Login"
                    name="my-login-btn"
                    id="my-btn"
                    >
                    </Input>
                </form>

            </div>);
    }
}

export default Login;