import styled from '@emotion/styled'

export const Container = styled.div`
	margin: 0 5%;

	@media (min-width: 1440px) {
		margin: 0 15%;
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
			position: relative;
			flex: 1;
			padding: 0 4%;
		}
	}
`
