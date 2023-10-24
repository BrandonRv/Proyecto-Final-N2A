import React from "react";
import useGeoLocation from '../service/useGeoLocation';
import './Humedad.css';

function Humedad() {

  const { current } = useGeoLocation();

  return (
    <>
      <div id="humedad-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div>Humidity</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-humedad">{current?.main?.humidity}</div>
          <div>%</div>
        </div>
        <div className="container d-flex flex-column" style={{ width: "85%" }}>
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: "10px" }}>0</div>
            <div style={{ fontSize: "10px" }}>50</div>
            <div style={{ fontSize: "10px" }}>100</div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%", height: "5px" }}
          >
            <div
              className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
              style={{
                width: `${current?.main?.humidity}%`,
              }}
            ></div>
          </div>
          <div
            className="d-flex p-1 justify-content-end"
            style={{ fontSize: "10px" }}
          >
            %
          </div>
        </div>
      </div>
    </>
  );
}
export default Humedad;
