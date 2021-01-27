import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
    margin: 25px ;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',

})`
    margin: 90px 90px 90px 90px;
`

const SelectionRow = styled.div.attrs({
    className: 'form-row',
})`
    margin: 0 30px;
    background: #243773;
    color: white;
    font-size: 1.5em;
    text-align: center;
`

const PlayerSelect = styled.form.attrs({
    className: 'form-group',

})`
    margin: 30px 0px 0px 0px;
    text-align: center;
    background: #243773;
    color: white;
    font-size: 1.5em;
    border: 2px solid grey;
`


const Details = styled.div.attrs({
    className: 'form-group',

})`
    margin: 30px 0px 0px 0px;
    text-align: center;
    background: #243773;
    color: white;
    font-size: 1.5em;
    border: 2px solid grey;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 20px;
`

const InputSelect = styled.div.attrs({
    className: 'form-group col',
})`
    margin: 30px 30px 30px 30px;
`


class SimuMatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Date: '',
            Surface: '',
            Tournoi: '',
        }
    }

    render() {
        const { Date, SurfLoc, Tournoi } = this.state
        return (
            <Wrapper>
                <PlayerSelect>
                    <SelectionRow>
                        <InputSelect>
                            <input type="email" className="form-control" placeholder="Joueur 1"/>
                        </InputSelect>
                        <Title> VS </Title>
                        <InputSelect>
                            <input type="email" className="form-control" placeholder="Joueur 2"/>
                        </InputSelect>
                    </SelectionRow>
                </PlayerSelect>
                <Details>

                    <Label>Date : </Label>
                    <InputText
                        type="text"
                        value={Date}
                        onChange={this.handleChangeInputTime}
                    />

                    <Label>Surface / Localisation : </Label>
                    <InputText
                        type="text"
                        value={SurfLoc}
                    />

                    <Label> Tournoi : </Label>
                    <InputText
                        type="select"
                        value={Tournoi}
                    />
                </Details>

            </Wrapper>
        )
    }
}

export default SimuMatch
