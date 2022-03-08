import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import { Photos } from "../Photos/Photos";

import { AlbumId } from "../AlbumId/AlbumId";
import Popup from "../Popup/Popup";
import { PhotoAlbum } from "@material-ui/icons";

const BASE_URL = "http://jsonplaceholder.typicode.com/photos";
const PHOTOS_PER_PAGE = 10;

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlbumId, setSelectedAlbumId] = useState(undefined);
  const [selectedPhoto, setSelectedPhoto] = useState({
    url: "",
  });

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto({ url: "" });
  };

  const handleFilterAlbum = (item) => {
    const result = item === selectedAlbumId ? undefined : item;
    setSelectedAlbumId(result);
    setCurrentPage(1);
  };

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setIsLoading(true);
        setPhotos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Невозможно получить данные с сервера", err);
        setIsLoading(false);
        setPhotos([]);
      });
  }, []);

  function handleDeletePhoto(id) {
    axios.delete(`${BASE_URL}/${id}`).then(() => {
      console.log("DELETED!!!", id);

      setPhotos(photos.filter((photo) => photo.id !== id));
    });
  }

  // get current posts

  const uniqueAlbumIds = photos
    .map((p) => p.albumId)
    .filter((albumId, index, photos) => photos.indexOf(albumId) === index);

  const filteredPhotos = selectedAlbumId
    ? photos.filter((photo) => photo.albumId === selectedAlbumId)
    : photos;

  const pageQty = Math.ceil(filteredPhotos.length / PHOTOS_PER_PAGE);

  const indexOfLastPhoto = currentPage * PHOTOS_PER_PAGE;
  const indexOfFirstPhoto = indexOfLastPhoto - PHOTOS_PER_PAGE;
  const visiblePhotos = filteredPhotos.slice(
    indexOfFirstPhoto,
    indexOfLastPhoto
  );

  return (
    <>
      <Container sx={{ marginY: 5 }}>
        <h1 className="text-primary">My Photos</h1>
        <h2 className="text-primary">Filter albums:</h2>
        <AlbumId
          uniqueAlbumIds={uniqueAlbumIds}
          handleFilterAlbum={handleFilterAlbum}
          selectedAlbumId={selectedAlbumId}
        />
        <Stack spacing={10} sx={{ my: 7, width: "100%" }}>
          <Photos
            photos={visiblePhotos}
            loading={loading}
            onPhotoClick={handlePhotoClick}
            onDeletePhoto={handleDeletePhoto}
          />
          {pageQty > 1 && (
            <Pagination
              count={pageQty}
              page={currentPage}
              onChange={(_, num) => setCurrentPage(num)}
            />
          )}
        </Stack>
      </Container>
      <Popup
        onClose={handleClose}
        selectedPhoto={selectedPhoto !== null && selectedPhoto}
      />
    </>
  );
}

export default App;
