import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function ValidErr({ back, errorData, errorDuplicate }) {
  return (
    <div>
      {/* {JSON.stringify(errorData)}
  {JSON.stringify(errorDuplicate)} */}
      <div className="col-lg-12 mt-3">
        <button className="btn btn-info text-white  " id="back" onClick={back}>
          <ArrowBackIosOutlinedIcon /> Back
        </button>

        {/* {JSON.stringify(errorData)} */}

        <div className="container mt-3" id="container">
          <div className="col-lg-10  mt-4">
            {errorData.length === 0 ? (
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
                  height={100}
                />
                <h3 className="text-center text-danger ms-5">
                  <i>Error Data not found !</i>
                </h3>
              </div>
            ) : (
              <div>
                <h1> Error Data : {errorData.length} </h1>
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
                    {errorData.map((val, ind) => {
                      return (
                        <tr key={ind}>
                          <td> {ind + 1} </td>
                          <td> {val.Name}</td>
                          <td>{val.Class}</td>
                          <td> {val.Age}</td>
                          <td> {val.Attendance ?  <p>True</p> :  <p className="" style={{margin:0, padding:0, backgroundColor:"rgb(232, 144, 144)",height:25}}>False</p>}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        {/* end of error data */}

        {/* ------------------------------------------------------------------------------ */}
        <div className="container mt-3" id="container">
          <div className="col-lg-10  mt-4">
            {errorDuplicate.length === 0 ? (
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
                  height={100}
                />
                <h3 className="text-center text-danger ms-5">
                  <i>Duplicate Data not found !</i>
                </h3>
              </div>
            ) : (
              <div>
                <h1> Duplicate Data : {errorDuplicate.length}</h1>
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
                    {errorDuplicate.map((val, ind) => {
                      return (
                        <tr key={ind}>
                          <td> {ind + 1} </td>
                          <td> {val.Name}</td>
                          <td>{val.Class}</td>
                          <td> {val.Age}</td>
                          <td> {val.Attendance ?  <p>True</p> :  <p className="" style={{margin:0, padding:0, backgroundColor:"rgb(232, 144, 144)",height:25}}>False</p>}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        {/* end of duplicate err */}
      </div>
    </div>
  );
}

export default ValidErr;

//  :
