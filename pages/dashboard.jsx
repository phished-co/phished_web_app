import Cards from "../components/cards/Cards"
import Chart from "../components/chart/Chart"
import chartdata from "../components/chart/fake_data"
import Header from '../components/header/Header'
import styles from '../styles/dashboard.module.css'

export default function Dashboard() {

  // function for cards onclick
  // should link to more detailed view of user
  function handleClick() {
    alert('click')
  }

  return <div className={styles.container}>
    <Header />
    <h1 className="text-4xl mb-4">Dashboard</h1>
    <Chart fakedata={chartdata} />
    <hr className="m-8" />
    <Cards handleClick={handleClick} />
  </div>
}