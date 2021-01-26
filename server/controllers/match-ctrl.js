const Match = require('../models/match-model')

createMatch = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a match',
        })
    }

    const match = new Match(body)

    if (!match) {
        return res.status(400).json({ success: false, error: err })
    }

    match
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: match._id,
                message: 'Match created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Match not created!',
            })
        })
}

getMatchById = async (req, res) => {
    await Match.findOne({ _id: req.params.id }, (err, match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: match })
    }).catch(err => console.log(err))
}

getMatch= async (req, res) => {
    await Match.find({}, (err, match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!match.length) {
            return res
                .status(404)
                .json({ success: false, error: `Match not found` })
        }
        return res.status(200).json({ success: true, data: match })
    }).catch(err => console.log(err))
}

module.exports = {
    createMatch,
    getMatch,
    getMatchById,
}
