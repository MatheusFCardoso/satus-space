import React from "react";

import "./style.css";

function AgendaBox({data,dado,tipo}) {
    return (
        <>

            <div className="col-md-12 col-sm-6 mt-3">
                <div className="agenda-box py-1">




                    <div className="col-3 d-flex justify-content-center">

                        <div className="agenda-icon">
                            {tipo}
                        </div>

                    </div>

                    <div className="col-9">
                        <p>{data}</p>
                        <p>{dado}</p>
                    </div>



                </div>


            </div>







        </>
    )
}

export default AgendaBox;