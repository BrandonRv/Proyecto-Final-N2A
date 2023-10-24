import React from "react";
import useGeoLocation from '../Service/useGeoLocation';
import './Viento.css';

function Viento() {

  const { current } = useGeoLocation();
  const speedInKmph = (current?.wind?.speed * 3.6).toFixed(1);

  return (
    <>
      <div id="viento-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div>Wind status</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-viento">{speedInKmph}</div>
          <div>Km/h</div>
        </div>
        <div className="container d-flex justify-content-center align-items-center gap-2 ">
          <div
            style={{
              transform: `rotate(${(current?.wind?.deg)+ 105}deg)`,
              height: "25px",
              width: "25px",
            }}
            className="badge rounded-circle text-bg-secondary d-flex justify-content-center align-items-center"
          >
            <i className="bi bi-forward-fill"></i>
          </div>
          <div style={{ fontSize: "13px" }}>WSW</div>
        </div>
      </div>
    </>
  );
}
export default Viento;
