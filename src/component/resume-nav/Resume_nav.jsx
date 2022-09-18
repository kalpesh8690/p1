import React, {  useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import {  Minimize, Print } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Plus } from "react-bootstrap-icons";
import {SInput} from "../../styled/styled"

function Resume_nav({setScale }) {
  var s=1
  const [zoom,setZoom]=useState(100)
  if(zoom<=0){
    setZoom(1)
  }
  if(zoom>200){
    setZoom(200)
  }
  setScale(zoom/100)
  
  return (
    <>
      <AppBar position="relative" sx={{color:"white",background:"rgb(68, 65, 65)"}} >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", justifyContent: "left" },
            }}
          >
            <Typography
              textTransform="uppercase"
              fontWeight="bold"
              variant="h6"
            >
              Resume
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", justifyContent: "center" },
            }}
          >
            <Minimize sx={{ cursor: "pointer" }} onClick={()=>setZoom(zoom-1)}/>
            <SInput type='number' onChange={(e)=>setZoom(e.target.value)} value={zoom}/>
            <Plus style={{ cursor: "pointer" }}onClick={()=>setZoom(zoom+1)} size={30} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", justifyContent: "right" },
            }}
          ><a style={{color:"white"}} href="https://drive.google.com/file/d/133s2D5j0kCPWmjTPkI7upoRrVx36-wZl/view">
            <Print/>
            </a>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Resume_nav;
