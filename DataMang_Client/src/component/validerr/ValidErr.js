import React from 'react'
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function ValidErr({back}) {
  return (
    <div>
      <div className='col-lg-12 mt-3'>
      <button className="btn btn-info text-white  " id="back" onClick={back}>
          <ArrowBackIosOutlinedIcon/>  Back
      </button>
      <h1> Error Data</h1>
      </div>
    </div>
  )
}

export default ValidErr