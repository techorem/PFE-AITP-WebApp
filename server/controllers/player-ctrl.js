const Player = require('../models/player-model')

createPlayer = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a player',
        })
    }

    const player = new Player(body)

    if (!player) {
        return res.status(400).json({ success: false, error: err })
    }

    player
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: player._id,
                message: 'Player created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Player not created!',
            })
        })
}

getPlayerById = async (req, res) => {
    await Player.findOne({ _id: req.params.id }, (err, player) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: player })
    }).catch(err => console.log(err))
}

getPlayer= async (req, res) => {
    await Player.find({}, (err, player) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!player.length) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }
        return res.status(200).json({ success: true, data: player })
    }).catch(err => console.log(err))
}

module.exports = {
    createPlayer,
    getPlayer,
    getPlayerById,
}
