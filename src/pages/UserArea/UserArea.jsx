import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Sidebar from "../../components/SideBar";
import AgendaBox from "../../components/AgendaBox";
import BootcampCard from "../../components/BootcampCard";
import Footer from "../../components/Footer/index"
import NavBarUser from "../../components/Header/NavBarUser";

import HtmlBootcamp from "../../components/HtmlBootcamp";
import JavaBootcamp from "../../components/JavaBootcamp";


import { RiSuitcaseLine } from "react-icons/ri"


import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

import userArea from "../../../src/assets/image/user-area.png"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"

function UserArea() {



    const [bootcampDados] = useState([
        {
            thumbNail: <JavaBootcamp />,
            button: "Continuar",
            curso: "Java e SpringBoot",
            prof: "Jailson Costa",
            concluido: 25,
            button: "Continuar",
            vaga: "Dev back-end .jr",
            empresa: "Satus Space"
        },
        {
            thumbNail: <HtmlBootcamp />,
            button: "Continuar",
            curso: "HTML e CSS",
            prof: "Gabriel",
            concluido: 80,
            button: "Continuar",
            vaga: "Dev front-end .jr",
            empresa: "Satus Space"
        }


    ])

    const [agendaDados] = useState([
        {
            data: "30/06/2022",
            dado: "Entrevista",
            tipo: <RiSuitcaseLine />
        },


    ])



    const [escuro, setEscuro] = useState(true)

    const temaBg = {
        backgroundColor: escuro ? "var(--cor50)" : "var(--bgcolor3)",
        color: escuro ? "white" : "black"
    }

    const extraButton = escuro ? <Link to="#" onClick={mudarTema}> <BsFillMoonFill className="mx-2" /> Alterar Tema</Link> : <Link to="#" onClick={mudarTema}>< BsSun className="mx-2" /> Alterar Tema</Link>


    const temaCard = {
        backgroundColor: escuro ? "var(--bgcolor)" : "var(--bgcolor4)",
        color: escuro ? "white" : "black"
    }

    const temaCard2 = {
        backgroundColor: escuro ? "var(--bgcolor)" : "#dcdcdc",
        color: escuro ? "white" : "black"
    }

    const logo = escuro ? logoBranco : logoAzul
    const fonte = escuro ? fonteBranco : fonteAzul

    function mudarTema() {
        setEscuro(!escuro)
    }

    return (
        <div className="App" style={temaBg}>

            <NavBarUser

                extraButton={extraButton}

            />

            <div className="container-fluid" >
                <div className="row gx-2 gy-2">
                    <Sidebar

                        extraButton={extraButton}

                    />

                    <div className="col-lg-8 col-md-8">

                        <div className="row gx-2 gy-2 ">

                            <div className="col-lg-12 welcome ">

                                <div className="d-flex align-items-center welcome-section px-3">
                                    <div className="col-8 px-3">
                                        <h1>Olá Usuário !</h1>
                                        <p>Tenha um ótimo dia.</p>
                                    </div>

                                    <div className="col-4">
                                        <img src={userArea} className=" ms-md-5 img-fluid welcome-img" alt="" srcset="" />
                                    </div>


                                </div>
                            </div>


                            {/*  Seção bootcamps */}
                            <div className="col-lg-12 bootcamp-section " style={temaCard}>


                                <div className="card-header">

                                    <h3>Bootcamps em andamento</h3>


                                </div>

                                <div className="card-body">



                                    {bootcampDados.map((bootcamp) => (
                                        <BootcampCard

                                            thumbNail={bootcamp.thumbNail}
                                            button={bootcamp.button}
                                            styleComponent={temaCard2}
                                            vaga={bootcamp.vaga}
                                            prof={bootcamp.prof}
                                            empresa={bootcamp.empresa}
                                            curso={bootcamp.curso}
                                            concluido={bootcamp.concluido}

                                        />
                                    ))}


                                </div>

                                <div className="card-footer">

                                    <p className="text-center" ><Link style={temaCard} to="/Bootcamps">Encontre mais Bootcamps</Link></p>

                                </div>



                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 col-md-4">

                        <div className="agenda-section px-1" style={temaCard}>
                            <div className="card-header">
                                <h3>Minha Agenda</h3>
                            </div>
                            <div className="card-body">
                                <div className="row gx-2">

                                    {/* Componetizar */}
                                    {agendaDados.map((agenda) => (
                                        <AgendaBox

                                            data={agenda.data}
                                            dado={agenda.dado}
                                            tipo={agenda.tipo}

                                        />))}



                                </div>
                            </div>

                        </div>



                    </div>



                </div>
            </div>

            <Footer

                styleComponent={temaBg}
                fonte={fonte}
                logo={logo}

            />

        </div>
    )
}

export default UserArea;