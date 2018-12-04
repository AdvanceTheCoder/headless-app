import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

    state = {
        name: '',
        email: '',
        date: ''
    }

    componentDidMount() {
        let uid = localStorage.getItem('uid');
        let auth = localStorage.getItem('auth');
        this.serverRequest = axios.get('http://backenddrupal.test/user/' + uid + '?_format=json', {
            headers: {"Authorization":"Basic " + auth}
        })
        .then(result =>{
        let userDate = new Date(parseInt(result.data.created["0"].value, 10)*1000);
        this.setState({
            'name': result.data.name["0"].value,
            'email': result.data.mail["0"].value,
            'date': userDate.toISOString()
        });
        })
    }

    render(){
        return (
        <div>
            <div>
            <div>
                <h4>
                User Profile
                </h4>
                <p><strong>Username:</strong>&nbsp;{this.state.name}</p>
                <p><strong>Email:</strong>&nbsp;{this.state.email}</p>
                <p><strong>Date:</strong>&nbsp;{this.state.date}</p>
            </div>
            </div>
        </div>
        );
    }
}

export default Profile
