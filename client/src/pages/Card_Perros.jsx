import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/style_main_admin.css";

export default class Card_Perros extends Component {
    state = {
        perros: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/Perros/get')

        this.setState({ perros: res.data });
        console.log(this.state.perros);
    }

    render() {
        return (
            <div className="container-xxl py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-4">¡Vea todas nuestras adorables mascotas!</h1>
                </div>
                <div className="row">
                    {
                        this.state.perros.map(perro => (
                            perro.estado == 0 ? (
                                <div className="col-md-4 p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="card-img-top" src={perro.imagen} alt="" />
                                            <hr />
                                            <h4>{perro.nombre}</h4>
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="">Raza</label>
                                                    <p>{perro.raza}</p>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Color</label>
                                                    <p>{perro.color}</p>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Sexo</label>
                                                    <p>{perro.sexo}</p>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Edad</label>
                                                    <p>{perro.edad}</p>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Tamaño</label>
                                                    <p>{perro.tamanio}</p>
                                                </div>
                                            </div>
                                            <br /><hr />
                                            <Link to={`/Client_Form/${perro.id}`} className="btn btn-warning text-white" aria-disabled={true}>Adoptar</Link>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    }
                </div>
            </div>
        );
    }
}