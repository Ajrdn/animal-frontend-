/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import localFont from 'next/font/local'
import { useState, useEffect } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const title = css`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`

const GenderTotalAnimal = () => {
  const [gender, setGender] = useState([])
  const [count, setCount] = useState([])
  const [backgroundColor, setBackgroundColor] = useState([])

  useEffect(() => {
    const getGenderTotalAnimal = async() => {
      const data = await axios.get('http://127.0.0.1:8080/getGenderTotalAnimal')
      data.data.map(animal => {
        let animal_gender = ''
        let color = ''
        if(animal.sex_nm === '♀') {
          animal_gender = '암컷'
          color = '#FF7888'
        } else if(animal.sex_nm === '♂') {
          animal_gender = '수컷'
          color = '#005FE8'
        } else {
          animal_gender = '중성'
          color = '#4FA033'
        }
        setGender(prev => [...prev, animal_gender])
        setCount(prev => [...prev, animal.count])
        setBackgroundColor(prev => [...prev, color])
      })
    }
    getGenderTotalAnimal()
  }, [])

  return (
    <section css={css`
      width: 100%;
      border: 3px solid #C0C9D6;
      border-radius: 10px;
      padding: 20px 30px;
    `}>
      <p
        css={title}
        className={normalFont.className}
      >
        성별
      </p>
      <Bar
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              display: false,
            },
          },
        }}
        data={{
          labels: gender,
          datasets: [
            {
              backgroundColor,
              data: count,
              barThickness: 30,
            },
          ],
        }}
      />
    </section>
  )
}

export default GenderTotalAnimal
