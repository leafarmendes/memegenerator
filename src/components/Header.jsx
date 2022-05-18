import React from 'react'
import trollFace from '../images/trollFace.png'

function Header() {
  return(
    <nav className="nav">
      <img src={trollFace} alt="trollFace" />
      <h2 className="title">Meme Generator</h2>
      <h4 className="project">Scrimba Challenge - Meme generator!</h4>
    </nav>
  )
}

export default Header