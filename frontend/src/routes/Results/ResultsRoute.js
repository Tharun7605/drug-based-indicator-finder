import React from 'react'
import { Route } from 'react-router-dom'
import ResultsRouteContents from './ResultsRouteContents'

function ResultsRoute() {
	return (
		<Route path={'/results'} exact render={() => <ResultsRouteContents />} />
	)
}
export default ResultsRoute