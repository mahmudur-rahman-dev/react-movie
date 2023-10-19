import {useState, useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_KEY = 'http://www.omdbapi.com?apiKey=8598c3f';

const App = () => {
    const [movies, setMovies] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
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
                    onChange={() => {
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {
                    }}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map(movie => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;