import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function ValidUpdata({ back, data }) {
   console.log("validupdata-prop", data)
  return (
    <div>
      <div className="col-lg-12 mt-3">
      <button className="btn btn-info text-white  " id="back" onClick={back}>
          <ArrowBackIosOutlinedIcon/>  Back
      </button>
    <h1>   Uploaded Data</h1>
      </div>
 
 {JSON.stringify(data)}
    </div>
  );
}

export default ValidUpdata;
