/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import localFont from 'next/font/local'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const title = css`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`

ChartJS.register(ArcElement, Tooltip, Legend)

const BreedTotalAnimal = () => {
  const [breed, setBreed] = useState([])
  const [count, setCount] = useState([])
  const [backgroundColor, setBackgroundColor] = useState([])
  const [borderColor, setBorderColor] = useState([])

  useEffect(() => {
    const getBreedTotalAnimal = async() => {
      const data = await axios.get('http://127.0.0.1:8080/getBreedTotalAnimal')
      data.data.map(animal => {
        let color = ''
        let border = ''
        if(animal.breed === '개') {
          color = '#96693F'
          border = '#7A5028'
        } else if(animal.breed === '고양이') {
          color = '#E4954D'
          border = '#BF752F'
        } else {
          color = '#C7B09C'
          border = '#AB8B6C'
        }
        setBreed(prev => [...prev, animal.breed])
        setCount(prev => [...prev, animal.count])
        setBackgroundColor(prev => [...prev, color])
        setBorderColor(prev => [...prev, border])
      })
    }
    getBreedTotalAnimal()
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
        품종
      </p>
      <Doughnut
        options={{
          plugins: {
            legend: {
              position: 'right',
            },
          },
        }}
        data={{
          labels: breed,
          datasets: [
            {
              backgroundColor,
              borderColor,
              data: count,
            },
          ],
        }}
      />
    </section>
  )
}

export default BreedTotalAnimal
