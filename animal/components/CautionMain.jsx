/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { React, useState } from 'react'
import localFont from 'next/font/local'
import CautionHandle from './CautionHandle'
import CautionAdoption from './CautionAdoption'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const readme = css`
  font-weight: bold;
  margin: 4vh 0;
`

const button = css`
  width: 80%;
  height: 6vh;
  border: 3px solid #C0C9D6;
  border-radius: 10px;
  font-size: 15px;
`

const CautionMain = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div css={css`
      width: 100vw;
      padding: 0 5vw;
      margin-bottom: 5vh;
    `}>
      <header css={css`
        width: 100%;
        display: flex;
        justify-content: flex-start;
      `}>
        <h2 css={readme} className={boldFont.className}>#꼭_읽어주세요</h2>
      </header>
      <main css={css`
        display: flex;
      `}>
        <nav css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
        `}>
          <button
            css={[button, css`
              background-color: ${toggle ? '#F2F2F2' : 'white'};
            `]}
            className={normalFont.className}
            onClick={() => {setToggle(true)}}
          >
            대처 방법
          </button>
          <button
            css={[button, css`
              background-color: ${toggle ? 'white' : '#F2F2F2'};
            `]}
            className={normalFont.className}
            onClick={() => {setToggle(false)}}
          >
            입양 방법
          </button>
        </nav>
        <section css={css`
          color: #515151;
          flex: 5;
          border: 3px solid #C0C9D6;
          border-radius: 10px;
          padding: 5vh 3vw;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `}>
          {toggle ? <CautionHandle /> : <CautionAdoption />}
        </section>
      </main>
    </div>
  )
}

export default CautionMain
