/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'
import CautionContent from './CautionContent'

const normalFont = localFont({ src: '../public/fonts/KOTRA_GOTHIC.ttf' })
const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const ulStyle = css`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > li {
    margin: 0;
    padding: 0;
  }
`

const CautionAdoption = () => {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      gap: 5vh;
    `}>
      <h2
        css={css`
          margin: 0;
          padding: 0;
        `}
        className={boldFont.className}
      >
        유기 동물 입양 방법
      </h2>
      <CautionContent
        title='▷ 유기견 임시보호'
        content='유기 동물 공고 기간이 끝나면 약 10~20일간 강아지를 보호해요.
        <br />보호 기간이 끝날 때까지도 보호자를 찾지 못하면 안락사될 수 있어요.
        <br />유기 동물 안락사를 막기 위해 보호자를 찾을 때까지 약 3~6개월가량 임시 보호가 가능해요.
        <br />임시 보호 의향이 있다면, 해당 유기 동물 보호소나 유기 동물 보호 협회에 문의해 보세요.'
      />
      <CautionContent
        title='▷ 유기견 입양 방법'
        content='유기 동물 보호소에서 데려올 수 있어요.
        <br />근처 유기 동물 보호소 사이트에서 강아지 공고 번호를 확인할 후, 입양이 가능한지 문의해요.
        <br />안락사 없는 유기 동물 보호소를 가장해 강아지를 판매하는 펫샵도 있어요.
        <br />이 경우, 동물 판매 등록 번호를 확인할 수 있으니 이를 통해 구분할 수 있어요.'
      />
      <CautionContent
        title='▷ 입양 전 고려 사항'
        content='유기 동물은 경계심이 강할 수 있으며, 이런 경우 유대감을 형성하고 친해지는 데 오랜 시간이 걸릴 수 있어요.
        <br />길면 1~2년이 걸리기도 해요.'
      />
      <ul css={ulStyle}>
        <li className={normalFont.className}>인내심을 갖고 유기 동물이 우리 집에 적응할 때까지 기다려야 해요</li>
        <li className={normalFont.className}>사회화가 부족할 수 있으며, 이는 시간과 노력이 필요해요</li>
        <li className={normalFont.className}>입양 후 일어나는 건강, 행동 문제는 내가 책임져야 하며 방치해서는 안 돼요</li>
        <li className={normalFont.className}>훈련 적응을 못하는 게 유기 동물이라 그런 것은 아니에요</li>
        <li className={normalFont.className}>우리도 유기 동물에게 적응하고 함께 맞춰가야 해요</li>
        <li className={normalFont.className}>유기 동물이라고 모두 트라우마가 있는 것은 아니에요</li>
      </ul>
      <CautionContent
        title='▷ 입양 후 건강 상태 체크'
        content='건강 검진을 통해 유기 동물의 전반적인 건강 상태를 확인해요.
        <br />특히, 보호소에 있었던 만큼 심장사상충이나 전염병에 걸려있을 확률있어요.
        <br />예방 접종도 다시 맞혀줄 필요가 있어요.'
      />
    </div>
  )
}

export default CautionAdoption
