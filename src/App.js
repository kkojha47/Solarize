
import React from "react";
import "./App.css";
import {Route, BrowserRouter as Router, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home"
import Todo from "./Components/Todo"
import About from "./Components/About"
import Login from "./Components/Login"
import Signup from "./Components/Signup"



import desktop from "./media/desktop.jpg"
import kanban from "./media/kanban.jpg"
import postIts from "./media/postIts.jpg"
import logo from "./media/logo.svg"


function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand brand mx-md-5" to="/">
                        <img src={logo} alt={"Logo"} width="50em" height="50em"/>
                        solarize
                    </Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Resources</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold " to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold " to="/signup">Try for free</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="app" style={{height:"calc(100vh-60px)"}}>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>

            </div>
            <nav className="navbar fixed-bottom navbar-dark bg-dark" style={{height:"60px"}}>
                <ul className="navbar-nav m-auto mt-2 mt-lg-0 d-flex flex-row" >
                    <li className="nav-item py-2 px-5">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item py-2 px-5">
                        <Link className="nav-link disabled" to="/">Terms & Privacy</Link>
                    </li>
                    <li className="nav-item py-2 px-5">
                        <Link className="nav-link disabled" to="/">Resources</Link>
                    </li>
                </ul>
            </nav>
        </Router>

    );
}

export default App;
