// MyDocument.js
import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";

const createStyles = (fontFamily) =>
  StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 3,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: fontFamily || "Helvetica",
    },
    page: {
      padding: 10,
      backgroundColor: "#E4E4E4",
    },
    section: {
      marginTop: 2,
    },
    PersonalInformation: {
      display: "flex",
      flexDirection: "row",
      gap: 7,
    },
    title: {
      fontSize: 14,
      paddingBottom: 2,
      fontWeight: "bold",
      fontFamily: fontFamily || "Helvetica",
    },
    subtitle: {
      fontSize: 12,
      paddingBottom: 2,
      color: "gray",
      fontFamily: fontFamily || "Helvetica",
    },
    text: {
      fontSize: 10,
      paddingBottom: 2,
      color: "#383838",
      fontFamily: fontFamily || "Helvetica",
    },
    textTitle: {
      fontSize: 10,
      paddingBottom: 2,
      fontFamily: fontFamily || "Helvetica",
    },
    divider: {
      marginVertical: 5,
      borderBottomWidth: 0.5,
      borderBottomColor: "#000",
    },
    link: {
      color: "blue",
      fontSize: 10,
      textDecoration: "underline",
      fontFamily: fontFamily || "Helvetica",
    },
  });

const Divider = () => (
  <View
    style={{
      marginVertical: 5,
      borderBottomWidth: 0.5,
      borderBottomColor: "#000",
    }}
  />
);
// Create Document Component
const Template3 = ({ data, options }) => {
  const styles = createStyles("Helvetica");

  console.log(options);
  return (
    <Document
      title="CV_temp1"
      author="Kalpesh Chauhan"
      keywords="resume"
      pdfVersion="1.3"
      language="English"
      producer="Kalpesh Chauhan"
      creator="Kalpesh Chauhan"
      
    >
      <Page
        size={options ? options.pageSize : "A4"}
        orientation={options ? options.orientation : "portrait"}
        style={styles.page}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.heading}>{data.name}</Text>
            <Text style={styles.subtitle}>{data.profession}</Text>
          </View>
          <View>
            <Text style={styles.text}>Location: {data.location}</Text>
            <Text style={styles.text}>Phone: {data.phone}</Text>
          </View>
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Personal Information</Text>
          <View>
            <Text style={styles.textTitle}>
              Address:{" "}
              <Text style={styles.text}>
                {data.personal_information.address}
              </Text>
            </Text>
            <Text style={styles.textTitle}>
              DOB:{" "}
              <Text style={styles.text}>
                {data.personal_information.date_of_birth}
              </Text>
            </Text>
            <Text style={styles.textTitle}>
              Place:{" "}
              <Text style={styles.text}>
                {data.personal_information.place_of_birth}
              </Text>
            </Text>
            <Text style={styles.textTitle}>
              Nationality:{" "}
              <Text style={styles.text}>
                {data.personal_information.nationality}
              </Text>
            </Text>
          </View>
          <Text style={styles.title}>Hobbies:</Text>

          <Text style={styles.text}>
            {data.personal_information.hobbies.join(", ")}
          </Text>

          <Text style={styles.title}>Links:</Text>
          {data.social_profiles
            .filter((e) => e.platform === "Portfolio")
            .map((e, index) => (
              <Link key={index} style={styles.link} src={e.url}>
                {e.url}
              </Link>
            ))}
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Languages</Text>

          <Text style={styles.text}>{data.languages.join(", ")}</Text>
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          {data.skills.map((skill, index) => (
            <Text key={index} style={styles.text}>
              <Text style={{ fontWeight: "bold" }}>{skill.type}:</Text>{" "}
              {skill.set.join(", ")}
            </Text>
          ))}
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Work Experience</Text>
          {data.work_experience.map((experience, index) => (
            <View key={index} style={{ marginTop: 4 }}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>
                  {experience.position}
                </Text>{" "}
                at {experience.company} {experience.location}
              </Text>
              <Text style={styles.text}>{experience.duration}</Text>
              <Text style={styles.text}>{experience.description}</Text>
            </View>
          ))}
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Education</Text>
          {data.education.map((education, index) => (
            <View key={index} style={{ marginTop: 4 }}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>{education.degree}</Text>
              </Text>
              <Text style={styles.text}>
                {education.institution} from {education.location}
              </Text>
              <Text style={styles.text}>{education.duration}</Text>
            </View>
          ))}
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Courses</Text>
          {data.courses.map((course, index) => (
            <View key={index} style={{ marginTop: 4 }}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>{course.course}</Text>
              </Text>
            </View>
          ))}
        </View>

        <Divider />

        <View style={styles.section}>
          <Text style={styles.title}>Projects</Text>
          {data.projects.map((project, index) => (
            <View key={index} style={{ marginTop: 4 }}>
              <Text style={styles.textTitle}>
                <Text style={{ fontWeight: "bold" }}>{project.name}</Text>
              </Text>
              {project.location && (
                <Text style={styles.text}>{project.location}</Text>
              )}
              <Text style={styles.text}>{project.duration}</Text>
              <Text style={styles.text}>{project.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Template3;
