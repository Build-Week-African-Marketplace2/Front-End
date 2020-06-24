import React, {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import loginFormSchema from "./loginFormSchema";
import axios from "axios";
import registerFormSchema from "./registerFormSchema";
import * as Yup from 'yup';




const initialLoginValues = {
  username: "",
  password: "",
};

const initialLoginErrors = {
  username: "",
  password: "",
};

const initialRegisterValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialRegisterErrors = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialUsers = [];
const initialRegisterDisabled = [];
const initialLoginDisabled = [];



function App() {
  // Register
  const [users, setUsers] = useState(initialUsers);
  const [registerValues, setRegisterValues] = useState(initialRegisterValues);
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
  const [registerDisabled, setRegisterDisabled] = useState(initialRegisterDisabled);

  const register = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
    .then (res => {
      setUsers([...users, res.data])
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setRegisterValues(initialRegisterValues)
    })
  };

  const registerOnInputChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(registerFormSchema, name)
      .validate(value)
      .then(() => {
        setRegisterErrors({
          ...registerErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setRegisterErrors({
          ...registerErrors,
          [name]: err.errors[0] 
        })
      })

    setRegisterValues({
      ...registerValues,
      [name]: value 
    })
  };

  const registerOnCheckboxChange = evt => {
    const {checked} = evt.target

    setRegisterValues({
      ...registerValues,
      terms: checked,
    })
  };

  const registerOnSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: registerValues.username.trim(),
      email: registerValues.email.trim(),
      password: registerValues.password.trim(),
      terms: registerValues.terms,
    };

    register(newUser)
  };

  useEffect(() => {
    registerFormSchema.isValid(registerValues).then(valid => {
      setRegisterDisabled(!valid);
    })
  }, [registerValues]);




  //Login
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);

  const login = user => {
    axios.post("https://reqres.in/api/users", user)
    .then(res => {
      setUsers([...users, res.data])
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoginValues(initialLoginValues)
    })
  };

  const loginOnInputChange = evt => {
    const { name, value } = evt.target

  
    Yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({
          ...loginErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0] 
        })
      })

    setLoginValues({
      ...loginValues,
      [name]: value 
    })
  };

  const loginOnSubmit = evt => {
    evt.preventDefault()

    const user = {
      username: loginValues.username.trim(),
      password: loginValues.password.trim(),
    }

    login(user)
  };

  useEffect(() => {
    loginFormSchema.isValid(loginValues).then(valid => {
      setLoginDisabled(!valid)
    })
  }, [loginValues]);


  return (
    
    <div className="App">

      
      <Navbar/>
      
      <Switch>
        
        
        <Route path="/register">
          <Register
              values={registerValues}
              onInputChange={registerOnInputChange}
              onCheckboxChange={registerOnCheckboxChange}
              onSubmit={registerOnSubmit}
              disabled={registerDisabled}
              errors={registerErrors}
          />
          
        </Route>

        <Route path="/login">
            <Login 
              values={loginValues}
              disabled={loginDisabled}
              errors={loginErrors}
              onInputChange={loginOnInputChange}
              onSubmit={loginOnSubmit}
            />
        </Route>
      </Switch>
      
    </div>
      

      
      
    
  );
}

export default App;
