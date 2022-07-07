import React from "react";
import { useState } from "react";

import SearchBar from "../../components/SearchBar/index";
import BootcampCard from "../../components/BootcampCard";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import "./style.css";

import { AiOutlineLeft } from "react-icons/ai"
import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"


function Bootcamp() {

    

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
            concluido: 100,
            empresa: "Satus Space",
            vaga: "desenvolvedor web",
            prof: "Gustavo Guanabara",
            button: "Certificado"
        },


    ])

    return (
        <div style={temaBg}>
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
                        <h2 className="ms-3">Bootcamps Realizados</h2>
                    </Link>
                </div>


                {bootcampDados.map((bootcamp) => (
                    <BootcampCard

                        curso={bootcamp.curso}
                        concluido={bootcamp.concluido}
                        empresa={bootcamp.empresa}
                        vaga={bootcamp.vaga}
                        prof={bootcamp.prof}
                        button={bootcamp.button}
                        styleComponent={temaCard}

                    />))}




            </div>

            <Footer

                styleComponent={temaBg}
                fonte={fonte}
                logo={logo}

            />

        </div>
    )
}


export default Bootcamp;