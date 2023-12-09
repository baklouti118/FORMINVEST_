const mongoose = require('mongoose')


const formulaireSchema = new mongoose.Schema({
    formationVisee : String,
    type : String,
    nom : String,
    pernom : String,
    activité : String,
    téléphone : String,
    email : String,
    raisonSociale : String,
    secteur : String,
    respensable : String,
    téléphoneRespensable : String,
    checked : Boolean
})


const formulaireModel = mongoose.model('inscriptions' , formulaireSchema)

module.exports = formulaireModel