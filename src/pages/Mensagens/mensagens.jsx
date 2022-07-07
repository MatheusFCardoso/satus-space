import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

import "./style.css";
import { IoMdSend } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

import { BsSun } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"

//Footer dark e light mode
import logoAzul from "../../assets/image/logoAzul.png";
import fonteAzul from "../../assets/image/fonteAzul.png"
import logoBranco from "../../assets/image/logo.png";
import fonteBranco from "../../assets/image/fonteBranco.png"



function Mensagens() {

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

      <div className="chat-mensagem">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

        <div className="container">

          <div className="header-page d-flex mt-3">
            <Link to="/Perfil" style={temaBg}>
              <AiOutlineLeft className="my-auto" />
              <h2 className="ms-3">Mensagens</h2>
            </Link>
          </div>

          <div className="row clearfix">
            <div className="col-md-12 ">
              <div className="card chat-app">
                <div id="plist" className="people-list">
                  <div className="input-group">
                    <a>Chats</a>
                    <p><fisearch /></p>
                  </div>
                  <ul className="list-unstyled chat-list mb-4">
                    <li className="clearfix">
                      <img src="https://play-lh.googleusercontent.com/lvUW3XukTSHnop1wGHVO1cn2EMwoEa2ZfjBhpIt0t1MhjWXa319OUHJ4zzzhdzf6Vis" alt="avatar" />
                      <div className="about">
                        <div className="name">Oracle</div>
                        <div className="status"> <i className="fa fa-circle offline" /> Você: Ok, Obrigado! </div>
                      </div>
                    </li>
                    <li className="clearfix ">
                      <img src="https://media.glassdoor.com/sqll/2482923/banco-bmg-squareLogo-1617284441479.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Banco BMG</div>
                        <div className="status"> <i className="fa fa-circle online" /> Você: Ok, Obrigado! </div>
                      </div>
                    </li>
                    <li className="clearfix active">
                      <img src="https://99prod.s3.amazonaws.com/uploads/678e6c2b-7539-4881-bb6f-22aded41d92f/novo%20logo.JPG" alt="avatar" />
                      <div className="about">
                        <div className="name">Mercado Livre</div>
                        <div className="status"> <i className="fa fa-circle online" /> Empresa: Boa tarde!... </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://www.itau.com.br/assets/dam/publisher/01_itau/42_landing_pages/new_home/static_banner_cards/328x304_tag_wind_card.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Banco Itaú</div>
                        <div className="status"> <i className="fa fa-circle offline" /> Empresa: Agradeço a... </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://logodownload.org/wp-content/uploads/2017/03/dell-logo-1.png" alt="avatar" />
                      <div className="about">
                        <div className="name">DELL</div>
                        <div className="status"> <i className="fa fa-circle offline" /> Empresa: Sobre sua.. </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://logospng.org/download/porto-seguro/logo-porto-seguro-512.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Porto Seguro</div>
                        <div className="status"> <i className="fa fa-circle offline" /> Você: Agradeço o ret... </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://static.wixstatic.com/media/4ab449_203b3da6e8314523aee03098b02e2675~mv2.png/v1/fill/w_236,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Ifood.png" alt="avatar" />
                      <div className="about">
                        <div className="name">iFOOD</div>
                        <div className="status"> <i className="fa fa-circle offline" /> Empresa: Entrevista no.. </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat">
                  <div className="chat-header clearfix">
                    <div className="row">
                      <div className="col-lg-12">
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                          <img src="https://99prod.s3.amazonaws.com/uploads/678e6c2b-7539-4881-bb6f-22aded41d92f/novo%20logo.JPG" alt="avatar" />
                        </a>
                        <div className="chat-about">
                          <h5 className="m-b-0">Mercado Livre</h5>
                          <small>Online</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-history">
                    <ul className="m-b-0">
                      <li className="clearfix-other">
                        <div className="message my-message"> Olá, Aurora! Tudo Bem? Sou a Patricia, do grupo ML e gostaria de confirmar sua presença na entrevista de hoje às 15:00.
                          <div classname="message-data my-message">08:34</div>
                        </div>
                      </li>
                      <li className="clearfix-my">
                        <div className="message other-message "> Olá, Patricia. Tudo bem sim.
                          <div className="message-data other-message">08:35</div>
                        </div>
                      </li>
                      <li className="clearfix-my">
                        <div className="message other-message "> Confirmo a presença.Muito obrigada!
                          <div className="message-data other-message">08:35</div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div className="chat-message clearfix">
                    <div className="input-group mb-0">
                      <div className="clip">
                        <BsPaperclip />
                      </div>
                      <input type="text" className="form-control" placeholder="Escreva uma mensagem..." />
                      <div className="send">
                        <IoMdSend />
                      </div>
                    </div>
                  </div>
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
  );
}
export default Mensagens;