import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'
import { Accueil, ParisSportifs, Recap, SimuMatch } from '../pages'


import 'bootstrap/dist/css/bootstrap.min.css'
import InfoMatch from "../pages/InfoMatch";

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


                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
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
