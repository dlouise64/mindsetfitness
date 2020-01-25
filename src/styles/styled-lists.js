import styled from '@emotion/styled'

export const ListUnstyled = styled.ul`
	list-style: none;
	li {
		display: block;
	}
	@media (min-width: 1024px) {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		li {
			flex: 0 1 auto;
		}
	}
`
