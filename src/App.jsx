import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { getAPiConfiguration, getGenres } from "./store/HomeSlice";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/Search";
import Explore from "./pages/explore/Explore";
import Error from "./pages/404/Error";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getAPiConfiguration(url));
    });
  };
  const genresCall = async () => {
    let promise = [];
    let endPoint = ["tv", "movie"];
    let allGenres = {};

    endPoint.forEach((url) => {
      promise.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promise);

    data.forEach(({ genres }) => {
      genres.forEach((item) => {
        allGenres[item.id] = item.name;
      });
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="8" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
