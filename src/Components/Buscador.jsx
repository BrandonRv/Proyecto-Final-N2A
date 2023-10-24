import React from 'react';
import useVisibility from './service/useVisibility';
import useApiSearch from './service/useApiSearch';
import './Buscador.css';

function Buscador() {
  const { inputSearch, inputSearchIn, listaResult, current } = useApiSearch();
  const BuscadorV = useVisibility(true);

  function mostrasResult() {
    console.log(current)
  }

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
            width: "86%",
            height: "60%",
          }}
        >
          <div
            className="container d-flex p-0 justify-content-center align-items-center"
            style={{
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
              value={inputSearch}
              onChange={inputSearchIn}
            />
            <button
              type="button"
              className="btn btn-primary"
              style={{
                border: "0",
                backgroundColor: "rgb(60, 71, 233)",
                borderRadius: "0",
              }}
               onClick={mostrasResult}
            >
              Search
            </button>
          </div>
          <div
        id='cajabtnResul'
        className="container d-flex flex-column p-4 justify-content-center align-items-center"
      >
        {listaResult.map((result, key) => (
          <button
            key={key}
            className="btnResult"
            onClick={() => inputSearchIn({ target: { value: result } })}
          >
            {result}
            <i className="bi bi-chevron-compact-right"></i>
          </button>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}
export default Buscador;
