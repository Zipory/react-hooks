import { useState } from "react";

function Counter(props) {
//   let counter = props.value;
  const index = props.index;
  const [value, setValue] = useState(0);

  const setIncrease = () => {
    setValue((oldVal) => oldVal + index);
  };
  const setDecrease = () => {
    setValue((oldVal) => oldVal - index);
  };
  const setReset = () => {
    setValue(0);
  };
  let isGreat = value >= 100;
  let isLow = value <= 0;
  return (
    <h2>
      {value}
      <br />
      <button disabled={isGreat} onClick={()=> {setIncrease()}}>Increase</button>
      <button disabled={isLow} onClick={()=> {setDecrease()}}>Decrease</button>
      <button onClick={()=> {setReset()}}>Reset</button>
    </h2>
  );
}
export default Counter;
