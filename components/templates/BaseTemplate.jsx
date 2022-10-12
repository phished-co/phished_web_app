import styles from './BaseTemplate.module.css';

export default function BaseTemplate({ SampleTextProp }) {
  return <div className={styles.container}>{SampleTextProp}</div>;
}
