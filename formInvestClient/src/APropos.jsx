import { useState } from 'react'
import Home from './home.jsx'
import Inscription from './inscription.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Player , ControlBar} from 'video-react';
import axios from 'axios'


function APropos() {
    const [page , setPage] = useState('InscriptionPage')
    const [getAPropos , setGetAPropos] = useState([{aPropos:''}])


    const getNewAPropos = () =>{
        axios.get(process.env.GetAPropos)
        .then(result => setGetAPropos(result.data))
        .catch(err => console.log(err))
    }

  return (
      <div style={{width: "100%",height: "100vh",backgroundPosition: 'center top',backgroundSize:"cover"}}>
        {getNewAPropos()}
        <div>
<h2 className="myH2">À PROPOS </h2>
<p className="myP">
 
        {getAPropos[getAPropos.length-1].aPropos}
</p>
<div style={{marginBottom : ""}}>
<video width="300" height="360" style={{marginLeft : "37%"}}
    playsInline
    loop
    muted
    controls>
<source src="/videos/formInvestV.mp4" type="video/mp4" />
</video>
        </div>
</div>
        </div>

  )
}

export default APropos