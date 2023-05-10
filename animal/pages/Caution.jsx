import Head from 'next/head'
import Header from "../components/Header"
import CautionMain from "../components/CautionMain"

const Caution = () => {
  return (
    <div>
      <Head>
        <title>Mong Caution</title>
      </Head>
      <Header caution />
      <CautionMain />
    </div>
  )
}

export default Caution
