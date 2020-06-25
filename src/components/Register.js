import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import "./formStyle.css";
import Button from "./Button";


const initialValues = {
    username: "",
    password: "",
    name: "",
};

const initialErrors = {
    username: "Username is a requierd field",
    password: "Password is a required field",
    name: "Name is a required field",
};

const initialDisabled = [];

const formSchema = yup.object().shape({
    
    username: yup
    .string()
    .min(3, "Username must have at least 3 characters.")
    .required("Required!"),

    password: yup
    .string()
    .min(6, "Password must have at least 6 characters.")
    .required("Required!"),

    name: yup
    .string()
    .min(2, "Name must have at least 2 characters.")
    .required("Required!"),
});


function Register(props){

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    useEffect(() => {
        formSchema.isValid(values).then(valid => {
          setDisabled(!valid);
        })
    }, [values]);

    const onInputChange = evt => {
        const { name, value } = evt.target
    
        yup
          .reach(formSchema, name)
          .validate(value)
          .then(() => {
            setErrors({
              ...errors,
              [name]: ""
            })
          })
          .catch(err => {
            setErrors({
              ...errors,
              [name]: err.errors[0] 
            })
          })
    
        setValues({
          ...values,
          [name]: value 
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios()
          .post(
            "https://bw-african-marketplace-lucas.herokuapp.com/api/auth/register",
            values
          )
          .then((res) => {
            console.log(res.data);
            setValues({
              username: "",
              password: "",
              name: "",
            });
          });
      };

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
                        {/* <label htmlFor="name">Name</label> */}
                        <input
                            value={values.name}
                            onChange={onInputChange}
                            name="name"
                            type="text"
                            placeholder="Full Name"
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
                            <div>{errors.password}</div>
                            <div>{errors.name}</div>
                        </div>
                    </div>
                </form>

                <div>
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
        
    )
};

export default Register;