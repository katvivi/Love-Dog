import React, { useState, useEffect } from "react";
import Axios from 'axios';

/*Sweet Alert*/
import swal from 'sweetalert';

const MostrarAlerta = () => {
  swal({
    title: "Creado",
    icon: "success"
  }).then(() => {
    window.location.reload();
  });
}


export const Usuario_Form = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [permiso, setPermiso] = useState('')

  const RegistrarUsuario = () => {
      Axios.post('http://localhost:4000/api/Usuario/insert', {
          nombre,
          apellido,
          mail,
          pass,
          permiso
      }).then((response) => {
          console.log(response.data)
          MostrarAlerta();
      }).catch(function (error) {
        console.log(error);
      });
  }

  return (
        <section className="container w-75 bg-light mt-4 ">
          <br /><br />
        <div className="py-5 text-center">        
          <h2>Nuevo Usuario</h2>
        </div>
    
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <hr className="my-4"/>
            <form method="POST">
              <div className="row g-3">

              <div className="col-sm-6">
                  <label htmlFor="txtNombre" className="form-label">Nombre: </label>
                  <input type="text" className="form-control" id="Nombre" required
                  onChange={(e) => {setNombre(e.target.value)}}
                  />
                </div>
  
                <div className="col-sm-6">
                  <label htmlFor="txtApellido" className="form-label">Apellido: </label>
                  <input type="text" className="form-control" id="Apellido" required
                  onChange={(e) => {setApellido(e.target.value)}}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtMail" className="form-label">Mail: </label>
                  <input type="mail" className="form-control" id="Mail" required
                  onChange={(e) => {setMail(e.target.value)}}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="txtPass" className="form-label">Pass: </label>
                  <input type="password" className="form-control" id="Pass" required
                  onChange={(e) => {setPass(e.target.value)}}
                  />             
                </div>
                <div className="col-sm-6">
                <label htmlFor="txtMail" className="form-label">Tipo: </label>
                <select className="form-select border-0" name="" id=""
                onChange={(e) => {setPermiso(e.target.value)}}>
                    <option defaultValue>Seleccione</option>
                    <option value="1" disabled>Admin</option>
                    <option value="0">Cliente</option>
                </select>
              </div>
              </div>         
              <hr className="my-4"/>    
              <div className="row">
                <div className="col-sm-4">
                    <button type="button" className="w-100 btn btn-success btn-lg" onClick={RegistrarUsuario}>Guardar</button>
                  </div>
                  
              </div>   
            </form>
          </div>
        </div><br /><br />
      </section>
      
      
  );
}
