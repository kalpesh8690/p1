import React, { useState } from "react";
import "../css/resume.css";
import { Cake,LinkedIn,Mail,Phone,Mouse,Map } from "@mui/icons-material";
import data from "../resume_data.json"

function Resume() {
  return (
    <div className="main-cv">
      <div className="resumeWrraper">
        <div className="resume">
            <div className="main-detailWrraper">
              <div className="profile-picWrraper">
                  <div className="profile-pic">
                    <img className="img-set" src='/01.jpeg'/>
                  </div>
              </div>
              <div className="person-name-wrraper">
                  <div className="person-name-inner">
                    <h1 className="person-name">
                      {data.basics.name}
                    </h1>
                    <h3 className="person-name-headline">
                      {data.basics.headline}
                    </h3>
                  </div>
              </div>
              <div className="contact-info-wrraper">
                <div className="basic-contact-info">
                   <a href={data.basics.website} className="website"><Mouse/>{data.basics.website}</a>
                   <a href={data.basics.email} className="email"><Mail/>{data.basics.email}</a>
                   <p className="birthday"><Cake/>{data.basics.birthdate}</p>
                   <a href={data.basics.phone} className="mobile"><Phone/>{data.basics.phone}</a>
                   <div className="location">
                      <p className="address"><Map/>{data.basics.location.address},{data.basics.location.city},{data.basics.location.country},{data.basics.location.postalCode}</p>
                   </div>
                </div>
              </div>
              <div className="skillWrraper">
                <div className="headingOfskill">
                  <p>skill</p>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="detailWrraper">
 
            </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
