import { useState } from 'react'
import Home from './home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function NosServises() {
    const [page , setPage] = useState('InscriptionPage')
    const [newNosServices , setNewNosServices] = useState('')


    const postNosServices = () =>{
      axios.post(process.env.AddNosServices , {nosServices : newNosServices})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

  return (
    <>
          <div id='homePageImage' style={{width:'60%' , marginLeft:"20%"}}>
          <h2 className="myH2">NOS SERVICES </h2>
                    <textarea onChange={(e)=>{setNewNosServices(e.target.value)}}className='textContactInput' id="message" name="message" rows="4" required></textarea>
                    <button onClick={()=>{postNosServices()}}className='submitInscription' type="submit">SOUMETTRE</button>
        </div>
      
    </>
  )
}

export default NosServises