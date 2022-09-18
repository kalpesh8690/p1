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
          ><a style={{color:"white"}} href="https://doc-0c-2k-apps-viewer.googleusercontent.com/viewer/secure/pdf/qkahs8vmli0i6p8eftnaovkrh52n5ea5/fis3lhp2g83ue5h7gk5q3ourla0hpavq/1663495875000/drive/13331376633312987884/ACFrOgAq3cp1dW-ARfITbC-4Rb6sMZHW6BiNlAuPYB2d9LkNqXrENuuBTDxXK-7GMRWuLZiEnjItyxQPgIntwtPG6GYFyW6Nf1JUssw-SBJ_q-212BXWba7TN3Jelg0FJ1RqiipF0MP8RWigd71z?print=true&nonce=qsknmqt6cas8s&user=13331376633312987884&hash=9kpqd5lqn5cnlaq0k3a4bksmc0i4af3l">
            <Print/>
            </a>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Resume_nav;
