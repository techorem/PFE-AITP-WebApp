import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesUpdate } from '../pages'
import { Accueil, ParisSportifs, Recap, SimuMatch, InfoMatch } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="/paris-sportifs" exact component={ParisSportifs} />
                <Route path="/Simulation-match" exact component={SimuMatch} />
                <Route path="/Recapitulatif" exact component={Recap} />
                <Route path="/Information-match" exact component={InfoMatch} />

                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
