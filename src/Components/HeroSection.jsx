import React from 'react'
import "./Styles/HeroSection.css"

const HeroSection = ({ List }) => {
  console.log(List)
  const randomNumber = Math.trunc(Math.random()*15)
  console.log(randomNumber)
  const img = List[0] ? `https://image.tmdb.org/t/p/w500/${List[randomNumber].poster_path}` : null;
  return (
    <>
      <div style={{backgroundImage: `url(${img})`}} className='HeroSection'>
      <div className='infos'>
        <h2>{List[randomNumber] && List[randomNumber].title }</h2>
        <p>{List[randomNumber] && List[randomNumber].overview }</p>
        <div className='icons'>
        <button><i class="ri-play-fill">Play</i></button>
        <button><i class="ri-add-line">MyList</i></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default HeroSection


