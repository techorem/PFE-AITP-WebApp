const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')
const MatchCtrl = require('../controllers/match-ctrl')

const router = express.Router()

router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

router.post('/match',MatchCtrl.createMatch)
router.get('/match/:id', MatchCtrl.getMatchById)
router.get('/matches', MatchCtrl.getMatch)







module.exports = router
