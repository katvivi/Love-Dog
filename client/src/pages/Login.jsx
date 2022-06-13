import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [permiso, setPermiso] = useState('')
    const [loginStatus, setLoginStatus] = useState('')

    Axios.defaults.withCredentials = true;

    const loginApp = () => {

        Axios.post('http://localhost:4000/api/login', {
            mail: userName,
            pass: password,
            permiso: permiso,
        }).then((response) => {
            if (response.data.message) {
                alert("Usuario o contraseña incorrectos")
            } else {
                console.log(response.data[0])
                localStorage.setItem("User", response.data[0].id)
                if (response.data[0].permiso === 1) {

                    //setLoginStatus(response.data[0].mail);
                    //alert("Bienvenido " + response.data[0].mail + loginStatus);
                    window.location.replace("/Admin")
                } else {
                    //setLoginStatus(response.data[0].mail);
                    //alert("Bienvenido " + response.data[0].mail + loginStatus);
                    window.location.replace("/Listado")
                }

            }
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <section className=" gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                    <div className="form">

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="text"
                                                id="user"
                                                name="user"
                                                className="form-control form-control-lg"
                                                onChange={(e) => { setUserName(e.target.value) }}
                                            />
                                            <label className="form-label" htmlFor="user">Usuario</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="pass"
                                                name="pass"
                                                className="form-control form-control-lg"
                                                onChange={(e) => { setPassword(e.target.value) }}
                                            />
                                            <label className="form-label" htmlFor="pass">Password</label>
                                        </div>

                                        <input
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            onClick={loginApp}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-0">¿No tiene una cuenta?
                                        <Link to="/Registro-Usuario" className="text-white-50 fw-bold">
                                            Registrar
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}