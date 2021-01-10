import React from 'react';
import NominatedMovies from '../components/NominatedMovies';


const NominatedMoviesPage = (props) => {

  return(
    <>
      	<section className="search-results">
					<h3 className="section-title">Your Nominations ({props.nominations.length})</h3>
					<NominatedMovies
							movies={props.nominations}
							handleNominateClick={props.removeNomination}
					/>
				</section>
    </>
  );

}

export default NominatedMoviesPage;