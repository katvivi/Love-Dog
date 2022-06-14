import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*Sweet Alert*/
import swal from 'sweetalert';

export const EditForm = () => {
    const [data, setData] = useState({});
    const [editPet, setEditPet] = useState({
        nombre: '',
        raza: '',
        color: '',
        peso: '',
        tamanio: '',
        edad: 0,
        imagen: '',
        sexo: '',
        estado: 0
    });

    const MostrarAlerta = () => {
        swal({
          title: "Modificado Exitosamente",
          icon: "success"
        });
    }

    const { nombre, raza, color, peso, tamanio, edad, imagen, sexo, estado } = editPet;

    const handleChange = (e) => {
        setEditPet({
            ...editPet,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/Perros/update/${params.id}`, editPet).then((res) =>console.log(res)).catch((error) => console.log(error));
        
        MostrarAlerta();
    }
    const params = useParams();
    const getData = async () => {
        const url = `http://localhost:4000/api/Perros/get/${params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0])
        setData(data[0]);
        setEditPet({
            nombre: data[0].nombre,
            raza: data[0].raza,
            color: data[0].color,
            peso: data[0].peso,
            tamanio: data[0].tamanio,
            edad: data[0].edad,
            imagen: data[0].imagen,
            sexo: data[0].sexo,
            estado: data[0].estado
        })
    }
    useEffect(() => {

        getData();
    }, []);
    return (
        <section className="container w-75 bg-light mt-4 ">
            <br /><br />
            <div className="py-5 text-center">
                <h2>Registro de Mascota</h2>

            </div>

            <div className="row g-5">
                <div className="col-md-7 col-lg-8">
                    <hr className="my-2" />
                    <form onSubmit={handleSubmitUpdate}>
                        <div className="row g-3">

                            <div className="col-sm-12">
                                <label htmlFor="txtNombre" className="form-label">Nombre: </label>
                                <input type="text" className="form-control" id="Nombre" name="nombre" required
                                    onChange={handleChange}
                                    defaultValue={data.nombre}
                                />
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="txtImagen" className="form-label">Imagen del Perro: </label>
                                <input type="text" className="form-control" id="Imagen" name="imagen" required
                                    onChange={handleChange}
                                    defaultValue={data.imagen}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="txtRaza" className="form-label">Raza: </label>
                                <input type="text" className="form-control" id="Raza" name="raza" required
                                    onChange={handleChange}
                                    defaultValue={data.raza}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="txtEdad" className="form-label">Edad: </label>
                                <input type="text" className="form-control" id="Edad" min="1" max="18" name="edad" required
                                    onChange={handleChange}
                                    defaultValue={data.edad}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="txtTamanio" className="form-label">Tamaño: </label>
                                <select className="form-select border-0" name="tamanio" id="Tamanio"
                                    onChange={handleChange}

                                    value={data.tamanio}
                                >
                                    <option >Seleccione</option>
                                    <option value="Grande">Grande</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Pequeño">Pequeño</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="txtPeso" className="form-label">Peso: </label>
                                <select className="form-select border-0" name="peso" id="Peso"
                                    onChange={handleChange}
                                    value={data.peso}
                                >
                                    <option >Seleccione</option>
                                    <option value="1 a 6 kilos"> 1 a 6 kilos</option>
                                    <option value="5 a 25 kilos">5 a 25 kilos</option>
                                    <option value="14 a 27 kilos">14 a 27 kilos</option>
                                    <option value="21 a 39 kilos">21 a 39 kilos</option>
                                    <option value="34 a 82 kilos">34 a 82 kilos</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="txtSexo" className="form-label">Sexo: </label>
                                <select className="form-select border-0" name="sexo" id="Sexo"
                                    onChange={handleChange}
                                    value={data.sexo}
                                >
                                    <option >Seleccione</option>
                                    <option value="Hembra">Hembra</option>
                                    <option value="Macho">Macho</option>
                                </select>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="txtColor" className="form-label">Color:</label>
                                <select className="form-select border-0" name="color"
                                    onChange={handleChange}
                                    value={data.color}
                                >
                                    <option >Seleccione</option>
                                    <option value="Negro">Negro</option>
                                    <option value="Café">Café</option>
                                    <option value="Canela">Canela</option>
                                    <option value="Blanco">Blanco</option>
                                    <option value="Manchas">Manchas</option>
                                </select>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="txtEstado" className="form-label">Estado:</label>
                                <select className="form-select border-0" name="estado"
                                    onChange={handleChange}
                                    value={data.estado == 0 ? "Espera" : "Adoptado"}
                                >
                                    <option >Seleccione</option>
                                    <option value="Adoptado">Adoptado</option>
                                    <option value="Espera">Espera</option>
                                </select>
                            </div>

                        </div>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-sm-4">
                                <input type="submit" className="w-100 btn btn-success btn-lg" value='Guardar' />
                            </div>
                        </div>
                    </form>
                </div>
            </div><br /><br />
        </section>

    );
}