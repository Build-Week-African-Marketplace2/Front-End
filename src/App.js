import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {

  return (
    
    <div className="App">

      <Navbar/>
      
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
            <Login />
        </Route>
      </Switch>

    </div> 
  );
};

export default App;
