import React from "react";
import './ClimaforDAY.css';

function ClimaforDAY(props) {

  const fechaObj = new Date(props.fecha);
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const diaSemana = diasSemana[fechaObj.getDay()];
  const diaMes = fechaObj.getDate();
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const mes = meses[fechaObj.getMonth()];

  return (
    <>
      <div
        className="container m-2 d-flex flex-column justify-content-around align-items-center"
        style={{
          backgroundColor: "rgb(30, 33, 58)",
          fontSize: "15px"
        }}
      >
        {`${props.dia == undefined ? `${diaSemana}, ${diaMes} ${mes}` : props.dia}`}
        <div className="dias-semana">
        </div>
        <img
          src={props.imagenPNG}
          className="img-por-dia"
          alt="Weather.png"
        />
        <div className="temp-max-min">
          <div className="d-flex p-2">
            <div>{props.tempMax}</div>
            <div>{props.simbolo}</div>
          </div>
          <div className="d-flex" style={{ color: "rgb(160, 159, 177)" }}>
            <div>{props.tempMin}</div>
            <div>{props.simbolo}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ClimaforDAY;
