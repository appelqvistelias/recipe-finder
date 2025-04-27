import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../../api/fetchRecipes";
import MealCard from "../MealCard/MealCard";

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const results = await fetchRecipes(query);
    setRecipes(results);
    setLoading(false);
  };

  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    navigate("/recipe", { state: { recipe } });
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type ingredient, ex chicken"
        aria-label="Find recipe"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      <div>
  {recipes.map((recipe) => (
    <div 
      key={recipe.uri} 
      onClick={() => handleRecipeClick(recipe)} 
      style={{ cursor: "pointer" }}
    >
      <MealCard recipe={recipe} />
    </div>
  ))}
</div>
    </div>
  );
}
