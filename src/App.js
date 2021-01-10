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
		const url = `http://www.omdbapi.com/?apikey=dd6d8910&type=movie&s=${searchValue}`;
		const response = await fetch(url);
		const responseJson = await response.json();

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
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('shoppies-nominations', JSON.stringify(items));
	};

	const addNomination = (movie) => {

		let isInNominations= nominations.filter(nomination => nomination.imdbID===movie.imdbID).length!==0;

		if(nominations.length===5){
			alert('too many nominations')
		}else{
			if(!isInNominations){
				const newNominationList = [...nominations, movie];
				setNominations(newNominationList);
				saveToLocalStorage(newNominationList);
			}
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
			<nav>
			<button className="nav-link">Search Results</button>
			<button className="nav-link">Your Nominations</button>
			</nav>
			<div id="test">
				<section className="search-results">
					<h3 className="section-title">Search Results for '{searchValue}'</h3>
					<SearchResults
							movies={movies}
							handleNominateClick={addNomination}
							nominations = {nominations}
					/>
				</section>
				<section className="search-results">
					<h3 className="section-title">Nominated Movies</h3>
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