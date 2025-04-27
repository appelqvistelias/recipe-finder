import styles from "./DetailedRecipe.module.css";

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
      </div>
    </div>
  );
}
