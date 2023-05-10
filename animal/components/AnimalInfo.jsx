/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'
import axios from 'axios'
import Underline from './Underline'
import AnimalInfoCard from './AnimalInfoCard'
import arrow from '/public/images/arrow.png'
import Link from 'next/Link'
import localFont from 'next/font/local'
import { useState, useEffect } from 'react'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const name = css`
  font-size: 60px;
  font-weight: bold;
  color: #515151;
  margin: 0;
  padding: 0;
  line-height: 50px;
`

const gender = css`
  font-size: 30px;
  font-weight: bold;
  color: #C0C9D6;
  margin: 0;
  padding: 0;
`

const date = css`
  font-size: 20px;
  font-weight: normal;
  color: #463D25;
  margin: 0;
  padding: 0;
`

const back = css`
  width: 4vw;
  height: 4vw;
  border: 3px solid #C0C9D6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 30px;
`

const AnimalInfo = (props) => {
  const [animal, setAnimal] = useState()

  useEffect(() => {
    const getAnimal = async() => {
      const data = await axios.get(`http://127.0.0.1:8080/getAnimalData/${props.id}`)
      setAnimal(data.data)
    }
    getAnimal()
  }, [])

  return (
    <section css={css`
      height: 90vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: relative;
    `}>
      <Link href='/Animals' css={back}>
        <Image
          src={arrow}
          css={css`
            width: 0.9vw;
            height: 1.8vw;
          `}
        />
      </Link>
      <Image
        src={animal && animal.image_cours}
        alt='animal'
        width={1000}
        height={1000}
        css={css`
          width: 27vw;
          height: 27vw;
          border: 3px solid #C0C9D6;
          border-radius: 15px;
        `}
      />
      <main css={css`
        width: 40vw;
        height: 26vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
      >
        <div css={css`
          margin-bottom: 15px;
        `}>
          <div css={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 20px;
          `}>
            <div css={css`
              display: flex;
              gap: 15px;
              align-items: flex-end;
            `}>
              <p css={name} className={boldFont.className}>{animal && animal.species_nm.split('] ')[0].slice(1)}</p>
              <p css={gender} className={boldFont.className}>{animal && animal.sex_nm}</p>
            </div>
            <p css={date} className={normalFont.className}>
              공고일자 : {animal && animal.pblanc_begin_de.substr(0, 4)}.{animal && animal.pblanc_begin_de.substr(4, 2)}.{animal && animal.pblanc_begin_de.substr(6, 2)} ~ {animal && animal.pblanc_end_de.substr(0, 4)}.{animal && animal.pblanc_end_de.substr(4, 2)}.{animal && animal.pblanc_end_de.substr(6, 2)}
            </p>
          </div>
          <Underline />
        </div>
        <div>
          <AnimalInfoCard
            title='품종 / 나이'
            content={`${animal && animal.species_nm.split('] ')[1]} / ${parseInt(new Date().getFullYear()) - parseInt(animal && animal.age_info)}살`}
          />
          <AnimalInfoCard
            title='체중'
            content={animal && animal.bdwgh_info}
          />
          <AnimalInfoCard
            title='중성화 여부'
            content={animal && animal.neut_yn}
          />
          <AnimalInfoCard
            title='특징'
            content={animal && animal.sfetr_info}
          />
          <AnimalInfoCard
            title='발견 장소'
            content={animal && animal.discvry_plc}
          />
        </div>
      </main>
    </section>
  )
}

export default AnimalInfo
