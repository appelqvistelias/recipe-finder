
import React from 'react';
import styles from './MealCard.module.css';
import Button from '../Button/Button';

export default function MealCard({ meal }) {
    return (
      <section className={styles.mealCard}>
        <div className={styles.imgContainer}>
        <img src={meal.image} alt={meal.label} className={styles.mealImage} />

        </div>
        <section className={styles.mealInfo}>
          <h2>{meal.label}</h2>
          <p>{meal.dietLabels.join(", ")}</p>
           {/* <Button
                  title="Show recipe"
                  
                /> */}
          
        </section>
      </section>
    );
  }

    

