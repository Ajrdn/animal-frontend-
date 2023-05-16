/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import axios from 'axios'
import localFont from 'next/font/local'
import { useState, useEffect } from 'react'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const title = css`
  font-size: 20px;
  font-weight: 500;
`

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
)

const DayTotalAnimal = () => {
  const [label, setLabel] = useState([])
  const [count, setCount] = useState([])
  const [backgroundColor, setBackgroundColor] = useState([])

  useEffect(() => {
    const getChartData = async() => {
      const data = await axios.get('http://127.0.0.1:8080/getDayTotalAnimal')
      const backgroundColors = ['#466797', '#2A6CCA', '#3D4E66', '#455C7F', '#3D4653', '#4270B3', '#0068FF']
      data.data.map((animal, index) => {
        setLabel(prev => [...prev, animal.pblanc_begin_de])
        setCount(prev => [...prev, animal.count])
        setBackgroundColor(prev => [...prev, backgroundColors[index % backgroundColors.length]])
      })
    }
    getChartData()
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
        공고 날짜별 유기 동물 수
      </p>
      <Chart
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 20,
              },
            },
          },
        }}
        data={{
          labels: label,
          datasets: [
            {
              type: 'line',
              borderColor: '#DE7878',
              borderWidth: 2,
              fill: false,
              data: count,
            },
            {
              type: 'bar',
              backgroundColor,
              data: count,
            },
          ],
        }}
      />
    </section>
  )
}

export default DayTotalAnimal
