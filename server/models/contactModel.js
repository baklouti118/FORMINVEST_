const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    nom : String,
    email :String,
    message : String
})


const contactModel = mongoose.model('contact' , contactSchema)

module.exports = contactModel