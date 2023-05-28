import React from "react";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

const Contact = ({
  contact,
  currentSelected,
  changeCurrentChat,
  handleDeleteUser,
  showWelcomePageP
}) => {
  const handleClick = (event) => {
    if (!event.target.classList.contains("delete-button")) {
      changeCurrentChat(contact);
    } else {
      changeCurrentChat(undefined);
    }
  };

  return (
    <ContactContainer
      className={`contact ${currentSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="contact-info">
        <div className="avatar">
          <img
            src={`data:image/svg+xml;base64,${contact.avatarImage}`}
            alt=""
          />
        </div>
        <div className="username">
          <h3>{contact.username}</h3>
        </div>
      </div>
      <div>
        <Button
          className="delete-button"
          onClick={() => {
            handleDeleteUser(contact._id);
            showWelcomePageP();
          }}
        >
          <BsFillTrashFill />
        </Button>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 0.5rem;
  background-color: #1abb9a;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1rem;
    color: #ebe7ff;
    filter: invert(1);
  }
`;

export default Contact;
