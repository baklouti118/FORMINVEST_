import { useState } from 'react'
import * as React from 'react';
import Home from './home'
import Checkbox from '@mui/material/Checkbox'
import axios from "axios"
import "./css/inscription.css"
import App from './App';

function Inscription() {
    const [page , setPage] = useState('InscriptionPage')
    const [newInscription , setNewInscription] = useState({})
    const [checkFormationViser , setCheckFormationViser] = useState({check1 : false , check2 : false , check3 : false})
    const [checkFormationViserValue , setCheckFormationViserValue] = useState('')
    const [pasDeFormationViser , setPasDeFormationViser] =useState('')
    const [uneSociété , setUneSociété] = useState(false)
    const [check , setCheck] = useState({check1 : false , check2 : false})
    const [checkBoxValue , setCheckBoxValue] = useState('')
    const [pasDeCheckValue , setPasDeCheckValue] =useState('')
    const [nom , setNom] = useState('')
    const [pasDeNom , setPasDeNom] =useState('')
    const [pernom , setPernom] = useState('')
    const [pasDepernom , setPasDepernom] =useState('')
    const [activité , setActivité] = useState('')
    const [pasDeactivité , setPasDeactivité] =useState('')
    const [téléphone , setTéléphone] = useState('')
    const [pasDetéléphone , setPasDetéléphone] =useState('')
    const [email , setEmail] = useState('')
    const [pasDeemail , setPasDeemail] =useState('')
    const [raisonSociale , setRaisonSociale] = useState('')
    const [secteur , setSecteur] = useState('')
    const [respensable , setRespensable] = useState('')
    const [téléphoneRespensable , setTéléphoneRespensable] = useState('')
    const [isModalActive, setIsModalActive] = useState(false);



  const closeModal = () => {
    setIsModalActive(false);
  };


    const saveInscription = () =>{
        axios.post(process.env.PostInscription ,  {formationVisee : checkFormationViserValue ,type : checkBoxValue , nom : nom , pernom : pernom , activité : activité , téléphone : téléphone , email : email , raisonSociale : raisonSociale , secteur :secteur , respensable : respensable , téléphoneRespensable : téléphoneRespensable , checked:false})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    const changePage = () => {
        if(page === 'InscriptionPage') {
            return(
                <div style={{width: "100%",height: "100vh",backgroundPosition: 'center top',backgroundSize:"cover"}}>
                    <button className='submitInscription' onClick={()=>{setPage("home")}} style={{marginLeft:'25%'}}>return home</button>
                    
                    <form className='inscriptionForm' action="">
                    <h1 className='formationViserH1'>Formation visée : *</h1>
                    <div>
                    <h3>-	Expert National</h3>
                    <input type='checkbox' value={'Expert National'} onClick={(event) =>{setCheckFormationViserValue(event.target.value)}} checked={checkFormationViser.check1} onChange={() => { 
                        if(checkFormationViser.check1 === false){setCheckFormationViser({check1 : true , check2 : false , check3 : false})}
                        else{setCheckFormationViser({check1 : false , check2 : false , check3 : false})}
                        }}/>    
                    <h3>-	Expert International</h3>
                    <input type='checkbox' value={'Expert International'} onClick={(event) =>{setCheckFormationViserValue(event.target.value)}} checked={checkFormationViser.check2} onChange={() => { 
                        if(checkFormationViser.check2 === false){setCheckFormationViser({check1 : false , check2 : true , check3 : false})}
                        else{setCheckFormationViser({check1 : false , check2 : false, check3 : false})}
                        }}/>
                    <h3>-	Arbitrage et Consulting</h3>
                    <input type='checkbox' value={'Arbitrage et Consulting'} onClick={(event) =>{setCheckFormationViserValue(event.target.value)}} checked={checkFormationViser.check3} onChange={() => { 
                        if(checkFormationViser.check3 === false){setCheckFormationViser({check1 : false , check2 : false , check3 : true})}
                        else{setCheckFormationViser({check1 : false , check2 : false, check3 : false})}
                        }}/>
                   <span style={{color: "red"}}>{pasDeFormationViser}</span>
                    </div>
      <div>
        <div className='element'>
                    <h1>Société&emsp;&emsp;</h1>
                    <input type='checkbox' value={'Société'} onClick={(event) =>{setCheckBoxValue(event.target.value)}} checked={check.check1} onChange={() => { 
                        if(check.check1 === false){setCheck({check1 : true , check2 : false})
                        setUneSociété(true) }
                        else{setCheck({check1 : false , check2 : false})
                        setUneSociété(false)}
                        }}/>
                        <span style={{color: "red"}}>{pasDeCheckValue}</span>
                        </div>
                        
                        <div className='element'>
                                            <h1>Particulier</h1>
                    <input type='checkbox' value={'Particulier'} onClick={(event) =>{setCheckBoxValue(event.target.value)}} checked={check.check2} onChange={() => {if(check.check2 === false){setCheck({check1 : false , check2 : true})
                        setUneSociété(false) }
                        else{setCheck({check1 : false , check2 : false})
                        setUneSociété(false)}}}/>
                        
                        </div>
                        
                        </div>
                        


    <div style={{marginTop:'127px'}}>
      <h1 htmlFor="pseudo">nom : *</h1>
      <input placeholder='nom' type="text" className='textInscriptionInput' onChange={(e) =>{setPasDeNom('')
        setNom(e.target.value)}} />
      <span style={{color: "red"}}>{pasDeNom}</span>
    </div>

    <div >
      <h1 htmlFor="pseudo">prenom : *</h1>
      <input placeholder='prenom' type="text" className='textInscriptionInput' onChange={(e) =>{setPernom(e.target.value)}} />
      <span style={{color: "red"}}>{pasDepernom}</span>
    </div>

    <div >
      <h1 htmlFor="pseudo">activité : *</h1>
      <input placeholder='activité' type="text" className='textInscriptionInput' onChange={(e) =>{setActivité(e.target.value)}} />
      <span style={{color: "red"}}>{pasDeactivité}</span>
    </div>

    <div >
      <h1 htmlFor="pseudo">téléphone : *</h1>
      <input placeholder='téléphone' type="text" className='textInscriptionInput' onChange={(e) =>{setTéléphone(e.target.value)}} />
      <span style={{color: "red"}}>{pasDetéléphone}</span>
    </div>

    <div >
      <h1 htmlFor="pseudo">Email : *</h1>
      <input placeholder='Email' type="text" className='textInscriptionInput' onChange={(e) =>{setEmail(e.target.value)}} />
      <span style={{color: "red"}}>{pasDeemail}</span>
    </div>

    {formulaireSociété()}

    <button className='submitInscription' type="submit" value="Valider" onClick={()=>{
        if(checkFormationViserValue === ''){setPasDeFormationViser('Merci de choisir')}
         if(checkBoxValue === ''){setPasDeCheckValue('Merci de choisir')}      
         if(nom === ''){setPasDeNom("Merci d'entrer vote nom")}
         if(pernom === ''){setPasDepernom("Merci d'entrer vote prenom")}
         if(activité === ''){setPasDeactivité("Merci d'entrer vote activité")}
         if(téléphone === ''){setPasDetéléphone("Merci d'entrer vote numero de téléphone")}
         if(email === ''){setPasDeemail("Merci d'entrer vote adresse email")}
        else {
          saveInscription()
          setIsModalActive(true)
        }
        }}>Valider</button>
  </form>
  


  


      {isModalActive && (
        <div id="thisModal" className="modal active">
          <div className="content">
            <div className="close" onClick={closeModal}>
              <span></span>
              <span></span>
            </div>
            <h1>Congratulations</h1>
            <p>You are connected, please wait for the next update</p>
          </div>
        </div>
      )}

                </div>
            )
        }
        else if(page === 'home') {
            return(
               <App /> 
            )
        }
    }

    const formulaireSociété = () =>{
        if(uneSociété === true) {
            return (<div>
                        <div >
                            <h1 htmlFor="pseudo">Raison Sociale :</h1>
                            <input placeholder='Raison Sociale' type="text" className='textInscriptionInput' onChange={(e) =>{setRaisonSociale(e.target.value)}} />
                            <span></span>
                        </div>
                        <div >
                            <h1 htmlFor="pseudo">Secteur :</h1>
                            <input placeholder='Secteur' type="text" className='textInscriptionInput' onChange={(e) =>{setSecteur(e.target.value)}}/>
                            <span></span>
                        </div>
                        <div >
                            <h1 htmlFor="pseudo">Respensable de Formation :</h1>
                            <input placeholder='Respensable de Formation' type="text" className='textInscriptionInput' onChange={(e) =>{setRespensable(e.target.value)}}/>
                            <span></span>
                        </div>
                        <div >
                            <h1 htmlFor="pseudo">Téléphone :</h1>
                            <input placeholder='Téléphone' type="text" className='textInscriptionInput' onChange={(e) =>{setTéléphoneRespensable(e.target.value)}}/>
                            <span></span>
                        </div>
            </div>
            )
        }
        else{return(<div>
        </div>)}
    }

    return <div>
        {changePage()}
    </div>
}

export default Inscription