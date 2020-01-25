import styled from '@emotion/styled'
import DarkBG from '../img/backgrounds/dark_pattern.png'
import BlueBG from '../img/backgrounds/testimonial_section_bg_1920px.jpg'
import Theme from '../styles/theme'
export const Container = styled.div`
	margin: 0 5%;

	@media (min-width: 768px) {
		margin: 0 5%;
	}

	@media (min-width: 1024px) {
		margin: 0 15%;
	}
`
export const Section = styled.section`
	padding: 3.125rem 0;
	background-image: url(${props =>
		props.dark ? DarkBG : props.blue ? BlueBG : ''});
	background-repeat: ${props => (props.dark ? 'repeat' : 'no-repeat')};
	background-position-x: center;

	background-color: ${Theme.colors.darkGrey};
	text-align: ${props => (props.centered ? 'center' : 'left')};
	h2 {
		color: ${props =>
			props.dark ? Theme.colors.primary : Theme.colors.darkGrey};
		margin-bottom: ${Theme.margins.md};
	}
	p {
		color: ${props => (props.dark ? 'white' : Theme.colors.darkGrey)};
		margin-bottom: ${Theme.margins.md};
	}
`
export const TwoColumns = styled.div`
	text-align: center;
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		> div {
			position: relative;
			flex: 1;
		}
	}
`

export const Compact = styled.div`
	margin: 0 10%;

	@media (min-width: 768px) {
		margin: 0 15%;
	}

	@media (min-width: 1024px) {
		margin: 0 20%;
	}

	@media (min-width: 1440px) {
		margin: 0 30%;
	}
`
