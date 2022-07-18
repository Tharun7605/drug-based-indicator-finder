import React, { useContext } from 'react'
import { QueryContext } from '../Contexts/QueryContext'
import {
	withQuery,
	SearchTextField,
} from 'nferx-core-ui'
import '../style/SearchBar.css'

function SuggestionsSearchDemo() {
	const { query, setQuery } = useContext(QueryContext);
	const { showTable, setShowTable } = useContext(QueryContext);
	return (
		<SearchTextField
		className="searchBar"
		value={query}
		onSubmit={text => {
			setQuery(text.toLowerCase())
			setShowTable(true);
		}}
		debounced
		variant={'outlined'}
		placeholder={'Search for Drugs'}
        style={{'margin-top': showTable ? '0px' : '100px'}}
		/>
		)
	}
	export default withQuery(SuggestionsSearchDemo)
