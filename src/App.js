import './App.css';
import React, { useState, useEffect } from 'react';
// Pages
import SearchResultsPage from './pages/SearchResultsPage';
import NominatedMoviesPage from './pages/NominatedMoviesPage';
// Components
import Search from './components/Search';
import NominationLimitBanner from './components/NominationLimitBanner';
//Icons
import { BsAwardFill } from "react-icons/bs";

function App() {
	const [movies, setMovies] = useState([]);
	const [nominations, setNominations] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [toggle, set] = useState(true)
  
  const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?apikey=30608635&type=movie&s=${searchValue}`;
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
		if(nominations.length===5){
			document.getElementById("nominated-five").style.setProperty('display','flex');
		}else if(nominations.length<6){
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
			document.getElementById("nomination-limit-banner").style.setProperty('display','flex');
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
			{
				nominations.length>0?
					<button className="indicator-nominated" onClick={()=>set(false)}><BsAwardFill /> {nominations.length}</button>:''
			}
		
      <section className="search">
				<header>
					<h1>shoppies</h1>
				</header>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
				<p id="tagline">Nominate your 5 favourite movies for The Shoppies!</p>
				
			</section>
			<NominationLimitBanner id="nominated-five" content = "Thank you for nominating 5 movies!"/>
			<NominationLimitBanner id="nomination-limit-banner" content ="You have already nominated 5 movies!"/>
			<nav>
					<button
						id="btn-search-results"
						className="btn-toggle"
						onClick={()=>set(true)}
						disabled ={toggle}
					>Search Results</button>
					<button
						id="btn-view-nominations"
						className="btn-toggle"
						onClick={()=>set(false)}
						disabled={!toggle}
					>Nominated ({nominations.length})</button>
				</nav>

			<section id="test">

				{toggle ? 
					<SearchResultsPage 
						movies = {movies}
						addNomination = {addNomination}
						nominations = {nominations}
						searchValue = {searchValue}
					/> 
					:

					<NominatedMoviesPage 
						nominations ={nominations}
						removeNomination={removeNomination}
					/>
				}
			</section>

    </div>
  );
}

export default App;