import React from 'react';
import {Link} from "react-router-dom"
import logo from "../media/logo.svg";

export default function Signup(){
    return(
        <div className="mx-auto shadow bg-light rounded w-50">
            <form className="m-auto py-5 w-75">
                <Link className="navbar-brand brand mb-5 text-center w-100" to="/">
                    <img src={logo} alt={"Logo"} width="80em" height="80em"/>
                    <h2 className="font-weight-bold ">solarize</h2>
                </Link>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-block font-weight-bold text-xl-center p-2" style={{backgroundColor:"#81b395", color:"#ffffff"}}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in?</Link>
                </p>
            </form>
        </div>

    );
}
