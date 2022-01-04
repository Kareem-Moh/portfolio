import React from 'react'
import styled from 'styled-components'

import HomeIcon from '../react-icons/HomeIcon'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

const NavBar = (props) => {
    return (
        <Container style={{margin:0,padding:"15 40"}}>
            <Nav>
                <HomeIcon />
                <Links />
            </Nav>
        </Container>
    )
}

export default NavBar