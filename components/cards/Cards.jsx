import styles from './Cards.module.css';

export default function Cards({ SampleTextProp }) {
  return <div className={styles.container}>{SampleTextProp}</div>;
}
