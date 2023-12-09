const mongoose = require('mongoose')


const galerieSchema = new mongoose.Schema({
    photo : String
})


const galerieModel = mongoose.model('galerie' , galerieSchema)

module.exports = galerieModel