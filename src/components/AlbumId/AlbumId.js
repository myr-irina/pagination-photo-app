import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";


export const AlbumId = ({ photos }) => {
  const uniqueAlbumId = photos
    .map((p) => p.albumId)
    .filter((albumId, index, photos) => photos.indexOf(albumId) === index);

  function clickHandler(e) {
    console.log(e.target.value);
  }

  return (
    <Grid container spacing={1}>
      {uniqueAlbumId.map((item, index) => (
        <Grid key={index} item xs={1}>
          <Button size="small" variant="outlined" onClick={clickHandler}>
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
