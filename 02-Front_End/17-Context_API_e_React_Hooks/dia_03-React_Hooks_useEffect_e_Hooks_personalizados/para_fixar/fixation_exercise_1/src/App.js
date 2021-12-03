import React from "react";
import useTimer from "./hooks/useTimer";

function App() {

  const { number, isMultiple, timer } = useTimer();

  return (
    <>
      <h1>{number}</h1>
      <p>{isMultiple && 'Acerto'}</p>
      <p>Timer: { timer }</p>
    </>  
  );
}

export default App;
