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


class SimuMatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Date: '',
            SurfLoc: '',
            Tournoi: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleIncludeMovie = async () => {
        const { name, rating, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                Date: '',
                SurfLoc: '',
                Tournoi: '',
            })
        })
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

export default SimuMatch
