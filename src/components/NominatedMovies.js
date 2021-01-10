import React from 'react';

const NominatedMovies = (props) => {
	
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
					<button
						className = "btn-remove"
						onClick={() => props.handleNominateClick(movie)}
					>Remove</button>
				</div>
			))}
		</>
	);
};

export default NominatedMovies;
