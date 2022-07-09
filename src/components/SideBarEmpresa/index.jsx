import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../src/assets/image/logo.png"
import fonteBranco from "../../../src/assets/image/fonteBranco.png"

import { AiFillHome } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import { BsGear } from "react-icons/bs"
import { HiOutlineLogout } from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"


function SideBarEmpresa({extraButton}) {
    return (
        <>
            <div className="d-none d-lg-flex col-lg-2">

                <div className="side-bar py-4">
                    <Link to={'/user/area'}>
                        <div className="logo">
                            <img src={logo} alt="logo" className="navbar-logo" />
                            <img src={fonteBranco} alt="Satus-Space" className="navbar-fonte" />
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
                            <Link to='/empresa'>
                                <BsFillPersonFill className="mx-2" />
                                Perfil
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

        </>
    );
};
export default SideBarEmpresa;