import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import Footer from "../Footer";


const SignIn = (props) => {

    const { register, handleSubmit, errors, formState : { isDirty, isSubmitting }} = useForm({
        mode: "onChange",
        });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("Data Submitted", data);
        // Api call here
    };

    return (
        <div className="row text-center">
            <Heading />
            <div className="col-sm-12 signup">
                <h3>Rent365 | Sign in</h3>
                <p>Log into your Rent365 account! </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                    {/**<div>
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            name="username"
                            className="username"
                            placeholder="Username"
                            ref={register({
                              required: "Username field is required",
                              maxLength: {
                                value: 20,
                                message: "Username should be maximum length of 20"
                              },
                              minLength: {
                                value: 4,
                                message: "Username should be minimum length of 4"
                              },
                              pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "Username should contain only uppercase or lower case letters"
                               },
                             })}
                            style={{ borderColor: errors.username && "red" }}
                        />
                        { errors.username && <p className="errors" >{errors.username.message}</p> }
                            </div>*/}
                    <div>
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Email"
                            ref={register({
                              required: "Email field is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                              },
                             })}
                            style={{ borderBottomColor: errors.email && "red" }}
                        />
                        { errors.email && <p className="errors" >{errors.email.message}</p> } 
                    </div>
                    <div>
                        <label htmlFor="password1"></label>
                        <input
                            type="password"
                            name="password"
                            className="pswd"
                            placeholder="Password (min 8)"
                            ref={register({
                              required: "Password field is required",
                              minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                              }
                            })}
                            style={{ borderBottomColor: errors.password1 && "red" }}
                        />
                        { errors.password && <p className="errors" >{errors.password.message}</p> }
                    </div>
                    <button
                        className="signBtn"
                        type="submit"
                        disabled={ !isDirty || isSubmitting }
                    >
                        Login
                    </button>
                </form>
                <div className="text-center col-sm-12">
                    <p>Don't have an account?</p>
                    <Link to="/account/signup" className="signin">Register</Link>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default SignIn;