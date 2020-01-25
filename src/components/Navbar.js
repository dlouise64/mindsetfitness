import React from 'react'
import styled from '@emotion/styled'
import { Container, TwoColumns } from '../styles/styled-layout'
import { ListUnstyled } from '../styles/styled-lists'

import Logo from '../img/logos/header_logo@2x.svg'
import Theme from '../styles/theme'

const NavBar = () => (
	<Nav>
		<Container>
			<TwoColumns>
				<div>
					<img src={Logo} alt="Mindset Fitness" />
				</div>
				<div>
					<ListUnstyled>
						<li>About</li>
						<li>Team</li>
						<li>Services</li>
						<li>Testimonials</li>
						<li>Contact</li>
					</ListUnstyled>
				</div>
			</TwoColumns>
		</Container>
	</Nav>
)

const Nav = styled.nav`
	position: absolute;
	top: 1.5625rem;
	width: 100%;
	z-index: 1;
	> div > div {
		text-align: left;
		img {
			height: 3.5625rem;
			line-height: 3.5625rem;
		}
	}
	ul {
		color: ${Theme.colors.primary};
		font-family: ${Theme.fonts.cursive};
	}
`

export default NavBar
