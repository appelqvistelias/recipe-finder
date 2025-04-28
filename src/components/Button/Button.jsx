import styles from "./Button.module.css";

export default function Button({ title, onClick, style, ...rest }) {
  return (
    <button 
      className={styles.button} 
      onClick={onClick} 
      style={style}
      {...rest}
    >
      {title}
    </button>
  );
}