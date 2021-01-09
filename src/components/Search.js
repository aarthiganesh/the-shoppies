import React from 'react';

const Search = (props) => {
  return(
    <input
      value={props.value}
      onChange={(event) => props.setSearchValue(event.target.value)}
      placeholder='Search Movie Title'
    ></input>
  );
};

export default Search;