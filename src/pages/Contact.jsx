import React,{useState} from "react";
import {
  Instagram,
  GitHub,
  LinkedIn,
  Facebook,
  WhatsApp
} from "@mui/icons-material";
import "../css/contact.css";
import { Input,Box, Button } from "@mui/material";
import emailjs from '@emailjs/browser';





function Contact() {

  const[formdata,setFormdata]=useState([]);

  const [fname,setFname]=useState('');
  const [lname,setLname]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  const [massage,setMassage]=useState('');
  
  
  const ContactForm=(()=>{
    var data={
      'firstname':fname,
      'lastname':lname,
      'email':email,
      'mobile':mobile,
      'massage':massage
    }
    console.log(data)
    setFormdata(data)
    emailjs.send('service_ws78up5', 'template_9742swp', data,'oj4lKfX0MYT7JQlEO')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  })
  

 
  return (
    <>
      <div>
        <div className="social">
          <p className="social-link-head">
            Social <span style={{ color: "orange" }}>Links</span>
          </p>
          <div className="social-icon" style={{ margin: "10px" }}>
            <div className="icon" style={{ display: "flex", flexDirection: "column" }}>
              <a
                style={{ margin: "10px" }}
                href="https://www.instagram.com/mrk._09/"
              >
                <Instagram 
                  sx={{ fontSize: "100px", color: "rgb(255, 0, 149)" }}
                />
              </a>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: "-5px",
                }}
              >
                Instagram
              </p>
            </div>
            <div className="icon" style={{ display: "flex", flexDirection: "column" }}>
              <a
                style={{ margin: "10px" }}
                href="https://github.com/kalpesh8690"
              >
                <GitHub sx={{ fontSize: "100px", color: "black" }} />
              </a>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: "-5px",
                }}
              >
                Github
              </p>
            </div>
            <div className="icon" style={{ display: "flex", flexDirection: "column" }}>
              <a
                style={{ margin: "10px" }}
                href="https://www.linkedin.com/in/kalpesh-chauhan-07632b194/?originalSubdomain=in"
              >
                <LinkedIn
                  sx={{ fontSize: "100px", color: "rgb(17, 0, 124)" }}
                />
              </a>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: "-5px",
                }}
              >
                Linkedin
              </p>
            </div>
            <div className="icon" style={{ display: "flex", flexDirection: "column" }}>
              <a
                style={{ margin: "10px" }}
                href="https://www.instagram.com/mrk._09/"
              >
                <Facebook sx={{ fontSize: "100px", color: "blue" }} />
              </a>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: "-5px",
                }}
              >
                Facebook
              </p>
            </div>
            <div className="icon" style={{ display: "flex", flexDirection: "column" }}>
              <a
                style={{ margin: "10px" }}
                href="https://api.whatsapp.com/send?phone=918690361133&text=Hello%20Kalpesh"
              >
                <WhatsApp sx={{ fontSize: "100px", color: "green" }} />
              </a>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: "-5px",
                }}
              >
                Whatsapp
              </p>
            </div>
          </div>
        </div>
        <div className="find-me-con">
          <p className="find-me-head" style={{textAlign:'center'}}>
            Contact <span style={{ color: "orange" }}>Me</span>
          </p>
          <div className="contact-form">
          <Box className="contact-box"  >
            <div className="form-name">
            <Input onChange={(e)=>setFname(e.target.value)} value={fname} className="contact-input" aria-label="Name" placeholder="FirstName"/>
            <Input onChange={(e)=>setLname(e.target.value)} value={lname} className="contact-input" id="required" aria-label="Name" placeholder="LastName"/>
            
            </div>
            <div className="form-contact-detail">
            <Input onChange={(e)=>setEmail(e.target.value)} value={email} className="contact-input"  aria-label="Name" placeholder="Email"/>
            <Input onChange={(e)=>setMobile(e.target.value)} value={mobile} className="contact-input"  aria-label="Name" placeholder="Mobile"/>
            </div>
            <div className="form-massage">
            <Input onChange={(e)=>setMassage(e.target.value)} value={massage} sx={{width:"90vh"}} aria-label="Name" placeholder="Massage"/>
            </div>
            <div className="form-btn">
            <Button className="submit-btn"  variant="undefined" onClick={ContactForm} >Submit</Button>
            </div>
            
            
          </Box>

          </div>
          
                
        </div>
      </div>
    </>
  );
  
}

export default Contact;