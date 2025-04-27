import styles from "./DetailedRecipe.module.css";
import UnitConverter from "../UnitConverter/UnitConverter";

export default function DetailedRecipe({ recipe }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>{recipe.label}</h1>
        <div className={styles.recipeInfo}>
          <p>Cuisine Type: {recipe.cuisineType?.join(", ")}</p>
          <p>Meal Type: {recipe.mealType?.join(", ")}</p>
          <div className={styles.yieldAndTime}>
            <p>Yield: {recipe.yield} persons</p>
            <p>Time: {recipe.totalTime} min</p>
          </div>
        </div>
        <img src={recipe.image} alt={recipe.label} />
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredientLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <UnitConverter />

        {recipe.totalNutrients && (
          <div className={styles.nutrients}>
            <h2>Nutrients</h2>
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
        <h2>Tags</h2>
        <div className={styles.healthLabels}>
          {recipe.healthLabels?.map((label, index) => (
            <p key={index} className={styles.healthLabelTag}>
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
