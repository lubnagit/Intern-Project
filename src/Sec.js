import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Sec = () => {

 
  return (
    <div className="div1">
      <span
        style={{
          fontSize: "20px",
          marginTop: "10px",
        }}
      >
        Document
      </span>
       <hr
        style={{
          width: "30%",
          border: "none",
          backgroundColor: "black",
          height: ".5px",
        }}
      /> 

      
      <div style={{display:"flex",flexDirection:"column"}}>
      <Link to="/about">
      Document1
    </Link>

    <Link to="/about">
      Document2
    </Link>


    <Link to="/about">
      Document3
    </Link>
        
      </div>
      
    

    
    
    </div>
    
  );
};
export default Sec;
