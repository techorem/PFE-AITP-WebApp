import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div`
    height: 90px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark',
})`
    margin-bottom: 10 px;
    background: #243773;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
