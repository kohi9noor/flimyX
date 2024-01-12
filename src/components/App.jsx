import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, Movies, MovieInfo, Profile, Navbar } from "./index";

import useStyle from "./styles";

const App = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar}></div>

          <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/movies/:id" element={<MovieInfo />}></Route>
            <Route path="/actors" element={<Actors />}></Route>
            <Route path="/actors/:id" element={<Profile />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
