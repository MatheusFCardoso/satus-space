import React from "react";
import "../bootstrap/Bootstrap.css"

import { Link } from "react-router-dom";


function NavBar(){
    return(
      /* <!--Barra de Navegação--> */
      <nav class="navbar navbar-expand navbar-dark justify-content-center custom ">
        

        <div class="container-fluid">

          


            <div class="navbar-nav mx-lg-auto mx-md-auto ">

              {/* <!--Botões de Navegação--> */}
              <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/' >Home</Link>

              <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/' >Sobre Nós</Link>

              <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/Login' >Entrar</Link>

              <Link className="nav-link button-a px-lg-4 px-md-4 px-sm-2" to='/'>Cadastrar-se</Link>

            </div>

          

        </div>

      </nav>
    )
}
export default NavBar;