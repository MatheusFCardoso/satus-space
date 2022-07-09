import React from "react";
import { Link } from "react-router-dom";


import "./style.css";


import logo from "../../../src/assets/image/logo.png"
import fonteBranco from "../../../src/assets/image/fonteBranco.png"

import "./style.css"

import { AiFillHome } from "react-icons/ai"
import { FiBook } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { BsGear } from "react-icons/bs"
import { HiOutlineLogout } from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"


function Sidebar({extraButton}) {
    return (
        <>
            <div className="d-none d-lg-flex col-lg-2">

                <div className="side-bar py-4">
                    <Link to={'/user/area'}>
                        <div className="logo">
                            <img src={logo} className="navbar-logo" alt="Logo" />
                            <img src={fonteBranco} className="navbar-fonte" alt="Satus-Space" />
                        </div>
                    </Link>


                    <ul>
                        <li className="">
                            <Link to='/user/area'>
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
                            <Link to="/bootcamps">
                                <FiBook className="mx-2" />
                                Bootcamps
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/mensagens">
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
                        <li className="">
                            {extraButton}
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