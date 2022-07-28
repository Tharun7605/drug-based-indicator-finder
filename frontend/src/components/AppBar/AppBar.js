import {
  AppBar as NferxAppBar,
  Hidden,
  makeStyles,
  OtherAppsButton,
  SuggestionsSearch,
  useQuery,
} from 'nferx-core-ui'
import React from 'react'
import { Route } from 'react-router'
import { config } from '../../Config'

const useStyles = makeStyles(() => ({
  search: {
    width: 400,
  },
}))

export default function AppBar(props) {
  const classes = useStyles(props)
  const { query, replaceQueryParam } = useQuery()

  const [token, setToken] = React.useState(query.token)

  React.useEffect(() => {
    setToken(query.token)
  }, [query.token])

  const handleSubmit = token => {
    replaceQueryParam({
      token,
    })
  }

  return (
    <NferxAppBar
      // if you're using SearchPanel style search, remove this middle prop.
      middle={
        <Route path={'/results'}>
          {() => {
            return (
              <Hidden smDown>
                <SuggestionsSearch
                  className={classes.search}
                  key={query.token}
                  onSubmit={handleSubmit}
                  value={token}
                  onChange={setToken}
                />
                <OtherAppsButton exclude={config.appName} token={query.token} />
              </Hidden>
            )
          }}
        </Route>
      }
    />
  )
}
