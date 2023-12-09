const mongoose = require('mongoose')


const nosServisesSchema = new mongoose.Schema({
    nosServices : String
})


const nosServisesModel = mongoose.model('nos Servises' , nosServisesSchema)

module.exports = nosServisesModel