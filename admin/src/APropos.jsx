import { useState } from 'react'
import Home from './home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function APropos() {
    const [page , setPage] = useState('InscriptionPage')
    const [newAPropos , setNewAPropos] = useState('')


    const postAPropos = () =>{
      axios.post(process.env.AddAPropos , {aPropos : newAPropos})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

  return (
    <>
      <div id='homePageImage' style={{width:'60%' , marginLeft:"20%"}}>
      <h2 className="myH2">À PROPOS </h2>
                    <textarea className='textContactInput' id="message" name="message" rows="4" required onChange={(e) =>{setNewAPropos(e.target.value)}}></textarea>
                    <button className='submitInscription' type="submit" onClick={() =>{postAPropos()}}>SOUMETTRE</button>
        </div>
    </>
  )
}

export default APropos