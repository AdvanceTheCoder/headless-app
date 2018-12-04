import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

class Register extends Component{

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        success: '',
        error: '',
        redirect: false
    };
    
    handleChange = (event) =>{
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        })
    }

    handleSubmit = (event) =>{

        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                'success': '',
                'error': 'Passwords do not match'
            });
            return;
        }

        axios.post('http://backenddrupal.test/user/register?_format=json', {
            name: [{"value": this.state.username}],
            mail: [{"value": this.state.email}],
            pass: [{"value": this.state.password}]
        })
        .then(response =>{
            this.setState({
                'success': 'Registration successful',
                'error': ''
            });
            this.setState({redirect: true});
        });
    }

    render(){

        const {username, email, password, confirmPassword,redirect} = this.state;

        if (redirect) {
            return (
                <Redirect to="/user/login" />
            );
        }

        return(
            <div>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <div><input name = 'username' value={username} onChange={this.handleChange} required type ='text' placeholder='Enter username'/></div>
                    <div><input name = 'email' value={email} onChange={this.handleChange} required type ='text' placeholder='Enter email'/></div>
                    <div><input name = 'password' value={password} onChange={this.handleChange} required type ='password' placeholder='Enter password'/></div>
                    <div><input name = 'confirmPassword' value={confirmPassword} onChange={this.handleChange} required type ='password' placeholder='Confirm password'/></div>
                    <button type ='submit'>Register</button>
                    <p>{this.state.success}</p>
                    <div><Link to="/user/login">Already have an account?</Link></div>
                </form>
            </div>
        );
    }
};

export default Register;