import React from 'react'
import { SearchInput, SearchWrapper } from './Search.styles';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  return (
    <SearchWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <SearchInput type='text' placeholder='Search here!' />
    </SearchWrapper>
  )
}

export default Search