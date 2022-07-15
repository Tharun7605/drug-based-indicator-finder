import { config } from '../Config'

export function getTheme(theme) {
  return {
    sidebarWidth: 280,
    palette: {
      primary: {
        main: config.primaryColor,
      },
      background: {
        default: theme.palette.background.default,
        level2: theme.palette.background.default,
      },
    },
    maxContentWidth: theme.breakpoints.values.md,
  }
}
