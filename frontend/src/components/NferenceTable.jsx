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
    const res = await APIGet(`http://localhost:3001/getDrugs`, { drug : drug })
	console.log('res:', res)
    const ret =  res.map(row => ({
        disease_name: row.disease.replaceAll(/_+/g,' '),
        ground_truth: row.ground_truth,
    }))
	return ret
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
function NferenceThing() {
	const { query } = useQuery()
    const searchVal=query.search
    const variables = React.useMemo(() => {
        return {
            drug: searchVal
        }
    },[searchVal])
    return (
		<FetchData
		getData={getData}
		variables={variables}
		render={({ data, error, loading}) => {			
			if (error) {
				return <Typography variant={'error'}>Error</Typography>
			}
			if (loading) {
				return <Typography variant={'caption'}>Loading...</Typography>
			}
			console.log(data)
			return (
				<LocalPaginationTable
				id={'table'}
				data={data}
				columns={columnConfig}
				title={'Showing Results'}
				pageInfo={{ pageSize: 10 }}
				/>
			)
		}}
	  />
    )
}

export default withQuery(NferenceThing)
