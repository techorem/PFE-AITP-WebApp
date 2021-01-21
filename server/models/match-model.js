const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Match = new Schema(
    {
        name1: { type: String, required: true },
        name2: { type: String, required: true },
        surface: { type: Number, required: true },
        location: { type: Number, required: true },
        date: { type: Number, required: true },
        setnumber: { type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('match', Match)
