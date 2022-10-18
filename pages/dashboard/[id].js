import Chart from "./../../components/chart/Chart"
import Header from './../../components/header/Header'
import { categories } from "../../components/chart/fake_data"
import { useRouter } from "next/router"

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } }
    ],
    fallback: false
  }
}

export const getStaticProps = (context) => {
  return {
    props: { categories }
  }
}

export default function Id(props) {

  const r = useRouter()
  console.log(props.categories[0])
  console.log(r.asPath)

  if (r.asPath === '/dashboard/1') {
    return <div>
      <Header />
      Henry
    </div>
  } else if (r.asPath === '/dashboard/2') {
    return <div>
      <Header />
      Wim
    </div>
  } else if (r.asPath === '/dashboard/3') {
    return <div>
      <Header />
      Daemon
    </div>
  } else if (r.asPath === '/dashboard/4') {
    return <div>
      <Header />
      Amalia
    </div>
  } else {
    return <>
      Fish not found
    </>
  }
}