/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import TotalAnimal from './TotalAnimal'
import DayTotalAnimal from './DayTotalAnimal'
import GenderTotalAnimal from './GenderTotalAnimal'
import BreedTotalAnimal from './BreedTotalAnimal'

const stats = css`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StatsSection = () => {
  return (
    <main css={css`
      width: 100vw;
      padding: 2vw 5vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    `}>
      <div css={[stats, css`
        width: 50%;
      `]}>
        <TotalAnimal />
        <DayTotalAnimal />
      </div>
      <div css={[stats, css`
        width: 25%;
      `]}>
        <GenderTotalAnimal />
        <BreedTotalAnimal />
      </div>
    </main>
  )
}

export default StatsSection
