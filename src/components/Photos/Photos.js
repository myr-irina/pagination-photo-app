import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const Photos = ({ photos, loading }) => {
  if (loading) {
    return (
      // <CircularProgress animation="border" role="status">
      //   <span className="sr-only">Loading...</span>
      // </CircularProgress>
      <CircularProgress />
    );
  }

  return (
    <ul className="photos">
      {photos.map((photo) => (
        <li key={photo.id} className="photos-item">
          {photo.title}
        </li>
      ))}
    </ul>
  );
};
