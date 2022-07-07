import React from "react";
import { useState } from "react";

import BootcamapsCardVideo from "../../components/BootcamapsCardVideo";

import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/index";
import Footer from "../../components/Footer";

import { AiOutlineLeft } from "react-icons/ai"
import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"

import "./style.css";



function BootcampsAndamento() {


    const [escuro, setEscuro] = useState(true)

    const temaBg = {
        backgroundColor: escuro ? "var(--cor50)" : "var(--bgcolor3)",
        color: escuro ? "white" : "black"
    }


    const temaBord = {
        borderColor: escuro ? "white" : "black",
        color: escuro ? "white" : "white"
    }

    const temaCard = {
        backgroundColor: escuro ? "var(--bgcolor)" : "var(--bgcolor4)",
        color: escuro ? "white" : "black"
    }

    const logo = escuro ? logoBranco : logoAzul
    const fonte = escuro ? fonteBranco : fonteAzul

    function mudarTema() {
        setEscuro(!escuro)
    }



    const extraButton = escuro ? <li onClick={mudarTema} style={temaCard}><BsFillMoonFill />Alterar Tema</li> : <li onClick={mudarTema} style={temaCard}><BsSun /> Alterar Tema</li>

    const [bootcampDados] = useState([
        {
            curso: "Curso de HTML e CSS",
            empresa: "Satus Space",
            thumbnail: "https://i.ytimg.com/vi/Ejkb_YpuHWs/maxresdefault.jpg?v=5f8061fa",
            link: "/video"
        }

    ])

    return (
        <div className="App" style={temaBg}>

            <SearchBar

                styleComponent={temaCard}
                extraButton={extraButton}
                logo={logo}
                fonte={fonte}

            />
            
            <div className="container bootcamps-andamento">

                <div className="d-flex my-5">
                    <Link to="/Perfil" style={temaBg}>
                        <AiOutlineLeft className="my-auto" />
                        <h2 className="ms-3">Bootcamps em Andamento</h2>
                    </Link>
                </div>

                <div className="row g-5">

                    {bootcampDados.map((bootcamp) => (
                        <BootcamapsCardVideo

                            curso={bootcamp.curso}
                            empresa={bootcamp.empresa}
                            thumbnail={bootcamp.thumbnail}
                            link={bootcamp.link}

                        />))}

                </div>
            </div>

            <Footer

                styleComponent={temaBg}
                fonte={fonte}
                logo={logo}

            />

        </div>
    )
};

export default BootcampsAndamento;