import styles from "./Button.module.css";

export default function Button({ title, onClick, style, size = "medium", ...rest }) {
  const buttonClasses = `${styles.button} ${styles[size] || ''}`;
  
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      style={style}
      {...rest}
    >
      {title}
    </button>
  );
}