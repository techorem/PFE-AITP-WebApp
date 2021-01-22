import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1`
    display : block;
    text-align: center;
    color: White;
    margin: 50px
`

const Wrapper = styled.div.attrs({
    class : "form-group-row",
})`
    margin: 90px 90px 90px 90px;
    background: white;
`

const Details = styled.div`
    class: col;
    text-align: center;
    border: 2px solid grey;
    background: #243773;
    color: white;
`


const List = styled.div`
    class: col;
    margin: 20px 20px 20px 20px;
    text-align: center;
    border: 2px solid grey;
    background: #243773;
    color: white;
`


const Label = styled.label`
    font-size: 1.5em;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 20px 20px 20px 20px ;
`

const InputSelect = styled.select.attrs({
    className: 'form-control',
})`
    margin: 20px 20px 20px 20px ;
`

const Button = styled.button.attrs({
    className: `btn text-light bg-dark`,
})`
    margin: 15px 15px 15px 5px;
`


class ParisSportifs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Date: '',
            Surface: '',
            Tournoi: '',
        }
    }

    render() {
        const { Date, Surface, Tournoi } = this.state
        return (
            <Wrapper>
                <Details>
                    <Title> Filtres </Title>
                    <Label>Date</Label>
                    <InputText
                        type="text"
                        value={Date}
                    />

                    <Label>Surface</Label>
                    <InputSelect
                        type="text"
                        value={Surface}
                    />

                    <Label> Tournoi</Label>
                    <InputSelect
                        type="select"
                        value={Tournoi}
                    />
                    <Button href="/Recap"> Lancer les pronostics</Button>
                </Details><List>
                    écran d'affichage des matchs disponibles
                </List>
            </Wrapper>
        )
    }
}

export default ParisSportifs
