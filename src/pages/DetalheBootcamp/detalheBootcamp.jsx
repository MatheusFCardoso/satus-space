import React from "react";
import { useState } from "react";
import "./style.css";

import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import NavBarUser from "../../components/Header/NavBarUser";


import { Link } from "react-router-dom";
import { BsFillMoonFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';


//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"

function DetalheBootcamp() {

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
            <div className="container-fluid">
                <div className="row">
                    <Sidebar

                        extraButton={extraButton}

                    />
                    <div className="vagas-detalhe col-lg-10 col-md-12" style={temaCard}>

                        <div className="card-header" >
                            <h3>Detalhes do Bootcamp</h3>
                        </div>
                        <div className="card-body">
                            <h4 className="titleDesc">Desenvolvedor Front-End Jr</h4>

                            <p >Satus Space e Empresa D</p>
                            <p><span className="bold">Formato aulas:</span> Remoto</p>
                            {/* <p>R$ 2000,00 a R$ 2700,00 (Bruto mensal)</p> */}
                            <p><span className="bold">Número de vagas:</span> 20</p>
                            {/* <p><span className="bold">Tipo de contrato:</span> Efetivo - CLT - Período integral</p> */}

                            <h4 className="titleDesc">Descrição</h4>
                            <p>O bootcamp Desenvolvedor front-End Jr tem como objetivo capacitá-lo para ser um profissional de tecnologia. Nesse bootcamp você irá conhecer as principais tecnologias para iniciar na programação, e além disso, irá desenvolver suas Soft Skills conosco. Ao fim desse bootcamp você dominará:</p>

                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Metodologias ágeis - Scrum</li>
                            </ul>

                            <ul>
                                <li>Comunicação</li>
                                <li>Trabalho em equipe</li>
                                <li>Gestão do tempo</li>

                            </ul>

                            <h4 className="titleDesc">A Empresa - Empresa D </h4>
                            <p>A Empresa D é uma empresa de desenvolvimento de sites e sistemas.</p>
                        </div>



                    </div>
                </div>
            </div>

            <Footer 
            
            styleComponent={temaBg}
            fonte={fonte}
            logo={logo}

            />




            {/* <div className="containerDetVaga bg-dark">
                <div className="header">
                    <MdArrowBackIosNew />
                    <img src="" alt="" />
                </div>

                <div className="containerDetalhe">
                    
                    <div>
                        <p>Empresa D</p>
                        <p>São Paulo - SP</p>
                        <p>R$ 2000,00 a R$ 2700,00 (Bruto mensal)</p>
                        <p><span className="bold">Número de vagas:</span> 2</p>
                        <p><span className="bold">Tipo de contrato:</span> Efetivo - CLT - Período integral</p>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Descrição</h4>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Requisitos</h4>
                        <ul>
                            <li>requisito1</li>
                            <li>requisito1</li>
                            <li>requisito1</li>
                            <li>requisito1</li>
                            <li>requisito1</li>
                        </ul>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Benefícios</h4>
                        <ul>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                            <li>beneficio1</li>
                        </ul>
                    </div>

                    <div className="container1">
                        <h4 className="titleDesc">Bootcamp</h4>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                </div>
                <button className="btnCandidatar">Candidatar</button>
            </div> */}
        </div>
    )
}

export default DetalheBootcamp;