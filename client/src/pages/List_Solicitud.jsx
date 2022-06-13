import React from "react";
/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";

export const List_Solicitud = () => {
    return (
        <main className="container w-75 bg-light mt-3 rounded shadow">
            <section className="py-5 container">
                <h3>Listado de Solicitudes</h3>
                <hr/>          
                <table className="table">
                    <thead>
                    <tr>                
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Contacto</th>  
                        <th scope="col">Correo</th>
                        <th scope="col">Ocupación</th>
                    </tr>
                    </thead>
                    <tbody id="tblListadoSolicitud">
                    </tbody>                        
                </table>
            </section>      
    </main>
    );
}