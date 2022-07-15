import React, { useContext } from 'react'
import { QueryContext } from '../Contexts/QueryContext'
import {
	withQuery,
	SearchTextField,
} from 'nferx-core-ui'

function SuggestionsSearchDemo() {
	const { query, setQuery } = useContext(QueryContext);
	return (
		<SearchTextField
		className="root"
		value={query}
		onSubmit={text => {
			setQuery(text.toLowerCase())
		}}
		debounced
		variant={'outlined'}
		placeholder={'Search for Drugs'}
		/>
		)
	}
	export default withQuery(SuggestionsSearchDemo)
	