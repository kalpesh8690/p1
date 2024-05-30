import { Button, Divider } from "@chakra-ui/react";
import React from "react";
import { usePDF } from "react-to-pdf";

const Template2 = ({ data }) => {
  const { toPDF, targetRef } = usePDF({ filename: "resume_temp2.pdf" });

  return (
    <div className="grid w-full place-items-center grid-cols-1 sm:grid-cols-1 text-sm">
      <div className="w-full flex justify-end items-end">
        <Button className="sm:w-full m-2" onClick={() => toPDF()}>
          Download
        </Button>
      </div>
      <div className="m-10 sm:m-0 w-full justify-center flex">
        <div
          ref={targetRef}
          className="p-5 font-mono  max-w-[900px] bg-white border border-gray-300 rounded-lg shadow-md"
        >
          <div className="max-w-4xl mx-auto p-4">
            <div className="grid  grid-cols-2 sm:grid-cols-1 sm:gap-0 gap-4">
              <div>
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <h2 className="text-2xl text-gray-600">{data.profession}</h2>
              </div>
              <div className="text-right">
                <p className="mt-2">Location: {data.location}</p>
                <p>Phone: {data.phone}</p>
              </div>
            </div>

            <Divider my={2} />

            <section>
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <div className="grid sm:grid-cols-1 grid-cols-4 gap-1 ">
                <p>
                  <strong>Address</strong>: {data.personal_information.address}
                </p>
                <p>
                  <strong>DOB</strong>:{" "}
                  {data.personal_information.date_of_birth}
                </p>
                <p>
                  <strong>Place</strong>:{" "}
                  {data.personal_information.place_of_birth}
                </p>
                <p>
                  <strong>Nationality</strong>:{" "}
                  {data.personal_information.nationality}
                </p>
              </div>

              <h4 className="mt-2 font-medium">Hobbies:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 ">
                {data.personal_information.hobbies.map((hobby, index) => (
                  <p key={index}>{hobby}</p>
                ))}
              </div>
              <h4 className="mt-2 font-medium">Links:</h4>
              <div>
                {data.social_profiles
                  .filter((e) => e.platform == "Portfolio")
                  .map((e) => {
                    return (
                      <a className="text-blue-500 hover:underline" href={e.url}>
                        {e.url}
                      </a>
                    );
                  })}
              </div>
            </section>

            <Divider my={3} />

            {/* <section>
              <h3 className="text-xl font-semibold">Social Profiles</h3>
              <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-1 gap2">
                {data.social_profiles.map((profile, index) => (
                  <p key={index}>
                    <a
                      className="text-blue-500 hover:underline"
                      href={profile.url}
                    >
                      {profile.title} ({profile.platform})
                    </a>
                  </p>
                ))}
              </div>
            </section> */}

            <Divider my={3} />

            <section>
              <h3 className="text-xl font-semibold">Languages</h3>
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
            </section>

            <Divider my={3} />

            <section>
              <h3 className="text-xl font-semibold">Skills</h3>
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
            </section>

            <Divider my={3} />

            <section>
              <h3 className="text-xl font-semibold">Work Experience</h3>
              {data.work_experience.map((experience, index) => (
                <div key={index} className="mt-4">
                  <h4 className="font-medium">
                    {experience.position} at {experience.company}{" "}
                    {experience.location}
                  </h4>
                  <p>{experience.duration}</p>
                  <p>{experience.description}</p>
                </div>
              ))}
            </section>

            <Divider my={3} />

            <section>
              <h3 className="text-xl font-semibold">Education</h3>
              {data.education.map((education, index) => (
                <div key={index} className="mt-4">
                  <h4 className="font-medium">{education.degree}</h4>
                  <p>
                    {education.institution} from {education.location}
                  </p>
                  <p>{education.duration}</p>
                </div>
              ))}
            </section>

            <Divider my={3} />

            <section>
              <h3 className="text-xl font-semibold">Courses</h3>
              {data.courses.map((course, index) => (
                <div key={index} className="mt-4">
                  <h4 className="font-medium">{course.course}</h4>
                  {/* <p>{course.provider}</p>
                  <p>{course.duration}</p> */}
                </div>
              ))}
            </section>

            <Divider my={3} />

            <section>
              <h3 className="text-xl font-semibold">Projects</h3>
              {data.projects.map((project, index) => (
                <div key={index} className="mt-4">
                  <h4 className="font-medium">{project.name}</h4>
                  {project.location && <p>{project.location}</p>}
                  <p>{project.duration}</p>
                  <p>{project.description}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
