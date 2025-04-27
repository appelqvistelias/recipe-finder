import styles from "./DetailedRecipe.module.css";
import UnitConverter from "../UnitConverter/UnitConverter";

export default function DetailedRecipe({ recipe }) {
  const capitalizeFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper}>
          <button
            className={styles.backButton}
            onClick={() => (window.location.href = "/")}
          >
            Back
          </button>
          <h1>{recipe.label}</h1>
          <div className={styles.recipeInfo}>
            <p>
              Cuisine Type:{" "}
              {recipe.cuisineType
                ?.map((type) => capitalizeFirstLetter(type))
                .join(", ")}
            </p>
            <p>
              Meal Type:{" "}
              {recipe.mealType
                ?.map((type) => capitalizeFirstLetter(type))
                .join(", ")}
            </p>
            <div className={styles.yieldAndTime}>
              <p>Yield: {recipe.yield} people</p>
              {recipe.totalTime && recipe.totalTime > 0 ? (
                <p>Time: {recipe.totalTime} min</p>
              ) : null}
            </div>
          </div>
          <img src={recipe.image} alt={recipe.label} />
          <h2>Ingredients</h2>
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            Full recipe
          </a>
          <ul className={styles.ingredientsList}>
            {recipe.ingredientLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <h3>Unit Converter</h3>
          <UnitConverter />

          {recipe.totalNutrients && (
            <div className={styles.nutrients}>
              <h3>Nutrients</h3>
              {["CHOCDF", "PROCNT", "FAT"].map((key) => {
                const nutrient = recipe.totalNutrients[key];
                return nutrient ? (
                  <p key={key}>
                    {nutrient.label}: {Math.round(nutrient.quantity)}{" "}
                    {nutrient.unit}
                  </p>
                ) : null;
              })}
            </div>
          )}
          <h3>Tags</h3>
          <div className={styles.healthLabels}>
            {recipe.healthLabels?.map((label, index) => (
              <p key={index} className={styles.healthLabelTag}>
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
