import styles from "./DetailedRecipe.module.css";

function convertUnits(unit, amount) {
  switch (unit?.toLowerCase()) {
    case "cup":
      return `${(amount * 2.4).toFixed(1)} dl`;
    case "tbsp":
      return `${(amount * 15).toFixed(0)} ml`;
    case "tsp":
      return `${(amount * 5).toFixed(0)} ml`;
    case "oz":
      return `${(amount * 28.35).toFixed(0)} g`;
    case "lb":
      return `${(amount * 0.45).toFixed(2)} kg`;
    default:
      return amount && unit ? `${amount} ${unit}` : "";
  }
}

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
      </div>
    </div>
  );
}
