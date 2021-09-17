import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Articles from "./components/Articles";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading ... </div>;

  return (
    <>
      <Header />
      <Container>
        <LoginButton />
        <Profile />
        <Articles />
      </Container>
    </>
  );
}

export default App;
