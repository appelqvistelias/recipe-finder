import React from 'react';
import styles from './MealCard.module.css';

export default function MealCard({ recipe, onSelect }) {
  if (!recipe) return null;

  const allergenInfo = recipe.cautions && recipe.cautions.length > 0 
    ? `Contains allergens: ${recipe.cautions.join(", ")}` 
    : "No allergen information available";

  const dietInfo = recipe.dietLabels && recipe.dietLabels.length > 0
    ? `Diet types: ${recipe.dietLabels.join(", ")}` 
    : "No diet information available";

  const recipeId = recipe.id || recipe.label.replace(/\s+/g, '-').toLowerCase();

  return (
    <article 
      className={styles.mealCard}
      tabIndex="0"
      aria-label={`Recipe for ${recipe.label}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSelect();
        }
      }}
    >
      <div className={styles.imgContainer}>
        <img 
          src={recipe.image} 
          alt={`Prepared dish of ${recipe.label}`} 
          className={styles.mealImage} 
        />
      </div>
      <div className={styles.mealInfo}>
        <h2 id={`recipe-${recipeId}`}>
          {recipe.label}
        </h2>

        {recipe.dietLabels?.length > 0 && (
          <p aria-label={dietInfo}>
            <span className={styles.infoLabel}>Diet:</span> {recipe.dietLabels.join(", ")}
          </p>
        )}
        
        {recipe.cautions?.length > 0 && (
          <p aria-label={allergenInfo}>
            <span className={styles.infoLabel}>Allergens:</span> {recipe.cautions.join(", ")}
          </p>
        )}
      </div>
    </article>
  );
}
