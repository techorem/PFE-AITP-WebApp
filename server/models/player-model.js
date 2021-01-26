const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
    {
        surname: { type: String, required: true },
        name: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('player', Player)
