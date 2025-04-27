import React from 'react';
import styles from './MealCard.module.css';

import Button from '../Button/Button';

export default function MealCard({ recipe }) {
  if (!recipe) return null;

  return (
    <section className={styles.mealCard}>
      <div className={styles.imgContainer}>
        <img 
          src={recipe.image} 
          alt={recipe.label} 
          className={styles.mealImage} 
        />
      </div>
      <div className={styles.mealInfo}>
        <h2>{recipe.label}</h2>

        {recipe.dietLabels && recipe.dietLabels.length > 0 && (
          <p><span className={styles.infoLabel}>Diet:</span> {recipe.dietLabels.join(", ")}</p>
        )}
        
        {recipe.cautions && recipe.cautions.length > 0 && (
          <p><span className={styles.infoLabel}>Allergens:</span> {recipe.cautions.join(", ")}</p>
        )}

       
      </div>
    </section>
  );
}
