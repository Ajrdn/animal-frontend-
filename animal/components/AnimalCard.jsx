/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/Link'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const date = css`
  color: #463D25;
  font-size: 15px;
  margin: 10px 0;
`

const text = css`
  margin: 0;
`

const AnimalCard = (props) => {
  return (
    <Link
      href={`/Animal/${props.id}`}
      css={css`
        width: 25vw;
      `}
    >
      <Image
        src={props.image}
        alt='animal'
        width={1000}
        height={1000}
        css={css`
          width: 100%;
          height: 35vh;
          border: 3px solid #C0C9D6;
          border-radius: 5px;
        `}
      />
      <p
        css={date}
        className={normalFont.className}
      >
        {props.begin_date.substr(0, 4)}.{props.begin_date.substr(4, 2)}.{props.begin_date.substr(6, 2)} ~ {props.end_date.substr(0, 4)}.{props.end_date.substr(4, 2)}.{props.end_date.substr(6, 2)}
      </p>
      <section css={css`
        display: flex;
        gap: 10px;
      `}>
        <p
          css={text}
          className={boldFont.className}
        >
          {props.species_nm}
        </p>
        <p
          css={text}
          className={normalFont.className}
        >
          {props.gender}
        </p>
        <p
          css={text}
          className={normalFont.className}
        >
          지역 : {props.discvry_plc}
        </p>
      </section>
    </Link>
  )
}

export default AnimalCard
