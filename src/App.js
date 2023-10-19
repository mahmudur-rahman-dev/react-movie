import { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_KEY = 'http://www.omdbapi.com?apiKey=8598c3f';

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className='search'>
                <input
                    placeholder="search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
               <MovieCard movie1={movie1}/>
            </div>

        </div>
    );
}

export default App;