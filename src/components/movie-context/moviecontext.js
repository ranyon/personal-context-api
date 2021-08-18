import React,{useState, createContext} from 'react';
import Tenet from './tenet.jfif'
import Harry from './harry.jfif'
import Dave from './dave.jfif'


export const MovieContext = createContext();

 export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry potter',
            price: '10$',
            stock:5,
            img:Harry,
            id: '1222'
        },
        {
            name: 'Tennet',
            price: '10$',
            stock:7,
            img:Tenet,
            id: '1322'
        },
        {
            name: 'Harry potter',
            price: '10$',
            stock:5,
            img:Harry,
            id: '1222'
        },
        {
            name: 'Tennet',
            price: '10$',
            stock:7,
            img:Tenet,
            id: '1322'
        },
        {
            name: 'Harry potter',
            price: '10$',
            stock:5,
            img:Harry,
            id: '1222'
        },
        {
            name: 'Tennet',
            price: '10$',
            stock:7,
            img:Tenet,
            id: '1322'
        },
        {
            name: 'Dave',
            price: '10$',
            stock:6,
            img:Dave,
            id: '1422'
        }
    ]);
    
    
    return(

        <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
    )
        
    
    
    
}


