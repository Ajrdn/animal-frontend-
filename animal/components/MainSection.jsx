/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import MainDogImage from './MainDogImage'
import dog1 from '/public/images/dog1.png'
import dog2 from '/public/images/dog2.png'
import dog3 from '/public/images/dog3.png'
import dog4 from '/public/images/dog4.png'
import localFont from 'next/font/local'

const font = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const fonts = css`
  color: white;
  font-size: 80px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`

const MainSection = () => {
  return (
    <main
      css={css`
        height: 90vh;
        background-color: #C0C9D6;
        display: flex;
      `}
    >
      <section
        css={css`
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: flex-start;
          padding: 0 100px;
        `}
      >
        <p css={fonts} className={font.className}>#HELP...</p>
        <p css={fonts} className={font.className}>#Need<br />Your Love</p>
      </section>
      <section css={css`
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
      `}>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 20px;
          `}
        >
          <MainDogImage
            width={340}
            height={190}
            image={dog1}
          />
          <MainDogImage
            width={280}
            height={150}
            image={dog2}
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 20px;
          `}
        >
          <MainDogImage
            width={315}
            height={170}
            image={dog3}
          />
          <MainDogImage
            width={330}
            height={210}
            image={dog4}
          />
        </div>
      </section>
    </main>
  )
}

export default MainSection
