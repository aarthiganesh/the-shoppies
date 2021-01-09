import React from 'react';

const NominatedMovies = (props) => {
	
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
					<button
						onClick={() => props.handleNominateClick(movie)}
					>Remove</button>
				</div>
			))}
		</>
	);
};

export default NominatedMovies;
