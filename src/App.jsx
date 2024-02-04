import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";

import { getAPiConfiguration, getGenres } from "./store/HomeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/Search";
import Explore from "./pages/explore/Explore";
import Error from "./pages/404/Error";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getAPiConfiguration(res));
    });
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
