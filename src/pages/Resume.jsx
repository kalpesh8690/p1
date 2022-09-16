import React, { useEffect, useRef, useState } from "react";
import "../css/resume.css";
import { throttle } from "lodash";

function Resume() {
  const [initialWidth, setInitialWidth] = useState(null);
  const [initialHeight, setInitialHeight] = useState(null);
  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
      setInitialHeight(pdfWrapper.current.getBoundingClientRect().height);
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
    <div id="pdfWrapper" className="main-cv">
      <embed
        style={{ width: "100vw" ,height:"100vh" }}
        ref={pdfWrapper}
        src="/cv.pdf?zoom=10"
        width={initialWidth}
        height={initialHeight}
      ></embed>
    </div>
  );
}

export default Resume;
