import React,{useState} from 'react';



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

    }




    return(
        <div className='tweets'>
            <p>Movie Name: {name}</p>
            <p>Movie Price: {price}</p>
            <p>Amount in stock: {stock}</p>
            <p>
                <button onClick={Increament}>Add item</button>
                <button>Remove item</button>
            </p>
            <p>{counter} items added</p>
        </div>
    )
}

export default Movies;