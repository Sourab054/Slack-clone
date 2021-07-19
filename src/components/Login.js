import { Button } from "@material-ui/core";
import { AccountCircle, LockOpen } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <InnerLoginContainer>
        <AccountCircle />
        <h3>Sign into my React Community</h3>
        <div>
          <Button onClick={signIn} variant="contained" color="secondary">
            Sign in with Google
          </Button>
        </div>
      </InnerLoginContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  display: grid;
  place-content: center;
  height: 100vh;
`;

const InnerLoginContainer = styled.div`
  background-color: white;
  height: 400px;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-rows: 3;
  justify-content: center;
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.14);

  > h3 {
    color: gray;
    font-weight: 600;
    text-transform: capitalize;
  }

  > .MuiSvgIcon-root {
    color: gray;
    font-size: 200px;
    place-self: center;
  }

  > div {
    display: grid;
    place-content: center;
  }
`;
