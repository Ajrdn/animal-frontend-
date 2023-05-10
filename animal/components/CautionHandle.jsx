/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'
import CautionContent from './CautionContent'

const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const CautionHandle = () => {
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
        유기 동물 발견 시 대처 방법
      </h2>
      <CautionContent
        title='1. 신고 먼저 해야 돼요'
        content='유기 동물이 아닌 실종 동물일 확률이 있어요. 관할 시·군·구청의 유기 동물 담당 부서에 신고 먼저 해요.
          <br />신고를 하면 최소 7일간 공고를 통해 보호자를 찾아요.
          <br />만약 10일이 지나도 보호자를 못 찾았을 경우 다른 사람이 키울 수 있어요.'
      />
      <CautionContent
        title='2. 유기 동물이 아닐 수 있어요'
        content='시골 같은 작은 동네에서는 강아지 등을 풀어두는 경우가 있어요.
        <br />동물이 익숙한 듯 자연스럽게 다니는 모습을 봤을 때는 근처 사람들을 통해 보호자가 있는지 확인해요.'
      />
      <CautionContent
        title='3. 관리가 잘 되어 있는 강아지라면?'
        content='상태가 좋고 관리가 잘 되어 있는 것처럼 보인다면, 잃어버린 지 오래되지 않은 실종 동물일 확률이 있어요.
        <br />지역 커뮤니티나 실종 신고 공고를 확인해요.
        <br />이름표를 확인하거나, 근처 동물 병원에 방문해 칩을 확인해요.
        <br />도망가거나 공격성을 보인다면 관할 시·군·구청의 유기 동물 담당 부서에 신고하고, SNS에 올려줘요.'
      />
    </div>
  )
}

export default CautionHandle
