import { useRouter } from "next/router"
import { Divider } from "@tremor/react"

// TODO switch from css modules to styled-components
import styles from './../../styles/dashboard.module.css'

// Our imports
import { categories, chartdata } from "./../../data/fake_data"
import Cards from "./../../components/cards/Cards"
//import Chart from "./../../components/chart/Chart"
import NewChart from "../../components/newChart/NewChart"

export default function Dashboard() {

  const r = useRouter()

  function handleClick(id) {
    r.push({
      pathname: `dashboard/${id}`
    })
  }

  return <div>
    <div className={styles.container}>
      <div className="pt-4">
        <h1 className="text-4xl mb-6">Dashboard</h1>
        <NewChart data={chartdata} />
        <Divider />
        <h1 className="text-4xl mb-6">Active Campaigns</h1>
        <Cards categories={categories} handleClick={handleClick} />
      </div>
    </div>
  </div>
}