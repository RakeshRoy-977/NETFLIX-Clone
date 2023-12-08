import React, { useEffect, useState } from 'react'
import "./Styles/CardSection.css"
import CARD from './CARD'


const CardSection = ({title, List}) => {

  return (

    <div className='CardSection'>
    <h5 className='CardSectionTitle'>{title}</h5>
    <CARD List={List}/>
    </div>
    
  )
}

export default CardSection