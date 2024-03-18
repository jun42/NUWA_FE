import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { IoOptionsOutline } from 'react-icons/io5';

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
        id={'search-input'}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="NUWA_Project 검색"
      />
      <SearchIcon>
        <IoOptionsOutline />
      </SearchIcon>

      <SearchIcon>
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
  border: 1px solid #505050;
  border-radius: 5px;
  width: 50%;
  background-color: #505050;
  color: white;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 5px 10px;
  font-size: 16px;
  /* border: none; */
  border-radius: 5px;
  outline: none;
  background-color: #505050;
  &::placeholder {
    color: white;
  }
`;

const SearchIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;

  &:hover {
    color: #0056b3;
  }
`;
