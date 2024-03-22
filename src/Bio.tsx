import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material"

const headshots = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    author: "© Author's Name",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    author: "© Author's Name",
  },
]

export default function Bio() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mt: 3 }}>
        Bio
      </Typography>
      <Typography variant="body1" sx={{ my: 1 }}>
        Bio description
      </Typography>
      <ImageList sx={{ mx: "auto" }} cols={3}>
        {headshots.map(item => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt="headshot-img"
              loading="lazy"
              style={{ borderRadius: "0.5rem" }}
            />
            <ImageListItemBar subtitle={item.author} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
