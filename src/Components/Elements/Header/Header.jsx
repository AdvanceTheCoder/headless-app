import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


class Header extends Component{

    state = {

        username: localStorage.getItem('username'),
        displayMenu: false
    };
    
    componentWillReceiveProps() {
        this.setState({
            'username': localStorage.getItem('username')
        });
    }

    showDropdown = (e) =>{
        e.preventDefault();
        this.setState({displayMenu:true}, ()=>{
            document.addEventListener('click', this.hideDropdown);
        });
    };

    hideDropdown = (e) =>{
        e.preventDefault();
        this.setState({displayMenu:false}, ()=>{
            document.removeEventListener('click',this.hideDropdown);
        });
    };

    renderUserLinks = () => {
        let loggedIn = localStorage.getItem('auth');
        if (loggedIn) {
            return (

                this.state.displayMenu? (
                    <ul className='dropdown-content'>
                        <li><Link to = '/user/profile'>Profile</Link></li>
                        <li><Link to = '/user/logout'>Logout</Link></li>
                    </ul>
                    ): null
            );
        }
        else {
            return (
                
                this.state.displayMenu? (
                    <ul className='dropdown-content'>
                        <li><Link to = '/user/register'>Register</Link></li>
                        <li><Link to = '/user/login'>Login</Link></li>
                    </ul>
                    ): null
            );
        }
    }

    render(){

        var userLinkTitle = this.state.username ? this.state.username : 'User';
        return(
            <div className = 'header-wrapper'>
                <ul className='header-content'>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = '/article'>Articles</Link></li>
                    <li><Link to = '/about'>About</Link></li>
                    <li><Link to = '/contact'>Contact</Link></li>
                    <li className = 'dropdown-menu'>
                        <div className='dropdown-btn' onMouseMove = {this.showDropdown}>{userLinkTitle}</div>
                        {this.renderUserLinks()}
                    </li>
                </ul>
            </div>
        );
    }
};

export default Header;