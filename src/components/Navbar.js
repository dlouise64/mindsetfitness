import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Container, TwoColumns } from '../styles/styled-layout'
import { ListUnstyled } from '../styles/styled-lists'
import HamburgerMenu from 'react-hamburger-menu'
import Logo from '../img/logos/header_logo@2x.svg'
import Theme from '../styles/theme'

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false)
	function handleClick() {
		setShowMenu(!showMenu)
		document.querySelector('body').style.overflowY = showMenu
			? 'auto'
			: 'hidden'
	}
	return (
		<Nav>
			<Container>
				<TwoColumns>
					<div>
						<img src={Logo} alt="Mindset Fitness" />
					</div>
					<div>
						<DesktopMenu>
							<ListUnstyled>
								<li>About</li>
								<li>Team</li>
								<li>Services</li>
								<li>Testimonials</li>
								<li>Contact</li>
							</ListUnstyled>
						</DesktopMenu>
						<MobileNavButton onClick={() => handleClick()}>
							<HamburgerMenu
								isOpen={showMenu}
								menuClicked={() => handleClick()}
								width={30}
								height={25}
								strokeWidth={3}
								rotate={0}
								color={Theme.colors.primary}
								borderRadius={2}
								animationDuration={0.5}
							/>
						</MobileNavButton>
					</div>
				</TwoColumns>
			</Container>

			{showMenu && <MobileNav>Hello</MobileNav>}
		</Nav>
	)
}

const DesktopMenu = styled.div`
	display: none;
	@media (min-width: 1024px) {
		display: block;
	}
`
const MobileNavButton = styled.div`
	position: absolute;
	top: 0.6875rem;
	right: 5%;
	z-index: 1;
	@media (min-width: 1024px) {
		display: none;
	}
`

const MobileNav = styled.div`
	position: absolute;
	top: -1.5625rem;
	left: 0;
	width: 100%;
	height: 100vh;
	background: black;
	color: white;
	animation: 0.3s fadeIn ease;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
const Nav = styled.nav`
	position: relative;
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
