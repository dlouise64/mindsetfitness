import styled from '@emotion/styled'
import Theme from '../styles/theme'

export const Button = styled.button`
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	background-image: none;
	white-space: nowrap;
	letter-spacing: 0.25rem;
	padding: 0 0;
	font-size: 0.9375rem;
	line-height: 3.0625rem;
	color: ${Theme.colors.secondary};
	width: 100%;
	display: block;
	height: 3.0625rem;
	border: 0.125rem solid ${Theme.colors.secondary};
	background-color: transparent;
	box-sizing: border-box;
`
