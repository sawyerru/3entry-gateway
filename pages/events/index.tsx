import Head from 'next/head'

import Header from '../../components/Header'
import Events from '../../components/Events'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
      <Head>
        <title>3ntry: Your ticket to Web 3 IRL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Navbar /> */}
      <Events />
      {/* <Products storeId="wildeverse.mintbase1.near" /> */}
      {/* <Products storeId="hellovirtualworld.mintbase1.near" /> */}
      {/* <Minter />
      <Footer /> */}
    </>
  )
}

export default Home
