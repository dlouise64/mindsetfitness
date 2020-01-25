import React from 'react'
import styled from '@emotion/styled'
import { Container } from '../styles/styled-layout'

const NavBar = () => (
	<Nav>
		<Container>Nav Bar</Container>
	</Nav>
)

const Nav = styled.nav`
	position: absolute;
	top: 0;
	width: 100%;
	line-height: 3.125rem;
	height: 3.125rem;
	background: white;
	z-index: 1;
`

export default NavBar
