import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BootcampCard({curso , thumbNail , concluido , empresa , vaga , prof, button, styleComponent}) {
    return (
        <>
            <div className="row d-flex justify-content-center bootcamp" style={styleComponent}>

                <div className="col-lg-5 col-md-5 p-2 py-4 ">
                    {thumbNail}
                </div>

                <div className="d-flex justify-content-center align-items-center  col-lg-7 col-md-7 py-4 ">
                    <div>
                        <h4>{curso}</h4>
                        {/* <p>{concluido}%</p> */}
                        <progress value={concluido} max="100" className="barraProgresso">70 %</progress>
                        <p>{empresa}, {vaga}, {curso} com {prof}</p>
                        <button className="mx-auto d-block"><Link className="link" to="/video">{button}</Link></button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default BootcampCard;