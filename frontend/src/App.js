import React from 'react'
import Routes from './routes/Routes'
import AppBar from './components/AppBar/AppBar'
import {
  QueryProvider,
  AppContent,
  GlobalStylesProvider,
  SORT_DESCENDING,
} from 'nferx-core-ui'

function App() {
  return (
    <QueryProvider
      // Set the  minimal default state that our graphql query expects for
      // the clinical trials table shown in SidebarLayout
      // note that we preprend the values with `ct_` since we're passing id='ct' to
      // the table
      defaultState={{
        ct_page: 1,
        ct_sort: 'startDate',
        ct_sort_dir: SORT_DESCENDING,
      }}
    >
      <GlobalStylesProvider>
        <AppBar />
        <AppContent>
          <Routes />
        </AppContent>
      </GlobalStylesProvider>
    </QueryProvider>
  )
}

export default App
