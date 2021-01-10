import './App.css';
import React, { useState, useEffect } from 'react';
// Pages
import SearchResultsPage from './pages/SearchResultsPage';
import NominatedMoviesPage from './pages/NominatedMoviesPage';
// Components
import Search from './components/Search';
import NominationLimitBanner from './components/NominationLimitBanner';

function App() {
	const [movies, setMovies] = useState([]);
	const [nominations, setNominations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?apikey=dd6d8910&type=movie&s=${searchValue}`;
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

	useEffect(() => {
		if(nominations.length<6){
			return () => {
				document.getElementById("nomination-limit-banner").style.setProperty('display','none');
			}
		}
	}, [nominations])

	const saveToLocalStorage = (items) => {
		localStorage.setItem('shoppies-nominations', JSON.stringify(items));
	};

	const addNomination = (movie) => {

		let isInNominations= nominations.filter(nomination => nomination.imdbID===movie.imdbID).length!==0;

		if(nominations.length===5){
			document.getElementById("nomination-limit-banner").style.setProperty('display','block');
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

			<NominationLimitBanner />
			
			<section>
				<nav>
				<h2 id="tagline">Welcome to The Shoppies 2021</h2>
				<p id="instructions">Using the search bar above, find your favourite movies of the year and nominate your top 5 for Shoppies 2021!</p>
				</nav>
			</section>

			<section id="test">
				<SearchResultsPage 
					movies = {movies}
					addNomination = {addNomination}
					nominations = {nominations}
					searchValue = {searchValue}
				/>
				<NominatedMoviesPage 
						nominations ={nominations}
						removeNomination={removeNomination}
				/>
			</section>

    </div>
  );
}

export default App;