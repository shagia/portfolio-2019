import React from "react"
import { Link } from "gatsby"


export default ({ children }) => (
	<div>
		<Link>
			<h3>
				Test Title
			</h3>
		</Link>
		<Link
			to={`/about/`}>
			About
		</Link>
		<br/>
		{children}
	</div>
	)