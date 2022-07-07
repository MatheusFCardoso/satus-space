import React from "react";
import { useState } from "react";

import "./style.css";
import missao from "../../../src/assets/image/missao.png";
import visao from "../../../src/assets/image/visao.png"
import valores from "../../../src/assets/image/valores.png"
import sobrenos from "../../../src/assets/image/sobrenos.png"
// IMAGENS DA EQUIPE
import franca from "../../../src/assets/image/franca.png"
import almeida from "../../../src/assets/image/almeida.png"
import iago from "../../../src/assets/image/iago.png"
import sara from "../../../src/assets/image/sara.png"
import cami from "../../../src/assets/image/cami.png"
import noelia from "../../../src/assets/image/noelia.png"
import lucas from "../../../src/assets/image/lucas.png"
import rian from "../../../src/assets/image/rian.png"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"


import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

import NavBarLogo2 from "../../components/Header/NavBarLogo2";
import Footer from "../../components/Footer";

function Sobre() {

    const [escuro, setEscuro] = useState(true)

    const temaBg = {
        backgroundColor: escuro ? "var(--cor50)" : "var(--bgcolor3)",
        color: escuro ? "white" : "black"
    }


    const buttonTheme = escuro ? <BsFillMoonFill /> : <BsSun />

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


    return (
        <div className="App" style={temaBg}>

            <div className="container-fluid">

                <div className="row sobre">
                    <NavBarLogo2 />

                    <div className="col-md-6">
                        <h1>Sobre nós</h1>
                        <p className="mx-auto" >
                            A Satus Space tem o propósito de gerar oportunidades e capacitar pessoas de 40 anos ou mais através da educação e da tecnologia ajudando-os a se reinserir no mercado de trabalho.
                        </p>



                    </div>

                    <div className="col-md-6">

                        <img src={sobrenos} alt="Imagem da equipe" className="img-equipe  img-fluid" />

                    </div>




                </div>

                <div className="sobre-alterar-modo-button" onClick={mudarTema} style={temaBg}>
                    {buttonTheme}
                </div>

            </div>
            <div className="container mt-5 mt-md-1">
                <div className="row sobre-section g-4">

                    <div className="col-lg-3 col-md-4">

                        <div className="mvv-cont" >

                            <div className=" text-center">
                                <img src={missao} alt="Logo" className="mvv mt-5" />
                                <h2>Missão</h2>
                            </div>

                            <p className="px-3">Nossa missão é desenvolver pessoas com mais de 40 anos que almejam trabalhar no ramo da tecnologia.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="mvv-cont">

                            <div className="text-center">
                                <img src={visao} alt="Logo" className="mvv mt-5" />
                                <h2>Visão</h2>
                            </div>
                            <p className="px-3">Ser a plataforma que possibilite o início de uma nova trajetória profissional no mercado da tecnologia para incluir pessoas com baixas oportunidades.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 mb-5 ">
                        <div className="mvv-cont">
                            <div className="text-center">

                                <img src={valores} alt="Logo" className="mvv mt-5" />

                                <h2>Valores</h2>
                            </div>
                            <ul>
                                <li>Inclusão digital</li>
                                <li>Comprometimento</li>
                                <li>Inovação</li>
                                <li>Educação</li>
                                <li>Diversidade</li>
                                <li>Ética</li>
                                <li>Transparência</li>
                            </ul>
                        </div>

                    </div>




                    <h2 className="text-center sub-equipe">Equipe</h2>

                    <div className="linha-equipe" style={temaBg}>
                        <hr />
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={rian} alt="Logo" />
                            </div>
                            <p>Rian Paiva</p>

                            <a className="lista" target="blank" href="https://github.com/RianPaiva">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/paivarian/">
                                <li><FaLinkedin /></li>
                            </a>



                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={almeida} alt="Logo" />
                            </div>
                            <p >Matheus Almeida</p>
                            <a className="lista" target="blank" href="https://github.com/MTHS-ALMD/">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/matheus-almeida-td4/">
                                <li><FaLinkedin /></li>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={franca} alt="Logo" />
                            </div>
                            <p >Matheus França</p>
                            <a className="lista" target="blank" href="https://github.com/MatheusFCardoso">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/matheusfrancacardoso/">
                                <li><FaLinkedin /></li>
                            </a>



                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={cami} alt="Logo" />
                            </div>
                            <p >Camilly Cruz</p>

                            <a className="lista" target="blank" href="https://github.com/camily-cs">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/camilycruzsilva/">
                                <li><FaLinkedin /></li>
                            </a>



                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={iago} alt="Logo" />
                            </div>
                            <p >Iago Paiva</p>

                            <a className="lista" target="blank" href="https://github.com/IagoPaiva19">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/iago-paiva-21534a233/">
                                <li><FaLinkedin /></li>
                            </a>



                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={sara} alt="Logo" />
                            </div>
                            <p >Sara Morais</p>

                            <a className="lista" target="blank" href="https://github.com/saram0rais">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/saramoraisdsantos/">
                                <li><FaLinkedin /></li>
                            </a>





                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={noelia} alt="Logo" />
                            </div>
                            <p >Noelia Mariana</p>

                            <a className="lista" target="blank" href="https://github.com/noeliamariana">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/noelia-mariana-vasquez-nina/">
                                <li><FaLinkedin /></li>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">

                        <div className="imagem-equipe">

                            <div className=" text-center">
                                <img src={lucas} alt="Logo" />
                            </div>
                            <p >Lucas Alencar</p>

                            <a className="lista" target="blank" href="https://github.com/Lusquinhasoa">
                                <li><FaGithub /></li>
                            </a>

                            <a className="lista" target="blank" href="https://www.linkedin.com/in/lucasalencar2/">
                                <li><FaLinkedin /></li>
                            </a>



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
    );
};

export default Sobre; 