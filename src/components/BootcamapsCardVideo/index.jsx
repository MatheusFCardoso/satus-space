import React from "react";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi"
import bootHtmlCss from "../../assets/image/bootcamp-HTML-CSS.png"

import "./style.css";

function BootcamapsCardVideo({ curso, empresa, link }) {
    return (
        <>
            <Link to={link}>
                <div className="col-md-4 ">
                    <div className="video-box">
                        <img src={bootHtmlCss} className="img-fluid" alt="" />
                        <div className="d-flex align-items-center justify-content-between footer-video p-3">
                            <div>
                                <p>{curso}</p>
                                <p>{empresa}</p>
                            </div>
                            <FiPlay className="" />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BootcamapsCardVideo;