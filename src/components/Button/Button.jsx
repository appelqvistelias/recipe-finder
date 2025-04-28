import styles from "./Button.module.css";

export default function Button({
  title,
  onClick,
  style,
  size = "medium",
  width = "normalWidth",
  ...rest
}) {
  const buttonClasses = `${styles.button}
  ${styles[size] || ""} ${styles[width]}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={style}
      width={width}
      {...rest}
    >
      {title}
    </button>
  );
}
