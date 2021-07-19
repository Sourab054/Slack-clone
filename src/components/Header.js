import { Avatar } from "@material-ui/core";
import { AccessTime, Search, HelpOutline, ExitToApp } from "@material-ui/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()} src={user?.photoURL} />
        <AccessTime />
      </HeaderLeft>
      <HeaderCenter>
        <input type="text" placeholder="Search..." />
        <Search />
      </HeaderCenter>
      <HeaderRight>
        <ExitToApp onClick={() => auth.signOut()} />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  background-color: var(--slack-color);
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.6rem 0;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex: 0.25;
  align-items: center;
  margin-left: 30px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  :hover {
    opacity: 0.9;
  }
`;
const HeaderCenter = styled.div`
  flex: 0.4;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 20px;
  margin-left: 8rem;
  background-color: transparent;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #a8002a;
  color: whitesmoke;

  > input {
    color: whitesmoke;
    min-width: 30vw;
    background: transparent;
    font-size: 15px;
    outline: none;
    border: none;
    ::-webkit-input-placeholder {
      color: whitesmoke;
    }
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 50px;
  }
`;
