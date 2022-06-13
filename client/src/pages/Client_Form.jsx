import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";

export const Client_Form = () => {
  var date = new Date();
  const [fecha_solicitud, setFechaSolicitud] = useState(date)
  const [fecha, setFecha] = useState(date.toLocaleDateString())
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [telefono, setTelefono] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [direccion, setDireccion] = useState('')
  const [tipo_vivienda, setVivienda] = useState('')
  const [mail, setCorreo] = useState('')
  const [ocupacion, setOcupacion] = useState('')
  const [nombrePerro, setNombrePerro] = useState('');
  const [tamanio, setTamanio] = useState('');

  useEffect(() => {
    getPerroData();
    getUserData();
    validarSolicitudesPrevias();
  }, []);

  const params = useParams();

  const validarSolicitudesPrevias = async () => {
    var id_User = localStorage.getItem("User")
    const url = `http://localhost:4000/api/Usuario/vs/${id_User}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      var date = new Date(data[0].fecha_solicitud);
      var date2 = new Date();
      var fc = date.getMonth() + 4;
      if (date2.getMonth() <= fc) {
        swal({
          title:"No puedes adoptar ahora",
          text:"Espera 3 meses desde tu ultima solicitud",
          icon:"info"
        }).then(() => {
          window.location.replace("/Listado")
        });
      }
    }
  }

  const getPerroData = async () => {
    const url = `http://localhost:4000/api/Perros/get/${params.id}`;
    const response = await fetch(url);
    const data = await response.json();
    setNombrePerro(data[0].nombre);
    setTamanio(data[0].tamanio);
  }

  const getUserData = async () => {
    var id_User = localStorage.getItem("User")
    const url = `http://localhost:4000/api/Usuario/get/${id_User}`;
    const response = await fetch(url);
    const data = await response.json();
    setNombre(data[0].nombre);
    setApellido(data[0].apellido);
    setCorreo(data[0].mail)
  }


  /* Validaciones para adoptar */
  /* Valida la edad de rango mayor a 18 & menor a 80*/
  const validarEdad = () => {
    if ((edad < 18) || (edad > 80)) {
      swal({
        title: "Lo sentimos",
        text: "No cumple con la edad para adoptar"
      });
      return false;
    }
    return true;
  }

  /* Validacion del tipo de vivienda, si el perro es grande, el usuario a adoptar debera 
  vivir en una casa o finca */
  const validartamanio = () => {
    if (tamanio === "Grande") {
      if (tipo_vivienda === "Departamento") {
        swal({
          title: "Lo sentimos",
          text: "No cumple con la vivienda adecuada para adoptar"
        });
        return false;
      }
    }
    return true;
  }

  //Insert
  const enviarSolicitud = () => {
    var ba = validarEdad();
    var bb = validartamanio();
    if (ba & bb) {
      Axios.post('http://localhost:4000/api/Solicitud/insert', {
        fecha_solicitud,
        nombre,
        apellido,
        edad,
        telefono,
        ciudad,
        direccion,
        tipo_vivienda,
        ocupacion,
        id_perro: params.id,
        id_usuario: localStorage.getItem("User"),
      }).then((response) => {
        Axios.post('http://localhost:4000/api/Perros/actEst/', {
          id: params.id
        })
        swal(
          {
            title: "Solicitud Enviada",
            text: "Su solicitud ha sido enviada y pronto un asesor se contactará para finalizar la adopción",
            icon: "success",
            buttons: true,
          }
        ).then(() => {
          window.location.replace("/Listado")
        })
      }).catch(function (error) {
        console.log(error);
      });
    };
  }

  return (
    <section className="container w-75 bg-light mt-4 ">
      <br /><br />
      <div className="py-5 text-center">
        <h2>¿Un nuevo miembro en la familia?</h2>
        <p className="mb-4 pb-2">Por favor llena el siguiente formulario con tus datos personales e información acerca de las condiciones de adopción.</p>
      </div>

      <div className="row g-5">
        <div className="col-md-7 col-lg-8">

          <form method="POST">
            <div className="row g-3">

              <div className="col-sm-6">
                <label htmlFor="txtNombre" className="form-label">Nombre Perro: </label>
                <input type="text" className="form-control" id="Nombre" disabled readOnly
                  value={nombrePerro} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="txtFecha" className="form-label">Fecha solicitud </label>
                <input type="text" className="form-control" id="fecha_solicitud"
                  value={fecha} disabled />
              </div>

              <div className="col-sm-6">
                <label htmlFor="txtNombre" className="form-label">Nombre Usuario: </label>
                <input type="text" className="form-control" id="Nombre" disabled required
                  value={nombre} />
              </div>


              <div className="col-sm-6">
                <label htmlFor="txtApellido" className="form-label">Apellido: </label>
                <input type="text" className="form-control" id="Apellido" disabled required
                  value={apellido} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="txtCorreo" className="form-label">Correo:</label>
                <input type="email" className="form-control" id="Correo" disabled required
                  value={mail} />
              </div>

              <div className="col-sm-6">
                <label htmlFor="txtEdad" className="form-label">Edad: </label>
                <input type="number" className="form-control" id="Edad" required
                  onChange={(e) => { setEdad(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="txtContacto" className="form-label">Contacto:</label>
                <input type="text" className="form-control" id="Contacto" required
                  onChange={(e) => { setTelefono(e.target.value) }} />
              </div>

              <div className="col-sm-6">
                <label htmlFor="txtOcupacion" className="form-label">Ocupación:</label>
                <input type="text" className="form-control" id="Ocupacion" required
                  onChange={(e) => { setOcupacion(e.target.value) }} />
              </div>
              <div className="col-sm-10">
                <label htmlFor="txtDireccion" className="form-label">Dirección exacta del lugar donde permanecerá el animal:</label>
                <input type="text" className="form-control" id="Direccion" required
                  onChange={(e) => { setDireccion(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="txtSector" className="form-label">Sector:</label>
                <input type="text" className="form-control" id="Sector" required
                  onChange={(e) => { setCiudad(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="txtInmueble" className="form-label">Tipo de inmueble: </label>
                <select className="form-select border-0" name="tipo_vivienda" id="tipo_vivienda"
                  onChange={(e) => { setVivienda(e.target.value) }}>
                  <option defaultValue>Seleccione</option>
                  <option value="Casa">Casa</option>
                  <option value="Departamento">Departamento</option>
                  <option value="Finca">Finca</option>
                </select>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-sm-4">
                <button type="button" className="w-100 btn btn-success btn-lg" onClick={enviarSolicitud}>Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div><br /><br />
    </section>

  );
}