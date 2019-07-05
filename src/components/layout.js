import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

/* uses useStaticQuery to grab GraphQL data in a non-page component */
export default ({ children }) => {
	
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`)

	return (
	
	<div>
		<Link to={'/'}>
			<h3>
				{data.site.siteMetadata.title}
			</h3>
		</Link>

		<Link to={`/about/`}>
			About
		</Link>
		<br/>
		{children}
	</div>
	)
}