import React from 'react'
import { Route } from 'react-router-dom'
import HomeRouteContents from './HomeRouteContents'

function HomeRoute() {
	return <Route path={'/'} exact component={HomeRouteContents} />
}

export default HomeRoute