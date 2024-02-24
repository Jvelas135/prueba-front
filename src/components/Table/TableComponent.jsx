import React from "react";
import logo2 from "../../assets/images/logo2.svg";
import "./TableComponent.css";
import { CheckCircleIcon } from '@heroicons/react/solid';
import { ExclamationIcon } from '@heroicons/react/outline';
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../icon'


function TableComponent() {
  const [datosTabla, setDatosTabla] = React.useState([
    {
      fecha: "2022-03-01",
      monto: "$100.00",
      concepto: "Pago",
      peligro: true,
      quinta: "Dato 1",
      sexta: "Dato 2",
      septima: "Dato 3",
    },

    {
      fecha: "2022-03-01",
      monto: "$100.00",
      concepto: "Pago",
      peligro: false,
      quinta: "Dato 1",
      sexta: "Dato 2",
      septima: "Dato 3",
    },
    {
      fecha: "2022-03-01",
      monto: "$100.00",
      concepto: "Pago",
      peligro: true,
      quinta: "Dato 1",
      sexta: "Dato 2",
      septima: "Dato 3",
    },
    {
      fecha: "2022-03-01",
      monto: "$100.00",
      concepto: "Pago",
      peligro: false,
      quinta: "Dato 1",
      sexta: "Dato 2",
      septima: "Dato 3",
    }
    // ... Agrega más filas según sea necesario
  ]);

  return (
    <div className="table-component ">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo2} alt="Logo" className="logo2" />
        </div>
        <div className="logout-container">
          <span>Cerrar Sesión</span>
          <Icon css='icon2' icon={faSignOut} />

        </div>
      </nav>
      <div className="content bg-red">
        {/* Fila con 3 columnas */}
        <div className="row balance-row">
          <div className="col">
            <label htmlFor="" className="titulo">
              Autorizador
            </label>
            <h2>$250.000.000</h2>

          </div>
          <div className="col with-shadow">
            <h2>$50.000.000</h2>
            <label htmlFor="" className="titulo">
              Pendiente por sincronizar
            </label>
          </div>
          <div className="col">
            <label htmlFor="" className="titulo">
              Core
            </label>
            <h2>$200.000.000</h2>
          </div>
        </div>
        {/* Tabla */}
        <div className="row">
          <div className="col">
            <table className="w-full bg-white border">
              <thead className="with-u-border">
                <tr>
                  <th className="colum p-2 text-white">Fecha</th>
                  <th className="colum p-2 text-white">Monto</th>
                  <th className="colum p-2 text-white cep">Concepto</th>
                  <th className="colum p-2 bg-abb9c7 text-white curva text-center">
                    <div className="text-red-500 bg-white rounded-full p-2">
                      <ExclamationIcon className="h-6 w-6" />
                    </div>
                  </th>

                  <th className="colum2 p-2 bg-808e9b text-white with-u-border">Fecha</th>
                  <th className="colum2 p-2 bg-808e9b text-white">Monto</th>
                  <th className="colum2 p-2 bg-808e9b text-white">Concepto</th>
                </tr>
              </thead>
              <tbody>
                {datosTabla.map((fila, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'white-background' : 'light-blue-background'}>
                    <td >{fila.fecha}</td>
                    <td >{fila.monto}</td>
                    <td >{fila.concepto}</td>
                    <td>
                      {!fila.peligro && (
                        <div className="text-green-500  p-2 iconos">
                          <CheckCircleIcon className="h-6 w-6" />
                        </div>
                      )}
                      {fila.peligro && (
                        <div className="text-red-500  p-2 iconos">
                          <ExclamationIcon className="h-6 w-6" />
                        </div>
                      )}
                    </td>

                    <td >{fila.quinta}</td>
                    <td >{fila.sexta}</td>
                    <td >{fila.septima}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container-button">
        <button className="danger">SINCRONIZAR</button>
      </div>
    </div>
  );
}

export default TableComponent;
