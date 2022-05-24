import React, { useEffect, useState } from "react";
import "./MapData.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ValidUpdata from "../validupdata/ValidUpdata";
import ValidCorr from "../validCorr/ValidCorr";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ValidErr from "../validerr/ValidErr";
import Success from "../success/Success";
import { ContactSupportOutlined } from "@mui/icons-material";
import { style } from "@mui/system";

function MapData({ data, cancel, setShowdata }) {
  // console.log("dataprops", data);

  //data uploaded
  const [mapview, setMapview] = useState(true);
  const [upview, setUpview] = useState(false);

  //correct data state
  const [correctDataView, setCorrectDataView] = useState(false);

  //error data state
  const [errordataView, setErrodataView] = useState(false);

  //success
  const [success, setSuccess] = useState(false);

  //coreect data
const[correctData, setCorrectData]= useState([])

  //errordatat
const[errorData, setErrorData] = useState([]) 

  //on view uploaded data
  const handleUploadView = () => {
    setMapview(false);
    setUpview(true);
  };

  // back of uploaded data
  const handleBackValidUpdata = () => {
    setMapview(true);
    setUpview(false);
  };

  //on view correct data
  const handleCorrectView = () => {
    setMapview(false);
    setCorrectDataView(true);
  };

  // back of correct data
  const handleBackCorrectdata = () => {
    setMapview(true);
    setCorrectDataView(false);
  };

  // on view  error data
  const handleErrorView = () => {
    setMapview(false);
    setErrodataView(true);
  };

  // back of error data
  const handleBackErrorData = () => {
    setMapview(true);
    setErrodataView(false);
  };

  //time out
  //  let backHome = setTimeout(()=>{
  //    setSuccess(false)
  //    setShowdata(true)

  // console.log("bbbck")

  //  }, 30)

  //success
  const handleSuccess = () => {
    setSuccess(true);
    setMapview(false);
  };

  //back home
  const handleBackHome = () => {
    setSuccess(false);
    setShowdata(true);
  };

  // const dSchema = yup.object().shape({

  // SlNo: yup.number().required(),
  // Name:yup.string().required(),
  // Class:yup.number().required(),
  // Age:yup.number().required(),
  // Attendance: yup.boolean().required()
  // })

  // const arrayDataSchema = yup.array().of(dSchema)
  // console.log(" arrayDataSchema",  arrayDataSchema)

  // const validSchema = yup.lazy( (data)=>{
  //   if(Array.isArray(data)) console.log("arrayDataSchema", arrayDataSchema )
  //   else console.log("dSchema", dSchema)
  // })
  // console.log("validSchema", validSchema)

  // validSchema.validateSync(data)

//--------------



//:::::::::::uique value

useEffect(()=>{

  //unique
  const uniquEle = [...new Set(data.map(a => JSON.stringify(a)))].map(a => JSON.parse(a))

console.log(uniquEle)


//json
const dataStr = data.map(JSON.stringify)

//error
const found = uniquEle.filter((val)=>{
  return val.Name === "null" && "undefined" && " " && "true" && "false" ||
   val.Class === "null" && "undefined" && " " && "true" && "false"  ||
   val.Age === "null" && "undefined" && " " && "true" && "false"  ||
   val.Attendance === "null" && "undefined" && " " && "true" && "false" 
})

console.log("spacefounnd",found)
//duplicate val
const duplicates = dataStr.filter((item, index) => index !== dataStr.indexOf(item));
const convDuplicateErr = Array.from(duplicates).map(JSON.parse)
console.log("dupicate", duplicates)

const errJoin = found.concat( convDuplicateErr)
console.log("total err", errJoin)
setErrorData(errJoin)
},[])



//--------------
  return (
    <div>
      {/* start map data condi */}

      {mapview && (
        <>
          <div className="container  align-content-center">
            <div className="col-lg-12 text-center  mt-3">
              <button
                id="back"
                onClick={cancel}
                className="btn btn-info text-white"
              >
                <ArrowBackIosOutlinedIcon /> Back
              </button>

              <h1>REPORT ON DATA</h1>
              <div className="row" id="container">
                <div className="col-lg-3 m-2" id="upload">
                  <h5 className="headertitle">DATA UPLOADED</h5>
                  <hr id="headerhr" />
                  <h4>NO : {data.length}</h4>
                  {/* <hr id="headerhr" /> */}
                  <button className="btn  mb-2  " onClick={handleUploadView}>
                    <StorageRoundedIcon />
                  </button>
                </div>
                <div className="col-lg-3 m-2" id="correct">
                  <h5 className="headertitle"> CORRECT DATA</h5>
                  <hr id="headerhr" />
                  <h4>NO : {correctData.length}</h4>
                  <button className="btn  mb-2   " onClick={handleCorrectView}>
                    <CheckCircleOutlinedIcon />
                  </button>
                </div>
                <div className="col-lg-3 m-2" id="error">
                  <h5 className="headertitle"> ERROR DATA</h5>{" "}
                  <hr id="headerhr" />
                  <h4>NO : {errorData.length}</h4>
                  <button
                    className="btn  text-dark mb-2  "
                    onClick={handleErrorView}
                  >
                    <CancelOutlinedIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <h3 id="head">View Excel file</h3> */}
          {/* {JSON.stringify(data)} */}

          {/* table */}

          <div className="container mt-3" id="container">
            <div className="col-lg-10  mt-4">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Sl No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
             
                    <th scope="col">Age</th>
                    <th scope="col">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, ind) => {
                    return (
                      <tr key={ind}>
                        <td> {ind + 1} </td>
                        <td> {val.Name}</td>
                        <td>
                          {val.Class}
                          <sup>th</sup>
                        </td>
                        <td> {val.Age}</td> 
                         <td> {val.Attendance }</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                className="btn btn-outline-success "
                onClick={handleSuccess}
              >
                save
              </button>
            </div>
          </div>
        </>
      )}
      {/* end map data condi */}

      {upview && <ValidUpdata back={handleBackValidUpdata} data={data} />}

      {correctDataView && <ValidCorr back={handleBackCorrectdata} />}

      {errordataView && <ValidErr back={handleBackErrorData} errorData={errorData} />}

      {success && <Success handleBackHome={handleBackHome} />}
    </div>
  );
}

export default MapData;
