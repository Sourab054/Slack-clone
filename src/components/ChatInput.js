import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelId, channelName }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMsg = (e) => {
    e.preventDefault();
    if (!channelId || input === "") {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      user: user.displayName,
      userImg: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Type here...`}
        />
        <Button hidden type="submit" onClick={sendMsg}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border-radius: 7px;
    padding: 15px;
    border: 1px solid gray;
  }

  > form > button {
    display: none;
  }
`;
