import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { Forum, InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectroomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectroomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>#{roomDetails?.data().name}</h4>
              <Forum />
            </HeaderLeft>
            <HeaderRight>
              <InfoOutlined />
              <p>Details</p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImg } = doc.data();
              return (
                <Message
                  key={doc.id}
                  user={user}
                  userImg={userImg}
                  message={message}
                  timestamp={timestamp}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 59px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: lightgrey;
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    margin-right: 5px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;

  > p {
    font-size: 14px;
    margin-left: 5px;
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const ChatMessages = styled.div``;
