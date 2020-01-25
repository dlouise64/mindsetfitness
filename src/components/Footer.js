import React from 'react'
import styled from '@emotion/styled'
import Theme from '../styles/theme'
import { Container } from '../styles/styled-layout'
const Footer = () => (
	<FooterWrapper>
		<Container>Footer</Container>
	</FooterWrapper>
)

const FooterWrapper = styled.footer`
	padding: 2.8125rem 0;
	background-color: ${Theme.colors.dark};
`
export default Footer
