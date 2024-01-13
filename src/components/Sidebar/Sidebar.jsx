import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./style";

const categories = [
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Top Rated",
    value: "top_rated",
  },
  {
    label: "Upcoming",
    value: "coming",
  },
];

const demoCategories = [
  {
    label: "Comedy",
    value: "comedy",
  },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Horror",
    value: "horror",
  },
  {
    label: "Animation",
    value: "animation",
  },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const light = `https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png`;
  const dark = `https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png`;

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          src={theme.palette.mode === `light` ? light : dark}
          className={classes.image}
          alt="FLIMYX-LOGO"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={dark} className={classes.genereImage} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Generes</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={dark} className={classes.genereImage} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
