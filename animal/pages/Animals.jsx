import Head from 'next/head'
import Header from '../components/Header'
import AnimalsMain from '../components/AnimalsMain'

const Animals = () => {
  return (
    <div>
      <Head>
        <title>Mong Animals</title>
      </Head>
      <Header animals />
      <AnimalsMain />
    </div>
  )
}

export default Animals
