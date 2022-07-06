import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Sidebar from "../../components/SideBar";
import AgendaBox from "../../components/AgendaBox";
import BootcampCard from "../../components/BootcampCard";
import Footer from "../../components/Footer/index"
import NavBarUser from "../../components/Header/NavBarUser";
import bootHtmlCss from "../../assets/image/bootcamp-HTML-CSS.png"
import bootJava from "../../assets/image/bootcamp-JAVA-SPRING.png"


import { RiSuitcaseLine } from "react-icons/ri"
import { ImBook } from "react-icons/im"

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
            curso: "Curso de HTML e CSS",
            concluido: 55,
            empresa: "Satus Space",
            vaga: "desenvolvedor web",
            prof: "Gustavo Guanabara",
            button: "Continuar"
        },


    ])

    const [agendaDados] = useState([
        {
            data: "30/06/2022",
            dado: "Entrevista",
            tipo: <RiSuitcaseLine />
        },


    ])



    const [escuro, setEscuro] = useState(false)

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


                                    
                                    <div className="row d-flex justify-content-center bootcamp" style={temaCard2}>

                                        <div className="col-lg-5 col-md-5 p-2 py-4 ">
                                            <img src={bootHtmlCss} className="img-fluid" alt="" srcset="" />
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center  col-lg-7 col-md-7 py-4 ">
                                            <div>
                                                <h4>Bootcamp HTML & CSS</h4>
                                                {/* <p>{concluido}%</p> */}
                                                <progress value="70" max="100" className="barraProgresso">70 %</progress>
                                                <p> Satus Space, Analista de Sistemas, Dev Front end básico com Gabriel Augusto</p>
                                                <button className="mx-auto d-block">Mais informações</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row d-flex justify-content-center bootcamp" style={temaCard2}>

                                        <div className="col-lg-5 col-md-5 p-2 py-4 ">
                                            <img src={bootJava} className="img-fluid" alt="" srcset="" />
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center  col-lg-7 col-md-7 py-4 ">
                                            <div>
                                                <h4>Bootcamp Java Back End</h4>
                                                {/* <p>{concluido}%</p> */}
                                                <progress value="70" max="100" className="barraProgresso">70 %</progress>
                                                <p> Satus Space, Dev End, Dev Back End end básico com Jailson Costa</p>
                                                <button className="mx-auto d-block">Mais informações</button>
                                            </div>
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