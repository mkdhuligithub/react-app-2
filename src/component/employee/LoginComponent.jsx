import React, { Component } from 'react'
import AuthenticationService from '../../service/AuthenticationService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'training',
            password: 'Java2020',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {

        // Fake login logic
        if ((this.state.username === "training") && (this.state.password === "Java2020")) {
            // Login success, go to employees page
            this.props.history.push(`/employees`)
        } else {
            // Login failed, go back to login again
            this.props.history.push(`/login`)
        }

        //AuthenticationService
        //    .executeBasicAuthenticationService(this.state.username, this.state.password)
        //    .then(() => {
        //        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //        this.props.history.push(`/employees`)
        //    }).catch(() => {
        //    this.setState({ showSuccessMessage: false })
        //    this.setState({ hasLoginFailed: true })
        //})
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}
export default LoginComponent