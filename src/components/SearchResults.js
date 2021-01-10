import React from 'react';

const SearchResults = (props) => {
	const nominations = props.nominations;

	//Brute force .includes() method
		

	function NominateButton (props){
		console.log (props)
		let isInNominations= nominations.filter(nomination => nomination.imdbID===props.movie.imdbID).length!=0;

		if(!isInNominations){
			return(
				<button
					onClick={() => props.handleNominateClick(props.movie)}
				>Nominate</button>
			)
		}else{
			return (
				<button disabled>Nominated</button>
			)
		}
	}

	return (
		<>
			{props.movies.map((movie,index) => (
				<div className="movie">
					<p> 
						{movie.Title} 
					</p>
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
