import React, { useState } from 'react';
import './style/App.css';
import ResultsTable from './components/ResultsTable';
import SuggestionsSearchDemo from './components/SearchBar';
import { QueryContext } from '../src/Contexts/QueryContext'
function App() {
	const [query, setQuery] = useState('')
	const [drug, setDrug] = useState([]);
	const [showTable, setShowTable] = useState(false);
	return (
		<div className="App">
		<QueryContext.Provider value={{query, setQuery, drug, setDrug, showTable, setShowTable}}>
		<SuggestionsSearchDemo />
		{showTable ? <ResultsTable /> : null}
		</QueryContext.Provider>
		</div>
		);
	}

	export default App;


