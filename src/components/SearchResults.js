import React from 'react';

const SearchResults = (props) => {
	const nominations = props.nominations;

	//Brute force .includes() method
		
	var isInNominations = false;

	function NominateButton (props){
		for(var i=0;i<nominations.length; i++){
			console.log(nominations[i]);
			if(nominations[i].imdbID===props.movie.imdbID){
				isInNominations = true;
			}
		}
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
