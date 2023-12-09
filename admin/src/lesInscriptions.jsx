import { useState } from 'react'
import axios from "axios"


function LesInscriptions () {
    const [lesInscriptions , setLesInscriptions] = useState([])

    const importLesInscriptions = () => {
        axios.get(process.env.GetLesInscriptions)
        .then(result => setLesInscriptions(result.data))
        .catch(err => console.log(err))
    }


    return <div>
        {importLesInscriptions()}
        {lesInscriptions.map(function(inscription) {
            if(inscription.type === 'Particulier'){
      return (
        <div>
            <div>verifier :<input type='checkbox' checked={inscription.checked} ></input></div>
            <div>formation Visee : {inscription.formationVisee}</div>
            <div>type : {inscription.type}</div>
            <div>nom : {inscription.nom}</div>
            <div>pernom : {inscription.pernom}</div>
            <div>activité : {inscription.activité}</div>
            <div>téléphone : {inscription.téléphone}</div>
            <div>email : {inscription.email}</div>
            ___________________________________________________
        </div>
      )}
      else if(inscription.type === 'Société'){
        return (
          <div>
            <div>verifier :<input type='checkbox' checked={inscription.checked}></input></div>
              <div>formation Visee : {inscription.formationVisee}</div>
              <div>type : {inscription.type}</div>
              <div>nom : {inscription.nom}</div>
              <div>pernom : {inscription.pernom}</div>
              <div>activité : {inscription.activité}</div>
              <div>téléphone : {inscription.téléphone}</div>
              <div>email : {inscription.email}</div>
              <div>raison Sociale : {inscription.raisonSociale}</div>
              <div>secteur : {inscription.secteur}</div>
              <div>respensable : {inscription.respensable}</div>
              <div>téléphone Respensable : {inscription.téléphoneRespensable}</div>
              ___________________________________________________
          </div>
        )}
    })}
    </div>
}

export default LesInscriptions