import { PaletteColor, createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

const tools = createTheme()
const primary = tools.palette.augmentColor({ color: { main: "#000000" } })
const secondary = tools.palette.augmentColor({ color: { main: "#ffffff" } })
const containerBg = tools.palette.augmentColor({ color: { main: "#ffffff" } })
const highlight = tools.palette.augmentColor({ color: { main: "#624cab" } })

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary,
    secondary,
    highlight,
    error: {
      main: red.A400,
    },
    background: {
      default: primary.light,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: containerBg.main,
        },
      },
    },
  },
})

export default theme

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor
  }
  interface PaletteOptions {
    highlight: PaletteColor
  }
}
