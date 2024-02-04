import { useState, useEffect } from "react";

import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";

import { getAPiConfiguration, getGenres } from "./store/HomeSlice";

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
    <>
      <div>{url?.total_pages}</div>
    </>
  );
};

export default App;
