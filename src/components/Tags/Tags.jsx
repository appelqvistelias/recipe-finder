import styles from "./Tags.module.css";

export default function Tags({ title = "Tags", tags = [] }) {
  return (
    <section className={styles.tagsContainer}>
      <h3>{title}</h3>
      <div className={styles.healthLabels}>
        {tags.map((tag, index) => (
          <p key={index} className={styles.healthLabelTag}>
            {tag}
          </p>
        ))}
      </div>
    </section>
  );
}