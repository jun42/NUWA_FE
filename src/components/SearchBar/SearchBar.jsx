import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => setQuery(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 이벤트 방지
    alert(`검색어 "${query}"에 대한 검색 기능은 아직 구현되지 않았습니다.`);
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="NUWA_Project 검색"
      />
      <SearchIcon onClick={handleSubmit}>
        <FaSearch />
      </SearchIcon>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
  color: white;
`;

const SearchInput = styled.input`
  ::placeholder {
    color: white; /* Placeholder 텍스트 흰색으로 설정 */
  }
  flex: 1;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.2);
`;

const SearchIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  color: #007bff;
  font-size: 20px;
  display: flex;
  align-items: center;

  &:hover {
    color: #0056b3;
  }
`;
