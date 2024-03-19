import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import { RouterProvider } from "react-router-dom"
import { router } from "./Router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
