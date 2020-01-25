import styled from '@emotion/styled'

export const ListUnstyled = styled.ul`
	list-style: none;
	li {
		display: ${props => (props.inline ? 'inline-block' : 'block')};
	}
`
