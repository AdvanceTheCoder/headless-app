import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';


class Contact extends Component{

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
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
        console.log(this.state.name);
        axios.post('http://backeddrupal.test/contact_message/?_format=json', {
            contact_form: [{"target_id":"feedback"}],
            name: [{"value": this.state.name}],
            mail: [{"value": this.state.email}],
            subject: [{"value": this.state.subject}],
            message: [{"value": this.state.message}]
            });
    }


    render(){

        const {name,email,subject,message} = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><input name='name' value = {name} onChange={this.handleChange} required type ='text' placeholder='Enter name'/></div>
                    <div><input name='email' value = {email} onChange={this.handleChange} required type ='email' placeholder='Enter email'/></div>
                    <div><input name='subject' value = {subject} onChange={this.handleChange} required type ='text' placeholder='Enter subject'/></div>
                    <div><textarea name='message' value = {message} onChange={this.handleChange} type ='text' placeholder='Enter message'/></div>
                    <button type ='submit' >Send Message</button>
                </form>
            </div>
        );
    }
};

export default Contact;