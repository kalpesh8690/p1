import React from "react";
import AboutUsIMG from "../../../assets/images/about-us.png";
import { Button } from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";

const AboutMyself = () => {
  const text =
    "I am a seasoned Full Stack Developer with a strong background in building scalable and high-performing web applications. I have extensive experience in working with MEVN, MERN, and SERN stacks, and I am proficient in a wide range of technologies including HTML/CSS, JavaScript, React, Angular, Node.js, SQL/NoSQL, RESTful APIs, and cloud technologies.Throughout my career, I have led full stack development projects, resulting in faster loading times, improved user experience, and increased revenue. I have designed and maintained relational database systems, integrated third-party services, and created web-based content management systems to easily update site information and features. I am also experienced in deploying applications to cloud-based production environments, setting up and maintaining staging environments, and monitoring system health.In addition to my technical skills, I am a strong communicator and collaborator, with a proven track record of working effectively with cross-functional teams to implement security measures and optimize performance. I am passionate about staying up-to-date with the latest technologies and trends in web development, and I am committed to continuous learning and improvement.";

  return (
    <section className="w-full about-myself">
      <div className="w-full flex justify-end">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] text-gray-600 mx-auto border-indigo-600 pb-2">
          LET’S INTRODUCE ABOUT MYSELF
        </h2>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-1">
        <img src={AboutUsIMG} alt="About us" />
        <p className="text-center  text-xl text-gray-600 leading-10">
          {text.split("\n\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
            </React.Fragment>
          ))}
          <span>
          <div className="w-full mt-5 flex justify-center">
          <Button
            rightIcon={<MdFileDownload />}
            colorScheme="green"
            variant="outline"
          >
            Download CV
          </Button>
        </div>
          </span>
        </p>
        
      </div>
      
    </section>
  );
};

export default AboutMyself;
