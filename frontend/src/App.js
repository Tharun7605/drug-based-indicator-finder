import React, { useState } from 'react';
import './style/App.css';
import SearchBar from './components/SearchBar';
import NferenceThing from './components/NferenceTable'
import { QueryProvider } from 'nferx-core-ui'
import { QueryContext } from '../src/Contexts/QueryContext'
function App() {
	const [query, setQuery] = useState('')
	const [drug, setDrug] = useState([]);
	const [showTable, setShowTable] = useState(false);
	return (
		<QueryProvider>
		<div className="App">
		<QueryContext.Provider value={{drug, setDrug, showTable, setShowTable}}>
		<SearchBar />
		{showTable ? <NferenceThing /> : null}
		</QueryContext.Provider>
		</div>
		</QueryProvider>
	);
}

export default App;


