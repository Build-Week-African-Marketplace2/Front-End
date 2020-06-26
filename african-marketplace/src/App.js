import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import HomePage from "./components/homePage";
import AddItem from "./components/Forms/addProductForm";
import PrivateRoute from "./utils/privateRoute";
import styled from "styled-components";
import styledProperty from "styled-property";
import "./App.css";

const Wrapper = styled.div`
  background: lightgreen;
  color: 
`;

const TopNav = styled.nav`
  background-color: black;
`;

const NavB = styled.ul`
  display: flex;
  margin: 0;
  justify-content: space-around;
  align-items: center;
`;
const Name = styled.h1`
  font-size: 2em;
  color: white;
`;

const MLink = styled(Link)`
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;
const StyledLink = styledProperty(MLink)`
color: white;
`;

function App() {
  return (
    <Router>
      <Wrapper className="App">
        <header>
          <TopNav>
            <NavB>
              <Name>African Marketplace</Name>

              <StyledLink className="login" to="/">
                Login
              </StyledLink>

              <StyledLink className="protected" to="/HomePage">
                Products
              </StyledLink>

              <StyledLink className="protected" to="/additem">
                Add a New Product
              </StyledLink>
              <StyledLink href="linkM" >
                Home
              </StyledLink>
            </NavB>
          </TopNav>
          <Switch>
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/HomePage" component={HomePage} />
            <PrivateRoute path="/addItem" component={AddItem} />
          </Switch>
        </header>
      </Wrapper>
    </Router>
  );
}

export default App;
