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
import CardHeader from "@mui/material/CardHeader";
import { positions } from "@mui/system";
import Box from "@mui/material/Box";

const PhotoItem = ({ photo }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, height: "100%" }} variant="outlined">
        {/* <CardHeader
          action={
            <IconButton aria-label="delete" size="small"  sx={{zIndex: 'modal'}}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          }
        /> */}
        <Box sx={{ display: "flex", position: "relative", width: '100%' }}>
          <CardMedia
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
            sx={{ position: "absolute", right: '0', left: '10' }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>

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
