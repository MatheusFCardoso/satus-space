import React from "react";
import { useState } from "react";


import PerfilBar from "../../components/PerfilBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";


import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"

import "./style.css";

function Empresa() {

    const [escuro, setEscuro] = useState(true)
    const linkPerfil = "/empresa"
    const linkBack = "/empresa/area"
    const imgPerfil = "data:image/png;base64,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"

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

    const fonteColor = {
        color: escuro ? "var(--cor04)" : "var(--cor03)"
    }

    const logo = escuro ? logoBranco : logoAzul
    const fonte = escuro ? fonteBranco : fonteAzul

    function mudarTema() {
        setEscuro(!escuro)
    }

   

    const buttonTheme = escuro ? <BsFillMoonFill /> : <BsSun />

    return (
        <>

            <div className="App" style={temaBg}>






                <div className="perfil">

                    <PerfilBar linkPerfil={linkPerfil} styleComponent={temaCard} perfilImg={imgPerfil} link={linkBack} />

                    <div className="perfil-section">
                        <img className="img-perfil" src={imgPerfil} alt="Senac" />

                        <strong className="mt-2 d-block" >Senac</strong>
                        <p>Inscrito desde Fevereiro de 2022</p>

                        <div className="alterar-modo-button" onClick={mudarTema} style={temaBg}>
                            {buttonTheme}
                        </div>

                    </div>



                </div>



                <div className="container text-white ">

                    <div className="row justify-content-center gx-2 gy-2">

                        <section className="col-lg-10">
                            <div className="section-perfil" style={temaCard}>

                                <div className="card-header px-4">
                                    <h3>Sobre</h3>
                                </div>

                                <div className="card-body d-flex justify-content-between px-4">
                                <p>Desde 1946, somos a instituição de ensino que conecta você às inovações e ao mercado. Aqui, pessoas de todas as idades são incentivadas a desenvolver seu potencial para expandir suas possibilidades de futuro. É assim que formamos profissionais que sabem fazer grandes ideias virarem realidade.</p>
                                </div>

                                <div className="card-footer px-4">
                                    <h4 style={fonteColor} >Editar dados</h4>
                                </div>

                            </div>

                        </section>

                    
                        <section className="col-lg-5">
                            <div className="section-perfil-empresa" style={temaCard}>

                                <div className="card-header">
                                    <h3>Personalização</h3>
                                </div>

                                <div className="card-body personalize">
                                    <div className="row">

                                        <div className="col-md-6 col-7">
                                            <p>Personalize o seu perfil de forma simples, fácil e rápida da forma que você desejar.</p>
                                        </div>

                                        <div className="col-md-6 col-5 card-icon">
                                            <div className="circle-icon" style={temaBord}>
                                                <BiPencil />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <h4 style={fonteColor} >Personalizar perfil</h4>
                                </div>

                            </div>
                        </section>

                        

                        


                        <section className="col-lg-5">

                            <div className="section-perfil-empresa " style={temaCard}>

                                <div className="card-header">
                                    <h3>Nossas redes sociais</h3>
                                </div>

                                <div className="card-body mx-auto px-md-5">

                                <ul className="d-flex mt-5 justify-content-around">
                                    <li><BsLinkedin /></li>
                                    <li><MdEmail /></li>
                                    <li><FaFacebookSquare /></li>
                                    <li><BsInstagram /></li>

                                </ul>
                                

                            </div>



                            </div>

                        </section>

                        

                        


                        
                            

                    </div>

                </div>

                <Footer

                    styleComponent={temaBg}
                    fonte={fonte}
                    logo={logo}

                />
            </div>

        </>
    );
};

export default Empresa;