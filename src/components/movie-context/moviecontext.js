import React,{useState, createContext} from 'react';


export const MovieContext = createContext();

 export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry potter',
            price: '10$',
            stock:'5',
            id: '1222'
        },
        {
            name: 'Tennet',
            price: '10$',
            stock:'5',
            id: '1322'
        },
        {
            name: 'Dave',
            price: '10$',
            stock:'5',
            id: '1422'
        }
    ]);
    
    
    return(

        <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
    )
        
    
    
    
}


