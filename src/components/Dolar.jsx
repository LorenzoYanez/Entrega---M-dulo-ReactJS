import React, { useState, useEffect } from "react";

export default function Dolar() {
  const [dolarData, setDolarData] = useState([]);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/oficial")
      .then((response) => response.json())
      .then((data) => setDolarData(data));
  }, []);

  return (
    <div className=" py-5 d-flex justify-content-center">
      <div className="text-white card bg-secondary w-50 p-4 text-center">
        <h1>Cotizacion del dolar Oficial</h1>
        <div className="">
          <p>Valor de compra: ${dolarData.compra}</p>
          <p>Valor de ventar: ${dolarData.venta}</p>
          <p>Fecha de actualización: {dolarData.fechaActualizacion}</p>
        </div>
      </div>
    </div>
  );
}
