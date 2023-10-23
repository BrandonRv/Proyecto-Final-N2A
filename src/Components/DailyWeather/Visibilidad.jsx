import React from "react";
//import useVisibility from './Service/useVisibility';
import './Visibilidad.css';

function Visibilidad() {

  // const BuscadorV = useVisibility({ data, setInputLoc });
  // console.log(data);


  return (
    <>
      <div id="visibilidad-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div>Visibility</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-visibilidad">
            Valor Visibilidad
            {/* {((dataWeather && dataWeather.visibility) / 1000).toFixed(1)} */}
          </div>
          <div>milles</div>
        </div>
      </div>
    </>
  );
}
export default Visibilidad;
