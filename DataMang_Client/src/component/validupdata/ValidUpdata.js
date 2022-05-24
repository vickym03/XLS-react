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
{/*  
 {JSON.stringify(data)} */}
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
                         <td> {val.Attendance}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
    </div>
    </div>  
    </div>
  );
}

export default ValidUpdata;
