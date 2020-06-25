import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import "./formStyle.css";
import Button from "./Button";
import * as yup from "yup";
import axios from "axios";


const initialValues = {
    username: "",
    password: "",
};

const initialErrors = {
    username: "Username is a required field",
    password: "Password is a required field",
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
})


function Login(props){

    const history = useHistory();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    useEffect(() => {
        formSchema.isValid(values).then(valid => {
          setDisabled(!valid)
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

    const onSubmit = (evt) => {
        evt.preventDefault();

        axios()
          .post(
            "https://bw-african-marketplace-lucas.herokuapp.com/api/auth/login",
            values
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/protected");
          })
          .catch((err) => console.log(err));
        setValues({
          username: "",
          password: "",
        });
    };



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

                <div>
                    <p>Dont't have an account ? <Link to="/register">Register here</Link></p>
                </div>
            </div>
        </div>
    )
};

export default Login;