import { useLocation, useNavigate } from "react-router-dom";
import DetailedRecipe from "../components/DetailedRecipe/DetailedRecipe";

function RecipePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <div>
        <p>No recipe found</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return <DetailedRecipe recipe={recipe} />;
}

export default RecipePage;
