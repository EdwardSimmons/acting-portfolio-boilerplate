import { Link, createBrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"
import Home from "./Home"
import Bio from "./Bio"
import Contact from "./Contact"
import Projects from "./Projects"
import App from "./App"
import theme from "./theme"
import { Button } from "@mui/material"

export interface RouteDefinition {
  label: string
  aria: string
  to: string
  element: JSX.Element
}

export const BASE_URL = "/acting-portfolio-boilerplate/"

export const routes: RouteDefinition[] = [
  {
    label: "Home",
    aria: "Navigate to home",
    to: "home",
    element: <Home />,
  },
  {
    label: "Bio",
    aria: "Navigate to home",
    to: "bio",
    element: <Bio />,
  },
  {
    label: "Projects",
    aria: "Navigate to projects",
    to: "projects",
    element: <Projects />,
  },
  {
    label: "Contact",
    aria: "Navigate to contact",
    to: "contact",
    element: <Contact />,
  },
]

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: routes.map(route => {
        return {
          path: route.to,
          element: route.element,
        }
      }),
    },
  ],
  {
    basename: BASE_URL,
  }
)

export type RouterLinkProps = {
  to: string
  label: string
}

export function RouterLink(props: RouterLinkProps) {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          color: theme.palette.secondary.main,
        }}
      >
        {props.label}
      </Button>
    </Link>
  )
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          color: theme.palette.primary.main,
          my: 1,
        }}
      >
        {props.label}
      </Button>
    </Link>
  )
}
