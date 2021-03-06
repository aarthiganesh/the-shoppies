import React from 'react';

const NominatedMovies = (props) => {
	
	return (
		<>
			{props.movies.map((movie,index) => (
				<div className="movie">
					<div className="movie-poster-crop">
					<img 
						src = {movie.Poster} 
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
						<button
						className = "btn-remove"
						onClick={() => props.handleNominateClick(movie)}
						>Remove</button>
					</div>
				</div>
			))}
		</>
	);
};

export default NominatedMovies;
