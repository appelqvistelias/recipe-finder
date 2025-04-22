import "./App.css";
import Button from "./components/Button/Button";
import MealCard from "./components/MealCard/MealCard";
import placeholderImage from "./assets/images/placeholder.png";

const dummyMeal = {
  label: "Vegetarisk currygryta",
  image: placeholderImage,
  dietLabels: ["Vegetarian", "Low-Fat"],
  url: "https://example.com/recept"
};


function App() {
  return (
    <div>
      <Button
        title="Click me!"
        onClick={() => {
          alert("Hello there!");
        }}
      />
      <div>
        <MealCard meal={dummyMeal} />
      </div>
    </div>
  );
}

export default App;
