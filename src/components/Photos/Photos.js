import React from "react";

export const Photos = ({ photos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
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
