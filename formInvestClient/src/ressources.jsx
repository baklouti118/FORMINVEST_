import { useState } from 'react'
import Home from './home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Ressources() {
    const [page , setPage] = useState('InscriptionPage')

  return (
      <div style={{width: "100%",height: "100vh",backgroundPosition: 'center top',backgroundSize:"cover"}}>
        <div>
<h2 className="myH2">RESSOURCES</h2>
<p className="myH2">Formation sur les procédures de
l'expertise judiciaire
animée par des experts
Ex Universitaires et Ex Judiciaires</p>
<p className="myH2">Inscription libre</p>
<p className="myH2">Attestation de formation par spécialité</p>

</div>
        </div>
  )
}

export default Ressources