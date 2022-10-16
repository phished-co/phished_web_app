import styles from './Button.module.css';

export default function Button(props) {
  return <div className={styles.container}>
    <button className={`
      ${styles.button}
      ${props.primary ? styles.primary : styles.secondary}
    `}>{props.label}</button>
  </div>
}