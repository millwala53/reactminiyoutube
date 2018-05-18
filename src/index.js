import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyALn8_EEjEjAnYMAUdnBqvrNyT6IHkQGH0';

const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}


ReactDOM.render(<App />,document.querySelector(".container"));