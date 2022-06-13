import React, { useState, useEffect } from "react";
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

/*Sweet Alert*/
import swal from 'sweetalert';


export const Admin_Form = () => {

  const [nombre, setNombre] = useState('')
  const [raza, setRaza] = useState('')
  const [color, setColor] = useState('')
  const [peso, setPeso] = useState('')
  const [tamanio, setTamanio] = useState('')
  const [edad, setEdad] = useState('')
  const [imagen, setImagen] = useState('')
  const [sexo, setSexo] = useState('')
  const [estado, setEstado] = useState('')

  const MostrarAlerta = () => {
    swal({
      title: "Creado",
      icon: "success"

    }).then(() => {
      window.location.reload();
    });
    
  }

  const RegistrarMascota = () => {
      Axios.post('http://localhost:4000/api/Perros/insert', {
          nombre,
          raza,
          color,
          peso,
          tamanio,
          edad,
          imagen,
          sexo,
          estado
      }).then((response) => {
          console.log(response.data);
          MostrarAlerta();
      }).catch(function (error) {
        console.log(error);
      });
  }

  return (

      <section className="container w-75 bg-light mt-2 ">
          <br /><br />
        <div className="py-5 text-center">        
          <h2>Registro de Mascota</h2>
        </div>
    
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <hr className="my-2"/>
            <form method="POST">
              <div className="row g-3">

              <div className="col-sm-12">
                  <label htmlFor="txtNombre" className="form-label">Nombre: </label>
                  <input type="text" className="form-control" id="Nombre" required
                  onChange={(e) => {setNombre(e.target.value)}}
                  />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="txtImagen" className="form-label">Imagen del Perro: </label>
                  <input type="text" className="form-control" id="Imagen" required
                  onChange={(e) => {setImagen(e.target.value)}}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtRaza" className="form-label">Raza: </label>
                  <input type="text" className="form-control" id="Raza" required
                  onChange={(e) => {setRaza(e.target.value)}}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtEdad" className="form-label">Edad: </label>
                  <input type="text" className="form-control" id="Edad" min="1" max="18" required
                  onChange={(e) => {setEdad(e.target.value)}}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtTamanio" className="form-label">Tamaño: </label>
                  <select className="form-select border-0" name="Tamanio" id="Tamanio"
                  onChange={(e) => {setTamanio(e.target.value)}}>
                    <option defaultValue>Seleccione</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Pequeño">Pequeño</option>
                </select>                
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtPeso" className="form-label">Peso: </label>
                  <select className="form-select border-0" name="Peso" id="Peso"
                  onChange={(e) => {setPeso(e.target.value)}}>
                    <option defaultValue>Seleccione</option>
                    <option value="1 a 6 kilos"> 1 a 6 kilos</option>
                    <option value="5 a 25 kilos">5 a 25 kilos</option>
                    <option value="14 a 27 kilos">14 a 27 kilos</option>
                    <option value="21 a 39 kilos">21 a 39 kilos</option>
                    <option value="34 a 82 kilos">34 a 82 kilos</option>
                </select> 
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtSexo" className="form-label">Sexo: </label>
                  <select className="form-select border-0" name="Sexo" id="Sexo"
                  onChange={(e) => {setSexo(e.target.value)}}>
                    <option defaultValue>Seleccione</option>
                    <option value="Hembra">Hembra</option>
                    <option value="Macho">Macho</option>
                </select> 
                </div>
                <div className="col-sm-4">
                  <label htmlFor="txtColor" className="form-label">Color:</label>
                  <select className="form-select border-0" name="Color"
                  onChange={(e) => {setColor(e.target.value)}}>
                    <option defaultValue>Seleccione</option>
                    <option value="Negro">Negro</option>
                    <option value="Café">Café</option>
                    <option value="Canela">Canela</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Manchas">Manchas</option>
                </select>                
                </div>
                <div className="col-sm-4">
                  <label htmlFor="txtEstado" className="form-label">Estado:</label>
                  <select className="form-select border-0" name="Estado"
                  onChange={(e) => {setEstado(e.target.value)}}>
                    <option defaultValue>Seleccione</option>
                    <option value="Adoptado">Adoptado</option>
                    <option value="Espera">Espera</option>
                </select>                
                </div>
                
              </div>         
              <hr className="my-4"/>    
              <div className="row">
                <div className="col-sm-4">
                    <button type="button" className="w-100 btn btn-success btn-lg" onClick={RegistrarMascota} >Guardar
                    
                    
                    </button>
                  </div>
                  
              </div>   
            </form>
          </div>
        </div><br /><br />
      </section>
      
   
      
  );
}
