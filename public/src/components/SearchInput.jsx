import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export function SearchInput({ contacts, handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon>
        <BsSearch />
      </SearchIcon>
      <SearchField
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff34;
  border-radius: 0.2rem;
  padding: 0.2rem;
  margin-bottom: 10px;
  margin-right: 2rem;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const SearchField = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  width: 100%;

  ::placeholder {
    color: #ebe7ff;
  }
`;

export default SearchInput;
