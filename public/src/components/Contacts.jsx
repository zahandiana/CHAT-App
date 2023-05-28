import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import ArchivedContact from "./ArchivedContact";
import Contact from "./Contact";

export default function Contacts({ contacts, changeChat, showWelcomePageP }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [displayedContacts, setDisplayedContacts] = useState([]);
  const [showArchivedUsers, setShowArchivedUsers] = useState(false);
  const [archivedContacts, setArchivedContacts] = useState([]);
  const [nonArchivedContacts, setNonArchivedContacts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data?.username);
    setCurrentUserImage(data?.avatarImage);
    setDisplayedContacts(contacts);
  }, [contacts]);

  useEffect(() => {
    // Filter out the archived contacts from the contacts array
    const filteredContacts = contacts.filter(
      (contact) =>
        !archivedContacts.some(
          (archivedContact) => archivedContact._id === contact._id
        )
    );
    setNonArchivedContacts(filteredContacts);
    setDisplayedContacts(filteredContacts);
  }, [contacts, archivedContacts]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setDisplayedContacts(contacts);
    } else {
      const filteredContacts = contacts.filter(
        (contact) =>
          contact.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !archivedContacts.some(
            (archivedContact) => archivedContact._id === contact._id
          )
      );
      setDisplayedContacts(filteredContacts);
    }
  };

  const handleProfileClick = () => {
    window.location.href = "http://localhost:3000/user/profile";
  };
  const handleDeleteUser = (contactId) => {
    const deletedContact = contacts.find(
      (contact) => contact._id === contactId
    );

    // Check if the contact is already archived before adding it
    if (!archivedContacts.some((contact) => contact._id === contactId)) {
      setArchivedContacts([...archivedContacts, deletedContact]);
    }

    const updatedContacts = contacts.filter(
      (contact) => contact._id !== contactId
    );
    setCurrentSelected(null);

    // Update nonArchivedContacts state with the filtered contacts
    const updatedNonArchivedContacts = updatedContacts.filter(
      (contact) =>
        !archivedContacts.some(
          (archivedContact) => archivedContact._id === contact._id
        )
    );
    setNonArchivedContacts(updatedNonArchivedContacts);
    setDisplayedContacts(updatedNonArchivedContacts);

    // Close the chat if it is with the deleted contact
    if (currentSelected !== null && currentSelected !== undefined) {
      const deletedContactIndex = contacts.findIndex(
        (contact) => contact._id === contactId
      );
      if (deletedContactIndex === currentSelected) {
        changeChat(null); // Pass null to close the chat
      }
    }
  };

  const handleToggleArchivedUsers = () => {
    setShowArchivedUsers(!showArchivedUsers);
  };

  const handleUnarchiveUser = (contactId) => {
    const unarchivedContact = archivedContacts.find(
      (contact) => contact._id === contactId
    );
    setArchivedContacts(
      archivedContacts.filter((contact) => contact._id !== contactId)
    );

    // Remove the unarchived contact from nonArchivedContacts
    const updatedNonArchivedContacts = [
      ...nonArchivedContacts,
      unarchivedContact
    ];
    setNonArchivedContacts(updatedNonArchivedContacts);

    // Update displayedContacts state with the non-archived contacts
    setDisplayedContacts(updatedNonArchivedContacts);
  };

  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <h3>PingChat</h3>
          </div>

          <div className="contacts">
            {showArchivedUsers ? (
              <ArchivedContactsContainer>
                {archivedContacts.length === 0 ? (
                  <p>No archived users</p>
                ) : (
                  archivedContacts.map((contact) => (
                    <ArchivedContact
                      key={contact._id}
                      contact={contact}
                      handleUnarchiveUser={handleUnarchiveUser}
                    />
                  ))
                )}
              </ArchivedContactsContainer>
            ) : (
              <ContactsContainer>
                <SearchInput contacts={contacts} handleSearch={handleSearch} />
                {displayedContacts.map((contact, index) => (
                  <Contact
                    key={contact._id}
                    contact={contact}
                    changeCurrentChat={changeChat} // Update prop name here
                    isSelected={index === currentSelected}
                    onClick={() => changeCurrentChat(index, contact)} // Add onClick handler
                    handleDeleteUser={handleDeleteUser}
                    showWelcomePageP={showWelcomePageP}
                  />
                ))}
              </ContactsContainer>
            )}
          </div>
          <Button
            className="archived-users-button"
            onClick={handleToggleArchivedUsers}
          >
            {showArchivedUsers ? "Hide Archived Users" : "Show Archived Users"}
          </Button>
          <div className="current-user">
            <div className="avatar">
              <Link to="/user/profile" onClick={handleProfileClick}>
                <img
                  src={`data:image/svg+xml;base64,${currentUserImage}`}
                  alt="avatar"
                />
              </Link>
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  overflow-x: hidden; /* Hide horizontal scroll */
  white-space: nowrap;
  background-color: #1a423a;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;

    img {
      height: 2rem;
      filter: invert(1);
    }

    h3 {
      color: white;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding-right: 1rem;

    .contact {
      justify-content: space-between;
      display: flex;
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 0;
      align-items: center;
      transition: 0.5s ease-in-out;

      .avatar {
        img {
          height: 3rem;
          width: 70%;
        }
      }

      .contact-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-grow: 1;
      }

      .username {
        h3 {
          display: flex;
          align-items: left;
          color: white;
          flex-grow: 1;
          margin: 0;
        }
      }

      .delete-button {
        display: flex;
        align-items: center;
      }
    }

    .selected {
      background-color: #1abb9a;
    }

    /* Add scrollable behavior for contacts */
    overflow-y: auto;
    max-height: 500px;
  }

  .current-user {
    background-color: #1abb9a;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }

    .username {
      h2 {
        color: white;
      }
    }

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;

      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
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
  margin-bottom: 2rem;

  svg {
    font-size: 1rem;
    color: #ebe7ff;
    filter: invert(1);
  }
`;

const ContactsContainer = styled.div`
  width: 100%;
  margin-left: 50px;
`;

const ArchivedContactsContainer = styled.div`
  display: grid;
  width: 100%;
  max-height: 500px;
  margin-left: 50px;
  background-color: #1a423a;
  overflow-y: auto;
  padding: 0.8rem;

  p {
    color: white;
    font-size: 1.2rem;
    margin-left: 3rem;
  }
  .contact {
    /* Archived contact styles */
    background-color: #1a423a;
    color: #777777;

    /* Rest of the contact styles */
    /* ... */

    &.archived-contact {
      /* Additional styles for archived contacts */
    }
  }
`;
