import React from 'react';

const SearchResults = (props) => {
	const nominations = props.nominations;

	//Brute force .includes() method
		

	function NominateButton (props){
		let isInNominations= nominations.filter(nomination => nomination.imdbID===props.movie.imdbID).length!==0;

		if(!isInNominations){
			return(
				<button
					className="btn-nominate"
					onClick={() => props.handleNominateClick(props.movie)}
				>Nominate</button>
			)
		}else{
			return (
				<button disabled
				className="btn-nominate-disabled">Nominated</button>
			)
		}
	}

	return (
		<>
			{props.movies.map((movie,index) => (
				<div className="movie">
					<h4 class="movie-title"> 
						{movie.Title} 
					</h4>
					<p>
						{movie.Year}
				</p>
					<NominateButton nominations={nominations} movie={movie} handleNominateClick={props.handleNominateClick}/>
					{/* <button
						name={movie.Title}
						onClick={() => props.handleNominateClick(movie)}
					>Nominate</button> */}
				</div>
			))}
		</>
	);
};

export default SearchResults;
