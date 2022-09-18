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
          ><a style={{color:"white"}} href="https://doc-0o-0c-docs.googleusercontent.com/docs/securesc/sb3lr4e25i20vvm09fap67k5njoil805/fkvef3e9n9rh0hhd8njloqufb3t2qcas/1663495875000/09191523244234862162/09191523244234862162/133s2D5j0kCPWmjTPkI7upoRrVx36-wZl?e=download&ax=ALW9-sC8ODGrTKfSezM-Msa3-oe7IfF6uEIyPnTfkwHb9yA0RHrvWxZwCm1u4P60ERi-raOoRratJ4MzjfAPj1bTThxFGocPhfLNblBSRDY-4-wWF27aJRb9XBtE84jTzmg_noP8OpciDaYkq5uFIiA89G7C1Sr4PVu5NJYCBMzkkikPIYy3lblk0Y5qQDlRiUcbxAEp3ENjBPqdrqwQp833epIl8n6CJVJ0OU-LtWR1kASGFw6ZkU2VNG4t2MdUjdsiLOzWxRuKtYCpTumdPHzjY6Nf9rmVS1bKEJyWjmkfQ9ZbMO59y8jciSBWgnFeiYPU82n_AjMOgeX1Ksx59SI4rihSnpLIzuPtgFA9sAKWOU571cxTRRWNl2zYHqC0liKuab4mziEq_vcXVlEsO5nsNlDT2S3MjrgAAQkRpJitwA_zOAuw9pSYR4LHvi-hxLNM50kC_VdyIDCoA3G128P9EBOILqQqRBWR_Lttj7iA1mIUluDaTmFnNRq5FX8shVeuKCf9H6vW3IDhWFSgf4LV-70WrQXUHRPVFIdmddkuzpR1szc7waMfD3BdTmph91iNK0FaO5PrbaextqvZCruYYXEVHBQy0-8KOzjgdZ_0YD4i54-mE1w7NJiL9gNdHxPeQvstg5sbYkLkFE2O0lVw39Yu9QgYl6hh3lb7AHlqAb9Vmo0DerXK84lzMC6Jwh4QJm-RKFFRJCtJtD1sWWV-a5Kn--q5Xb_uo3EQGa5wQhduplwd3qNwIzvY5h4Gb6FgbJeZ3CW7npCo_XdhorajIZqf9D5DsG4ESjyF53Og3--UUKNRRjBjOTmXN13lUHbYEqo65C6HG05J7-zQY49zEnSllLmCQybjqcwKf3-6d1uploi3ok4vnzE_4f5xFxUXEY2XkKguT07ejRN3vVCA7dE9IzZB25s1&uuid=ff47ffed-d96d-43f7-9b17-bff495ed71c0&authuser=0&nonce=jljn6dccd8apk&user=09191523244234862162&hash=tc5b3omqm17i1f1bnhkodhtdag8qrj3j">
            <Print/>
            </a>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Resume_nav;
