import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import { Photos } from "../Photos/Photos";

import { AlbumId } from "../AlbumId/AlbumId";
import Popup from "../Popup/Popup";

const BASE_URL = "http://jsonplaceholder.typicode.com/photos";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);

  const [selectedPhoto, setSelectedPhoto] = useState({
    url: "",
  });

  // get current posts
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  //
  const pageQty = Math.ceil(photos.length / photosPerPage);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto({ url: "" });
  };

  const handleFilterAlbum = (item) => {
    console.log(item);
    const filteredItems = photos.filter((photo) => photo.albumId === item);
    setPhotos(filteredItems);
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
  }, [currentPage]);

  function handleDeletePhoto(id) {
    axios.delete(`${BASE_URL}/${id}`).then(() => {
      console.log("DELETED!!!", id);

      setPhotos((photos) => {
        photos.filter((photo) => photo.id !== id);
      });
    });
  }

  return (
    <>
      <Container sx={{ marginY: 5 }}>
        <h1 className="text-primary">My Photos</h1>
        <AlbumId photos={photos} handleFilterAlbum={handleFilterAlbum} />
        <Stack spacing={10} sx={{ my: 7, width: "100%" }}>
          <Photos
            photos={currentPhotos}
            loading={loading}
            onPhotoClick={handlePhotoClick}
            onDeletePhoto={handleDeletePhoto}
          />
          <Pagination
            count={pageQty}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
          />
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
