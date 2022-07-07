import React from "react";
import { useState } from "react";
import NavBar from "../../components/Header/NavBar";
import MainHomepage from "../../components/MainHome";
import SectionHomepage from "../../components/SectionHome";
import Footer from "../../components/Footer/index.jsx";

import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"


/*CSS da página*/
import "./style.css";

function Index() {


    const [escuro, setEscuro] = useState(true)

    const temaDegrade = {
        backgroundImage: escuro ? "linear-gradient(to bottom, var(--cor06) , var(--cor50) 40% )" : "linear-gradient(to bottom, var(--cor06) , var(--bgcolor3) 40% )"
    }

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
        <div style={temaBg}>
            <main className="upperPart">
                <NavBar />
                <MainHomepage />
                <div className="index-alterar-modo-button" onClick={mudarTema} style={temaBg}>
                    {buttonTheme}
                </div>

            </main>

            <SectionHomepage
                styleComponent={temaDegrade}
            />

            <div className="background-index"></div>
            <Footer

                styleComponent={temaBg}
                fonte={fonte}
                logo={logo}


            />
        </div>
    )
}

export default Index;