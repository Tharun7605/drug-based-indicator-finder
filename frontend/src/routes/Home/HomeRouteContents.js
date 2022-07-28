import React from 'react'
import {
	AppTitle,
	ContentRoot,
	NferxLogo,
	SuggestionsSearch,
	addQueryToUrl,
	useQuery,
	makeStyles,
} from 'nferx-core-ui'
import { Redirect } from 'react-router-dom'
import { config } from '../../Config'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 500,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		margin: ['10vh', 'auto', 0, 'auto'],
	},
	imgContainer: {
		position: 'relative',
		margin: [0, 'auto', theme.pad.md, 'auto'],
		width: 250, //  need to set width on container too for ie 11
		height: 95,
	},
	img: {
		width: 250,
		height: 95,
	},
	header: {
		marginBottom: theme.pad.md,
	},
	appTitle: {
		position: 'absolute',
		right: 0,
		bottom: -5,
	},
	paper: {
		borderRadius: 100,
	},
}))

function HomeRouteContents() {
	const [searchValue, setSearchValue] = React.useState()
	const { query, pushQueryParam } = useQuery()
	const classes = useStyles()
	if (query.token) {
		return <Redirect to={addQueryToUrl('/results', { token: query.token })} />
	}
	return (
		<ContentRoot className={classes.root}>
			<div className={classes.imgContainer}>
				<NferxLogo className={classes.img} />
				<AppTitle className={classes.appTitle}>{config.appName}</AppTitle>
			</div>
			<SuggestionsSearch
				fullWidth
				variant={'outlined'}
				autoFocus
				onSubmit={val =>
					pushQueryParam({
						token: val,
					})
				}
				value={searchValue}
				onChange={setSearchValue}
			/>
		</ContentRoot>
	)
}

export default HomeRouteContents