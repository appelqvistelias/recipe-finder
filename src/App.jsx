import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <Button
      title="Click me!"
      onClick={() => {
        alert("Hello there!");
      }}
    />
  );
}

export default App;
