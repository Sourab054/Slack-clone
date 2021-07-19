import styled from "styled-components";
import React from "react";
import {
  FiberManualRecord,
  Create,
  Inbox,
  InsertComment,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import SidebarOptions from "./SidebarOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>React Community</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
      <SidebarOptions Icon={Drafts} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #eff8ff;
  flex: 0.3;
  border-top: 1px solid #adb5bd;
  margin-top: 59px;

  > hr {
    height: 0px;
    margin: 10px 0;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid #adb5bd;

  > .MuiSvgIcon-root {
    border-radius: 50%;
    background-color: whitesmoke;
    color: var(--slack-color);
    padding: 7px;
    font-size: 20px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
    letter-spacing: 0.7px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    align-items: center;
    font-weight: 500;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 15px;
    margin-top: 1px;
    margin-right: 2px;
    color: #29bb89;
  }
`;
