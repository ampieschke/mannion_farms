import React from "react";
import "./App.css";
import LoginButton from "./components/loginButton/LoginButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Profile from "./components/Profile";
import Header from "./components/header/Header";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Articles from "./components/articles/Articles";
import HallofRecords from "./components/hallOfRecords/HallofRecords";
import Standings from "./components/standings/Standings";
import NavFoot from "./components/navFoot/NavFoot";

function App() {
  const { isLoading } = useAuth0();
  // const { user } = useAuth0();

  if (isLoading) return <div>Loading ... </div>;

  return (
    <>
      <Header />
      <Container>
        <LoginButton />
      </Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/HallofRecords" component={HallofRecords} />
          <Route exact path="/standings" component={Standings} />
        </Switch>
      </Router>
      <NavFoot />
    </>
  );
}

export default App;
