import React, { Component } from 'react'

import styled from 'styled-components'

import image from '../Tennis.png'

const Title = styled.div.attrs({
    className: 'h1',

})`
    text-align: center;
    margin: 30px 30px 30px 30px;
`

const GreyTab = styled.h1.attrs({
    className: 'h1',

})`
    text-align: center;
    margin: 30px 30px 30px 30px;
    background: grey;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',

})`
    margin: 30px 30px 30px 30px;
    text-align: center;
`


const TableauJoueurs = styled.div.attrs({
    className: 'form-group',

})`
    margin: 30px 30px 30px 30px;
    text-align: center;
  
`

const TableauMatchs = styled.div.attrs({
    className: 'form-group',

})`
    margin: 30px 30px 30px 30px;
    text-align: center;
`

const Cols = styled.div.attrs({
    className: 'form-group col',
})`
    margin: 30px 30px 30px 30px;
`

const Row = styled.div.attrs({
    className: 'form-row',
})`
    text-align: center;
    margin: 0 30px;
`


const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 20px;
`


class InfoMatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Date: '',
            SurfLoc: '',
            Tournoi: '',
        }
    }

    render() {
        return (
            <Wrapper>
                <TableauJoueurs>
                    <Row>
                        <img src={image} width="150" height="150" />
                        <Title> VS </Title>
                        <img src={image} width="150" height="150" />
                    </Row>
                    <Row>
                        <Title> Jean </Title>
                        <GreyTab> VS </GreyTab>
                        <Title> Jacques </Title>
                    </Row>
                    <Row>
                        <Title> 25 ans </Title>
                        <GreyTab> Age </GreyTab>
                        <Title> 30 ans </Title>
                    </Row>
                    <Row>
                        <Title> Etats-Unis </Title>
                        <GreyTab> Pays d'origine </GreyTab>
                        <Title> Russie </Title>
                    </Row>
                    <Row>
                        <Title> 198 cm </Title>
                        <Title> Taille </Title>
                        <Title> 185 cm </Title>
                    </Row>
                    <Row>
                        <Title> Main Droite </Title>
                        <Title> Main Forte </Title>
                        <Title> Main Droite </Title>
                    </Row>
                    <Row>
                        <Title> 10 </Title>
                        <Title> Nombres de titres </Title>
                        <Title> 7 </Title>
                    </Row>

                </TableauJoueurs>
                <TableauMatchs>



                </TableauMatchs>
            </Wrapper>
        )
    }
}

export default InfoMatch
