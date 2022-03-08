import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

export const AlbumId = ({ uniqueAlbumIds, handleFilterAlbum, selectedAlbumId }) => {
 
  return (
    <Grid container spacing={1}>
      {uniqueAlbumIds.map((item, index) => (
        <Grid key={index} item xs={1}>
          <Button
            size="small"
            variant={item === selectedAlbumId ? "contained" :"outlined"} 
            onClick={() => handleFilterAlbum(item)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
