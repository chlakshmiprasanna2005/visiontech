import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";

function App() {

  function handleClick(event){
    console.log(event);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted");
  }

  return(
    <>
    <Controlled/>
    <Uncontrolled/>
    </>
  )
}

export default App;