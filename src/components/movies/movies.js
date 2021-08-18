import React, {useState} from 'react';




const Movies = ({name, price, stock}) =>{
    const [counter, setCounter] = useState(0)


    const Increament = () =>{
        if ( counter < 5){
            setCounter(counter + 1)
        }else{
            alert ('Sorry item is out of stock')
        }
    }

    const Decreament = () =>{
        if ( counter >= 1){
            setCounter( counter - 1)
        }
    }

    return(
        <div className='tweets'>
            <p>Movie name: {name}</p>
            <p>Movie price: {price}</p>
            <p>{stock} items in stock</p>
            <p>
                <button onClick={Increament}>Add item</button>
                <button onClick={Decreament}>Remove item</button>
            </p>
            <p>Added {counter} items</p>
        </div>
    )
}


export default Movies;