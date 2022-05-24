import React from 'react'
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function ValidCorr({back, correctData}) {
  
  return (
    <div>
     <div className="col-lg-12 mt-3">
        <button className="btn btn-info text-white  " id="back" onClick={back}>
          <ArrowBackIosOutlinedIcon /> Back
        </button>
       
        {/* {JSON.stringify(data)} */}

        <div className="container mt-3" id="container">
          <div className="col-lg-10  mt-4">
            {correctData.length === 0 ? (
              <div>
               
                <img
                  src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
                  height={200}  
                />
                <h1 className="text-center text-danger ms-5">
                  <i>Valid Data not found !</i>{" "}
                </h1>
              </div>
            ) : (
           
             
              <div> 
<h1> Valid Data</h1>
<hr id="hr"/>
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
                        <td>
                          {val.Class}
                          
                        </td>
                        <td> {val.Age}</td>
                        <td> {val.Attendance}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            )}
          </div>
        </div>
      </div> 
      
      </div>
   
  )
}

export default ValidCorr