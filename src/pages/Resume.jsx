import React, {  useEffect, useRef, useState } from "react";
import Resume_nav from "../component/resume-nav/Resume_nav";
import { throttle } from "lodash";
import { Document, pdfjs, Page } from "react-pdf";
import "../css/resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [initialWidth, setInitialWidth] = useState(null);
  const [scale,setScale]=useState(1)
  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 3000));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 3000));
    };
  }, []);

  return (
    <div className="main-cv">
    <Resume_nav setScale={setScale}/>
    <div id="pdfWrapper" style={{ width: '98vw' }} ref={pdfWrapper}>
      <Document
        className="resume"
        file="/cv.pdf"
        onLoadError={() => {
          console.log("CALLED");
        }}
        onLoadProgress={() => {
          return(
            <>
              <h1>Pdf Loading.....</h1>
            </>
          )
        }}
        page={1}
      >
        <Page className="cv" scale={scale} pageNumber={1}  width={initialWidth} />
      </Document>
    </div>
    </div>
   
  );
}

export default Resume;
