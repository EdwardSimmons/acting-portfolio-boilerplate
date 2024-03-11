import Container from "@mui/material/Container"
import TabsRouter from "./TabsRouter"
import StickyFooter from "./StickyFooter"

export default function App() {
  return (
    <Container maxWidth="sm" disableGutters>
      <TabsRouter />
      <StickyFooter />
    </Container>
  )
}
