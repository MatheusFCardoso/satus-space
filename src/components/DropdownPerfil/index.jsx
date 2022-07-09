import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

import { BsFillPersonFill } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { HiOutlineLogout } from "react-icons/hi"
import { AiOutlineDatabase } from "react-icons/ai"

function DropdownPerfil({ linkPerfil,extraButton,styleComponent,id = "dropDown", onClose = () => { }, children }) {

    const clickFora = (e) => {
        if (e.target.id === id) onClose()
    }

    return (
        <>
            <div id={id} onClick={clickFora} className="drop-down-container">

                <ul className="drop-down-perfil" style={styleComponent}>

                    <Link style={styleComponent} to={linkPerfil}><li><BsFillPersonFill/> Perfil</li></Link>
                    <Link style={styleComponent} to="/mensagens"><li><HiOutlineMail/>Mensagem</li></Link>
                    <Link style={styleComponent} to="/perfil"><li><AiOutlineDatabase/>Meus dados</li></Link>
                    <Link style={styleComponent} to="/"><li><HiOutlineLogout/>Sair</li></Link>
                    {extraButton}

                </ul>

            </div>

        </>
    )
};

export default DropdownPerfil;