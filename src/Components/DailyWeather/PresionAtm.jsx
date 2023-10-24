import React from "react";
import useGeoLocation from '../Service/useGeoLocation';
import './PresionAtm.css';

function PresionAtm() {

  const { current } = useGeoLocation();

  return (
    <>
      <div id="atm-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div>Air Pressure</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-atm">
            {current?.main?.pressure}
          </div>
          <div>mb</div>
        </div>
      </div>
    </>
  );
}
export default PresionAtm;
