import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import ImageBackground from '../img/backgrounds/1920px_1080px.jpg'
import Layout from '../components/Layout'
import Theme from '../styles/theme'
import { Container, Section, TwoColumns } from '../styles/styled-layout'
import NavBar from '../components/Navbar'

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro
}) => (
	<>
		<MainHeader>
			<NavBar />
			<Container>
				<Hero>
					<h1>{title}</h1>
					<h2>{heading}</h2>
					<h3>{subheading}</h3>
				</Hero>
			</Container>
		</MainHeader>
		<Section>
			<Container>Services</Container>
		</Section>
		<Section>
			<Container>Testimonial Quotes</Container>
		</Section>
		<Section>
			<Container>Testimonial Carousel</Container>
		</Section>
	</>
)

const MainHeader = styled.div`
	position: relative;
	height: 100vh;
	background-color: ${Theme.colors.dark};
	background: url(${ImageBackground}) no-repeat center;
	background-size: cover;
	background-position-x: -880px;
	@media (min-width: 768px) {
		background-position: 0;
	}
`

const Hero = styled.div`
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	width: auto;
	@media (min-width: 768px) {
		width: 60%;
	}
	@media (min-width: 1024px) {
		width: 40%;
	}
	@media (min-width: 1440px) {
		width: 23%;
	}
	h1,
	h2,
	h3 {
		text-align: left;
		letter-spacing: 0.0313rem;
	}
	h1 {
		color: white;
		font-family: ${Theme.fonts.regular};
		font-weight: 300;
		font-size: ${Theme.fontSize.h1};
		margin-bottom: ${Theme.margins.md};
	}
	h2 {
		color: ${Theme.colors.primary};
		font-family: ${Theme.fonts.cursive};
		font-size: ${Theme.fontSize.h1};
		margin-bottom: ${Theme.margins.md};
		font-weight: 300;
	}
	h3 {
		color: ${Theme.colors.primary};
		font-size: ${Theme.fontSize.regular};
		font-weight: 500;
		font-family: ${Theme.fonts.regular};
	}
`
IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
}

export default IndexPage

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`
