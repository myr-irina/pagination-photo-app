import React from "react";
import { Grid } from "@material-ui/core";
import PhotoItem from "../PhotoItem/PhotoItem";
import { Box, Card, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AlbumId = ({ photos }) => {
  const uniqueAlbumId = photos
    .map((p) => p.albumId)
    .filter((albumId, index, photos) => photos.indexOf(albumId) === index);
    


  return (
    <Grid container spacing={1}>
      {uniqueAlbumId.map((item) => (
        <Grid key={item.index} item xs={1}>
          <Card variant="outlined">
            <Typography variant="h6">{item.id}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
