import { Button } from "@chakra-ui/react";
import React from "react";
import { usePDF } from "react-to-pdf";

const Template1 = ({ data }) => {
  const { toPDF, targetRef } = usePDF({ filename: "resume_temp1.pdf" });
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="m-10 w-full justify-center flex ">
          <div
            ref={targetRef}
            className="p-5 font-mono"
            style={styles.container}
          >
            <div style={styles.contactInfo}>
              <h1 className="font-bold">{data.name}</h1>
              <p className="font-bold">{data.profession}</p>
              <p>{data.location}</p>
              <p>{data.phone}</p>
            </div>

            <div className="relative flex mt-5 items-center">
              <div className="m-0 p-0 flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                {" "}
                Personal Information
              </span>
              <div className="m-0 p-0 flex-grow border-t border-gray-400"></div>
            </div>
            {data.personal_information && (
              <div style={styles.section}>
                <p>
                  <span className="font-bold">Address:</span>{" "}
                  <span className="data">
                    {data.personal_information.address}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Date of Birth:</span>{" "}
                  <span className="data">
                    {data.personal_information.date_of_birth}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Nationality:</span>{" "}
                  <span className="data">Indian</span>
                </p>
                <p>
                  <span className="font-bold">Hobbies:</span>{" "}
                  {data.personal_information.hobbies.map((e) => (
                    <span className="data">{e}, </span>
                  ))}
                </p>
              </div>
            )}
            {data.social_profiles && (
              <div>
                <div className="relative flex mt-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                    {" "}
                    Social Profiles
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div style={styles.section}>
                  {data.social_profiles.map((e) => {
                    return (
                      <p>
                        <strong> {e.platform}: </strong>
                        <a href={e.url}>{e.title}</a>
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
            {data.languages.length > 0 && (
              <div className="relative flex mt-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                  {" "}
                  Languages
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            )}
            <div className="flex gap-2">
              {data.languages.map((e, index) => {
                return (
                  <p>
                    {e}
                    {data.languages.length - 1 != index && ","}
                  </p>
                );
              })}
            </div>
            <div className="relative flex mt-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                {" "}
                Skills
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div style={styles.section}>
              {data.skills.map((e) => {
                return (
                  <p>
                    <strong>{e.type}:</strong>
                    {e.set.map((s, index) => (
                      <span>
                        {" "}
                        {s}
                        {e.set.length - 1 != index && ","}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
            {data.work_experience && (
              <div className="relative flex mt-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                  {" "}
                  Work Expreince
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            )}
            {data.work_experience &&
              data.work_experience.map((e) => {
                return (
                  <div style={styles.section}>
                    <div>
                      <h3>
                        {e.position} at {e.company}, {e.location}
                      </h3>
                      <p>{e.duration}</p>
                      <ul>
                        <li>{e.description}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            {data.education && (
              <div className="relative flex mt-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                  {" "}
                  Education
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            )}
            {data.education &&
              data.education.map((e) => {
                return (
                  <div style={styles.section}>
                    <p>
                      <strong>{e.degree}:</strong> {e.institution}, {e.location}
                      , {e.duration}
                    </p>
                  </div>
                );
              })}
            {data.courses && (
              <div>
                <div className="relative flex mt-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                    {" "}
                    Courses
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div style={styles.section}>
                  {data.courses.map((e, index) => {
                    return (
                      <p>
                        {e.course}
                        {data.courses.length - 1 != index && ","}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
            {data.projects && (
              <div>
                {" "}
                <div className="relative flex mt-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                    {" "}
                    Projects
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                {data.projects.map(e=>{
                    return(
                        <div style={styles.section}>
                  <div>
                    {e.name&&<h3 className="font-bold ">{e.name}</h3>}
                    {e.duration&&<p>{e.duration}</p>}
                    {e.location&&<p>{e.location}</p>}
                    {e.description&&<ul>
                      <li>
                        {e.description}
                      </li>
                    </ul>}
                    
                  </div>
                </div>
                    )
                })}
              </div>
            )}
            {data.customSection && data.customSection.map(e=>{
                return( <div>
                    {" "}
                    <div className="relative flex mt-5 items-center">
                      <div className="flex-grow border-t border-gray-400"></div>
                      <span className="flex-shrink mx-4 text-gray-400 -mt-5">
                        {" "}
                        {e.title}
                      </span>
                      <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div style={styles.section}>
                      <div>
                        {e.name&&<h3 className="font-bold ">{e.name}</h3>}
                        {e.description&&<ul>
                          <li>
                            {e.description}
                          </li>
                        </ul>}
                        
                      </div>
                    </div>
                  </div>)
            })}
          </div>
        </div>
        <Button className="m-2" onClick={() => toPDF()}>
          Download
        </Button>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
  },
  contactInfo: {
    textAlign: "center",
  },
  section: {
    marginBottom: "20px",
  },
};

export default Template1;
