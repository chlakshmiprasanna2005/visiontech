import { useRef } from "react";

const Uncontrolled =()=> {
 const inputRef= useRef();
    function handleSubmit(){
        console.log(inputRef.current.value);   
    }
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Uncontrolled