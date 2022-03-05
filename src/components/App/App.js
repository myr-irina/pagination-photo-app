import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled, alpha } from "@mui/material/styles";
import "./App.css";
import { Container } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import { Photos } from "../Photos/Photos";
import { PageNumbers } from "../Pagination/PageNumbers";
import SearchIcon from "@mui/icons-material/Search";
import { Toolbar } from "@mui/material";
import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchAppBar from "../AppBar/AppBar";

import { AlbumId } from "../AlbumId/AlbumId";

const BASE_URL = "http://jsonplaceholder.typicode.com/photos";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);

  // get current posts
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //
  const pageQty = Math.ceil(photos.length / photosPerPage);

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setIsLoading(true);
      setPhotos(res.data);
      setIsLoading(false);
    });
  }, [currentPage]);

  return (
    <>
      <Container sx={{ marginY: 5 }}>
      {/* <AlbumId photos={photos}/> */}
        <Stack spacing={10} sx={{ my: 7, width: "100%" }}>
          <Photos photos={currentPhotos} loading={loading} />
          <Pagination
            count={pageQty}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
          />

          {/* <PageNumbers
          photosPerPage={photosPerPage}
          totalPhotos={photos.length}
          paginate={paginate}
        /> */}
        </Stack>
      </Container>
    </>
  );
}

export default App;
