import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './css/contact.css'
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function Contact() {
  const[newNom , setNewNom] = useState('')
  const[newEmail , setNewEmail] = useState('')
  const[newMessage , setNewMessage] = useState('')

  const saveNewMessage = () =>{
    axios.post(process.env.PostContact , {nom : newNom , email : newEmail , message : newMessage})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    
    <div className="contact-container">
      <header>
        <h1>Contactez-nous</h1>
      </header>

      <main>
        <section className="contact-info">
          <h2 className="myH2">Informations de contact</h2>
          <p className="myP">Pour nous contacter, veuillez utiliser les informations ci-dessous :</p>
          <ul>
            <li className="myP">Email : forminvest@gmail.com</li>
            <li className="myP">Téléphone : +216 22 666 688 / +216 71 568 365</li>
            <li className="myP">Adresse : 103 Bd du 9 Avril 1938, Tunis</li>
          </ul> 
        </section>

        <section className="contact-form">
          <h2 className="myH2">Formulaire de contact</h2>
          <p className="myP">Vous pouvez également nous contacter en utilisant le formulaire ci-dessous :</p>
          
            <h1 htmlFor="nom">Nom :</h1>
            <input onChange={(e) =>{setNewNom(e.target.value)}} className='textContactInput' type="text" id="nom" name="nom" required />

            <h1 htmlFor="email">Email :</h1>
            <input onChange={(e) =>{setNewEmail(e.target.value)}} className='textContactInput' type="email" id="email" name="email" required />

            <h1 htmlFor="message">Message :</h1>
            <textarea onChange={(e) =>{setNewMessage(e.target.value)}} className='textContactInput' id="message" name="message" rows="4" required></textarea>

            <button onClick={() => {saveNewMessage()}} style={{marginLeft : 'auto' , marginRight : 'auto'}} className='submitInscription' type="submit">Envoyer</button>
        </section>
      </main>

      <footer>
        <p className="myP">Merci de nous contacter !</p>
      </footer>
      <section>
        <h2 className="myH2">Notre Emplacement</h2>
        <div>
        <MapContainer center={[36.80481354585802, 10.162951964144343]} zoom={18} scrollWheelZoom={false}>
  <TileLayer
    attribution=''
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[36.80481354585802, 10.162951964144343]} >
    <Popup>
    103 Bd du 9 Avril 1938, Tunis <br />  
    </Popup>
  </Marker>
</MapContainer>
        </div>
      </section>
    </div>
  )
}

export default Contact