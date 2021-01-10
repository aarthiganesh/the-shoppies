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
					<div className="movie-poster-crop">
						<img 
						src = {`http://img.omdbapi.com/?i=${movie.imdbID}&h=400&apikey=dd6d8910`} 
						alt={movie.Title} 
						className="movie-poster"
						/>
					</div>
					<div className="movie-desc">
						<h4 class="movie-title"> 
							{movie.Title} 
						</h4>
						<p>
							{movie.Year}
						</p>
						<NominateButton nominations={nominations} movie={movie} handleNominateClick={props.handleNominateClick}/>
					</div>
				</div>
			))}
		</>
	);
};

export default SearchResults;
