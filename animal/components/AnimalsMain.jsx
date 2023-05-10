/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import localFont from 'next/font/local'
import AnimalsList from './AnimalsList'
import { useState } from 'react'
import Pagination from 'react-js-pagination'

const boldFont = localFont({ src: '../public/fonts/KOTRA_BOLD.ttf' })

const pagination = css`
  .pagination {
    list-style: none;
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    font-size: 20px;
  }

  .pagination li {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination li.active {
    border: 3px solid #C0C9D6;
  }
`

const AnimalsMain = () => {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  return (
    <div css={css`
      width: 100vw;
      padding: 0 5vw;
      margin-bottom: 5vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <h2
        css={css`
          width: 100%;
          margin-top: 4vh;
          padding: 0;
          text-align: left;
        `}
        className={boldFont.className}
      >
        보호 중인 유기 동물 목록
      </h2>
      <AnimalsList
        page={page}
        setPageCount={setPageCount}
      />
      <nav css={pagination}>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={pageCount}
          pageRangeDisplayed={10}
          prevPageText='‹'
          nextPageText='›'
          onChange={setPage}
        />
      </nav>
    </div>
  )
}

export default AnimalsMain
