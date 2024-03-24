import {
  Link,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom"
import NotFound from "./NotFound"
import Home from "./Home"
import Bio from "./Bio"
import Contact from "./Contact"
import Projects from "./Projects"
import App from "./App"
import theme from "./theme"
import { Button, ListItem } from "@mui/material"

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

export const useCurrentPath = () => {
  const location = useLocation()
  return location.pathname
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        ...routes.map(route => {
          return {
            path: route.to,
            element: route.element,
          }
        }),
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
)

export type RouterLinkProps = {
  to: string
  label: string
  color?: string
}

export function RouterLink(props: RouterLinkProps) {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          color: props.color || theme.palette.secondary.main,
          ml: 2,
        }}
      >
        {props.label}
      </Button>
    </Link>
  )
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <ListItem disablePadding sx={{ justifyContent: "center" }}>
      <Link
        to={props.to}
        style={{ width: "100%", textDecoration: "none", padding: "0 1rem" }}
      >
        <Button
          fullWidth
          sx={{
            color: theme.palette.secondary.main,
            my: 1,
          }}
        >
          {props.label}
        </Button>
      </Link>
    </ListItem>
  )
}
