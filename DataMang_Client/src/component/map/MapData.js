import React from "react";
import "./MapData.css";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { style } from "@mui/system";
function MapData({ data , cancel}) {
  console.log("dataprops", data);

  return (
    <div className="body">
      <button id="back"onClick={()=> cancel()} className="btn btn-info text-white">
       {/* <BackspaceOutlinedIcon/>   */} <ArrowBackIosOutlinedIcon/> Back
      </button>
      <h1 className="mt-4 ">REPORT ON DATA</h1>

      <div className="container  align-content-center " id="container">
        <div className="col-lg-12 text-center  mt-3">
          <div className="row">
            <div className="col-lg-3 m-2" id="upload">
              <h5 className="headertitle">DATA UPLOADED</h5>{" "}
              <hr id="headerhr" />
              <h4>NO: {data.length}</h4>
            </div>
            <div className="col-lg-3 m-2" id="correct">
              <h5 className="headertitle"> CORRECT DATA</h5>{" "}
              <hr id="headerhr" />
              <h4>NO: 36</h4>
            </div>
            <div className="col-lg-3 m-2" id="error">
              <h5 className="headertitle"> ERROR DATA</h5> <hr id="headerhr" />
              <h4>NO: 13</h4>
            </div>
          </div>
        </div>
      </div>
      {/* <h3 id="head">View Excel file</h3> */}
      {/* {JSON.stringify(data)} */}





{/* table */}
<div className="container mt-3"    >
           <div className="col-lg-10 m-5 mt-4"  > 
            <table className="table table-striped " >
                <thead>
                  
                  <tr >
                    <th scope="col">Sl No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Section</th>
                    <th scope="col">Age</th>
                    <th scope="col">Attendance</th>
                  </tr>
                </thead>
                <tbody>

                {
        data.map((val,ind)=>{
          return(


            <tr key={ind}>
              <td>   {ind +1} </td>
              <td> {val.Name}</td>
              <td> {val.Class}<sup>th</sup></td>
              <th> </th>
            </tr>
           
          
          ) 
        })
      }


      
                </tbody>
              </table>
           </div>
       
           </div>

    
    </div>
  );
}

export default MapData;
