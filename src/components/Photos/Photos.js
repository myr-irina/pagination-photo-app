import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@material-ui/core";
import PhotoItem from "../PhotoItem/PhotoItem";

export const Photos = ({ photos, loading, onPhotoClick, onDeletePhoto }) => {
  if (loading) {
    return (
      <CircularProgress animation="border" role="status">
        <span>Loading...</span>
      </CircularProgress>
    );
  }

  return (
    <Grid container spacing={3}>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} onPhotoClick={onPhotoClick} onDeletePhoto={onDeletePhoto}/>
      ))}
    </Grid>
  );
};
