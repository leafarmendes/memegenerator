import React, {useEffect, useState} from 'react';


function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMeme() {
    const randomValue = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomValue].url
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
      }))
  }

  return(
    <div className="container-meme">
      <div className="form">
        <input 
        className="form--input"
          type="text" 
          placeholder="First text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          className="form--input"
          type="text" 
          placeholder="Second text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMeme}>Get a new meme image 🖼</button>  
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Meme