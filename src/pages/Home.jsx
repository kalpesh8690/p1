import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.min.css";
import "../css/home.css";

function Home() {

  const navigate = useNavigate();
  const Cv = () => {
    navigate("/cv");
  };
  return (
    <>
      <div className="home-body">
        <div className="desc-main">
          <p className="p-desc1">Hello</p>
          <div className="my-name">
            <h1 className="h1-desc">I AM </h1>
            <h1 data-text=" KALPESH" className="kalpesh-name">
              {" "}
              KALPESH CHAUHAN
            </h1>
          </div>
          <div className="job-positon">
          <p className="p-desc2">MERN STACK DEVELOPER AT</p>
          <a href="https://brained.app/">
            <img className="brained-logo" src="./brained.png"/>
          </a>
          </div>

          <div className="home-btns">
            <a className="btn-1" href="./contact">
              Contact ME
            </a>
            <input
              className="btn-2"
              type="button"
              onClick={() => Cv()}
              value="My Cv"
            />
          </div>
        </div>
        <div className="shadow">
          <img className="my-img" alt="kalpesh-pic" src="mypic.png"></img>
        </div>
      </div>

      <div className="about-us-main">
        <div className="about-us-img">
          <img className="about-img" alt="about-pic" src="about-us.png"></img>
        </div>
        <div className="about-us-detail">
          <h1 className="mt-2">LET’S INTRODUCE ABOUT MYSELF</h1>
          <p className="mt-20">
            Whose given. Were gathered. There first subdue greater. Bearing you
            Whales heaven midst their. Beast creepeth. Fish days.<br></br>s give
            may shall likeness made yielding spirit a itself together created
            after sea is in beast beginning signs open god you're gathering
            whose gathered cattle let. Creature whales fruit unto meat the life
            beginning all in under give two.
          </p>
          <div className="cv-link-con ">
            <a className="cv-link" href="https://rxresu.me/r/IQOBH0AC">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
