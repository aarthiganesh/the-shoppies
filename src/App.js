import './App.css';
import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import NominatedMovies from './components/NominatedMovies';

function App() {
	const [movies, setMovies] = useState([]);
	const [nominations, setNominations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?apikey=30608635&type=movie&s=${searchValue}`;
		const response = await fetch(url);
		const responseJson = await response.json();

		console.log(searchValue);
		console.log(url);
		console.log(responseJson);

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };
  
  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const nominationsList = JSON.parse(
			localStorage.getItem('shoppies-nominations')
		);

		if (nominationsList) {
			setNominations(nominationsList);
		}

		console.log('nominations');
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('shoppies-nominations', JSON.stringify(items));
	};

	const addNomination = (movie) => {
		console.log(nominations);
		console.log(movie);
		console.log(!nominations.includes(movie));

		//Brute force .includes() method

		var isInNominations= nominations.filter(nomination => nomination.imdbID===movie.imdbID).length!=0;

		if(!isInNominations){
			const newNominationList = [...nominations, movie];
			setNominations(newNominationList);
			saveToLocalStorage(newNominationList);
		}
	};


	const removeNomination = (movie) => {
		const newNominationList = nominations.filter(
			(nomination) => nomination.imdbID !== movie.imdbID
		);

		setNominations(newNominationList);
		saveToLocalStorage(newNominationList);
	};
	

  return (
    <div className="App">
      <section className="search">
			<header>
      	<h1>The Shoppies</h1>
			</header>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
			</section>
			<div id="test">
				<section className="search-results">
					<h3>Search Results for '{searchValue}'</h3>
					<SearchResults
							movies={movies}
							handleNominateClick={addNomination}
							nominations = {nominations}
					/>
				</section>
				<section className="search-results">
					<h3>Nominated Movies</h3>
					<NominatedMovies
							movies={nominations}
							handleNominateClick={removeNomination}
					/>
					
				</section>
			</div>
			<section className="">

			</section>

    </div>
  );
}

export default App;