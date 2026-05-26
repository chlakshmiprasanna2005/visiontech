import { useState } from "react";

const Controlled = () => {

  const [name, setName] = useState("");

  return(
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => console.log(e.target.value)}
      />

      <p>Hi, {name}</p>
    </div>
  );
}

export default Controlled;