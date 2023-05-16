/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import localFont from 'next/font/local'
import Image from 'next/image'
import dog from '/public/images/dog.png'
import { useState, useEffect } from 'react'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const title = css`
  font-size: 20px;
`

const content = css`
  font-size: 30px;
  font-weight: bold;
`

const TotalAnimal = () => {
  const [totalAnimal, setTotalAnimal] = useState(0)

  useEffect(() => {
    const getTotalAnimal = async() => {
      const data = await axios.get('http://127.0.0.1:8080/getTotalAnimal')
      let number = data.data.toString()
      setTotalAnimal(number)
    }
    getTotalAnimal()
  }, [])

  const formatTotalAnimal = (number) => {
    if(number.length <= 3) {
      return number;
    }
  
    let formatNumber = '';
    let count = 0;
    for(let i = number.length - 1; i >= 0; i--) {
      formatNumber = number.charAt(i) + formatNumber;
      count++;
      if(count === 3 && i !== 0) {
        formatNumber = ',' + formatNumber;
        count = 0;
      }
    }
  
    return formatNumber;
  }

  return (
    <section css={css`
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 3px solid #C0C9D6;
      border-radius: 10px;
    `}>
      <div css={css`
        display: flex;
        align-items: center;
      `}>
        <Image
          src={dog}
          alt='dog'
          width={60}
          height={60}
        />
        <p
          css={title}
          className={normalFont.className}
        >전체 유기 동물 수</p>
      </div>
      <p
        css={content}
        className={boldFont.className}
      >
        {formatTotalAnimal(totalAnimal)}
      </p>
    </section>
  )
}

export default TotalAnimal
