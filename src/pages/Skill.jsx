import React from "react";
import "../css/skill.css";
import skills from "../skills.json";
import ProgressBar from "@ramonak/react-progress-bar";
import { Display } from "react-bootstrap-icons";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import "animate.css/animate.min.css";
import { motion } from "framer-motion";

function Skill() {
  const transation = { duration: 1, type: "spring" };

  return (
    <>
      <div className="skill-main">
        <motion.div
          initial={{ opacity: "0", scale: 0 }}
          whileInView={{ opacity: "1", scale:1 }}
          transition={transation}
          className="skill-title-main"
        >
          <motion.p
            initial={{ opacity: "0", scale: 0 }}
            whileInView={{ opacity: "1", scale:1 }}
            transition={transation}
            className="skill-name-p"
          >
            Skill & <span className="skill-name-span">Abilities</span>
          </motion.p>
        </motion.div>

        <div className="skill-card-main">
          {skills.map((s, i) => {
            const pr = s.pr;
            return (
              <motion.div
              initial={{ opacity: "0", scale: 0 }}
              whileInView={{ opacity: "1", scale:1 }}
              transition={transation}
                className="skill-card"
              >
                <div className="skill-name">
                  <h1 className="skill">{s.name}</h1>
                </div>
                <div className="skill-logo">
                  <img
                    className="skill-logo-img"
                    alt="skill-logo"
                    src={s.icon}
                  ></img>
                </div>
                <div className="progress-main">
                  <Display className="codeslash" color="green" size={20} />
                  <ProgressBar
                    className="pr-bar"
                    height="5px"
                    bgColor="green"
                    isLabelVisible={false}
                    completed={pr}
                  />
                  <p className="prg-pr">
                    <span style={{ margin: "10px", fontSize: "13px" }}>
                      {pr}%
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skill;
