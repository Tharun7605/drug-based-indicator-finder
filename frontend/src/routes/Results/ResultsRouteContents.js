import React, { Fragment } from 'react'
import { useQuery } from 'nferx-core-ui'
import ResultsTable from '../../components/ResultsTable'

function ResultsRouteContents(props) {
	const { query } = useQuery()
	const { token } = query
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [token])
	return (
		<Fragment>
			<ResultsTable />
		</Fragment>
	)
}

export default ResultsRouteContents