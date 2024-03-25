import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import theme from "./theme"

function BuiltBy() {
  return (
    <Typography
      align="center"
      variant="body2"
      color={theme.palette.secondary.main}
    >
      {"Built by "}
      <Link color="inherit" href="https://jasmincortez.github.io/WebDev/">
        Jasmin Cortez
      </Link>
      {", "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary.main,
          }}
        >
          <BuiltBy />
        </Container>
      </Box>
    </Box>
  )
}
