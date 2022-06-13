import React, { Component } from "react";
import axios from 'axios';

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";

export default class List_Solicitud extends Component {
    state = {
        solicitudes: []
    }

    async getSolicitud() {
        const res = await axios.get('http://localhost:4000/api/Solicitud/get');
        this.setState({ solicitudes: res.data });
        console.log(this.state.solicitudes);
    }

    componentDidMount() {
        this.getSolicitud();
    }

    render() {
        return (
            <main className="container w-75 bg-light mt-3 rounded shadow">
                <section className="py-5 container" >
                    <h3>Listado de Solicitudes</h3>
                    <hr />
                    {
                        this.state.solicitudes.map(solicitud => (
                            <table className="table" key={solicitud.id}>

                                <thead>
                                    <tr>
                                        <th scope="col">Fecha Solicitud</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Contacto</th>
                                        <th scope="col">Ocupación</th>
                                    </tr>
                                </thead>
                                <tbody id="tblListadoSolicitud">
                                    <tr>
                                        <td>{solicitud.fecha_solicitud}</td>
                                        <td>{solicitud.nombre}</td>
                                        <td>{solicitud.apellido}</td>
                                        <td>{solicitud.telefono}</td>
                                        <td>{solicitud.ocupacion}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))
                    }
                </section>
            </main>
        );
    }



}