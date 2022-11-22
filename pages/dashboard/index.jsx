import { useRouter } from 'next/router';
import { Divider } from '@tremor/react';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

// TODO switch from css modules to styled-components
import styles from './../../styles/dashboard.module.css';

// Our imports
// import { categories, chartdata } from "./../../data/fake_data"
import Cards from './../../components/cards/Cards';
//import Chart from "./../../components/chart/Chart"
import NewChart from '../../components/newChart/NewChart';

export default function Dashboard() {
  let [chartdata, setChartdata] = useState([]);
  const { data: session } = useSession();
  const r = useRouter();

  function handleClick(id) {
    r.push({
      pathname: `dashboard/${id}`,
    });
  }

  useEffect(() => {
    if (session) {
      const getData = async () => {
        const res = await axios.get(
          `/api/emailData?userEmail=${session.user.email}`
        );
        setChartdata(res.data);
        console.log(res.data);
      };
      getData();
    }
  }, [session]);

  return (
    <div>
      <div className={styles.container}>
        <div className="pt-4">
          <h1 className="text-4xl mb-6">Dashboard</h1>
          <NewChart data={chartdata} />
          <Divider />
          {/*<h1 className="text-4xl mb-6">Active Campaigns</h1>*/}
          {/*<Cards categories={categories} handleClick={handleClick} />*/}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
