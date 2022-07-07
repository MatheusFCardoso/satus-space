import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import DropdownPerfil from "../DropdownPerfil";

import { GiHamburgerMenu } from "react-icons/gi"

/* CSS do componente */
import "./style.css"

function PerfilBar({styleComponent,perfilImg,link}) {

    const [isDropDownVisible, setDropDownVisible] = useState(false)

    return (
        <>
            <nav class="navbar-perfil  pt-1">

                <Link to={link}>
                    <div className="py-2 ps-2 d-flex">
                        <Logo />
                    </div>
                </Link>

                
                    
                    <div className="ms-auto">

                    <img src={perfilImg}  onClick={() => setDropDownVisible(true)} className="me-3  d-none d-md-flex perfil-navbar" />

                    

                    </div >

                    {isDropDownVisible ? (<DropdownPerfil styleComponent={styleComponent}  onClose={() => setDropDownVisible(false)}> </DropdownPerfil>) : null}

                    
                    
                    

                    

                    
                

                <GiHamburgerMenu className="nav-icon me-3 d-md-none" />


            </nav>
        </>
    )
}

export default PerfilBar;