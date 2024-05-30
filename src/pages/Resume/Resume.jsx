import react, { useState } from "react";
import Template1 from "./components/Template1";
import data from "./components/data.json";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { FormLabel, Select } from "@chakra-ui/react";
const Resume = () => {
  const [options, setOptions] = useState({
    pageSize: "A4",
    orientation: "portrait",
    fontFamily: "OpenSans",
  });
  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-20">
       <div> 
        <Select
          id="pageSize"
          name="pageSize"
          value={options.pageSize}
          onChange={handleOptionChange}
        >
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
          <option value="A0">A0</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="A5">A5</option>
          <option value="A6">A6</option>
          <option value="A7">A7</option>
          <option value="A8">A8</option>
          <option value="A9">A9</option>
          <option value="A10">A10</option>
          <option value="B0">B0</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="B3">B3</option>
          <option value="B4">B4</option>
          <option value="B5">B5</option>
          <option value="B6">B6</option>
          <option value="B7">B7</option>
          <option value="B8">B8</option>
          <option value="B9">B9</option>
          <option value="B10">B10</option>
          <option value="C0">C0</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
          <option value="C4">C4</option>
          <option value="C5">C5</option>
          <option value="C6">C6</option>
          <option value="C7">C7</option>
          <option value="C8">C8</option>
          <option value="C9">C9</option>
          <option value="C10">C10</option>
          <option value="DL">DL</option>
          <option value="Folio">Folio</option>
          <option value="Executive">Executive</option>
          <option value="Tabloid">Tabloid</option>
          <option value="Statement">Statement</option>
          <option value="Quarto">Quarto</option>
        </Select></div>
        <div>
        <Select
          id="orientation"
          name="orientation"
          value={options.orientation}
          onChange={handleOptionChange}
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </Select></div>
      </div>

      {/* <Template1 data={data}/> */}
      <PDFDownloadLink
        document={<Template3 data={data} />}
        fileName="cv_temp3.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now! "
        }
      </PDFDownloadLink>
      <PDFViewer style={{ width: "100%", height: "600px" }}>
        <Template3 options={options} data={data} />
      </PDFViewer>
      {/* <Template2 data={data}/> */}
      {/* <Template2 data={data}/> */}
    </>
  );
};
export default Resume;
