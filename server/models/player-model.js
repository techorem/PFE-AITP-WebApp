const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Match = new Schema(
    {
        surname: { type: String, required: true },
        name: { type: String, required: true },
        surface: { type: Number, required: true },
        location: { type: Number, required: true },
        date: { type: Number, required: true },
        setnumber: { type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('match', Match)
