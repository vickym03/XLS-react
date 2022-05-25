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
import { style, width } from "@mui/system";

function MapData({ data, cancel }) {
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
  const [correctData, setCorrectData] = useState([]);

  //errordatat
  const [errorData, setErrorData] = useState([]);

  //ERROR DUPLICATE
  const [errorDuplicate, setErrorDuplicate] = useState([]);

  //dummy error

  const [errLen, SeterrLen] = useState([]);

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

  //success
  const handleSuccess = () => {
    if(correctData.length>=1){
      setSuccess(true);
      setMapview(false);
    }
   
  };

  const handleCancel = () => {
    cancel();
    setSuccess(false);
  };

  //back home

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

  useEffect(() => {
    //correct data
    const valData = data.filter((val) => {
      //console.log("valid",typeof(val.Name ))
      return (
        typeof val.Name === "string" &&
        typeof val.Class === "number" &&
        typeof val.Age === "number" &&
        typeof val.Attendance === "boolean"
      );
    });
    console.log(" valData", valData);
    const vallPure = [...new Set(valData.map((a) => JSON.stringify(a)))].map(
      (a) => JSON.parse(a)
    );

    console.log(" vall", vallPure);
    setCorrectData(vallPure);

    //json
    const dataStr = valData.map(JSON.stringify);
    //unique
    const uniquEle = [...new Set(data.map((a) => JSON.stringify(a)))].map((a) =>
      JSON.parse(a)
    );

    console.log("unique", uniquEle);

    const found = data.filter((val) => {
      return (
        (val.Name === "null" && " " && "undefined" && "true" && "false") ||
        typeof val.Name === "number" ||
        (val.Class === "null" && "undefined" && "true" && "false" && " ") ||
        typeof val.Class === "string" ||
        (val.Age === "null" && "undefined" && "true" && "false" && " ") ||
        typeof val.Class === "string" ||
        (val.Attendance === "null" && "undefined" && " ")
      );
    });
    console.log("Spacefounnder", found);
    setErrorData(found);
    //duplicate val

    const duplicates = dataStr.filter(
      (item, index) => index !== dataStr.indexOf(item)
    );
    const convDuplicateErr = Array.from(duplicates).map(JSON.parse);
    setErrorDuplicate(convDuplicateErr);
    console.log("dupicate", errorDuplicate);

    const errJoin = found.concat(convDuplicateErr);
    SeterrLen(errJoin);
    console.log("total err", errLen.length);

    //final error

    // let mainData = valData.map(JSON.stringify);
    // let validedData = vallPure.map(JSON.stringify);
    // console.log(" mainData", mainData);
    // console.log("ValidedData", validedData);

    // for (let i = 0; i <  vallPure.length; i++) {
    //   for (let j = 0; j < data.length; j++) {
    //     if ( vallPure[i] === data[j]) {

    //       data = valData.slice(0, j).concat(data.slice(j+1,data.length))
    //     }
    //   }
    // }
    // console.log( " mainData",data)
  }, []);

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
                <div className="col-lg-3  m-2 " id="upload">
                  <h5 className="headertitle">TOTAL REPORTS</h5>
                  <hr id="headerhr" />
                  <h4>NO : {data.length}</h4>
                  {/* <hr id="headerhr" /> */}
                  <button className="btn  mb-2  " onClick={handleUploadView}>
                    <StorageRoundedIcon />
                  </button>
                </div>
                <div className="col-lg-3   m-2  " id="correct">
                  <h5 className="headertitle"> VALID REPORTS</h5>
                  <hr id="headerhr" />
                  <h4>NO : {correctData.length}</h4>
                  <button className="btn  mb-2   " onClick={handleCorrectView}>
                    <CheckCircleOutlinedIcon />
                  </button>
                </div>
                <div className="col-lg-3  m-2  " id="error">
                  <h5 className="headertitle">INVALID REPORTS</h5>
                  <hr id="headerhr" />
                  <h4>NO : {errLen.length} </h4>
                  <button
                    className="btn  text-dark mb-2  ms-2 "
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

          <div className="col-lg-12 mt-3">
            {/* {JSON.stringify(data)} */}

            <div className="container mt-3" id="container">
              <div className="col-lg-10  mt-4">
                {correctData.length === 0 ? (
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
                      height={100}
                    />
                    <h3 className="text-center text-danger ms-5">
                      <i>Valid Data not found !</i>
                    </h3>
                  </div>
                ) : (
                  <div>
                    <h1> Valid Data</h1>
                    <hr id="hr" />
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
                        {correctData.map((val, ind) => {
                          return (
                            <tr key={ind}>
                              <td> {ind + 1} </td>
                              <td> {val.Name}</td>
                              <td>{val.Class}</td>
                              <td> {val.Age}</td>
                              <td>
                                {" "}
                                {val.Attendance ? (
                                  <p>True</p>
                                ) : (
                                  <p
                                    className=""
                                    style={{
                                      margin: 0,
                                      padding: 0,
                                      backgroundColor: "rgb(232, 144, 144)",
                                      height: 25,
                                    }}
                                  >
                                    False
                                  </p>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
                 <button className="btn btn-outline-success ms-5" onClick={handleSuccess}>
              Save
            </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* end map data condi */}

      {upview && <ValidUpdata back={handleBackValidUpdata} data={data} />}

      {correctDataView && (
        <ValidCorr back={handleBackCorrectdata} correctData={correctData} />
      )}

      {errordataView && (
        <ValidErr
          back={handleBackErrorData}
          errorData={errorData}
          errorDuplicate={errorDuplicate}
        />
      )}

      {success && <Success cancel={handleCancel} />}
    </div>
  );
}

export default MapData;
