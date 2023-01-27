import React from 'react';
import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'



const API_URL = 'http://omdbapi.com?apikey=2a54fe12 '


const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "N/A"
}


const App = () =>{

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search)
    }

    useEffect(()=>{
        searchMovies('superman')
    },[])

    return(
       <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
            <input 
            placeholder='serch'
            value="movie"
            onChange={() => {}}
            />
            <img 
            src={SearchIcon} 
            alt='search'
            onClick={()=>{}}
            />
        </div>

        <div className='container'>
            <div className='movie'>
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img  src={movie1.Poster !== "N/A"? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title}/>
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>

        </div>
       </div>
    );
}

export default App;