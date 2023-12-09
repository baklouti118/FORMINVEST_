import { useState } from 'react'
import Home from './home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from'axios'
import './css/contact.css'
import "./css/inscription.css"

function Contact() {
    const [page , setPage] = useState('InscriptionPage')
    const [lesContact , setLesContact] = useState([])

    const importLesContacts = () => {
      axios.get(process.env.GetLesContacts)
      .then(result => setLesContact(result.data))
      .catch(err => console.log(err))
  }

  return (

    <div id='homePageImage'>
    <h2 className="myH2">lES CONTACTS </h2>
    {importLesContacts()}
        {lesContact.map(function(contact) {
          return(
        <div>
          <div>{contact.email}</div>
          <div>{contact.nom}</div>
          <div>{contact.message}</div>
          </div>
          )
      })}
    </div>
      
  
  )
}

export default Contact