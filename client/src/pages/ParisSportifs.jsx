import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import ReactTable from "react-table";

const Title = styled.h1`
    display : block;
    text-align: center;
    color: White;
    margin: 50px
`

const Wrapper = styled.div.attrs({
    class : "form-group",
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

const SelectionRow = styled.div.attrs({
    className: 'form-row',
})`
    margin: 0 30px;
    text-align: center;
`

const List = styled.div`
    class: col;
    margin: 0px 0px 0px 100px;
    text-align: center;
    border: 2px solid grey;
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

const InfoButton = styled.a.attrs({
    className: `btn btn-outline-success`,
})`
    margin: 15px 15px 15px 5px;
    color: green;
`

class LaunchResearch extends Component {
    launchResearch = event => {
        event.preventDefault()

        window.location.href = `/`
    }

    render() {
        return <Button onClick={this.launchResearch}>Lancer les pronostics</Button>
    }
}

class GetInformation extends Component {
    getInformation = event => {
        event.preventDefault()

        window.location.href = `/`
    }

    render() {
        return <Button onClick={this.getInformation}>Ajouter</Button>
    }
}


class ParisSportifs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }



    render() {
        const { Date, Surface, Tournoi } = this.state
        const { movies, isLoading } = this.state

        const columns = [
            {
                Header: 'Date & Tournoi',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Mise',
                accessor: 'name',
                Cell: function(props) {
                    return (
                        <span>
                                <InputSelect/>
                                <InputText/>
                                <GetInformation/>
                                <InfoButton href ="/Information-match" > infos </InfoButton>
                            </span>
                    )
                },
            },
            {
                Header: 'Joueur 1',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Cote joueur 1',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Joueur 2',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                                <h5> TEST </h5>
                            </span>
                    )
                },
            },
            {
                Header: 'Cote joueur 2',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                                <h5> TEST 2 </h5>
                            </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!movies.length) {
            showTable = false
        }


        return (
            <Wrapper>
                <SelectionRow>
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
                        <LaunchResearch/>
                    </Details>
                    <List>
                        {showTable && (
                            <ReactTable
                                data={movies}
                                columns={columns}
                                loading={isLoading}
                                defaultPageSize={100}
                                showPageSizeOptions={true}
                                minRows={0}
                            />
                        )}
                    </List>
                </SelectionRow>
            </Wrapper>
        )
    }
}

export default ParisSportifs
