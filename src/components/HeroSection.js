import React from "react";
import styled from "styled-components";

function HeroSection({ expanded }) {
  // const [expanded, setExpanded] = useState(false);
  return (
    <Section
      className="hero-container"
      // onClick={() => setExpanded(!expanded)}
      expanded={!expanded}
    >
      <Heading className="hero-heading">
        Welcome to World of Verification{" "}
      </Heading>
      <Text className="hero-paragraph">
        This is Your Place to Learn the System Technologies like Verilog, System
        verilog.
      </Text>
    </Section>
  );
}

export default HeroSection;

const Section = styled.div`
  // background-color: rgb(2, 0, 36);
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
  // background-size: ;
  background-position: center;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 0 10px;
  // margin-top: ${({ expanded }) => (expanded ? "20px" : "20px")};
  margin-top: 0px;
  // border-radius: 5px;

  @media screen and (max-width: 768px) {
    margin-top: ${({ expanded }) => (expanded ? "0px" : "250px")};
    transition: margin-top 0.5s ease-in-out;
    // margin-top: 20px;
    // padding: 10px;
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  // color: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(192, 0, 255, 1) 5%);
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 5px;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  // color: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(192, 0, 255, 1) 5%);
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  color: white;
  margin-top: 0.2rem;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 5px;
    margin-bottom: 20px;
  }
`;
