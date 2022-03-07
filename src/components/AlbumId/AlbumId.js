import React from "react";
import { Grid } from "@material-ui/core";
import PhotoItem from "../PhotoItem/PhotoItem";
import { Box, Card, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AlbumId = ({ photos }) => {
  const uniqueAlbumId = photos
    .map((p) => p.albumId)
    .filter((albumId, index, photos) => photos.indexOf(albumId) === index);

  return (
    <Grid container spacing={1}>
      {uniqueAlbumId.map((item, index) => (
        <Grid key={index} item xs={1}>
          <Button size="small" variant="outlined">
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
