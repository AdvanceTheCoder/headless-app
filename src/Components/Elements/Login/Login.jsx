import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

import {
Link,
Redirect
} from 'react-router-dom';

class Login extends Component {

    state = {
        username: '',
        password: '',
        success: '',
        error: '',
        redirect: false
    };

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email);
        axios.post('http://backenddrupal.test/user/login?_format=json', {
            name: this.state.username,
            pass: this.state.password
        })
        .then(response => {
            this.setState({
            'success': 'Login successful',
            'error': ''
            });

            localStorage.setItem('username', response.data.current_user.name);
            localStorage.setItem('uid', response.data.current_user.uid);
            localStorage.setItem('csrf_token', response.data.csrf_token);
            localStorage.setItem('logout_token', response.data.logout_token);
            localStorage.setItem('auth', window.btoa(this.state.username + ':' + this.state.password));

            this.setState({redirect: true});
        });
        
    }

    render(){

        if (this.state.redirect) {
            return (
                <Redirect to="/" />
            );
        }

    return (
        <div> 
            <form className='login-form' onSubmit={this.handleSubmit}>
                <div><input name="username" value={this.state.username} onChange={this.handleChange} required type="text" placeholder="Enter username" /></div>
                <div><input name="password" value={this.state.password} onChange={this.handleChange} required type="password" placeholder="Enter password" /></div>
                <button type="submit" >Login</button>
                <p>{this.state.success}</p>
                <div>
                    <Link to="/user/register">Don't have an account?</Link>
                </div>
            </form>
        </div>
        );
    }
}

export default Login
