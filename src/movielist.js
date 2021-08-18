import React,{useContext, useState} from 'react';
import { MovieContext } from './components/movie-context/moviecontext';
import Movies from './components/movies/movies';



const Movielist = () =>{

    const [movies, setMovies] = useContext(MovieContext)

    // const [movies, setMovies] = useState([
    //     {
    //         name:'mark',
    //         price:'10$',
    //         id:'1233'
    //     },
    //     {
    //         name:'dev',
    //         price:'10$',
    //         id:'1233'
    //     },
    //     {
    //         name:'kac',
    //         price:'10$',
    //         id:'1233'
    //     }
    // ]);

    return(
        <div>
            {/* <h1>{value}</h1> */}
            {movies.map((movie) =>(
                <Movies name={movie.name} price={movie.price} stock={movie.stock} image={movie.img}/>
            )
            )}
        </div>
    )

}

export default Movielist;