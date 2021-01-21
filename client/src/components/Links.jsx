import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
const Wallet = styled.div.attrs({
})`
    text-align: Right;
    color: grey
`
const Money = styled.div.attrs({
})`
    text-align: Center;
    color: White;
    font-weight: bold;
`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Accueil
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/paris-sportifs" className="nav-link">
                                Paris Sportifs
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/Simulation-match" className="nav-link">
                                Simulation de match
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/Recapitulatif" className="nav-link">
                                Détail des joueurs
                            </Link>
                        </Item>
                    </List>
                    <Wallet>
                        <Money>
                            Portefeuille
                        </Money>
                        <Money>
                            10€
                        </Money>
                    </Wallet>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
