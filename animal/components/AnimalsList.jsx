/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import localFont from 'next/font/local'
import { useState, useEffect } from 'react'
import AnimalCard from './AnimalCard'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const animalsSection = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px 0;
`

const standard = css`
  padding: 15px 40px;
  border: 3px solid #C0C9D6;
  border-radius: 5px;
`

const AnimalsList = (props) => {
  const [animals, setAnimals] = useState([])
  const [newStandard, setNewStandard] = useState(false)
  const [dog, setDog] = useState(true)
  const [cat, setCat] = useState(true)
  const [etc, setEtc] = useState(true)

  useEffect(() => {
    const getAnimals = async() => {
      const data = await axios.get('http://127.0.0.1:8080/getAnimalListData/oldDate?dog=true&cat=true&etc=true')
      setAnimals(data.data)
      props.setPageCount(data.data.length)
    }

    getAnimals()
  }, [])

  useEffect(() => {
    const getNewAnimals = async() => {
      let data
      if(newStandard) data = await axios.get(`http://127.0.0.1:8080/getAnimalListData/newDate?dog=${dog}&cat=${cat}&etc=${etc}`)
      else data = await axios.get(`http://127.0.0.1:8080/getAnimalListData/oldDate?dog=${dog}&cat=${cat}&etc=${etc}`)

      setAnimals(data.data)
      props.setPageCount(data.data.length)
    }

    getNewAnimals()
  }, [newStandard, dog, cat, etc])

  return (
    <>
      <nav css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5vh;
      `}>
        <div css={css`
          display: flex;
          gap: 20px;
        `}>
          <p
            css={[standard, css`
              background-color: ${dog ? '#d7e2f1' : 'white'};
            `]}
            className={normalFont.className}
            onClick={() => setDog(prev => !prev)}
          >
            개
          </p>
          <p
            css={[standard, css`
              background-color: ${cat ? '#d7e2f1' : 'white'};
            `]}
            className={normalFont.className}
            onClick={() => setCat(prev => !prev)}
          >
            고양이
          </p>
          <p
            css={[standard, css`
              background-color: ${etc ? '#d7e2f1' : 'white'};
            `]}
            className={normalFont.className}
            onClick={() => setEtc(prev => !prev)}
          >
            기타축종
          </p>
        </div>
        <div css={css`
          display: flex;
          gap: 20px;          
        `}>
          <p
            css={[standard, css`
              background-color: ${!newStandard ? '#d7e2f1' : 'white'};
            `]}
            className={normalFont.className}
            onClick={() => {
              setNewStandard(false)
            }}
          >
            최고순
          </p>
          <p
            css={[standard, css`
              background-color: ${newStandard ? '#d7e2f1' : 'white'};
            `]}
            className={normalFont.className}
            onClick={() => {
              setNewStandard(true)
            }}
          >
            최신순
          </p>
        </div>
      </nav>
      <section css={animalsSection}>
        {animals.slice(9 * (props.page - 1), 9 * (props.page - 1) + 9).map(animal =>
          <AnimalCard
            key={animal.abdn_id}
            id={animal.abdn_id}
            image={animal.image_cours}
            begin_date={animal.pblanc_begin_de}
            end_date={animal.pblanc_end_de}
            species_nm={animal.species_nm}
            gender={animal.sex_nm}
            discvry_plc={animal.discvry_plc}
          />
        )}
      </section>
    </>
  )
}

export default AnimalsList
