import React from "react";
import "./formStyle.css";
import Button from "./Button";



function Login(props){
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        errors,
    } = props;

    return (

       

        <div className="base-container">

            <h2 className="header">
                Login
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
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            value={values.password}
                            onChange={onInputChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="submit">
                        <Button  
                            className="btn" 
                            disabled={disabled} 
                            id="loginBtn"
                        >Login</Button>
                        <div className="errors">
                            <div>{errors.username}</div>
                            <div>{errors.password}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    )
};

export default Login;