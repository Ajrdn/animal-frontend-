import Head from 'next/head'
import Header from '../components/Header'
import StatsSection from '../components/StatsSection'

const Stats = () => {
  return (
    <div>
      <Head>
        <title>Mong Stats</title>
      </Head>
      <Header stats />
      <StatsSection />
    </div>
  )
}

export default Stats
