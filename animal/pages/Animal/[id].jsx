import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import AnimalInfo from '../../components/AnimalInfo'

const Animal = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <Head>
        <title>Mong Animals</title>
      </Head>
      <Header animals />
      <AnimalInfo
        id={id}
      />
    </div>
  )
}

export default Animal
