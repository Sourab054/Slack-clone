import React from "react";
import styled from "styled-components";

const Message = ({ message, timestamp, user, userImg }) => {
  return (
    <MessageContainer>
      <MessageInfo>
        <img src={userImg} alt="" />
        <div>
          <h4>
            {user} {""}
            <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          </h4>
          <p>{message}</p>
        </div>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

const MessageInfo = styled.div`
  display: flex;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 10%;
  }
  > div > p {
    font-size: 14px;
  }
  > div > h4 {
    font-weight: 600;
    margin-bottom: 2px;
  }
  > div > h4 > span {
    color: gray;
    font-size: 10px;
    font-weight: 600;
    margin-left: 4px;
  }
`;
