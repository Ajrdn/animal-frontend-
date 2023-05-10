import Head from 'next/head'
import Header from '../components/Header'
import SheltersMain from '../components/SheltersMain'

const Shelters = () => {
  return (
    <div>
      <Head>
        <title>Mong Shelters</title>
      </Head>
      <Header shelters />
      <SheltersMain />
    </div>
  )
}

export default Shelters
