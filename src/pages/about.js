import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

/*Get the site title*/
export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export default ({ data }) => (
	<Layout>
		<h1>About {data.site.siteMetadata.title}</h1>
		<p>
			Something something, something something....

			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh velit, hendrerit id eros vitae, dictum consequat dui. Vivamus molestie auctor justo, quis laoreet magna. Nunc accumsan dolor erat, ullamcorper ultrices lectus ultrices vitae. Fusce malesuada tortor ligula, eget dignissim felis aliquam id. Aliquam nec hendrerit tellus. Suspendisse porta leo accumsan libero porttitor euismod. Fusce justo turpis, pharetra sed quam quis, malesuada laoreet tortor. Morbi quis leo et tellus lacinia consectetur. Sed varius nulla quis purus fringilla faucibus. Vestibulum lobortis ullamcorper quam, a condimentum nulla lobortis et. In congue eros at dictum ullamcorper. Pellentesque tincidunt tortor justo. Ut vitae massa eu est ullamcorper maximus blandit ac justo. Vestibulum ut tristique enim, sed tempor libero. Ut et nisi ac dolor fermentum elementum. 
		</p>
	</Layout>
)

