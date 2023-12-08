import React from 'react'
import "./Styles/Navbar.css"
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'


const Navbar = () => {
  return (
    <div className="navbar">   

        <div>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="icon" />
        </div>

        <div className='NavLinks'>
        <Link to={"TVshows"}>TV Shows</Link>
        <Link to={"TVshows"}>Movies</Link>
        <Link to={"TVshows"}>Recently Added</Link>
        <Link to={"TVshows"}>My List</Link>
        </div>

        <div className='Searchicon'>
        <i class="ri-search-line"></i>
        </div>
      </div>
    
  )
}

export default Navbar