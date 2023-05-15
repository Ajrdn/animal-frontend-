/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'
import DonateList from './DonateList'

const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const DonateMain = () => {
  return (
    <div css={css`
      width: 100vw;
      padding: 0 5vw;
      margin-bottom: 5vh;
      display: flex;
      flex-direction: column;
    `}>
      <h2
        css={css`
          width: 100%;
          margin-top: 4vh;
          padding: 0;
          text-align: left;
        `}
        className={boldFont.className}
      >
        동물들을 도와주세요!
      </h2>
      <DonateList />
    </div>
  )
}

export default DonateMain
