import Cards from "./../../components/cards/Cards"
import Chart from "./../../components/chart/Chart"
import { categories, chartdata } from "./../../components/chart/fake_data"
import { Divider } from "@tremor/react"
import styles from './../../styles/dashboard.module.css'
import { useRouter } from "next/router"

export default function Dashboard() {

  const r = useRouter()

  // function for cards onclick
  // should link to more detailed view of user
  function handleClick(id) {
    r.push({
      pathname: `dashboard/${id}`
    })
  }

  return <div>
    <div className={styles.container}>
      <div className="pt-4">
        <h1 className="text-4xl mb-6">Dashboard</h1>
        <Chart fakedata={chartdata} />
        <Divider />
        <h1 className="text-4xl mb-6">Active Campaigns</h1>
        <Cards categories={categories} handleClick={handleClick} />
      </div>
    </div>
  </div>
}