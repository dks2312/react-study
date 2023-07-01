import React, { useState } from "react";

function Counter() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
      setNumber(number + 1);
    }
  
    const onDecrease = () => {
      setNumber(number - 1);
    }
    
    const onCh = (e) => {
        setText(e.target.value);
    }

    const onCi = () => {
        setText('');
    }
    
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <input placeholder="이름" onChange={onCh} />
      <button onClick={onCi}>초기화</button>
    </div>
  );
}

export default Counter;