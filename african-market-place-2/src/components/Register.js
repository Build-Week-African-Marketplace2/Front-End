import React from "react";
import "./formStyle.css";
import Button from "./Button";


function Register(props){
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        errors,
        onCheckboxChange,
    } = props;

    return (
        

        <div className="base-container">
            <h2 className="Header">
                Register
            </h2>

            <div className="content">
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        {/* <label htmlFor="username">Username</label> */}
                        <input
                            value={values.username}
                            onChange={onInputChange}
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input
                            value={values.email}
                            onChange={onInputChange}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            value={values.password}
                            onChange={onInputChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="terms">Terms of Service</label>
                        <input
                            onChange={onCheckboxChange}
                            name="terms"
                            type="checkbox"
                            checked={values.terms}
                        />
                    </div>

                    <div className="submit">
                        <Button
                            className="btn"
                            disabled={disabled}
                            id="registerBtn"
                        >Register</Button>

                        <div className="errors">
                            <div>{errors.username}</div>
                            <div>{errors.email}</div>
                            <div>{errors.password}</div>
                            <div>{errors.terms}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    )
};

export default Register;