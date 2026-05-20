import { useState } from "react"

//arrow function
const Counter =() =>{
    // const [state, setState] = useState(0)

    const [count, setCount] = useState(0);

    function decrement(){
        setCount(count -1)
    }

    function increment(){
        setCount(count+1)
    }

    return(
        <div>
            <button onClick={decrement}>decrement</button>
            <h3>count: {count}</h3>
            <button onClick={increment}>increment</button>
        </div>
    );
};

//exported
export default Counter