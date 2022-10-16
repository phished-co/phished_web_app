import styles from './Header.module.css';
import Link from 'next/link';


export default function Header({ ...headerProps }) {
  return (
    <div className={styles.navbar}>
      <header {...headerProps} className={styles.header}>
        <div className={styles.leftnav}>
          <img className={styles.logo} src= 'LOGO.svg' alt= 'logo placeholder' />
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/learn">
            <a>Learn</a>
          </Link>
        </div>
        <div>
          <Link href="/dashboard">
            <a className={styles.link}>Dashboard</a>
          </Link>
          <Link href="/account">
            <a>My Account</a>
          </Link>
        </div>
      </header>
    </div>
  );
}
