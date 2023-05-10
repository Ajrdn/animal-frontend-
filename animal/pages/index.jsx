import Head from 'next/head'
import Header from '../components/Header'
import MainSection from '../components/MainSection'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Mong Home</title>
      </Head>
      <Header home />
      <MainSection />
    </div>
  )
}

export default Home
