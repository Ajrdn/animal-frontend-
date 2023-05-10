/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'

const box = css`
  background-color: white;
  border-radius: 30px;
  position: relative;
`

const circle = css`
  background-color: #C0C9D6;
  width: 11px;
  height: 11px;
  border-radius: 50%;
`

const circles = css`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 15px;
  left: 15px;
`

const MainDogImage = (props) => {
  return (
    <div css={[box, css`
      width: ${props.width}px;
      height: ${props.height}px;
    `]}>
      <div css={circles}>
        <div css={circle}></div>
        <div css={circle}></div>
        <div css={circle}></div>
      </div>
      <Image
        src={props.image}
        alt='dog'
        width={props.width}
        height={props.height}
      />
    </div>
  )
}

export default MainDogImage
