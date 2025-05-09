import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../../api/fetchRecipes";
import MealCard from "../MealCard/MealCard";
import styles from "./RecipeSearch.module.css";
import Button from "../Button/Button";

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const results = await fetchRecipes(query);
    setRecipes(results);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    navigate("/recipe", { state: { recipe } });
  };

  return (
    <div>
      <main>
        <div className={styles.title}>
          <h1>recipe finder</h1>
        </div>
        <section className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <input
              className={styles.searchInput}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type ingredient, ex chicken"
              aria-label="Find recipe"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button
              title="search"
              onClick={handleSearch}
              size="large"
              width="fullWidth"
            />
          </div>
        </section>
        <div className={styles.loading}>{loading && <p>Loading...</p>}</div>

        <section className={styles.mealCardGrid}>
        {recipes.map((recipe) => (
            <div
              key={recipe.uri}
              style={{ cursor: "pointer" }}
            >
              <MealCard 
                recipe={recipe}
                onSelect={() => handleRecipeClick(recipe)}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
