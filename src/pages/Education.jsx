import React from "react";
import "../css/edu.css";
import {
  Pen,
  Book,
  AwardFill,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import { motion } from "framer-motion";

function Education() {
  const transation = { duration: 1, type: "spring" };
  const mode = useSelector((state) => state.counterReducer, shallowEqual);
  const navigate = useNavigate();

  const CertMore = () => {
    navigate("/cert");
  };
  return (
    <>
      <div className="edu-main">
        <div className="edu-title-main">
          <motion.p
            initial={{ opacity: "0", scale:0 }}
            whileInView={{ opacity: "1", scale:1 }}
            transition={transation}
            className="edu-name-p"
          >
            <Pen color="orange" size={40} />
            Education & <span className="edu-name-span">Certificates</span>
          </motion.p>
        </div>
        <div className="uni-main">
          <motion.div
            initial={{ opacity: "0", scale: 0 }}
            whileInView={{ opacity: "1", scale:1 }}
            transition={transation}
            className="uni-con"
          >
            <img className="uni-logo" src="./mkbhu.png" />
            <p className="uni-name">
              Maharaja Krishnakumarsinhji{" "}
              <span className="uni-name-span">Bhavnagar University</span>
            </p>
          </motion.div>
        </div>

        <div className="edu-card">
          <motion.div
            initial={{ opacity: "0", scale: 0 }}
            whileInView={{ opacity: "1", scale:1 }}
            transition={transation}
            className="clg-con"
          >
            <p
              style={mode === true ? { color: "white" } : { color: "black" }}
              className="clg-name"
            >
              Smt ks kapasi <span className="uni-name-span">BCA</span> college
              palitana
            </p>
          </motion.div>

          <div className="course-main">
            <div className="course-detail">
              <motion.p
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale:1 }}
                transition={transation}
                className="c-p course"
              >
                <span>
                  <Book color="orange" size={40} />
                </span>
                Bachelor <span className="of"> Of </span> Computer
                Application(BCA)
              </motion.p>
              <motion.p
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale:1 }}
                transition={transation}
                className="c-p date u-case"
              >
                Jun-2019
              </motion.p>
              <p className="c-p to">To</p>
              <motion.p
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale:1 }}
                transition={transation}
                className="c-p date u-case"
              >
                May-2022
              </motion.p>
              <motion.p
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale:1 }}
                transition={transation}
                className="c-p u-case s-20"
              >
                <AwardFill color="red" size={20} />
                First Class
              </motion.p>
            </div>

            <div className="edu-logo-main">
              <motion.img
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale:1 }}
                transition={transation}
                className="edu-logo"
                src="edu.png"
              ></motion.img>
            </div>
          </div>
        </div>
        <div className="cert-main">
          <div className="cert-logo-con">
            <motion.img
              initial={{ opacity: "0", scale: 0 }}
              whileInView={{ opacity: "1", scale:1 }}
              transition={transation}
              className="cert-logo"
              src="cert.png"
            ></motion.img>
          </div>
          <div className="cert-detail-main">
            <motion.div
              initial={{ opacity: "0", scale: 0 }}
              whileInView={{ opacity: "1", scale:1 }}
              transition={transation}
              className="cert-head-main"
            >
              <p className="cert-by c-p u-case">
                Certificate <span style={{ color: "orange" }}> BY</span>{" "}
              </p>
              <img className="sololearn-logo" src="./solo.png" />
            </motion.div>
            <div className="cert-solo-main">
              <motion.div
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale: 1 }}
                transition={transation}
                className="cert-solo"
              >
                <img className="cert-logos" src="./react+redux.jpeg"></img>
                <h1 className="cert-name">React+Redux</h1>
                <div className="cert-data">
                  <p>Issued Aug 2022</p>
                  <p>CT-X9Z9MFK2</p>
                </div>
                <div className="cert-links">
                  <a
                    className="cert-link-btn"
                    style={
                      mode === true ? { color: "white" } : { color: "black" }
                    }
                    href="https://www.sololearn.com/Certificate/1097-386568/pdf/"
                  >
                    Show credential
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: "0", scale: 0 }}
                whileInView={{ opacity: "1", scale: 1 }}
                transition={transation}
                className="cert-solo"
              >
                <img className="cert-logos" src="./html5.png"></img>
                <h1 className="cert-name">HTML5</h1>
                <div className="cert-data">
                  <p>Issued Aug 2022</p>
                  <p>CT-SY17B8OQ</p>
                </div>

                <div className="cert-links">
                  <a
                    className="cert-link-btn"
                    style={
                      mode === true ? { color: "white" } : { color: "black" }
                    }
                    href="https://www.sololearn.com/Certificate/1014-386568/pdf/"
                  >
                    Show credential
                  </a>
                </div>
              </motion.div>

              <div className="cert-links m-full">
                <Button className="cert-link-btn" onClick={() => CertMore()}>
                  Other...
                </Button>
              </div>
            </div>
            <motion.p
              initial={{ opacity: "0", scale: 0 }}
              whileInView={{ opacity: "1", scale: 1 }}
              transition={transation}
              className="type-fix mt-20 s-20 "
            >
              As a wise man once said:<br></br>
              "Your work is going to fill a large part of your life, and the
              only way to be truly satisfied is to do what you believe is great
              work. And the only way to do great work is to love what you do. If
              you haven't found it yet, keep looking. Don't settle. As with all
              matters of the heart, you'll know when you find it." - Steve Jobs
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
