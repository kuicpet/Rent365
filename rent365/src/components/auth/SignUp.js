import React from "react";
import { useForm } from "react-hook-form";


const SignUp = (props) => {

    const { register, handleSubmit, errors, getValues, formState : { isDirty, isSubmitting }} = useForm({
        mode: "onChange",
        });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("Data Submitted", data);
        // Api call here
    };

    return (
        <div className="row text-center">
            <div className="col-sm-12 signup">
                <h3>Rent365 | Sign up</h3>
                <hr/>
                <p>Create your Rent365 account! </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
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
                    </div>
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
                            style={{ borderColor: errors.email && "red" }}
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
                            style={{ borderColor: errors.password1 && "red" }}
                        />
                        { errors.password && <p className="errors" >{errors.password.message}</p> }
                    </div>
                    <div>
                        <label htmlFor="password2"></label>
                        <input
                            type="password"
                            name="confirm_password"
                            className="pswd"
                            placeholder="Confirm password"
                            ref={register({
                              required: "Confirm Password field is required",
                              validate: (value) => value === getValues().password || "Passwords donot match",
                             })}
                            style={{ borderColor: errors.confirm_password && "red" }}
                        />
                        { errors.confirm_password && <p className="errors" >{errors.confirm_password.message}</p> }
                    </div>
                    <button
                        className="signBtn"
                        type="submit"
                        disabled={ !isDirty || isSubmitting }
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;