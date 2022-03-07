import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const PhotoItem = ({ photo, onPhotoClick, onDeletePhoto }) => {
  function handleClick() {
    onPhotoClick(photo);
  }

  function handleDelete(e) {
    e.preventDefault();
    onDeletePhoto(photo.id);
  }

  return (
    <Grid item xs={12} md={4} sx={{ pdg: 5 }}>
      <Card sx={{ maxWidth: 345, height: "100%" }} variant="outlined">
        <Box sx={{ display: "flex", position: "relative", width: "100%" }}>
          <CardMedia
            onClick={handleClick}
            component="img"
            height="140"
            image={photo.thumbnailUrl}
            alt={photo.title}
            title={photo.title}
            sx={{ height: 140 }}
          />
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ position: "absolute", right: "0", left: "10" }}
            onClick={handleDelete}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>

        <CardContent>
          <Typography variant="h8" component="h3" gutterBottom>
            Album# {photo.albumId}
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            {photo.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PhotoItem;
