import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";


import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/index";
import Footer from "../../components/Footer";

import { AiOutlineLeft } from "react-icons/ai"
import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"
import { FiPlay } from "react-icons/fi"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"

import "./style.css"




export default function ResponsivePlayer() {



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


  return (
    <div style={temaBg}>

      <SearchBar

        styleComponent={temaCard}
        extraButton={extraButton}
        logo={logo}
        fonte={fonte}

      />


      <div className="container bootcamp-player">

        <div className="d-flex my-5">
          <Link to="/bootcamp/andamento" style={temaBg}>
            <AiOutlineLeft className="my-auto" />
            <h2 className="ms-3">Bootcamp de HTML e CSS</h2>
          </Link>
        </div>


        <div className="row video-aula">
          <div className="col-md-7">
            <ReactPlayer className=' player' url='https://www.youtube.com/watch?v=3mhOH-UM4EA' width='100' controls={true} />
            <div className="row">
              <div className="col-12 desc">
                <h3>Descrição</h3>
                <p>Nesta vídeo aula iremos aprender na prática como construir um Layout responsivo passo a passo utilizando tags HTML5 e media queries do CSS3.</p>
              </div>

            </div>

          </div>
          <div className="col-md-3">
            <div className="playlist" style={temaCard}>

              <div className="card-header">
                <h4>Bootcamp HTMLL e CSS</h4>
              </div>

              <div className="card-body">
                <div className="aula">
                  <p>Aula 1: O que vamos aprender no módulo 01</p>
                  <FiPlay />
                </div>
                <div className="aula">
                  <p>Aula 2: Melhores livros para aprender HTML5 e CSS3</p>
                  <FiPlay />
                </div>
                <div className="aula">
                  <p>Aula 3: Como a Internet chega na minha casa?</p>
                  <FiPlay />
                </div>
                <div className="aula">
                  <p>Aula 4: O que é domínio e hospedagem?</p>
                  <FiPlay />
                </div>
                <div className="aula">
                  <p>Aula 5: A diferença entre HTML, CSS e JavaScript</p>
                  <FiPlay />
                </div>
                <div className="aula">
                  <p>Aula 6: Front-end, Back-end e Full stack</p>
                  <FiPlay />
                </div>
                <div className="aula">
                  <p>Aula 7: Instalando todas as ferramentas</p>
                  <FiPlay />
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
      {/* <h1 className="title-page"><div className="arrow-back"><IoIosArrowBack/></div> Bootcamp HTML5 e CSS3</h1>
        <div className = 'player-wrapper'>
          <ReactPlayer className = 'react-player' url = 'https://www.youtube.com/watch?v=8mei6uVttho' width = '60%' height = '70%' controls = {true}/>
        </div>
        <div className="video-selector">
        <h2 className="title-selector">Conteúdo do Bootcamp </h2>
        <div className="content-selector">
          <div><p className="written-content"><div className="book"><BiBookAlt/></div> Material das aulas</p>
          <p className="written-content">Aula 1: O que vamos aprender no módulo 01</p>
          <p className="written-content">Aula 2: Melhores livros para aprender HTML5 e CSS3</p>
          <p className="written-content">Aula 3: Como a Internet chega na minha casa?</p>
          <p className="written-content">Aula 4: O que é domínio e hospedagem?</p>
          <p className="written-content">Aula 5: A diferença entre HTML, CSS e JavaScript</p>
          <p className="written-content">Aula 6: Front-end, Back-end e Full stack</p>
          <p className="written-content">Aula 7: Instalando todas as ferramentas</p>
          </div>
        </div>
        </div> */}
    </div>
  );
}

