import { useState } from "react";
import { fetchRecipes } from "../../api/fetchRecipes";

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
      <button onClick={handleSearch}>Sök</button>

      {loading && <p>Loading...</p>}

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.uri}>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} width="100" />
            <p>
              <a href={recipe.url} target="_blank" rel="noreferrer">
                Show recipe
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
