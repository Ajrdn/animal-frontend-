/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Underline from './Underline'
import localFont from 'next/font/local'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const title = css`
  flex: 1;
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: #535353;
  margin: 0;
  padding: 0;
`

const content = css`
  flex: 1;
  text-align: center;
  font-size: 25px;
  font-weight: normal;
  color: #535353;
  margin: 0;
  padding: 0;
`

const AnimalInfoCard = (props) => {
  return (
    <div>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}>
        <p css={title} className={boldFont.className}>{props.title}</p>
        <p css={content} className={normalFont.className}>{props.content}</p>
      </div>
      <Underline />
    </div>
  )
}

export default AnimalInfoCard
