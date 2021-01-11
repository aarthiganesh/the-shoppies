import React from 'react';
import NominatedMovies from '../components/NominatedMovies';
import gif from '../img/movies.gif'


const NominatedMoviesPage = (props) => {

  return(
    <>
      	<section className="search-results">
					<h3 className="section-title">Your Nominations ({props.nominations.length})</h3>

          {props.nominations.length===0?<><img src={gif} className="movie-gif"/></>:
          <NominatedMovies
          movies={props.nominations}
          handleNominateClick={props.removeNomination}
           />
          }

					
				</section>
    </>
  );

}

export default NominatedMoviesPage;