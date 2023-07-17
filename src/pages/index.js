import Layout from "../../Layout";
import React from "react";
import Header from '@/components/Header';
import Body from "@/components/Body";

const Home = () => {
  return (
    <div>
    <Layout>
      <Header />
      <Body />
      {/* <OurHearts />
      <Numbers />
      <Mission /> */}
      </Layout>
    </div>
  )
}

export default Home;