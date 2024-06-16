import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
    // const greet = () =>{
    //     alert("hello guys");
    // }


    const handleIncrement = () =>{
        console.log(count)
        setCount(count+1);
    }

    
    const handleDecrement = () =>{
        setCount(count-1);
    }

    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={handleIncrement} >➕</button>
            <span>{count}</span>
            <button onClick={handleDecrement} >➖</button>
        </div>
    )
}

export default Counter;