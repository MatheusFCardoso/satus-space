import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import SideBarEmpresa from "../../components/SideBarEmpresa";
import NavBarEmpresa from "../../components/Header/NavBarEmpresa";
import AgendaBox from "../../components/AgendaBox";
import Footer from "../../components/Footer/index"


import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

import { RiSuitcaseLine } from "react-icons/ri"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"
import bootHtmlCss from "../../assets/image/bootcamp-HTML-CSS.png"
import bootJava from "../../assets/image/bootcamp-JAVA-SPRING.png"

import userArea from "../../../src/assets/image/user-area.png"




function EmpresaArea() {


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

    const logo = escuro ? logoBranco : logoAzul
    const fonte = escuro ? fonteBranco : fonteAzul

    function mudarTema() {
        setEscuro(!escuro)
    }

    const [agendaDados] = useState([
        {
            data: "30/06/2022",
            dado: "Entrevista de Candidato",
            tipo: <RiSuitcaseLine />
        },
        {
            data: "31/06/2022",
            dado: "Entrevista de Canditado",
            tipo: <RiSuitcaseLine />
        },


    ])



    return (
        <div className="App" style={temaBg}>
            <NavBarEmpresa />

            <div className="container-fluid text-white">
                <div className="row gx-2 gy-2">
                    <SideBarEmpresa

                        extraButton={extraButton}

                    />

                    <div className="col-lg-8 col-md-8">

                        <div className="row gx-2 gy-2 ">

                            <div className="col-lg-12 welcome ">

                                <div className="d-flex align-items-center welcome-section px-3">
                                    <div className="col-8 px-3">
                                        <h1>Olá Empresa!!</h1>
                                        <p>Tenha um ótimo dia.</p>
                                    </div>

                                    <div className="col-4">
                                        <img src={userArea} className=" ms-md-5 img-fluid welcome-img" alt="" srcset="" />
                                    </div>


                                </div>
                            </div>


                            {/*  Seção bootcamps */}
                            <div className="col-lg-12">

                                <div className="vagas-section" style={temaCard}>
                                    <div className="d-flex justify-content-between card-header">

                                        <h3>Publicar Vagas & Bootcamps</h3>
                                        <button className="">Filtro</button>

                                    </div>

                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-md-6 px-4 bootcamp-empresa">
                                                <img src={bootHtmlCss} className="img-fluid imgVaga" alt="" />
                                                <p>BootCamp HTML & CSS</p>
                                                <p>Professor: <span>Gabriel Augusto</span></p>
                                                <p>Quantidade de Inscritos: <span>150</span></p>
                                                <button>
                                                    Mais informações
                                                </button>
                                            </div>

                                            <div className="col-md-6 px-4 bootcamp-empresa">
                                                <img src={bootJava} className="img-fluid imgVaga" alt="" />
                                                <p>BootCamp JAVA & SPRINGBOOT</p>
                                                <p>Professor: <span>Jailson Costa</span></p>
                                                <p>Quantidade de Inscritos: <span>150</span></p>
                                                <button>
                                                    Mais informações
                                                </button>
                                            </div>


                                        </div>



                                        {/* Componentizar */}



                                    </div>



                                    {/* <div className="card-header">
                                        <h3>Bootcamps recomendados</h3>
                                    </div> */}

                                    {/* <div className="card-body">

                                        {bootcampDados.map((bootcamp) => (
                                            <BootcampCard

                                                curso={bootcamp.curso}
                                                concluido={bootcamp.concluido}
                                                empresa={bootcamp.empresa}
                                                vaga={bootcamp.vaga}
                                                prof={bootcamp.prof}
                                                button={bootcamp.button}

                                            />))}

                                    </div> */}

                                    <div className="card-footer">

                                        <p className="text-center" >Encontre mais Bootcamps</p>

                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2 col-md-4 ">

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

export default EmpresaArea;