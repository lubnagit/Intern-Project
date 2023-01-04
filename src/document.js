import React, { useEffect,useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import axios from "axios";

const Document1 = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [data,setData] =useState('')
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

  useEffect(() => {
    axios.get("https://arxiv.org/pdf/2212.08011.pdf").then((e) => {
      console.log(e, "eeeeee");
      setData(e.data)
    });
  }, []);

  return (
    <div style={{display:"flex"}}>
    <div style={{width:"30%",hight:"500px",marginTop:"20px",marginLeft:"20px"}}>
      <span>Labels</span>
      <hr
        style={{
          
          hight: ".5px",
          background:"black"

        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "150px",
          hight: "60px",
        }}
      >
        <button
          style={{
            width: "50px",
            hight: "20px",
            border: "none",
            backgroundColor: "#F3370E",
          }}
        >
          Title
        </button>
        <button
          style={{
            width: "60px",
            hight: "20px",
            border: "none",
            backgroundColor: "#13A019",
          }}
        >
          Author
        </button>
      </div>
      <div style={{marginTop:"150px"}}>
        <span>Boxes</span>
      </div>
      <hr
        style={{
          
          hight: ".5px",
          background:"black"

        }}
      />
    </div>
    <Document file="https://arxiv.org/pdf/2212.08011.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default Document1;
