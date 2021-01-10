import React from 'react';

const Search = (props) => {
  return(
    <input
      id="search-bar"
      value={props.value}
      onChange={(event) => props.setSearchValue(event.target.value)}
      placeholder='Search Movie Title'
    ></input>
  );
};

export default Search;