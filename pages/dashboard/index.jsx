import { useRouter } from 'next/router';
import { Divider } from '@tremor/react';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { Button, Title, createStyles, Text } from '@mantine/core'

import axios from 'axios';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

// TODO switch from css modules to styled-components
import styles from './../../styles/dashboard.module.css';

// Our imports
// import { categories, chartdata } from "./../../data/fake_data"
import Cards from './../../components/cards/Cards';
//import Chart from "./../../components/chart/Chart"
import NewChart from '../../components/newChart/NewChart';

const useStyles = createStyles((theme) => ({
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center'
  }
}))

export default function Dashboard() {
  let [chartdata, setChartdata] = useState([]);
  const { data: session } = useSession();
  const r = useRouter();
  const { classes } = useStyles()

  // function handleClick(id) {
  //   r.push({
  //     pathname: `dashboard/${id}`,
  //   });
  // }

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
  }, []);

  return (
    <div>

      <div className={styles.container}>
        <div className="pt-4">
          <div className={classes.topbar}>
            <h1 className="text-4xl mb-6">Dashboard</h1>

          </div>
          <Text > All phishing emails you send will be tracked here.</Text>
          <Text > <b><Text span color="blue" inherit>Success</Text> </b>increases every time a user clicks on a link from an email you have sent them.</Text>
          <br />
          <NewChart data={chartdata} />

          <Divider />
          <Button
            size='md'
            variant='subtle'
            onClick={() => {
              r.push({ pathname: '/account' });
            }}
            mt={12}
          >
            Send phishing email
          </Button>
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
        destination: '/',
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
