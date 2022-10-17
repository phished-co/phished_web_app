// import Head from 'next/head';
import Search from '../components/search/Search';
import Header from '../components/header/Header';
// import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import {getUsers, setUsers} from "../firebase/users"

export default function Home() {

    // getUsers();
    // setUsers("trevor")

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <h1> Welcome to phished!</h1>
        <Search />
      </div>
    </>
  );
}
