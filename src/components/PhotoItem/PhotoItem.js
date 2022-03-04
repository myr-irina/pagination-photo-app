import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const PhotoItem = ({ photo }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, height: "100%" }} variant="outlined">
        {/* <CardHeader></CardHeader> */}

        <CardMedia
          action={
            <IconButton>
              <DeleteIcon fontSize="small" />
            </IconButton>
          }
          component="img"
          height="140"
          image={photo.thumbnailUrl}
          alt={photo.title}
          title={photo.title}
          sx={{height: 140}}
        />

        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {photo.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PhotoItem;
