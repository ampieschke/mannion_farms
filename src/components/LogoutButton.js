import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <span className="loButton" onClick={() => logout()}>
        <i className="fas fa-door-open fa-2x"></i>
      </span>
    )
  );
};

export default LogoutButton;
