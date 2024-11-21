import { useState, useEffect } from 'react'
import PokemonApplication from "./components/PokemonApplication.jsx"
import './App.css'
import Logo1 from "./img/pokeball-logo.png"
import Logo2 from "./img/poke-logo.png"

function App() {

  const [showPokemonApplication, setShowPokemonApplication] = useState(false)
  return (
    <>
      {showPokemonApplication===false &&
      <div className='start-container'>
        <div className='logo-container'>
          <img className='logo-img2' src={Logo2} alt='Pokemon'/>
          <img className='logo-img1' src={Logo1} alt='Pokeball'/>
        </div>
        <button className='start-button' onClick={()=>{setShowPokemonApplication(true)}}>Start Pokemon App</button>
      </div>
      }
      {showPokemonApplication && <PokemonApplication/>}
    </>
  )
}

export default App