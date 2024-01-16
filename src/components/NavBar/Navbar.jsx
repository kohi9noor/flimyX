import React, { useState } from "react";

import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

import { Sidebar } from "../index";

import useStyle from "./style";

import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = () => {
  const classes = useStyle();
  const isMobile = useMediaQuery(`(max-width:600px)`);
  const theme = useTheme();
  const isAuthEnticated = true;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthEnticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                className={classes.linkButton}
                onClick={() => {}}
                component={Link}
                to={`/profile/:id`}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`data:image/jpeg;base64,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`}
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
