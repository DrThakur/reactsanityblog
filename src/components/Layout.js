import React from "react";
import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
import Article from "./Article";
// import { Outlet } from "react-router-dom?;
import styled from "styled-components";

const Layout = (props) => {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MyContainer>
          <Article />
        </MyContainer>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const SidebarContainer = styled.div`
  width: 25%;
  padding: 10px;
`;

const MyContainer = styled.div`
  width: 75%;
  padding: 10px;
`;
// const MyContainer = styled.div`
//   margin: 0;
// `;
