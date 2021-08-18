import React from 'react';
import './App.css'
import Movies from './components/movies/movies';
import Movielist from './movielist';
import {MovieProvider} from './components/movie-context/moviecontext';

function App() {
    return(
        
        <MovieProvider>
                
            <div className='app'>

            <Movielist/>
            </div>
                
        </MovieProvider>
        
    )

 
}

export default App;
