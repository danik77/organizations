import Head from "next/head"; 
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import Organizations from "../src/components/Organizations/OrganizationList";
import GoogleMap from "../src/components/Map/Map";

const apiUrl = "http://localhost:3000/files/organizationList.json";

export default function Home({ organizationList }) {
  const [activeOrganization, setActiveOrganization] = useState(null);

  return (
    <Container className={styles.container}>
      <Head>
        <title>Organizations</title>
        <meta name="description" content="Organizations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.main}>
        <Typography variant="h4" mb={3}>
          Organization List
        </Typography>
        <Container className={styles.panel}>
          <Container className={styles.panel__left}>
            <GoogleMap
              organizationList={organizationList}
              activeOrganization={activeOrganization}
            />
          </Container>
          <Container className={styles.panel__right}>
            <Organizations
              organizationList={organizationList}
              setActiveOrganization={setActiveOrganization}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export async function getServerSideProps() {
  const result = await fetch(apiUrl);
  const organizationList = await result.json();

  return {
    props: {
      organizationList: organizationList,
    },
  };
}
