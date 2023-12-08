import React from 'react'
import "./Styles/CARD.css"

const CARD = ({ List }) => {
  const postUrl="https://image.tmdb.org/t/p/w500/"
  return (
    <>
      <div className='CardBox'>
        {List && List.length > 0 ? (
          List.map((x, i) => (
            <>
              <img key={i} className='Cardimg' src={`${postUrl}${x.poster_path}`} alt="poster" />
            </>
            
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </>
  )
}

export default CARD