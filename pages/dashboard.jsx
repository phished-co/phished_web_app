import Cards from "../components/cards/Cards"
import Chart from "../components/chart/Chart"
import { categories, chartdata } from "../components/chart/fake_data"
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
    <div className="pt-4">
      <h1 className="text-4xl mb-6">Dashboard</h1>
      <Chart fakedata={chartdata} />
      <hr className="mt-12 mb-10 mr-32 ml-32" />
      <h1 className="text-4xl mb-6">Active Campaigns</h1>
      <Cards categories={categories} handleClick={handleClick} />
    </div>
  </div>
}