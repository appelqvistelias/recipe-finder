import styles from "./DetailedRecipe.module.css";
import UnitConverter from "../UnitConverter/UnitConverter";
import Button from "../Button/Button";
import Tags from "../Tags/Tags";

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
            onClick={() => (window.location.href = "/")}
            aria-label="Back to home page"
            title="↩ Back"
            size="large"
            style={{ marginTop: "3rem" }}
          />

          <div className={styles.recipeHeader}>
            <h2>{recipe.label}</h2>
          </div>
          <div className={styles.recipeContentWrapper}>
            <div className={styles.recipeImg}>
              <img src={recipe.image} alt={`Image of ${recipe.label}`} />
            </div>

            <section className={styles.recipeInfoWrapper}>
              <div className={styles.recipeInfo}>
                <p>
                  <strong>Cuisine Type:</strong>{" "}
                  {recipe.cuisineType
                    ?.map((type) => capitalizeFirstLetter(type))
                    .join(", ")}
                </p>
                <p>
                  <strong>Meal Type:</strong>{" "}
                  {recipe.mealType
                    ?.map((type) => capitalizeFirstLetter(type))
                    .join(", ")}
                </p>
                <div className={styles.yieldAndTime}>
                  <p>
                    <strong>Yield:</strong> {recipe.yield} people
                  </p>
                  {recipe.totalTime && recipe.totalTime > 0 ? (
                    <p>
                      <strong>Time:</strong> {recipe.totalTime} min
                    </p>
                  ) : null}
                </div>
              </div>
              <h2>Ingredients</h2>
              <a
                className={styles.fullRecipe}
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
                  {["ENERC_KCAL", "CHOCDF", "PROCNT", "FAT"].map((key) => {
                    const nutrient = recipe.totalNutrients[key];
                    return nutrient ? (
                      <p key={key}>
                        <strong>{nutrient.label}:</strong>{" "}
                        {Math.round(nutrient.quantity)} {nutrient.unit}
                      </p>
                    ) : null;
                  })}
                </div>
              )}
            </section>
          </div>
          <Tags
            title="Tags"
            tags={recipe.healthLabels}
            tagClassName={styles.healthLabelTag}
          />
        </div>
      </div>
    </div>
  );
}
