import { useLocation, useNavigate } from "react-router-dom";
import DetailedRecipe from "../components/DetailedRecipe/DetailedRecipe";
import Button from "../components/Button/Button";

function RecipePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2.8rem",
            padding: "2rem",
            color: "red",
            border: "2px solid red",
            width: "100%",
          }}
        >
          No recipe found
        </p>
        <Button
          onClick={() => (window.location.href = "/")}
          aria-label="Back to home page"
          title="↩ Back"
          size="large"
          width="fullWidth"
          style={{ marginTop: "1rem" }}
        />{" "}
      </div>
    );
  }

  return <DetailedRecipe recipe={recipe} />;
}

export default RecipePage;
