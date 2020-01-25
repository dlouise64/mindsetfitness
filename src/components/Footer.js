import React from 'react'
import styled from '@emotion/styled'
import Theme from '../styles/theme'
import { Container } from '../styles/styled-layout'
const Footer = () => (
	<FooterWrapper>
		<Container>
			<Columns>
				<div>
					<h3>Challenge the mind and the body will follow.</h3>
					<p>Connect with us:</p>
					<ul>
						<li>facebook</li>
						<li>twitter</li>
						<li>linkedin</li>
						<li>instagram</li>
						<li>youtube</li>
					</ul>
				</div>
				<div>
					<p>
						Subscribe to Mindset Fitness and receive free tips, recipes, updates
						and more.
					</p>
					<div>Form</div>
				</div>
			</Columns>
			<nav>
				<ul>
					<li>About</li>
					<li>Team</li>
					<li>Services</li>
					<li>Testimonials</li>
					<li>Contact</li>
				</ul>
			</nav>
			<div>
				<small>Copyright © Mindset Fitness 2014 - 2020</small>
			</div>
		</Container>
	</FooterWrapper>
)

const FooterWrapper = styled.footer`
	padding: 2.8125rem 0;
	background-color: ${Theme.colors.dark};
`

const Columns = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		align-items: center;
		> div {
			flex: 1;
		}
	}
`
export default Footer
