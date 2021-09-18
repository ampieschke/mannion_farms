import "./LoginButton.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        <img
          className="logInLogo"
          src="./assets/images/mannionLogo.png"
          alt="mannion farms logo"
        ></img>
        <button className="logInButton" onClick={() => loginWithRedirect()}>
          LOG IN
        </button>
      </div>
    )
  );
};

export default LoginButton;
