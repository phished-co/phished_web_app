/* eslint-disable @next/next/no-img-element */
// ^^ We have to change this for future!! ^^

import styles from './Header.module.css';
import Link from 'next/link';

export default function Header({ ...headerProps }) {
  return (
    <div className={styles.navbar}>
      <header {...headerProps} className={styles.header}>
        <div className={styles.leftnav}>
          <Link href="/landingPage">
            <a>
              {/* have to make images a next/image element here */}
              <img
                className={styles.logo}
                src="LOGO.svg"
                alt="logo placeholder"
              />
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/learn">
            <a className={styles.link}>Learn</a>
          </Link>
        </div>
        <div>
          <Link href="/dashboard">
            <a className={styles.link}>Dashboard</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>My Account</a>
          </Link>
        </div>
      </header>
    </div>
  );
}
