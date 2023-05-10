/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SheltersList from './SheltersList'
import localFont from 'next/font/local'

const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const SheltersMain = () => {
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
          margin: 4vh 0;
          padding: 0;
        `}
        className={boldFont.className}
      >
        전국 유기 동물 보호 센터
      </h2>
      <SheltersList />
    </div>
  )
}

export default SheltersMain
