import React from 'react';
import {Link} from "react-router-dom"
import logo from "../media/logo.svg";
import {Formik} from "formik";
import * as Yup from "yup";


const Signup = () => (
    <Formik
        initialValues={{  fname: "", lname:"", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            fname: Yup.string().required("Required"),
            lname: Yup.string().required("Required"),
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <div className="mx-auto shadow bg-light rounded w-50">
                    <form className="m-auto py-5 w-75" onSubmit={handleSubmit}>
                        <Link className="navbar-brand brand mb-5 text-center w-100" to="/">
                            <img src={logo} alt={"Logo"} width="80em" height="80em"/>
                            <h2 className="font-weight-bold ">solarize</h2>
                        </Link>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="fname"
                                value={values.fname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className= {`form-control ${errors.email && touched.email && 'error'}`}
                            />
                            {errors.fname && touched.fname && (
                                <div className="input-feedback">{errors.fname}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name= "lname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className= {`form-control ${errors.email && touched.email && 'error'}`}
                            />
                            {errors.lname && touched.lname && (
                                <div className="input-feedback">{errors.lname}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className= {`form-control ${errors.email && touched.email && 'error'}`}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.password && touched.password && 'error'}`}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-block font-weight-bold text-xl-center p-2 my-5"
                            style={{backgroundColor:"#81b395", color:"#ffffff"}}>
                            Sign Up
                        </button>
                        <p className="forgot-password text-right">
                            Already registered <Link to="/login">sign in?</Link>
                        </p>
                    </form>
                </div>

            );
        }}
    </Formik>
);

export default Signup;
