import React, { useState } from "react";
import "./Upload.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SendIcon from "@mui/icons-material/Send";
import MapData from "../map/MapData";

import * as XLSX from "xlsx";
import ValidUpdata from "../validupdata/ValidUpdata";

function Upload() {
  const [excelFile, setExcelFile] = useState();
  const [excelFileError, setExcelFileError] = useState();

  // submit
  const [excelData, setExcelData] = useState();

  const [showdata, setShowdata] = useState(false);
  const [showupload, setShowupload] = useState(true);

  const Delete = () => {
    // alert("I'm an delete");
    // setExcelFile(null);
  };

  const Save = () => {
    if (excelData !== undefined && excelData.length > 0) {
      setShowdata(true);
      setShowupload(false);
    }
  };

  const handleBack = () => {
    //  {excelData.length >1?setExcelData(null):setExcelData(0) }
    // setExcelData(0)
    // if (excelData.length < 0) {
    //   setShowdata(false);

    //   setShowupload(true)
    // }

    setShowdata(false);

    setShowupload(true);

    //  console.log("data", excelData.length)
  };

  const acceptOnly = ["xlsx", "xlx"];

  const checkName = (name) => {
    console.log(name);
    return acceptOnly.includes(name.split(".").pop().toLowerCase());
  };

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      const file = e.target.files[0];
      // console.log(selectedFile.type);
      if (checkName(file.name)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types !");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      console.log("data", data);
      setExcelData(data);
      console.log("dataLength : ", data.length);
    } else {
      setExcelData(null);
    }
  };

  return (
    <div id="mainbody">
      {showupload && (
        <>
          <div id="body">
            <div className="container ">
              <div className="col-lg-10 ">
                <div id="card">
                  <h2 className="mt-2">Select the file from here</h2>
                  <CloudUploadOutlinedIcon
                    color="primary"
                    style={{ fontSize: 100 }}
                  />
                  <br />

                  <form
                    className="form-group"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="file"
                      className="form-control"
                      accept="xlsx, xls"
                      // value={excelFile}
                      multiple={false}
                      onChange={handleFile}
                      required
                    />
                    {excelFileError && (
                      <div className=" text-danger mt-1" id="errornoti">
                        {excelFileError}
                      </div>
                    )}
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
                      <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={Save}
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showdata && <MapData data={excelData} cancel={handleBack} />}
    </div>
  );
}

export default Upload;
