import React from "react";
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-info">
        <h1 className="text-4xl font-bold">Welcome to my portfolio</h1>
        <p>I'm a frontend developer with a passion for building responsive and scalable applications.</p>
        <div className="social-links">
          <a href="https://twitter.com/yourtwitterhandle">
            <AiOutlineTwitter size={40} />
          </a>
          <a href="https://youtube.com/youryoutubechannel">
            <AiOutlineYoutube size={40} />
          </a>
          <a href="https://facebook.com/yourfacebookprofile">
            <AiOutlineFacebook size={40} />
          </a>
        </div>
        <a href="/#projects" className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">
          See Projects
        </a>
      </div>
      <div className="hero-img">
        <img src='#' alt="coding illustration" className="lg:w-[80%] ml-auto" />
      </div>
    </section>
  );
};

export default Hero;