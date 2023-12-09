const mongoose = require('mongoose')


const aProposSchema = new mongoose.Schema({
    aPropos : String
})


const aProposModel = mongoose.model('a propos' , aProposSchema)

module.exports = aProposModel