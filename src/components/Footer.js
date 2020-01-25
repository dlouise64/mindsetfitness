import React from 'react'
import styled from '@emotion/styled'
import Theme from '../styles/theme'
import { Container } from '../styles/styled-layout'
const Footer = () => (
	<FooterWrapper>
		<Container>
			<Columns>
				<div>Left</div>
				<div>right</div>
			</Columns>
		</Container>
	</FooterWrapper>
)

const FooterWrapper = styled.footer`
	padding: 2.8125rem 0;
	background-color: ${Theme.colors.dark};
`

const Columns = styled.div`
	display: flex;
	align-items: center;

	> div {
		flex: 1;
	}
`
export default Footer
