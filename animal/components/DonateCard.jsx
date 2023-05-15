/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/Link'
import Underline from './Underline'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const text = css`
  font-size: 20px;
  margin: 10px 0;
`

const link = css`
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  background-color: #C0C9D6;
`

const DonateCard = (props) => {
  return (
    <div>
      <section css={css`
        display: flex;
        padding: 20px 0;
        padding-right: 20px;
        align-items: flex-end;
        gap: 20px;
      `}>
        <Image
          src={`/api/image-proxy?imageUrl=${props.image}`}
          alt='logo'
          width={1000}
          height={1000}
          css={css`
            width: 20vw;
            height: 15vw;
            border-radius: 20px;
          `}
        />
        <div css={css`
          height: 15vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 3;
        `}>
          <p
            css={text}
            className={boldFont.className}
          >
            {props.name}
          </p>
          <p
            css={text}
            className={normalFont.className}
          >
            {props.content}
          </p>
          <p
            css={text}
            className={normalFont.className}
          >
            {props.tag}
          </p>
        </div>
        <Link
          href={props.url}
          css={link}
          className={normalFont.className}
        >
          이동
        </Link>
      </section>
      <Underline />
    </div>
  )
}

export default DonateCard
