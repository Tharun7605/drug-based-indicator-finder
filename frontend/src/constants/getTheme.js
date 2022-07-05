import { createTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

export const getTheme = createTheme({
	palette: {
		secondary: {
			main: orange[500]
		}
	}
})