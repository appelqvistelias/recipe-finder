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
      <section className={styles.mealInfo}>
        <h2>{recipe.label}</h2>

        {recipe.dietLabels && recipe.dietLabels.length > 0 && (
          <p>{recipe.dietLabels.join(", ")}</p>
        )}

        {/* <Button title="Show recipe" /> */}
      </section>
    </section>
  );
}
