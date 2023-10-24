import React, { useState } from "react";
// import useApiToday from '../Service/useApiToday';
import useGeoLocation from '../service/useGeoLocation';
import './Visibilidad.css';

function Visibilidad() {

  const { current } = useGeoLocation();
 // const data  = useApiToday();
  const visibilityInKm = (current?.visibility || 0) / 1000;
  const formattedVisibility = visibilityInKm.toFixed(1);

  return (
    <>
    
      <div id="visibilidad-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div>Visibility</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-visibilidad">
          {formattedVisibility.toLocaleString()}
          </div>
          <div>Km</div>
        </div>
      </div>

    </>
  );
}
export default Visibilidad;
