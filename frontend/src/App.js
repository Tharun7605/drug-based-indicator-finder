import React, { useState } from 'react';
import './style/App.css';
import ResultsTable from './components/ResultsTable';
import SuggestionsSearchDemo from './components/SearchBar';
import { QueryContext } from '../src/Contexts/QueryContext'
function App() {
	const [query, setQuery] = useState('')
	const [drug, setDrug] = useState([]);
	return (
		<div className="App">
			<QueryContext.Provider value={{query, setQuery, drug, setDrug}}>
				<SuggestionsSearchDemo />
				<ResultsTable />
			</QueryContext.Provider>
		</div>
		);
	}
	
	export default App;
	