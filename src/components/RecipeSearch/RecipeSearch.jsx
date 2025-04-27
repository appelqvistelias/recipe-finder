import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../../api/fetchRecipes";
import MealCard from "../MealCard/MealCard";
import styles from './Recipe.module.css';
import Button from "../Button/Button";

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
      <section className={styles.searchContainer}>
        <h1>Recipe Finder</h1>
        <div className={styles.inputContainer}>
        <input
        className={styles.searchInput}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type ingredient, ex chicken"
          aria-label="Find recipe"
        />
        <Button title="Search" onClick={handleSearch} />
        </div>

        {loading && <p>Loading...</p>}
      </section>
      
      <section className={styles.mealCardGrid}>
        {recipes.map((recipe) => (
          <div 
            key={recipe.uri} 
            onClick={() => handleRecipeClick(recipe)} 
            style={{ cursor: "pointer" }}
          >
            <MealCard recipe={recipe} />
          </div>
        ))}
      </section>
    </div>
  );
}