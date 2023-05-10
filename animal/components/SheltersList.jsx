/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import Select from 'react-select'
import localFont from 'next/font/local'
import { useState, useEffect } from 'react'
import ShelterInfo from './ShelterInfo'

const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const headerTitle = css`
  display: flex;
  padding-bottom: 3px;
  margin-bottom: 10px;
  border-bottom: 3px solid #818B98;

  & > p {
    flex: 1;
    color: white;
    text-align: center;
    border-radius: 5px;
    margin: 0 1.5px;
    padding: 15px 0;
    background-color: #C0C9D6;
  }
`

const SheltersList = () => {
  const [shelters, setShelters] = useState([])
  const [regions, setRegions] = useState([])
  const [region, setRegion] = useState('')

  useEffect(() => {
    const getShelters = async() => {
      const region_set = new Set()
      const data = await axios.get('http://127.0.0.1:8080/getShelterData')
      setShelters(data.data)
      data.data.map(shelter => region_set.add(shelter.jurisd_inst_nm.split(' ')[1]))
      region_set.forEach(shelter =>
        setRegions(prev => [...prev, {value: shelter, label: shelter}])
      )
    }

    getShelters()
  }, [])

  useEffect(() => {
    setShelters((currentValue) => currentValue)
    const resetShelters = async() => {
      const data = await axios.get(`http://127.0.0.1:8080/getShelterData/${region}`)
      setShelters(data.data)
    }

    resetShelters()
  }, [region])

  const resetShelters = async (event) =>  {
    setRegion(event.value)
  }

  return (
    <section>
      <Select
        options={regions}
        defaultValue={regions[0]}
        placeholder='시·군·구'
        onChange={resetShelters}
        css={css`
          width: 200px;
          margin-bottom: 4vh;
        `}
      />
      <header css={headerTitle}>
        <p className={boldFont.className}>🌏 관할지역</p>
        <p className={boldFont.className}>🏡 보호 센터명</p>
        <p className={boldFont.className}>️📞 전화번호</p>
        <p className={boldFont.className}>🚩 보호 센터 주소</p>
      </header>
      {shelters.map(shelter =>
        <ShelterInfo
          key={shelter.shter_id}
          shter_nm={shelter.shter_nm}
          shter_telno={shelter.shter_telno}
          protect_plc={shelter.protect_plc}
          jurisd_inst_nm={shelter.jurisd_inst_nm}
        />
      )}
    </section>
  )
}

export default SheltersList
