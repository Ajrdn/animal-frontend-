import Head from 'next/head'
import Header from '../components/Header'
import DonateMain from '../components/DonateMain'

const Donate = () => {
  return (
    <div>
      <Head>
        <title>Mong Donate</title>
      </Head>
      <Header donate />
      <DonateMain />
    </div>
  )
}

export default Donate
