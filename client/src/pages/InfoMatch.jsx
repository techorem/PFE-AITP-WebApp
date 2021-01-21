import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import ReactPlayer from "react-player";
import ReactTable from "react-table";

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',

})`
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
        const { Date, SurfLoc, Tournoi } = this.state
        return (
            <Wrapper>
                <Wrapper>

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
                </Wrapper>
            </Wrapper>
        )
    }
}

export default InfoMatch
