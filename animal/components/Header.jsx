/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'
import logo from '/public/images/logo.png'
import Link from 'next/Link'
import localFont from 'next/font/local'

const font = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const fonts = css`
  font-weight: normal;
  font-size: 20px;
  color: white;
`

const Header = (props) => {
  return (
    <header
      css={css`
        width: 100vw;
        height: 10vh;
        background-color: #C0C9D6;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        `}
      >
        <Image src={logo} alt='logo' width={30} height={30} />
        <p css={fonts} className={font.className}>mong</p>
      </div>
      <div
        css={css`
          width: 80%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        `}
      >
        <Link href='/'
          css={[fonts, css`
            color: ${props.home ? 'black' : 'white'};
            border: ${props.home ? '3px solid black' : 'none'};
            border-radius: 30px;
            padding: 3px 25px;
          `]}
          className={font.className}
        >
            Home
        </Link>
        <Link href='/Animals'
          css={[fonts, css`
            color: ${props.animals ? 'black' : 'white'};
            border: ${props.animals ? '3px solid black' : 'none'};
            border-radius: 30px;
            padding: 3px 25px;
          `]}
          className={font.className}
        >
            Our Pets
        </Link>
        <Link href='/Shelters'
          css={[fonts, css`
            color: ${props.shelters ? 'black' : 'white'};
            border: ${props.shelters ? '3px solid black' : 'none'};
            border-radius: 30px;
            padding: 3px 25px;
          `]}
          className={font.className}
        >
            Our Shelter
        </Link>
        <Link href='/'
          css={[fonts, css`
            color: ${props.stats ? 'black' : 'white'};
            border: ${props.stats ? '3px solid black' : 'none'};
            border-radius: 30px;
            padding: 3px 25px;
          `]}
          className={font.className}
        >
            Stats
        </Link>
        <Link href='/Caution'
          css={[fonts, css`
            color: ${props.caution ? 'black' : 'white'};
            border: ${props.caution ? '3px solid black' : 'none'};
            border-radius: 30px;
            padding: 3px 25px;
          `]}
          className={font.className}
        >
            Caution
        </Link>
        <Link href='/Donate'
          css={[fonts, css`
            color: ${props.donate ? 'black' : 'white'};
            border: ${props.donate ? '3px solid black' : 'none'};
            border-radius: 30px;
            padding: 3px 25px;
          `]}
          className={font.className}
        >
          Donate
        </Link>
      </div>
    </header>
  )
}

export default Header
