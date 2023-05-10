/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const ShelterInfo = (props) => {
  return (
    <div css={css`
      display: flex;
      border-radius: 5px;

      & > p {
        text-align: center;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #C0C9D6;
        margin: 0;
        padding: 15px 10px;
      }
    `}>
      <p className={normalFont.className}>{props.jurisd_inst_nm}</p>
      <p className={normalFont.className}>{props.shter_nm}</p>
      <p className={normalFont.className}>{props.shter_telno}</p>
      <p className={normalFont.className}>{props.protect_plc}</p>
    </div>
  )
}

export default ShelterInfo
