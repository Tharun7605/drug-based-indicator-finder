import React from 'react';
import {
	APIGet,
	FetchData,
	LocalPaginationTable,
	COLUMN_TYPES,
	useQuery,
	withQuery,
	Typography
} from 'nferx-core-ui'

async function getData({ drug }) {
	const res = await APIGet(`http://localhost:3001/getDrugs`, { drug: drug })
	return res.map(row => ({
		disease_name: row.disease.replaceAll(/_+/g, ' '),
		ground_truth: row.ground_truth,
	}))
}
const columnConfig = [
	{
		id: 'disease_name',
		type: COLUMN_TYPES.TEXT,
		header: {
			name: 'Disease Name',
		},
	},
	{
		id: 'ground_truth',
		type: COLUMN_TYPES.BOOLEAN,
		header: {
			name: 'Ground Truth',
		},
	},
]
function ResultsTable() {
	const { query } = useQuery()
	const variables = React.useMemo(() => {
		return {
			drug: query.token
		}
	}, [query])
	return (
		<FetchData
			getData={getData}
			variables={variables}
			render={({ data, error, loading }) => {
				if (error) {
					return <Typography variant={'error'}>Error</Typography>
				}
				if (loading) {
					return <Typography variant={'caption'}>Loading...</Typography>
				}
				return (
					<LocalPaginationTable
						id={'table'}
						data={data}
						columns={columnConfig}
						title={`Showing results for ${query.token}`}
						pageInfo={{ pageSize: 10 }}
					/>
				)
			}}
		/>
	)
}

export default withQuery(ResultsTable)
