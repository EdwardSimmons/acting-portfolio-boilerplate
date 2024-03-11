import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import {
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
  BrowserRouter,
} from "react-router-dom"
import NotFound from "./NotFound"
import Home from "./Home"
import Bio from "./Bio"
import Contact from "./Contact"
import Projects from "./Projects"
import theme from "./theme"

const routes: RouteDefinition[] = [
  {
    label: "Home",
    value: "/",
    to: "/",
    component: <Home />,
  },
  {
    label: "Bio",
    value: "/bio",
    to: "/bio",
    component: <Bio />,
  },
  {
    label: "Projects",
    value: "/projects",
    to: "/projects",
    component: <Projects />,
  },
  {
    label: "Contact",
    value: "/contact",
    to: "/contact",
    component: <Contact />,
  },
]

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}

function MyTabs() {
  const routeMatch = useRouteMatch(routes.map(route => route.to))
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs
      value={currentTab}
      variant="fullWidth"
      textColor="secondary"
      sx={{
        "& .MuiTab-root": {
          color: theme.palette.secondary.main,
        },
        "& .MuiTabs-indicator": {
          backgroundColor: theme.palette.highlight.main,
          height: "0.25rem",
        },
      }}
    >
      {routes.map(route => (
        <Tab
          key={route.label}
          label={route.label}
          value={route.value}
          to={route.to}
          component={Link}
        />
      ))}
    </Tabs>
  )
}

function CurrentRoute() {
  const location = useLocation()
  const route = routes.find(route => route.to === location.pathname)

  if (route) {
    return route.component
  }

  return <NotFound />
}

export default function TabsRouter() {
  return (
    <BrowserRouter>
      <Box sx={{ width: "100%" }}>
        <MyTabs />
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

interface RouteDefinition {
  label: string
  value: string
  to: string
  component: JSX.Element
}
