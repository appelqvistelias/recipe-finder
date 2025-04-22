
import React from 'react';
import styles from './MealCard.module.css';

export default function MealCard({ meal }) {
    return (
      <section className={styles.mealCard}>
        <img src={meal.image} alt={meal.label} className={styles.mealImage} />
        <div className={styles.mealInfo}>
          <h2>{meal.label}</h2>
          <p>{meal.dietLabels.join(", ")}</p>
          <a href={meal.url} target="_blank" rel="noopener noreferrer">
            Visa recept
          </a>
        </div>
      </section>
    );
  }

    

