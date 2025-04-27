import styles from "./DetailedRecipe.module.css";
import UnitConverter from "../UnitConverter/UnitConverter";
import Button from "../Button/Button";

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
        <Button 
          variant="return"  
          onClick={() => (window.location.href = "/")}
          aria-label="Back to home page"
        >
          Back
        </Button>

        <div className={styles.recipeHeader}>
          <h2>{recipe.label}</h2>
          </div>
          <div className={styles.recipeContentWrapper}>
          <section className={styles.recipeInfoWrapper}>
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
          <div className={styles.recipeImg}>
            <img src={recipe.image} alt={`Image of ${recipe.label}`} />
          </div>
          </section>
          <section className={styles.recipeInfoWrapper}>
          <h2>Ingredients</h2>
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full recipe in a new tab"
          >
            Full recipe
          </a>
          <ul className={styles.ingredientsList} role="list">
            {recipe.ingredientLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <h3>Unit Converter</h3>
          <UnitConverter />

          {recipe.totalNutrients && (
            <div className={styles.nutrients} aria-live="polite">
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
          </section>
          </div>
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
