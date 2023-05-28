import React from "react";
import styled from "styled-components";
import Logout from "./Logout";
import Logo from "../assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #041310;
  color: #fff;
  .text {
    filter: invert(1);
  }
`;

const LogoImg = styled.img`
  height: 50px;
  fill: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  filter: invert(1);
  margin-left: 8px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #1abb9a;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #041310;
  }
  margin-right: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  const location = useLocation();

  const handleProfileClick = () => {
    window.location.href = "/user/profile";
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={Logo} alt="logo" />
        <h3 className="text">Message Hub</h3>
      </LogoContainer>
      <ButtonsContainer>
        {location.pathname !== "/user/profile" && (
          <Button onClick={handleProfileClick}>
            <AiOutlineUser />
          </Button>
        )}
        {location.pathname === "/user/profile" && (
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>
              <AiTwotoneHome />
            </Button>
          </Link>
        )}
        <Logout />
      </ButtonsContainer>
    </HeaderContainer>
  );
}
