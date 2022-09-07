import { CopyrightOutlined, EmailSharp, PhoneAndroid } from "@mui/icons-material";
import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="copyright-con">
          <p className="copyright-text">
            Copyright <CopyrightOutlined fontSize="inherit"></CopyrightOutlined>{" "}
            by{" "}
            <span style={{ fontWidth: "bolder", margin: "2px" }}>Kalpesh</span>{" "}
            2022
          </p>
        </div>
        <div className="email-con">
          <a className="email-link" href="mailto:chauhankalpesh760@gmail.com">
            <span style={{ marginTop: "-3px", marginRight: "2px" }}>
              <EmailSharp></EmailSharp>
            </span>
            chauhankalpesh760@gmail.com
          </a>
          <a className="phone" href="tel:918690361133">
            <span style={{ marginTop: "-3px", marginRight: "2px" }}>
              <PhoneAndroid></PhoneAndroid>
            </span>
            +918690361133
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
