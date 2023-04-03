import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ComingSoon = ({ expanded, from }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Container expanded={expanded}>
        Coming Soon..
        <span>This feature will soon be active</span>
      </Container>
      <MyLink>
        <Link to="/" onClick={handleGoBack}>
          Click to Go Back to previous page
        </Link>
      </MyLink>
    </>
  );
};

export default ComingSoon;

const Container = styled.div`
  // background: #fff;
  color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flow-direction: column;
  margin: 0 auto;
  margin-top: 200px;
  font-size: 40px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-top: ${({ expanded }) => (expanded ? "200px" : "250px")};
    transition: margin-top 0.5s ease-in-out;
  }
`;

const MyLink = styled.a`
  color: black;
  background: red;
  margin-left: 520px;

  &:hover {
    background: grey;
    color: white;
  }
  @media screen and (max-width: 768px) {
    margin-left: 200px;
  }
`;
