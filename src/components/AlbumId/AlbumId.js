import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

export const AlbumId = ({ photos, handleFilterAlbum }) => {
  const uniqueAlbumId = photos
    .map((p) => p.albumId)
    .filter((albumId, index, photos) => photos.indexOf(albumId) === index);

  return (
    <Grid container spacing={1}>
      {uniqueAlbumId.map((item, index) => (
        <Grid key={index} item xs={1}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleFilterAlbum(item)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
