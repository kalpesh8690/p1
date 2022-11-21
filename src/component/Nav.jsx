import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { useState,useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext, themes } from "../theme/context";
import { useDispatch } from "react-redux";
import { dark,light } from "../redux/action";
import { orange } from "@mui/material/colors";
import { Laptop, LaptopMac } from "@mui/icons-material";
import { Button } from "@mui/material";
import { findDOMNode } from "react-dom";

const Nav = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => prefersDark);

  const dispatch=useDispatch()

    if(isDarkMode===true){
        dispatch(dark())
    }else{
        dispatch(light())
    }
       
      React.useLayoutEffect(() => {
        if (prefersDark) {
          setIsDarkMode(true);
        }

    }, [prefersDark]);
 
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Shome=(()=>{
    window.scrollTo()
  })
  const Sskill=(()=>{
    window.scrollTo({
      top:findDOMNode()
    })
  })
  const SEdu=(()=>{
    window.scrollTo(0,900)
  })
  const SCert=(()=>{
    window.scrollTo(0,1000)
  })
  const SAbout=(()=>{
    window.scrollTo(0,1130)
  })

  const sc=window.addEventListener("scroll",(e)=>{
    var scrl=screenY;
    console.log(scrl)
  })
console.log()
  return (
    <AppBar position="sticky" sx={{ color: "white", background: isDarkMode===true?"#152238":"#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".2rem",
              color: "orange",
              textDecoration: "none",
            }}
          >
            <LaptopMac sx={{color:isDarkMode===true?"#FFFFFF":"#121212"}} fontSize="large"/>
            KALPESH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:isDarkMode===true?"#FFFFFF":"#121212"}} />
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
                justifyContent: "center",
              }}
            >
              <MenuItem sx={{margin:"0",padding:"0",background:isDarkMode===true?"#152238":"#FFFFFF"}} onClick={handleCloseNavMenu}>
                <ul>
                  <li>
                    <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/experience">
                    Experience
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/education">
                      Education
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link"  to="/cert">
                      Certificates
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/about">
                      About Me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".2rem",
              color:"orange",
              textDecoration: "none",
            }}
          >
            <LaptopMac sx={{color:isDarkMode===true?"#FFFFFF":"#121212"}} fontSize="large"/>
            KALPESH
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "right" },
            }}
          >
            <NavLink onClick={()=>Shome()} style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink onClick={()=>Sskill()} style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/experience">
            Experience
            </NavLink>
            <NavLink onClick={()=>SEdu()} style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/education">
              Education
            </NavLink>
            <NavLink onClick={()=>SCert()} style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/cert">
              Certificates
            </NavLink>
            <NavLink onClick={()=>SAbout()} style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/about">
              About Me
            </NavLink>
            <NavLink style={({isActive})=>isActive?{color:"red"}:{color:isDarkMode===true?"#FFFFFF":"#121212"}} className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", justifyContent: "right" },
            }}
          >
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <DarkModeToggle
          
                  onChange={() => {
                    setIsDarkMode(!isDarkMode);
                    changeTheme(isDarkMode ? themes.light : themes.dark);
                    
                  }}
                  checked={isDarkMode}
                  size={50}
                />
                
              )}
              
            </ThemeContext.Consumer>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
