import React, { useState } from "react";

const Msg = () => {
  const [name, setName] = useState("Anurag");
  const [age, setAge] = useState(20);

  const changeMsg = () => {
    setName("Anu");
    setAge(21);
  };
  return (
    <div>
      <h1>
        Your name is {name} and you are {age} old
      </h1>
      <button onClick={changeMsg}>Change</button>
    </div>
  );
};

export default Msg;
