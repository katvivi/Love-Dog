import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
//import { Carousel } from "bootstrap";
import { Login } from "./pages/Login";
import { Admin_Form } from "./pages/Admin_Form";
import Card_Perros  from "./pages/Card_Perros";
import { Inicio_Admin } from "./pages/Inicio_Admin";
import  List_Perros  from "./pages/List_Perros";
import { Registro_Admin } from "./pages/Registro_Admin";
import List_Solicitud  from "./pages/List_Solicitud";
import { Client_Form } from "./pages/Client_Form";
import { EditForm } from "./pages/EditForm";
import { Usuario_Form } from "./pages/Usuario_Form";
// import { Registro_Admin } from "./pages/Registro_Admin";

export function App() {
  return (
    <Router>
      <header>
        <Navigation/>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" exact component={HomeGrid} /> */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Admin" element={<Inicio_Admin/>} />
          <Route exact path="/Registro-Mascota" element={<Admin_Form/>} />
          <Route exact path="/Listado" element={<Card_Perros/>} />
          <Route exact path="/Listado-Perros" element={<List_Perros/>} />
          <Route exact path="/Registro-Admin" element={<Registro_Admin/>} />
          <Route exact path="/List_Solicitud" element={<List_Solicitud/>} />
          <Route exact path="/Client_Form/:id" element={<Client_Form/>} />
          <Route exact path="/pet-edit/:id" element={<EditForm />} />
          <Route exact path="/Registro-Usuario" element={<Usuario_Form />} />
          {/* <Route exact path="/Registro-Admin" element={<Registro_Admin/>} /> */}
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}