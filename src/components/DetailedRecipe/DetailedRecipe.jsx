import styles from "./DetailedRecipe.module.css";
import UnitConverter from "../UnitConverter/UnitConverter";

export default function DetailedRecipe({ recipe }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>{recipe.label}</h1>
        <img src={recipe.image} alt={recipe.label} />
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredientLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
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
        <UnitConverter />
      </div>
    </div>
  );
}
