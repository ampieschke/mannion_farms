import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <span className="loButton" onClick={() => logout()}>
        Log Out
      </span>
    )
  );
};

export default LogoutButton;
