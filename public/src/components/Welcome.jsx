import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HiWave from "../assets/laphie.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={HiWave} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  img {
    height: 10rem; /* Adjust the height value as per your requirement */
  }
  span {
    color: #0cf0b1;
  }
`;
