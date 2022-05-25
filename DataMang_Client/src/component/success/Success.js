import React from "react";
import "./Success.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function Success({ cancel }) {

  // const handleBackHome = () => {
  //   cancel();
  // };

  setTimeout(() => {
    cancel();
  }, 4000);

  return (
    <div>
     
      <div>
        <h1 id="success"> Data saved successfully !</h1>
      </div>

      <div id="bodySvg">
        <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" id="des">
          <g
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className="circle"
              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
            />
            <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Success;
