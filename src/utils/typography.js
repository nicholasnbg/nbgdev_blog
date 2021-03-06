import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
import colors from './colors'

// Example of how to override theme styles
// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     'a.gatsby-resp-image-link': {
//       boxShadow: `none`,
//     },
//   }
// }

oceanBeachTheme.overrideThemeStyles = () => {
  return {
    'a': {
      backgroundImage: `none`,
      color: `${colors.primary}`
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

// See https://github.com/KyleAMathews/typography.js/blob/master/docs/what.md for explanations on rhythm and scale
export const rhythm = typography.rhythm
export const scale = typography.scale
