import "./App.css";
import Counter from "./components/Counter.jsx";

function App() {
  let arr = [];
  const size = Number.parseInt(prompt("enter num"));

  for (let i = 1; i <= size; i++) {
    arr.push(
      <Counter
        index={i}
        key={i}
      />
    );
  }
  return (
    <div className="App">
      <header className="App-header">{arr}</header>
    </div>
  );
}

export default App;
