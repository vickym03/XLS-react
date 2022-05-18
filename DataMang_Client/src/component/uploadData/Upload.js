import React from "react";
import "./Upload.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SendIcon from "@mui/icons-material/Send";
import MapData from "../map/MapData";













function Upload() {

    const Delete = () => {
        alert("I'm an delete");
       
       
      };
    
      const Save = () => {
      
        
       // alert("I'm an Save");
      };
  return (
    <div id="body">
       
      <div className="container ">
        <div className="col-lg-10 ">
          <div id="card">
            <h3 className="mt-2">Select the file from here</h3>
            <CloudUploadOutlinedIcon
              color="primary"
              style={{ fontSize: 100 }}
            />
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="file" />
            </div>
            <br />
            <div direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<CancelOutlinedIcon />}
                style={{ marginRight: 50 }}
                onClick={Delete}
              >
                Cancel
              </Button>
              <Button variant="contained" endIcon={<SendIcon />} onClick={Save} >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
