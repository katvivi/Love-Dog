import React from "react";
import { Link } from "react-router-dom";
import item_usuarios from "../images/item-usuarios.png";
import item_admins from "../images/item-admins.png";
import item_perros from "../images/item-perros.png";
import item_solicitudes from "../images/item-solicitudes.png";
import "../style/style.css";

export const Inicio_Admin = () => {
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-5">
                    <Link to="/Registro-Mascota">
                        <img src={item_usuarios} alt="" />
                    </Link>
                    
                </div>
                <div className="col-sm-5">
                    <Link to="/Registro-Admin">
                        <img src={item_admins} alt="" />
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-5">
                    <Link to="/Listado-Perros">
                        <img src={item_perros} alt="" />
                    </Link>
                </div>
                <div className="col-sm-5">
                    <Link to="/List_Solicitud">
                        <img src={item_solicitudes} alt="" />
                    </Link>
                </div>
            </div>
            {/* <div className="row justify-content-center">
                <div className="col-sm-5">
                    <a href="./">
                        <img src="https://www.neobis.es/wp-content/uploads/2020/11/boton-inscripcion.png" alt=""/>
                    </a>
                </div>
                <div className="col-sm-5">
                    <a href="./">
                        <img src="https://www.neobis.es/wp-content/uploads/2020/11/boton-inscripcion.png" alt=""/>
                    </a>
                </div>
            </div> */}
        </div>
      
  );
}