import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { LetterAvatar } from "./LetterAvatar";
import { useMainContext } from "../store/mainStore";
import { pages } from "../views/MyPage";

export const Navbar = () => {
  const { currentUser } = useMainContext();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          {/* Logo for MD size */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
            LOGO
          </Box>

          {/* Menu Button for XS size */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Nav Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.href}
                    sx={{ color: "inherit", textDecoration: "none", p: 1 }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for XS size */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              alignItems: 'center'
            }}
          >LOGO
          </Box>

          {/* Links for MD size */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                sx={{ color: "white", display: "block", mx: 2 }} // Adding horizontal margin for spacing
              >
                {page.title}
              </Link>
            ))}
          </Box>
          
          <LetterAvatar name={currentUser.name} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};


