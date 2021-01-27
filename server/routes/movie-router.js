const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')
const MatchCtrl = require('../controllers/match-ctrl')
const PlayerCtrl = require('../controllers/player-ctrl')

const router = express.Router()

router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

router.post('/match',MatchCtrl.createMatch)
router.get('/match/:id', MatchCtrl.getMatchById)
router.get('/matches', MatchCtrl.getMatch)

router.post('/player',PlayerCtrl.createPlayer)
router.get('/player/:id', PlayerCtrl.getPlayerById)
router.get('/players', PlayerCtrl.getPlayer)

module.exports = router
