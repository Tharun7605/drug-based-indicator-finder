import React from 'react';
import "../style/SearchBar.css";
import Axios from 'axios'
export default class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			drugs: [],
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	componentDidMount() {
		Axios.get("http://localhost:3001/getDrugs").then((response) => response.data).then(data => {
			this.setState({drugs: data})
		})
	}
	render() {
		return (
			<div className="search">
				<div className="searchBar">
					<input type="text" value={this.state.value} onChange={this.handleChange}></input>
				</div>
				<div className='results-table'>
					<table>
						<thead>
							<tr>
								<th>Drug</th>
								<th>Disease Name</th>
								<th>Ground Truth</th>
							</tr>
						</thead>
						<tbody>
							{this.state.drugs.map((drug) => {
								return (
									<tr>
										<td>Drug Name: {drug.drug}</td>
										<td>Disease Name: {drug.disease}</td>
										<td>Ground Truth: {drug.ground_truth ? "true" : "false"}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}