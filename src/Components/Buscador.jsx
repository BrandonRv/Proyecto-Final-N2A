import { useState } from "react";
import useVisibility from './Service/useVisibility';
import './Buscador.css';

function Buscador() {

  const BuscadorV = useVisibility(true);

  return (
    <>
      <div id="containe-navv" className="container p-4 justify-content-end">
        <button
          type="button"
          className="btn-close btn-close-black"
          onClick={BuscadorV}
        ></button>
        <div
          className="container d-flex flex-column  p-2 justify-content-start align-items-center"
          style={{
            // border: "1px solid white",
            width: "86%",
            height: "60%",
          }}
        >
          <div
            className="container d-flex p-0 justify-content-center align-items-center"
            style={{
              // border: "1px solid red",
              width: "100%",
              gap: "8px",
            }}
          >
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                color: "rgb(89, 91, 109)",
                left: "18%",
              }}
            ></i>
            <input
              type="text"
              className="form-control"
              placeholder="search location"
              aria-label="First name"
              style={{
                paddingLeft: "30px",
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "0",
              }}
              //   value={inputLoc}
              //   onChange={inputLocCambio}
            />
            <button
              type="button"
              className="btn btn-primary"
              style={{
                border: "0",
                backgroundColor: "rgb(60, 71, 233)",
                borderRadius: "0",
              }}
              //   onClick={OpenUp}
            >
              Search
            </button>
          </div>
          <div className="container d-flex flex-column p-0 justify-content-center align-items-center"></div>
        </div>
      </div>
    </>
  );
}
export default Buscador;
