/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DonateCard from './DonateCard'

const DonateList = () => {
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    const getSponsors = async() => {
      const data = await axios.get('http://127.0.0.1:8080/getSponsorData')
      setSponsors(data.data)
    }
    getSponsors()
  }, [])

  return (
    <main css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
    `}>
      {sponsors.map((sponsor) =>
        <DonateCard
          key={sponsor.sponsor_name}
          name={sponsor.sponsor_name}
          url={sponsor.url}
          content={sponsor.content}
          tag={sponsor.tag}
          image={sponsor.image}
        />
      )}
    </main>
  )
}

export default DonateList
