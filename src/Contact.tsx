import { Avatar, Box, Button, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import InstagramIcon from "@mui/icons-material/Instagram"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import YouTubeIcon from "@mui/icons-material/YouTube"

export default function Contact() {
  return (
    <Box>
      <Typography variant="h2" sx={{ my: 3 }}>
        Contact
      </Typography>

      <Stack spacing={6} alignItems="flex-start">
        <Button
          target="_blank"
          component="a"
          startIcon={<AlternateEmailIcon />}
        >
          Email
        </Button>
        <Button target="_blank" component="a" startIcon={<InstagramIcon />}>
          Instagram
        </Button>
        <Button
          target="_blank"
          component="a"
          startIcon={
            <Avatar
              alt="Spotlight logo"
              src="./spotlight.jpeg"
              sx={{ width: "1.25rem", height: "1.25rem" }}
            />
          }
        >
          Spotlight Performer
        </Button>
        <Button target="_blank" component="a" startIcon={<MusicNoteIcon />}>
          Spotify
        </Button>
        <Button
          target="_blank"
          component="a"
          startIcon={<YouTubeIcon />}
          href="https://www.youtube.com/channel/UCBBEwlCFKcZOVGu1wujKLsg"
        >
          YouTube
        </Button>
      </Stack>
    </Box>
  )
}
