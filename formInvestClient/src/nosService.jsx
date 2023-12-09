import { useState } from 'react'
import Home from './home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function NosServises() {
    const [page , setPage] = useState('InscriptionPage')
    const [getNosServices , setGetNosServices] = useState([{nosServices:''}])

    const getNewNosServices = () =>{
      axios.get(process.env.GetNosServices)
      .then(result => setGetNosServices(result.data))
      .catch(err => console.log(err))
    }


  return (
           <div style={{width: "100%",height: "100vh",backgroundPosition: 'center top',backgroundSize:"cover"}}>
            {getNewNosServices()}
        <div>
<h2 className="myH2">NOS SERVICES</h2>

<p className="myP">
{getNosServices[getNosServices.length-1].nosServices} 
</p>
</div>
        </div>
  )
}

export default NosServises