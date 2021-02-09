import React from 'react';
import {Link} from "react-router-dom";
import logo from "../media/logo.svg";

export default function Login(){
    return(
        <div className="mx-auto shadow bg-light rounded w-50">
            <form className="m-auto py-5 w-75">
                <Link className="navbar-brand brand mb-5 text-center w-100" to="/">
                    <img src={logo} alt={"Logo"} width="50em" height="50em"/>
                    solarize
                </Link>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-block font-weight-bold text-xl-center p-2" style={{backgroundColor:"#81b395", color:"#ffffff"}}>Sign In</button>
                <p className="forgot-password text-right">
                    <Link to="/">Forgot password?</Link>
                </p>
            </form>
        </div>

    );
}
