import Axios from 'axios'
import React, {useEffect, useContext} from 'react'
import {QueryContext} from '../Contexts/QueryContext'
function ResultsTable() {
	const {query, drug, setDrug} = useContext(QueryContext)
	useEffect(()  => {
		Axios.get(`http://localhost:3001/getDrugs?drug=${query}`).then((response) => response.data).then((data) => setDrug(data))
	}, [query]);
	const listItems = drug.map((drug) =>
	<tr>
	<td>{drug.disease.replace(/_/g,' ')}</td>
	<td>{drug.ground_truth ? "true" : "false"}</td>
	</tr>)
	return (
		<div className='results-table'>
		<h3>Showing results for {query}</h3>
		<table>
		<thead>
		<tr>
		<th>Disease Name</th>
		<th>Ground Truth</th>
		</tr>
		</thead>
		<tbody>
		{listItems}
		</tbody>
		</table>
		</div>
		);
	}
	export default ResultsTable
