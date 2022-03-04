import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@material-ui/core";
import PhotoItem from "../PhotoItem/PhotoItem";

export const Photos = ({ photos, loading }) => {
  if (loading) {
    return (
      <CircularProgress animation="border" role="status">
        <span>Loading...</span>
      </CircularProgress>
    );
  }

  return (
    <Grid container spacing={2}>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </Grid>
  );
};
