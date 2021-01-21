import React, { Component } from 'react'
import ReactPlayer from "react-player"

import styled from 'styled-components'

const Title = styled.h1`
    display : block;
    text-align: center;
    color: #243773;
    margin: 50px
`

const Player = styled.div`
    text-align: center;
    color: #243773;
    size : 1em;
`

const Wrapper = styled.div.attrs({
})`
    margin: 0 600px;
`

class Accueil extends Component {

    render() {
        return (
            <Wrapper>
                <Title>Qui sommes nous ?</Title>
                <Player>
                    <ReactPlayer
                        url="https://youtu.be/gt6hQ-pBs_k"
                        className='react-player'
                        width='100%'
                    />
                </Player>
            </Wrapper>
        )
    }
}

export default Accueil
