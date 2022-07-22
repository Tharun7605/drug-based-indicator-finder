import React, { useContext } from 'react'
import { QueryContext } from '../Contexts/QueryContext'
import {
	useQuery,
	withQuery,
	SearchTextField,
} from 'nferx-core-ui'
import '../style/SearchBar.css'

function SearchBar() {
	const { query, replaceQueryParam } = useQuery()
	const { showTable, setShowTable } = useContext(QueryContext);
	const value = query.search
	const setValue = search => replaceQueryParam({ search })
	return (
		<SearchTextField
		className="searchBar"
		value={value}
		onSubmit={text => {
			setValue(text.toLowerCase())
			setShowTable(true);
		}}
		onChange={null}
		debounced
		variant={'outlined'}
		placeholder={'Search for Drugs'}
		style={{ 'margin-top': showTable ? '0px' : '100px' }}
		/>
	)
}
export default withQuery(SearchBar)

