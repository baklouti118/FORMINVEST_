const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formulaireModel = require('./models/inscritionModel')
const aProposModel = require('./models/aProposModel')
const nosServisesModel = require('./models/nosServieModel')
const contactModel = require('./models/contactModel')
require("dotenv").config();


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MongoCon)

 app.post('/addInscription' , (req , res) =>{
     const formationVisee = req.body.formationVisee
     const type = req.body.type
     const nom = req.body.nom
     const pernom = req.body.pernom
     const activité = req.body.activité
     const téléphone = req.body.téléphone
     const email = req.body.email
     const raisonSociale = req.body.raisonSociale
     const secteur = req.body.secteur
     const respensable = req.body.respensable
     const téléphoneRespensable = req.body.téléphoneRespensable
     const checked = req.body.checked
     formulaireModel.create({
        formationVisee : formationVisee,
        type : type,
        nom : nom,
        pernom : pernom,
        activité : activité,
        téléphone : téléphone,
        email : email,
        raisonSociale : raisonSociale,
        secteur: secteur,
        respensable : respensable,
        téléphoneRespensable : téléphoneRespensable,
        checked : checked
     }).then(result => res.json(result))
     .catch(err => res.json(err))
 })

app.get('/getInscription' , (req , res) =>{
    formulaireModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.post('/addAPropos' , (req , res) => {
    const aPropos = req.body.aPropos
    aProposModel.create({
        aPropos : aPropos
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get('/getAPropos' , (req , res) =>{
    aProposModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/addNosServices' , (req , res) => {
    const nosServices = req.body.nosServices
    nosServisesModel.create({
        nosServices : nosServices
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get('/getNosServices' , (req , res) =>{
    nosServisesModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/addContact' , (req , res) => {
    const nom = req.body.nom
    const email = req.body.email
    const message = req.body.message
    contactModel.create({
        nom : nom,
        email : email,
        message : message
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get('/getContact' , (req , res) =>{
    contactModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.listen(3003, () =>{
    console.log("server is running")
})