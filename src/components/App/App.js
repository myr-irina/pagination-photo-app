import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Container, Pagination, Stack, Link } from "@material-ui/core";
import { Photos } from "./Photos/Photos";
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

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      console.log(res.data);
      setIsLoading(true);
      setPhotos(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-primary">My Photos</h1>
      <Photos photos={currentPhotos} loading={loading} />
    </div>
  );
}

export default App;
