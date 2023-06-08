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
  const links = ['/', '/Animals', '/Shelters', '/Stats', '/Caution', '/Donate']
  const names = ['Home', 'Our Pets', 'Our Shelter', 'Stats', 'Caution', 'Donate']
  const conditions = [props.home, props.animals, props.shelters, props.stats, props.caution, props.donate]

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
        {links.map((link, index) =>
          <Link
            href={link}
            css={[fonts, css`
              color: ${conditions[index] ? 'black' : 'white'};
              border: ${conditions[index] ? '3px solid black' : 'none'};
              border-radius: 30px;
              padding: 3px 25px;
            `]}
            className={font.className}
            key={link}
          >
            {names[index]}
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
