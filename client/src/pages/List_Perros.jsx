import React, {useState,useEffect, Component, useReducer} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";

/*Sweet Alert*/
import swal from 'sweetalert';

export  default class List_Perros extends Component {
    state = {
        perros : []
    }

    async getPerro(){
        const res = await axios.get('http://localhost:4000/api/Perros/get');
        this.setState({perros: res.data});
        console.log(this.state.perros);
    }
    
    componentDidMount() {
        this.getPerro();
    }


    deletePerro = async (id) => {
        await axios.delete('http://localhost:4000/api/Perros/delete/' + id)
        this.getPerro();
    }

    MostrarAlert = (id) => {
        swal(
            {
                title:"Eliminar Perro",
                text:"¿Esta seguro de eliminar este registro?",
                icon:"warning",
                buttons:true,
                dangerMode:true

            }
        ).then((willDelete) => {
            if(willDelete) {
                this.deletePerro(id);
                swal("Este registro se a eliminado",{
                    icon:"success"
                }).then(() => {
                    window.location.reload();
                  });
            }else{
                swal("Su registro no se a eliminado",{
                    icon:"info"
                })
            }
        });
    }

    render() {
        return (
            <div className="container-xxl py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-4">Lista Mascotas</h1>
                </div>
                <div className="row">
                    {
                        this.state.perros.map(perro =>(
                            <div className="col-md-4 p-2" key={perro.id}>
                                	<div className="card">
                                        <div className="card-body">
                                            <img className="card-img-top" src={perro.imagen} alt="" />
                                            <hr />
                                            <h4 className="card-header">{perro.nombre}</h4>
                                            <br />
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
                                                    <label htmlFor="">Estado</label>
                                                    <p>{perro.estado == 0 ? "Espera" : "Adoptado"} </p>
                                                </div>
                                            </div>
                                            <br /><hr />

                                            <div className="row">
                                                <div className="col-4">
                                                    <Link to={`/pet-edit/${perro.id}`} className="btn btn-warning">Modificar</Link>
                                                </div>
                                                <div className="col-4">
                                                    <button className="btn btn-danger" onClick={() => this.MostrarAlert(perro.id)}>
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        ))
                    }
                </div>
            </div>  
        );
    }

        
}