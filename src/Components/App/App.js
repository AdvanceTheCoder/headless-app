import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Header from '../Elements/Header/Header.jsx'
import Contact from '../Elements/Contact/Contact.jsx';
import Register from '../Elements/Register/Register.jsx';
import Login from '../Elements/Login/Login.jsx';
import About from '../Elements/About/About';
import Article from '../Elements/Articles/Article.jsx';
import Home from '../Home/Home';
import SlideBar from '../Elements/SlideBar/SlideBar';
import Profile from '../Elements/Profile/Profile.jsx';
import Logout from '../Elements/Logout/Logout.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <SlideBar/>
            <Switch>
              <Route path = "/" component = {Home} exact />
              <Route path = "/article" component = {Article} exact />
              <Route path = "/about" component = {About} exact />
              <Route path = "/contact" component = {Contact} exact />
              <Route path = "/user/register" component = {Register} exact />
              <Route path = "/user/login" component = {Login} exact />
              <Route path = "/user/logout" component = {Logout} exact />
              <Route path = "/user/profile" component = {Profile} exact />
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
