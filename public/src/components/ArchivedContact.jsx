import React from "react";
import styled from "styled-components";

const ArchivedContact = ({ contact, handleUnarchiveUser }) => {
  return (
    <ArchivedContactContainer className="contact archived-contact">
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
          className="unarchive-button"
          onClick={() => handleUnarchiveUser(contact._id)}
        >
          Unarchive
        </Button>
      </div>
    </ArchivedContactContainer>
  );
};

const ArchivedContactContainer = styled.div`
  /* Archived contact styles */
  /* ... */
`;

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

export default ArchivedContact;
