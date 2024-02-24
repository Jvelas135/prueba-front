import React from "react";
import "./MiComponente.css";
import imagen1 from "../../assets/images/imagen1.svg";
import imagen2 from "../../assets/images/imagen2.svg";
import logo from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';
function MiComponente() {
  return (
 <div className="container">
     <div className="mi-componente ">
       <div className="row">
        <div className="col">
        <img className="logo" src={logo} alt="Otra Imagen" />
        </div>
       </div>
       <div className="row">
        <div className="col">
        <h2 className="sub-title">Sufipay 
        </h2><label className="descr">Administrador comercial</label>
       
        </div>
       </div>
       <div className="input-card">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
      </div>
     <Link to="/table"> <button className="ingresar-button">INGRESAR</button></Link> 

      <div className="olvidar">
        <label>No recuerdo mi contraseña</label>
      </div>
      
    </div>
    <img className="imagen-superior-derecha" src={imagen1} alt="Imagen 1" />
      <img className="imagen-inferior-izquierda" src={imagen2} alt="Imagen 2" />
 </div>
  );
}

export default MiComponente;
