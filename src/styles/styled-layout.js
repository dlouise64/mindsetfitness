import styled from '@emotion/styled'

export const Container = styled.div`
	margin: 0 5%;

	@media (min-width: 1024px) {
		margin: 0 23%;
	}
`
export const Section = styled.section`
	padding: 3.125rem 0;
`
export const TwoColumns = styled.div`
	text-align: center;
	@media (min-width: 1024px) {
		display: flex;
		align-items: center;
		> div {
			flex: 1;
			padding: 0 4%;
		}
	}
`
