import { useState } from 'react'
import Home from './home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Galerie() {
    const [page , setPage] = useState('InscriptionPage')

  return (
    <>
            <div id='homePageImage' style={{backgroundColor : "black"}}>
                    Galerie:
                    <input></input>
        </div>
    </>
  )
}

export default Galerie