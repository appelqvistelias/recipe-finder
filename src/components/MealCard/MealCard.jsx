import React from 'react';
import styles from './MealCard.module.css';

export default function MealCard({ recipe }) {
  if (!recipe) return null;

  // Prepare allergen information for screen readers
  const allergenInfo = recipe.cautions && recipe.cautions.length > 0 
    ? `Contains allergens: ${recipe.cautions.join(", ")}` 
    : "No allergen information available";

  // Prepare diet label information for screen readers
  const dietInfo = recipe.dietLabels && recipe.dietLabels.length > 0
    ? `Diet types: ${recipe.dietLabels.join(", ")}` 
    : "No diet information available";

  return (
    <article 
      className={styles.mealCard}
      tabIndex="0" // Makes the card focusable for keyboard navigation
      aria-label={`Recipe for ${recipe.label}`} // Provides context for screen readers
    >
      <div className={styles.imgContainer}>
        <img 
          src={recipe.image} 
          alt={`Prepared dish of ${recipe.label}`} // More descriptive alt text
          className={styles.mealImage} 
        />
      </div>
      <div className={styles.mealInfo}>
        <h2 id={`recipe-${recipe.id || recipe.label.replace(/\s+/g, '-').toLowerCase()}`}>
          {recipe.label}
        </h2>

        {recipe.dietLabels && recipe.dietLabels.length > 0 && (
          <p aria-label={dietInfo}>
            <span className={styles.infoLabel}>Diet:</span> {recipe.dietLabels.join(", ")}
          </p>
        )}
        
        {recipe.cautions && recipe.cautions.length > 0 && (
          <p aria-label={allergenInfo}>
            <span className={styles.infoLabel}>Allergens:</span> {recipe.cautions.join(", ")}
          </p>
        )}
      </div>
    </article>
  );
}