import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',

})`
    margin: 90px 90px 90px 90px;
`

const Selection = styled.div.attrs({
    className: 'form-row',
})`
    margin: 0 30px;
`
const Details = styled.div.attrs({
    className: 'form-group',

})`
    margin: 30px 30px 30px 30px;
    text-align: center;
    background: #243773;
    color: white;
    font-size: 1.5em;
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
    margin: 5px 30px 30px 30px;
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
                <form>
                    <Selection>
                        <InputSelect>
                            <input type="email" className="form-control" placeholder="Joueur 1"/>
                        </InputSelect>
                        <Title> VS </Title>
                        <InputSelect>
                            <input type="email" className="form-control" placeholder="Joueur 2"/>
                        </InputSelect>
                    </Selection>
                </form>
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
