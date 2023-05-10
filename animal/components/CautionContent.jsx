/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })

const fonts = css`
  margin: 0;
  padding: 0;
`

const CautionContent = (props) => {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `}>
      <h3
        css={fonts}
        className={normalFont.className}
      >
        {props.title}
      </h3>
      <p
        css={fonts}
        className={normalFont.className}
      >
        {props.content.split('<br />').map(text => (
          <>
            {text}
            <br />
          </>
        ))
        }
      </p>
    </div>
  )
}

export default CautionContent
