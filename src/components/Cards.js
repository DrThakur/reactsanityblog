import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = () => {
  return (
    <>
      <CardBox>
        <Card>
          <CardImg src="/images/card1.jpg" />
          <CardBody>
            <h5>Verilog</h5>
            <p>
              Verilog is a hardware description language (HDL) used for
              designing and simulating digital circuits. It is commonly used in
              the field of digital electronics and is often used by hardware
              engineers to model, simulate, and test digital circuits before
              they are manufactured.Verilog was first introduced in the 1980s
              and ...
            </p>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/verilog">
                  Verilog Tutorial
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/verilog">
                  Verilog TestBench
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/verilog">
                  Verilog Examples
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/verilog">
                  Verilog Interview Questions
                </Link>
              </MyLink>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg src="/images/card2.jpeg" />
          <CardBody>
            <h5>System Verilog</h5>
            <p>
              SystemVerilog is an extension of the Verilog hardware description
              language (HDL) that adds features to support verification of
              digital systems. SystemVerilog was developed by Accellera (a
              standards organization for electronic design automation) and was
              first introduced in 2002.SystemVerilog includes many features that
              are useful for verification,....
            </p>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/system">
                  System Verilog Tutorial
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/system">
                  System Verilog TestBench
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/system">
                  System Verilog Examples
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/system">
                  System Verilog Interview Questions
                </Link>
              </MyLink>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg src="/images/card3.jpeg" />
          <CardBody>
            <h5>UVM</h5>
            <p>
              UVM stands for Universal Verification Methodology, which is a
              standardized methodology for developing testbenches and verifying
              integrated circuit designs in the semiconductor industry. UVM is
              based on the SystemVerilog hardware description language and is
              designed to provide a reusable and scalable approach to
              verification that can be applied ...
            </p>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/uvm">
                  UVM Tutorial
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/uvm">
                  UVM TestBench
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/uvm">
                  UVM Examples
                </Link>
              </MyLink>
            </Button>
            <Button>
              <MyLink>
                <Link style={{ color: "white" }} to="/uvm">
                  UVM Interview Questions
                </Link>
              </MyLink>
            </Button>
          </CardBody>
        </Card>
        {/* <Card>
          <CardImg src="/images/login-background.jpg" />
          <CardBody>
            <h5>Interview Questions</h5>
            <p>
              Verilog, standardized as IEEE 1364, is a hardware description
              language (HDL) used to model electronic systems. It is most
              commonly used in the design and verification of digital circuits
              at the register-transfer level of abstraction.
            </p>
            <Button>
              <a to="/">System Verilog Tutorial</a>
            </Button>
            <Button>
              <a to="/">System Verilog TestBench</a>
            </Button>
            <Button>
              <a to="/">System Verilog Examples</a>
            </Button>
            <Button>
              <a to="/">System Verilog Interview Questions</a>
            </Button>
          </CardBody>
        </Card> */}
      </CardBox>
    </>
  );
};

export default Cards;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  // flex-wrap: wrap;
  margin-top: 10px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
     {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 479px) {
     {
      font-size: 14px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const Card = styled.div`
  display: inline;
  border: 1px solid #555454;
  width: 400px;
  overflow: hidden;
  border-radius: 4px;
  margin: 10px 10px;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 992px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
const CardImg = styled.img`
  width: 400px;
  height: 200px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: #000;

  h5 {
    font-size: 16px;
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    h5 {
      text-align: center;
      font-size: 14px;
    }
    p {
      // text-align: center;
      font-size: 12px;
    }
  }
`;
const Button = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  // background: #8282eb;
  // background-image: linear-gradient(
  //   to right top,
  //   #020024,
  //   #00093a,
  //   #000e50,
  //   #000e66,
  //   #0e087c
  // );
  background-image: linear-gradient(
    to right top,
    #8282eb,
    #6763cf,
    #4d46b3,
    #322897,
    #0e087c
  );
  color: #fff;
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 4px;
  text-align: center;
  padding-top: 10px;
  box-shadow: 2px 2px #f9f9f9;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5px;
  }
`;

const MyLink = styled(Link)`
  // text-decoration: none;
  // color: white;
`;
