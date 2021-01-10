import React from 'react';
import SearchResults from '../components/SearchResults';

const SearchResultsPage = (props) => {

  return(
    <>
      <section className="search-results">
					<h3 className="section-title">Search Results for '{props.searchValue}'</h3>
					<SearchResults
							movies={props.movies}
							handleNominateClick={props.addNomination}
							nominations = {props.nominations}
					/>
				</section>
    </>
  );

}

export default SearchResultsPage;