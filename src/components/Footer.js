import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <Text>&copy; 2023 All Rights Reserved</Text>
        <Text>Design and Developed by @Ankit Kumar Thakur</Text>
        <Icon
          src="../../images/fb-icon.svg"
          alt="fb icon"
          width={40}
          height={40}
        />
        <Icon
          src="../../images/twitter-icon.svg"
          alt="twitter icon"
          width={40}
          height={40}
        />
        <Icon
          src="../../images/instagram-icon.svg"
          alt="instagram icon"
          width={40}
          height={40}
        />
      </Container>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.div`
  width: 100vw;
  height: 150px;
  // background: rgb(2, 0, 36);
  background-image: linear-gradient(
    to right top,
    #020024,
    #00093a,
    #000e50,
    #000e66,
    #0e087c
  );
  // background-image: linear-gradient(
  //   to right top,
  //   #8282eb,
  //   #6763cf,
  //   #4d46b3,
  //   #322897,
  //   #0e087c
  // );
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 36px;
  padding-left: 0;
  overflow: visible;
  // border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #ffffff;
`;
const Icon = styled.img`
  filter: invert(1);
  margin: 5px;
`;

// style={{ background: "#090b13", color: "#fff", padding: "1rem" }}
