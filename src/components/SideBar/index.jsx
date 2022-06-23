import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";

import "./style.css";


import logo from "../../../src/assets/image/logo.png"
import fonteBranco from "../../../src/assets/image/fonteBranco.png"

import "./style.css"

import { AiFillHome } from "react-icons/ai"
import { RiSuitcaseLine } from "react-icons/ri"
import { FaRegCompass } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsGear } from "react-icons/bs"
import { HiOutlineLogout } from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"


function Sidebar() {
    return (
        <>
            <div className="d-lg-flex d-md-none col-lg-2">

                <div className="side-bar py-4">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} className="navbar-logo" />
                            <img src={fonteBranco} className="navbar-fonte" />
                        </div>
                    </Link>


                    <ul>
                        <li className="">
                            <Link to='/'>
                                <AiFillHome className="mx-2" />
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link to='/perfil'>
                                <BsFillPersonFill className="mx-2" />
                                Perfil
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/">
                                <RiSuitcaseLine className="mx-2" />
                                Vagas
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/">
                                <FaRegCompass className="mx-2" />
                                Explorar
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/">
                                <HiOutlineMail className="mx-2" />
                                Mensagens
                            </Link>
                        </li>


                        <li className="">
                            <Link to="/">
                                <BsGear className="mx-2" />
                                Configurações
                            </Link>
                        </li>
                    </ul>

                    <Link className="mx-auto" to="/">
                        <HiOutlineLogout />
                        Sair
                    </Link>





                </div>
            </div>

            {/* <nav className="navbar navbar-expand-lg navbar-bottom d-flex d-md-none shadow-sm fixed-bottom px-3">


                <RiSuitcaseLine />
                <FaRegCompass />
                <AiFillHome />
                <HiOutlineMail />

                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1660780800&v=beta&t=9ATeY8jmCSuPhhUZ-8wXqMXwdtE4yM9UCOs0Ddgi1y0" alt="" srcset="" />

            </nav>

            <nav class="navbar fixed-top   d-flex justify-content-between transparent  p-3">

                <div className="d-flex d-md-none">
                    <Logo/>
                </div>
                

                <input className="d-none d-md-flex nav-input-form" placeholder="Pesquisar..." type="text" />

                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1660780800&v=beta&t=9ATeY8jmCSuPhhUZ-8wXqMXwdtE4yM9UCOs0Ddgi1y0" className="me-3 d-none d-md-flex perfil-navbar" alt="" />
                <FaSearch className="nav-icon me-3 d-md-none" />

            </nav> */}
        </>
    );
};
export default Sidebar;