import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ expanded, setExpanded }) => {
  return (
    <Nav>
      <Logo src="../assets/logo-no-background-img.svg" alt="logo-img" />
      <Toggle onClick={() => setExpanded(!expanded)} expanded={expanded}>
        <span />
        <span />
        <span />
      </Toggle>
      <NavMenu expanded={expanded}>
        <Link to="/" onClick={() => setExpanded(false)}>
          <span>Home</span>
        </Link>
        <Link to="verilog" onClick={() => setExpanded(false)}>
          <span>Verilog</span>
        </Link>
        <Link to="system" onClick={() => setExpanded(false)}>
          <span>System Verilog</span>
        </Link>
        <Link to="uvm" onClick={() => setExpanded(false)}>
          <span>UVM</span>
        </Link>
        <Link to="interview" onClick={() => setExpanded(false)}>
          <span>Interview Question</span>
        </Link>
        <Link to="contact" onClick={() => setExpanded(false)}>
          <span>Contact Us</span>
        </Link>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  // background-image: linear-gradient(
  //   to right top,
  //   #020024,
  //   #00093a,
  //   #000e50,
  //   #000e66,
  //   #0e087c
  // );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 90px;
`;

const Toggle = styled.button`
  background: #090b13;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #000;
  margin-right: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    width: 28px;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    margin: 2px 0;
    transform-origin: center;
    transition: all 0.2s ease;

    &:nth-child(1) {
      transform: ${({ expanded }) =>
        expanded ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ expanded }) => (expanded ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ expanded }) =>
        expanded ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  justify-content: right;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: white;
    img {
      height: 20px;
    }

    span {
      font-size: 16px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    
    @media screen and (max-width: 768px) {
    margin: 10px 0;
    font-size: 18px;
  }
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: ${({ expanded }) => (expanded ? "70px" : "-100%")};
    width: 100%;
    transition: all 0.5s ease-in-out;
    background-color: #090b13;
    margin-left: 0;
    z-index: 1;
`;
