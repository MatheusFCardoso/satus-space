import React from "react";
import ReactPlayer from "react-player";
import "./style.css";
import { IoIosArrowBack } from "react-icons/io";
import { BiBookAlt } from "react-icons/bi";

export default function ResponsivePlayer() {
  return (
    <>
        <h1 className="title-page"><div className="arrow-back"><IoIosArrowBack/></div> Bootcamp HTML5 e CSS3</h1>
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
        </div>
    </>
  );
}

