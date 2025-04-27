import styles from './Tags.module.css'; // You'll need to create this CSS module

export default function Tags({ tags, title = "Tags" }) {
    return (
        <section className={styles.tagsContainer}>
            <h3>{title}</h3>
            <div className={styles.tagsList}>
                {tags?.map((tag, index) => (
                    <p key={index} className={styles.tagItem}>
                        {tag}
                    </p>
                ))}
            </div>
        </section>
    );
}