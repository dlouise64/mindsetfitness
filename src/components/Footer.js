import React from 'react'
import styled from '@emotion/styled'
import Theme from '../styles/theme'
import { Container, TwoColumns } from '../styles/styled-layout'
import { ListUnstyled } from '../styles/styled-lists'
import { InputText } from '../styles/styled-form'
import { Button } from '../styles/styled-button'

import { IconContext } from 'react-icons'

import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaYoutube
} from 'react-icons/fa'

const Footer = () => (
	<FooterWrapper>
		<Container>
			<TwoColumns>
				<div>
					<h3>Challenge the mind and the body will follow.</h3>
					<SocialMedia />
				</div>
				<div>
					<div>
						<SubscribeText>
							Subscribe to Mindset Fitness and receive free tips, <br />
							recipes, updates and more.
						</SubscribeText>
						<Form />
					</div>
				</div>
			</TwoColumns>
			<Nav>
				<ListUnstyled inline>
					<li>About</li>
					<li>Team</li>
					<li>Services</li>
					<li>Testimonials</li>
					<li>Contact</li>
				</ListUnstyled>
			</Nav>
			<Copyright>
				<small>Copyright © Mindset Fitness 2014 - 2020</small>
			</Copyright>
		</Container>
	</FooterWrapper>
)

const Form = () => (
	<>
		<InputText type="text" />
		<Button>Submit</Button>
	</>
)

const SocialMedia = () => {
	const icons = [
		<FaFacebookF />,
		<FaTwitter />,
		<FaLinkedinIn />,
		<FaInstagram />,
		<FaYoutube />
	]
	return (
		<SocialMediaWrapper>
			<p>Connect with us:</p>
			<IconContext.Provider
				value={{
					color: Theme.colors.primary,
					size: '1.625rem'
				}}>
				<ListUnstyled inline>
					{icons.map((item, key) => (
						<li key={key}>{item}</li>
					))}
				</ListUnstyled>
			</IconContext.Provider>
		</SocialMediaWrapper>
	)
}

const SocialMediaWrapper = styled.div`
	margin-top: 3.125rem;
	margin-bottom: 1.625rem;
	p {
		margin-bottom: 1.25rem;
	}
	ul {
		padding: 0 15%;
	}
`
const FooterWrapper = styled.footer`
	padding: 2.8125rem 0;
	background-color: ${Theme.colors.dark};
	color: ${Theme.colors.primary};
	> div > div > div > div {
		padding: 0 10%;
	}
`

const Nav = styled.nav`
	padding: 3.75rem 0 1.875rem;
	text-align: center;
	color: white;
	margin: 0 10%;
	font-family: ${Theme.fonts.cursive};
`

const Copyright = styled.div`
	text-align: center;
`

const SubscribeText = styled.p`
	margin-bottom: 1.25rem;
`
export default Footer
